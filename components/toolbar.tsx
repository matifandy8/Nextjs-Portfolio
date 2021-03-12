import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        Matias Fandiño
      </div>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/proyects")}>Proyects</div>
      <div onClick={() => router.push("/learning")}>Learning Journal</div>
      <div onClick={() => router.push("/contact")}>Contact</div>
      {/* <div
        onClick={() => (window.location.href = "https://github.com/matifandy8")}
      >
        Github
      </div> */}
    </div>
  );
};
