import styles from "../styles/contact.module.css";
import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
  import swal from 'sweetalert';

export default function Home() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1d469uf",
        "template_2ddhr9l",
        e.target,
        "user_TqnRNT4dbq7BW3API9HgJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "Good job!",
            text: "Message sent!",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
          swal("Oh noes!", "Message sent failed!", "error");

        }
      );
    e.target.reset();
  }

  return (
    <>
      <Head>
        <title>Contact - Matias Fandiño</title>
        <meta name="description" />
      </Head>
      <div className="page-container">
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
          <div className={styles.formContainer}>
            <div className={styles.title}>
              <h1>Contact</h1>
              <h3>
                I am always waiting for a message from you. I would be happy to
                hear from you for an interview and a possible job offer. Or you
                can just talk to me. Don't hesitate to contact me.😎
              </h3>
              <h3>Or email to : matifandy@gmail.com</h3>
            </div>
            <div className={styles.form}>
              <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" placeholder="Write your Name" required/>
                <label>Email</label>
                <input type="email" name="email" placeholder="Write your Email" required/>
                <label>Message</label>
                <textarea name="message" placeholder="Write your Message" required/>
                <input  type="submit" value="Send"/>
              </form>
            </div>
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
