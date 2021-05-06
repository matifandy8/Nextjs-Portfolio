import styles from "../styles/blog.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    props: {
      articles: data.items,
    },
  };
}

export default function Blog({ articles }) {
  console.log(articles);

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
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.articles}>
              {articles.map((article) => (
                <div key={article.sys.id} className={styles.article}>
                  <Image
                    src={"https:" + article.fields.thumbnail.fields.file.url}
                    width={
                      article.fields.thumbnail.fields.file.details.image.width
                    }
                    height={
                      article.fields.thumbnail.fields.file.details.image.height
                    }
                  />
                  <h2 className={styles.link}>{article.fields.title}</h2>
                  <Link href={"/blog/" + article.fields.slug}>
                    <a className={styles.btnarticle}>Continue Reading</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
