import Head from "next/head";
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

          <div className={styles.proyects}>
            <h3>{proyects.name}</h3>
            <h6>{proyects.position}</h6>
            <img src={proyects.image} alt="proyect" />
            <p>{proyects.description}</p>
          </div>
        </div>
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
