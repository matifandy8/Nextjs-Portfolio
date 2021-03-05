import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";

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
          <h1>Matias Fandiño</h1>
          <h3>Front-End Developer</h3>
        </div>
      </div>
    </>
  );
}
