import Button from '../Button/Button';
import Basket from './Basket/Basket';
import Logo from './Logo/Logo';
import Navbar from './NavBar/Navbar';
import styles from './css/StyleHeader.module.css';

export default function Header() {
  return (

    <div className={styles.header}>
      <Logo />
      <Navbar />
      <div className={styles.containerActiv}>
        <Basket />
        <Button
	          appearance="whiteeEdging"
        >
          Contact Us
        </Button>
      </div>
    </div>

  );
}
