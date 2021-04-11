import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        MF
      </div>
      <div className={styles.left}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/projects")}>Projects</div>
        <div onClick={() => router.push("/blog")}>Blog</div>
        <div onClick={() => router.push("/contact")}>Contact</div>
      </div>
    </div>
  );
};
