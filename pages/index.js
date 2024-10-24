import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Welcome to our restaurant" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Our Restaurant</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/dish1.jpg" alt="Dish 1" />
            <h2>Grilled Salmon</h2>
            <p>Freshly grilled salmon with a side of vegetables.</p>
          </div>
          <div className={styles.card}>
            <img src="/dish2.jpg" alt="Dish 2" />
            <h2>Spaghetti Bolognese</h2>
            <p>Traditional Italian pasta with rich meat sauce.</p>
          </div>
          <div className={styles.card}>
            <img src="/dish3.jpg" alt="Dish 3" />
            <h2>Caesar Salad</h2>
            <p>Crisp lettuce with parmesan and Caesar dressing.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Contact Information: 123-456-7890 | restaurant@example.com</p>
      </footer>
    </div>
  );
}
