import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Footer } from "../../components/footer";
import { Toolbar } from "../../components/toolbar";

export default function theproject() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
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
        <h2>proyect details</h2>
        <p>proyect id: {router.query.theproject}</p>
      </motion.div>

      <Footer />
    </div>
  );
}
