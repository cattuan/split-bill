import React, { useState, useCallback } from 'react';
import styles from './button.module.scss';
import icon from './info.svg';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function Button({ children, onClick }) {
  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => {
    setShow(!show);
    onClick && onClick();
  }, [show]);

  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <img className={styles.img} src={icon} height="22px" width="22px" />
      {children || 'Button'}
      {
        show ? (
          <LazyComponent />
        ) : null
      }
    </div>
  );
}

export default Button;
