import React from 'react';
import styles from './css/StyleFrame3.module.css';
import imgFire from '../Frame1/img/IMAGE.svg';
import Button from '../../Button/Button';
import img1 from './img/IMAGE.svg';
import content2 from './js/content2';

export default function Frame3() {
  return (
    <div className={styles.containerFrame3}>
      <div className={styles.containerTitle}>
        <div className={styles.fireText}>
          <img src={imgFire} alt="fire" />
          <div className={styles.title}>
            FUTURE OF ESPORTS
          </div>
        </div>
        <div className={styles.containerTitleContent}>
          <div className={styles.lacestNews}>
            Latest News & Articles
          </div>
          <div className={styles.buttonContainer}>
            <Button
	    appearance="primary"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.content1}>
          <img className={styles.imgContent1} src={img1} alt="img" />
          <div className={styles.date}>
            April 2, 2021
          </div>
          <div className={styles.content1Text}>
            Esports Group teams up with the Indianapolis Colts
          </div>
        </div>
        <div className={styles.content2}>
          {content2.map((el) => (
            <div key={el.id} className={styles.cardContent2}>
              <img className={styles.imgContent2} src={el.img} alt="img" />
              <div className={styles.dateContent2}>{el.date}</div>
              <div className={styles.textContent2}>{el.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
