import React from 'react';
import styles from './css/StyleMain.module.css';
import Frame1 from './Frame1/Frame1';
import Frame2 from './Frame2/Frame2';
import Frame3 from './ Frame3/Frame3';

export default function Main() {
  return (
    <div className={styles.main}>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}
