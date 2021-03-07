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

        <div className={styles.main}>
          <h1>My Proyects</h1>
          {proyects.map((proyect) => (
            <div className={styles.proyects}>
              <h3>{proyect.name}</h3>
              <h6>{proyect.technologies}</h6>
              <img src={proyect.image} alt="proyect" />
              <p>{proyect.description}</p>
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
