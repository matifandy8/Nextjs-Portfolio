import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";

export default function Learning() {
  return (
    <>
      <Head>
        <title>Matias Fandiño - Learning Journal</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <div>
          <div>
            <h1>Learning Journal</h1>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
