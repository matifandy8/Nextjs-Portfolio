import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Footer } from "../../components/footer";
import { Toolbar } from "../../components/toolbar";
import styles from "../../styles/theproject.module.css";
import Link from "next/link";

export default function theproject({ project }) {
  const router = useRouter();

  return (
    <div>
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
        <h1 className={styles.title}>Project details</h1>
        <div className={styles.details}>
          <div>
            <h2>{project.name}</h2>
            <h5 className={styles.technologies}>{project.technologies}</h5>
            <Link href={project.github}>
              <a target="_blank" className={styles.link}>
                Code
              </a>
            </Link>
            <Link href={project.demo}>
              <a target="_blank" className={styles.link}>
                Demo
              </a>
            </Link>
          </div>

          <div>
            <img src={project.image} alt="project" />
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pathurl = pageContext.params;
  console.log(pathurl.theproject);
  const apiResponse = await fetch(
    `https://my-json-server.typicode.com/matifandy8/nextjs-portfolio/projects/${pathurl.theproject}`
  );

  const project = await apiResponse.json();
  console.log(project);
  return {
    props: {
      project,
    },
  };
};
