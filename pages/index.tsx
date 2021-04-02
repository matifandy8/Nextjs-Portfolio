import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import FileSaver from "file-saver";
import Image from "next/image";

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
          <img
            className={styles.presentationimage}
            src="https://upgraphy.com/wp-content/uploads/edd/2020/09/web-developer-vector-illustration-5de192c700231.png"
          />

          <div className={styles.containerskills}>
            <h2>Skills</h2>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>HTML5</h6>
                <Image
                  className={styles.skillimage}
                  src="/html.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>CSS3</h6>

                <Image
                  className={styles.skillimage}
                  src="/css.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Javascript</h6>

                <Image
                  className={styles.skillimage}
                  src="/javascript.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>React</h6>

                <Image
                  className={styles.skillimage}
                  src="/react.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Redux</h6>

                <Image
                  className={styles.skillimage}
                  src="/redux.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Node</h6>

                <Image
                  className={styles.skillimage}
                  src="/nodejs.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Express</h6>

                <Image
                  className={styles.skillimage}
                  src="/express.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Mongodb</h6>

                <Image
                  className={styles.skillimage}
                  src="/mongodb.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.skill}>
                <h6 className={styles.skillname}>Firebase</h6>

                <Image
                  className={styles.skillimage}
                  src="/firebase.png"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
