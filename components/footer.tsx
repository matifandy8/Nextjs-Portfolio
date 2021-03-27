import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <h3>Follow me</h3>
        <div className={styles.social}>
          <div>
            <div
              onClick={() =>
                (window.location.href = "https://github.com/matifandy8")
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
      <div className={styles.column}>
        <h3>Site Map</h3>
        <div className={styles.sitemap}>
          <div onClick={() => router.push("/")}>Home</div>
          <div onClick={() => router.push("/proyects")}>Proyects</div>
          <div onClick={() => router.push("/learning")}>Learning</div>
          <div onClick={() => router.push("/contact")}>Contact</div>
        </div>
      </div>
    </div>
  );
};
