import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        Follow me
      </div>
      <div onClick={() => router.push("/proyects")}>Proyects</div>
      <div onClick={() => router.push("/contact")}>Contact</div>
      <div
        onClick={() => (window.location.href = "https://github.com/matifandy8")}
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
  );
};
