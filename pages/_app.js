import '../styles/globals.css'; // 引入全局樣式
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // Import Next.js Link component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/menu" legacyBehavior>
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="/shop" legacyBehavior>
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
