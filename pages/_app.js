import '../styles/globals.css'; // 引入全局樣式
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { CartProvider, useCart } from '../contexts/CartContext';

function TopBar() {
  const { cartItems } = useCart(); // 使用購物車上下文獲取商品數量

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/cart">Cart ({cartItems.length})</Link> {/* 顯示購物車商品數量 */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <TopBar /> {/* 加入TopBar */}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
