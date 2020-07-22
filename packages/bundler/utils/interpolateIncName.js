const loaderUtils = require('loader-utils');
const incstr = require('./incstr');
const nextId = incstr.idGenerator();

const clasNames = {};

function interpolateIncName(context, localIdentName, localName, options = { hashPrefix: '' }) {
  // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
  const fileNameOrFolder = context.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? '[folder]'
    : '[name]';

  // Use loaderUtils to find the file or folder name
  const className = loaderUtils.interpolateName(
    context,
    fileNameOrFolder + '_' + localName,
    options
  ).replace('.module_', '_');
  if (clasNames[className]) {
    return clasNames[className];
  }
  // Create a hash based on a the increase alphabet. Will be unique across a project, and close to globally unique.
  const id = nextId();
  if (/^[0-9].*$/.test(id)) {
    return interpolateIncName(context, localIdentName, localName, options);
  }
  clasNames[className] = options.hashPrefix + '_' + id;
  return clasNames[className];
}

module.exports = interpolateIncName;
