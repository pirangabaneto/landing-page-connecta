import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="flex flex-row items-center justify-center gap-10 bg-[#3570AB] w-screen min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 3 }}
      >
        <img
          src="/dentista-02.jpg"
          alt="Foto de perfil"
          className="rounded-4xl"
        />
      </motion.div>

      <motion.div
        className="text-white p-10 w-1/2"
        initial={{ opacity: 0, x: 200 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 3 }}
      >
        <p className="text-6xl font-semibold">Sobre mim</p>
        <p className="my-8 mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
