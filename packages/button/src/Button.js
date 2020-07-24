import React from 'react';
import styles from './button.module.scss';
import icon from './info.svg';

function Button({ children, onClick }) {
  return (
    <div
      className={styles.container}
      onClick={onClick}
    >
      <img className={styles.img} src={icon} height="22px" width="22px" />
      {children || 'Button'}
    </div>
  );
}

export default Button;
