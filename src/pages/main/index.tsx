import Header from 'components/header';

import styles from './styles.module.scss';

const Main = () => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        <div>
          <span>Скороговорки</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.alphabet}>
          <div>
            <span>Буква: "А"</span>
          </div>
          <div>
            <span>Количество:</span>
          </div>
          <div>
            <span>0</span>
          </div>
        </div>
        <div className={styles.tongueTwisters}>
          <div className={styles.count}>
            <span>1</span>
          </div>
          <div className={styles.item}>
            <span>скороговорка</span>
          </div>
        </div>
      </div>
      <div className={styles.controlPanel}>
        <div>
          <div>
            <span>Скорость прокрутки</span>
          </div>
          <div>
            <span>picture</span>
          </div>
        </div>
        <div>
          <div>
            <span>Общее количество</span>
          </div>
          <div>
            <span>999</span>
          </div>
        </div>
        <div>
          <div>
            <span>Прочитано</span>
          </div>
          <div>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
