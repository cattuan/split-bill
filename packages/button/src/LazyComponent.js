import React from 'react';
import styles from './lazy-component.module.scss';

function LazyComponent(){
  return (
    <div className={styles.container}>
      LazyComponent
    </div>
  );
}

export default LazyComponent;
