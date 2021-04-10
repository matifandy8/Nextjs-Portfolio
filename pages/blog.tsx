import styles from "../styles/blog.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";

export default function Blog() {
  

  return (
    <>
      <Head>
        <title>Blog - Matias Fandiño</title>
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
          <div className={styles.blogContainer}>
           
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
