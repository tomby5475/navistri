import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Layout from '../components/layout';
import Header from '../components/header';
import Intro from '../components/intro'
import Max from '../components/max';
import Image from 'next/image';


export default function Home() {
  return (
   
    <div className={styles.container}>
      <Head>
        <title>Navistri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Intro/>
        <Max/>
      </main>
      <footer>
      </footer>
    </div>
  );
}
