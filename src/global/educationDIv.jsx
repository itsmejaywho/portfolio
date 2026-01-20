import { motion } from "framer-motion";

function EducationDiv({ location, title, SY, City, School }) {
  return (
    <motion.div
      className="relative w-[50%] h-[20%] p-[2px] rounded-lg"
      initial={{ opacity: 0, x: location }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: "2px solid transparent",
          background: "linear-gradient(90deg, #0c1a2b, #1f3b5c, #0c1a2b)",
          backgroundClip: "padding-box",
          WebkitMaskImage: `
            linear-gradient(90deg, 
              transparent, 
              black 5%, 
              black 95%, 
              transparent)`,
        }}
      />
      
      {/* Border light that moves around */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          border: "2px solid transparent",
          background: "conic-gradient(from var(--angle), #1f3b5c, #0c1a2b, #1f3b5c)",
          backgroundClip: "padding-box",
          '--angle': '0deg',
        }}
        animate={{
          '--angle': '360deg',
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className=" text-white relative z-10 w-full h-full bg-[#242424] rounded-lg flex flex-col items-start justify-center pl-4">
        <p className="text-[.9rem] font-bold">{School}</p>
        <p className="text-[.8rem]">{title}</p>
        <p className="text-[.8rem]">SY: {SY}</p>
        <p className="text-[.8rem] mt-4">{City}</p>
      </div>
    </motion.div>
  );
}

export default EducationDiv;
