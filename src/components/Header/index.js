import Cart from '../Card/Card';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <p>Header</p>
      <Cart />
    </header>
  );
};

export default Header;
