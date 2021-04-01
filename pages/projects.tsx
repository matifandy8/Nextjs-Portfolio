import Head from "next/head";
import { Footer } from "../components/footer";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/projects.module.css";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Matias Fandiño - Projects</title>
        <meta name="description" />
      </Head>

      <div className="page-container">
        <Toolbar />
        <h1 className={styles.title}>My Projects</h1>

        <div className={styles.main}>
          {projects.map((project) => (
            <div className={styles.project} key={project.id}>
              <h2 className={styles.name}>{project.name}</h2>
              <h5 className={styles.technologies}>{project.technologies}</h5>
              <img src={project.image} alt="project" />
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

  const projects = await apiResponse.json();

  return {
    props: {
      projects,
    },
  };
};
