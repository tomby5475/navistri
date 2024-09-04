import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Layout from '../components/layout';
import Header from '../components/header';
// import Max from '../components/max';
import Image from 'next/image';
import iconStar from '../public/images/Group_34.jpg';


export default function Home() {
  return (
   
    <div className={styles.container}>
      <Head>
        <title>Navistri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>

        <h1 className={styles.title}>
          IGNITE 
          <Image
            src={iconStar}
            alt="star"
          />
          YOUR POTENTIAL
        </h1>

        <p className={styles.description}>
        NAVISTRI empowers the curious and the driven with the acumen to lead in a world of flux. Our learning experiences are designed to arm you with the insight to not just navigate but shape the future. Join us at the edge, where knowledge equals power. 
        </p>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      {/* <style jsx>{
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      }</style> */}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  
  );
}
