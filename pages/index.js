import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CRUD App with Next.js and MongoDB</title>
        <meta name="description" content="A simple CRUD app using Next.js and MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your CRUD App
        </h1>
        <ItemForm />
        <ItemList />
      </main>
    </div>
  );
}
