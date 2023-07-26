import React from 'react';
import styles from './css/StyleFrame2.module.css';
import imgFire from '../Frame1/img/IMAGE.svg';
import imgFrame2 from './img/IMAGE.svg';
import imgContent1 from './img/IMAGE3.svg';
import imgContent2 from './img/IMAGE(1).svg';
import imgContent3 from './img/IMAGE(2).svg';

export default function Frame2() {
  return (
    <div className={styles.containerFrame2}>
      <div className={styles.containerImgFrame2}>
        <img className={styles.imgFrame2} src={imgFrame2} alt="img2" />
      </div>
      <div className={styles.contentFrame2}>
        <div className={styles.title}>
          <img src={imgFire} alt="fire" />
          <div className={styles.future}>
            <p>FUTURE OF ESPORTS</p>
          </div>

        </div>
        <div className={styles.customize}>
          Customize your Own Character
        </div>
        <div className={styles.text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
        </div>
        <div className={styles.scrollImg}>
          <img className={styles.img} src={imgContent1} alt="img" />
          <img className={styles.img} src={imgContent2} alt="img" />
          <img className={styles.img} src={imgContent3} alt="img" />
        </div>
      </div>
    </div>
  );
}
