import styles from "../styles/blog.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

let client = require("contentful").createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps(){
    let data = await client.getEntries({
        content_type: 'article'
    })

    return {
        props: {
            articles: data.items
        }
    }
}

export default function Blog({articles}) {
  console.log(articles)

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
           <h1>Blog</h1>
           <div>
               <ul>
                   {articles.map((article) => (
                       <li key={article.sys.id}>
                           <Link href={"/blog/" + article.fields.slug}>
                               <a>{article.fields.title}</a>
                               </Link>
                       </li>
                   ))}
               </ul>
           </div>
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
