import { motion } from "framer-motion";

export function Education() {
  return (
    <div className="h-[500px] w-full bg-violet-500 mt-10 flex items-center justify-evenly">
      <motion.div
        className="w-[30%] h-[50%] bg-black"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      />


    <motion.div
        className="w-[30%] h-[50%] bg-black"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
