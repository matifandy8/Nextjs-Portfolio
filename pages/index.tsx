import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import FileSaver from "file-saver";

export default function Home() {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/resource/MatiasFandiño- Cv.pdf",
      "Matias Fandiño -  Cv.pdf"
    );
  };
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
            <button className="cv" onClick={saveFile}>
              Resume
            </button>
          </div>
          <img src="https://upgraphy.com/wp-content/uploads/edd/2020/09/web-developer-vector-illustration-5de192c700231.png" />
        </div>

        <Footer />
      </div>
    </>
  );
}
