'use strict';

const loaderUtils = require('loader-utils');
const path = require('path');
const incstr = require('./incstr');

const nextId = incstr.idGenerator();

function getCSSModuleLocalIdent(
  context,
  localIdentName,
  localName,
  options
) {
  if (!options.hashPrefix) {
    // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
    const fileNameOrFolder = context.resourcePath.match(
      /index\.module\.(css|scss|sass)$/
    )
      ? '[folder]'
      : '[name]';
    // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
    const hash = loaderUtils.getHashDigest(
      path.posix.relative(context.rootContext, context.resourcePath) + localName,
      'md5',
      'base64',
      5
    );
    // Use loaderUtils to find the file or folder name
    const className = loaderUtils.interpolateName(
      context,
      fileNameOrFolder + '_' + localName + '__' + hash,
      options
    );
    // remove the .module that appears in every classname when based on the file.
    return className.replace('.module_', '_');
  } else {
    const id = nextId();
    if (/^[0-9].*$/.test(id)) {
      return getCSSModuleLocalIdent();
    }
    return `${options.hashPrefix}${id}`;
  }
}

module.exports = getCSSModuleLocalIdent;
