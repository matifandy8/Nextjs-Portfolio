import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <span>Follow me</span>
        <div
          onClick={() =>
            (window.location.href = "https://github.com/matifandy8")
          }
        >
          Github
          <div
            onClick={() =>
              (window.location.href = "https://github.com/matifandy8")
            }
          >
            Linkedin
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div onClick={() => router.push("/proyects")}>Proyects</div>
        <div onClick={() => router.push("/contact")}>Contact</div>
      </div>
    </div>
  );
};
