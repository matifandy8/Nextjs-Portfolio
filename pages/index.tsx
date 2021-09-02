import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Fandiño - Front-End Developer</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            },
          }}
        >
          <div className={styles.main}>
            <div className={styles.presentation}>
              <div className={styles.presentationinfo}>
                <h1>Matias Fandiño</h1>
                <h2>
                  Front-End developer.
                </h2>
                <Link href="/projects">
                <a>Go to Projects</a>
               </Link>
              </div>
            </div>

            <div className={styles.aboutme}>
              <h2>About Me</h2>
              <div className={styles.container}>
                <div className={styles.card}>
                  <p>23 years old</p>
                  <p>Web Developer</p>
                  <div className={styles.social}>
                    <div>
                      <div
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/matifandy8")
                        }
                      >
                        <GitHubIcon />
                      </div>
                      <div
                        onClick={() =>
                          (window.location.href =
                            "https://www.linkedin.com/in/matias-fandi%C3%B1o/")
                        }
                      >
                        <LinkedInIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3>
                    I started studying programming in March, 2020. Since then I
                    have been learning a lot of things every day to further my
                    skills. I like to learn and try new things. I am a big fan
                    of learning programing while making productions. I am proud
                    to say that I always work hard and do my best to live up to
                    expectations people have for me.
                  </h3>
                </div>
              </div>
            </div>

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
                  <h6 className={styles.skillname}>Sass</h6>

                  <Image
                    className={styles.skillimage}
                    src="/sass.png"
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
                  <h6 className={styles.skillname}>Next</h6>

                  <Image
                    className={styles.skillimage}
                    src="/next.png"
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
                    src="/expressjs.png"
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
                <div className={styles.skill}>
                  <h6 className={styles.skillname}>Graphql</h6>

                  <Image
                    className={styles.skillimage}
                    src="/graphql.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.skill}>
                  <h6 className={styles.skillname}>PostgreSql</h6>

                  <Image
                    className={styles.skillimage}
                    src="/postgreSql.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
