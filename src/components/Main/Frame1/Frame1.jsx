import React from 'react';
import styles from './css/StyleFrame1.module.css';
import imgFire from './img/IMAGE.svg';
import imgFrame1 from './img/IMAGE3.svg';
import Button from '../../Button/Button';

const textSidBar = [
  {
    id: 1,
    text: 'FACEBOOK',
  },
  {
    id: 2,
    text: 'INSTAGRAM',
  },
  {
    id: 3,
    text: 'TWITCH',
  },

];

export default function Frame1() {
  return (
    <div className={styles.containerFrame1}>
      <div className={styles.containerLeft}>
        <div className={styles.contentLeft}>
          <div className={styles.sideBar}>
            <div className={styles.rotate}>
              {textSidBar.map((el) => <div key={el.id} className={styles.link}>{el.text}</div>)}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.containerTitle}>
              <img src={imgFire} alt="fire" />
              <div className={styles.title}>
                FUTURE OF ESPORTS
              </div>
            </div>
            <div className={styles.nextGeneration}>
              Unleash the Next Generation of Gaming
            </div>
            <div className={styles.lorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
            </div>
            <div className={styles.buttonLink}>
              <Button
	              appearance="primary"
              >
                Explore More
              </Button>
              <div>
                <div className={styles.contentLink}>
                  View our team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.imgContainerFrame1}>
          <img className={styles.imgFrame1} src={imgFrame1} alt="img" />
        </div>
      </div>
    </div>
  );
}
