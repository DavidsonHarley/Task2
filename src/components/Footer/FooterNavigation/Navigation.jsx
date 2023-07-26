import React from 'react';
import styles from './css/StyleNavition.module.css';

const menuItems = [
  {
    id: 1,
    name: 'About',
  },
  {
    id: 2,
    name: 'Blog',
  },
  {
    id: 3,
    name: 'Shop',
  },
  {
    id: 4,
    name: 'Contact Us',
  },
];

const otherPages = [
  {
    id: 1,
    name: 'Styleguide',
  },
  {
    id: 2,
    name: 'Changelog',
  },
  {
    id: 3,
    name: 'Licenses',
  },
  {
    id: 4,
    name: 'Team',
  },
];

export default function Navigation() {
  return (
    <>
      <div className={styles.itemsMenu}>
        <div className={styles.title}>
          Menu Items
        </div>
        {menuItems.map((el) => <div key={el.id} className={styles.link}>{el.name}</div>)}
      </div>
      <div className={styles.itemsMenu}>
        <div className={styles.title}>
          Other Pages
        </div>
        {otherPages.map((el) => <div key={el.id} className={styles.link}>{el.name}</div>)}
      </div>
    </>

  );
}
