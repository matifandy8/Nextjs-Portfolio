import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import { Toolbar } from "../../components/toolbar";
import { Footer } from "../../components/footer";
import { motion } from "framer-motion";
import styles from "../../styles/article.module.css";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });
  return {
    props: {
      article: data.items[0],
    },
  };
}

export default function Article({ article }) {
  console.log(article);
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
          <div className={styles.article}>
            <h1>{article.fields.title}</h1>
            <div>{documentToReactComponents(article.fields.content)}</div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
