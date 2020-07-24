import React, { Suspense } from 'react';
import styles from './button.module.scss';
import icon from './info.svg';

const LazyComponent = React.lazy(() => import('./LazyComponent'))

function Button({ children, onClick }) {
  return (
    <div
      className={styles.container}
      onClick={onClick}
    >
      <img className={styles.img} src={icon} height="22px" width="22px" />
      {children || 'Button'}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default Button;
