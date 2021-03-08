import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Fandiño - Front-End Developer</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <div className={styles.presentation}>
            <h1>Matias Fandiño</h1>
            <h3>
              Hello, I am a Front-End developer. I was born in Uruguay in 1997.
              Currently, I am based in Uruguay.
            </h3>
            <button>Proyects</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
