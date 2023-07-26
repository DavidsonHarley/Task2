import React from 'react';
import styles from './css/StyleFooterLogo.module.css';
import imgLogo from '../../Header/Logo/img/IMAGE.svg';

export default function FooterLogo() {
  return (
    <div className={styles.footerLogo}>
      <img src={imgLogo} alt="logo" />
      <div className={styles.textFooter}>
        Lorem ipsum dolor amet, consectetur adipiscing elit.
        Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non.
      </div>
    </div>
  );
}
