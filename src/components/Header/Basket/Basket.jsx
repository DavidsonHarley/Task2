import React from 'react';
import imgBasket from './img/Frame.svg';
import styles from './css/StyleBasket.module.css';

export default function Basket() {
  return (
    <div className={styles.containerImg}>
      <img src={imgBasket} alt="basket" />
    </div>
  );
}
