import '../styles/globals.css'; // 引入全局樣式
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            <li><a href="/">Home</a></li>
            <li><a href="menu">Menu</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
