import React from 'react';
import styles from './css/StyleFooter.module.css';
import FooterLogo from './Logo/FooterLogo';
import Navigation from './FooterNavigation/Navigation';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerInfo}>
        <FooterLogo />
        <Navigation />
      </div>
    </footer>
  );
}
