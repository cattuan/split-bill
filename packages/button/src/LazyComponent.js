import React from 'react';
import icon from './more.svg';
import styles from './lazy-component.module.scss';

function LazyComponent() {
  return (
    <div className={styles.container}>
      LazyComponent
      <img className={styles.img} src={icon} alt="more" />
    </div>
  );
}

export default LazyComponent;
