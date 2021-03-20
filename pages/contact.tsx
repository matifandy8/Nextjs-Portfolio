import styles from "../styles/contact.module.css";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";

type Profile = {
  name: string;
  email: string;
  msj: string;
};

export default function Home() {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
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
            <img src="https://i.ibb.co/vcYpvn9/undraw-Forms-re-pkrt.png" />
          </div>
          <div className={styles.form}>
            <h1>Contact Form</h1>
            <h3>
              If my introduction of skill and character has convinced you, I
              would be happy to hear from you for an interview and a possible
              job offer.
            </h3>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  ref={register({ required: true })}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type your Name"
                />
                {errors.name && <div className="error">Enter your name</div>}
              </div>
              <div>
                <input
                  ref={register({ required: true })}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type your Email"
                />
                {errors.email && <div className="error">Enter your Email</div>}
              </div>
              <div>
                <textarea
                  ref={register({ required: true })}
                  id="msj"
                  name="msj"
                  type="text"
                  placeholder="Type your Message"
                />
                {errors.msj && <div className="error">Enter your Message</div>}
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
