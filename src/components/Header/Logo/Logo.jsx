import React from 'react';
import imgLogo from './img/IMAGE.svg';
import styles from './css/StyleLogo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.adapLogo} src={imgLogo} alt="logo" />
    </div>
  );
}
