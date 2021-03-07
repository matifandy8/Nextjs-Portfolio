import styles from "../styles/Contact.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact - Matias Fandiño</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <div>
          <h1>Contact</h1>
          <h3>
            I am always waiting for a message from you. I would be happy to hear
            from you for an interview and a possible job offer. Or you can just
            talk to me. Don't hesitate to contact me.😎
          </h3>
        </div>

        <Footer />
      </div>
    </>
  );
}
