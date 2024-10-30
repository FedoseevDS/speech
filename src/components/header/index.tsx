import logo from 'assets/logo.png';

import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>
      <img src={logo} alt="логотип" />
    </div>
    <div className={styles.name}>
      <h1>Ораторское искусство</h1>
    </div>
  </div>
);

export default Header;
