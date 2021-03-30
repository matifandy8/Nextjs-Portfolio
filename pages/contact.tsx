import styles from "../styles/contact.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { useForm } from "react-hook-form";

type Profile = {
  name: string;
  email: string;
  msj: string;
};

export default function Home() {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <>
      <Head>
        <title>Contact - Matias Fandiño</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
        <Toolbar />

        <div className={styles.formContainer}>
          <div className={styles.title}>
            <h1>Contact</h1>
            <h3>
              I am always waiting for a message from you. I would be happy to
              hear from you for an interview and a possible job offer. Or you
              can just talk to me. Don't hesitate to contact me.😎
            </h3>
          </div>
          <div className={styles.form}>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name"> Name</label>
                <input
                  ref={register({ required: true })}
                  id="name"
                  name="name"
                  type="text"
                />
                {errors.name && <div className="error">Enter your name</div>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  ref={register({ required: true })}
                  id="email"
                  name="email"
                  type="text"
                />
                {errors.email && <div className="error">Enter email</div>}
              </div>
              <div>
                <label htmlFor="msj">Message</label>
                <input
                  ref={register({ required: true })}
                  id="msj"
                  name="msj"
                  type="text"
                />
                {errors.msj && <div className="error">Enter your Message</div>}
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
