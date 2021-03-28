import Head from "next/head";
import { Footer } from "../components/footer";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/proyects.module.css";

export default function Proyects({ proyects }) {
  console.log(proyects);
  return (
    <>
      <Head>
        <title>Matias Fandiño - Proyects</title>
        <meta name="description" />
      </Head>

      <div className="page-container">
        <Toolbar />
        <h1 className={styles.title}>My Proyects</h1>

        <div className={styles.main}>
          {proyects.map((proyect) => (
            <div className={styles.proyect} key={proyect.id}>
              <h2 className={styles.name}>{proyect.name}</h2>
              <h5 className={styles.technologies}>{proyect.technologies}</h5>
              <img src={proyect.image} alt="proyect" />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/matifandy8/nextjs-portfolio/proyects"
  );

  const proyects = await apiResponse.json();

  return {
    props: {
      proyects,
    },
  };
};
