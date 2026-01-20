import { motion } from "framer-motion";

function MockDiv({ location }) {
  return (
    <motion.div
      className="relative w-[50%] h-[20%] p-[2px] rounded-lg bg-transparent"
      initial={{ opacity: 0, x: location }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
     
    </motion.div>
  );
}

export default MockDiv;
