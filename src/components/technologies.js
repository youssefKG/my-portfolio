import { motion } from "framer-motion";
import skillsImageUrls from "../assets/data/skills";

const Technologies = ({ technologiesRef }) => {
  return (
    <motion.section
      initial={{
        x: 800,
        scale: 0.5,
        opacity: 0.4,
      }}
      whileInView={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      id="technologies"
      className="flex gap-14 p-4 mt-6 sm:p-0 items-center justify-center flex-col"
      ref={technologiesRef}
    >
      <h
        className=" font-extrabold justify-center  self-start justify-self-start text-2xl
        text-white border-b-[3px] border-b-[#0094c6]"
      >
        Technologies :
      </h>
      <div className=" gap-4  grid grid-cols-12 flex-1 grid-rows-4  items-center justify-center">
        {skillsImageUrls.map((url) => (
          <img
            src={url}
            className="skills border-b rounded-full hover:scale-105 transition-all cursor-pointer border-r border-[#0094c6] p-2"
            alt="skills"
          />
        ))}
        <img
          src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
          className="skills bg-white border-b border-r border-[#0094c6] p-2"
          alt=""
        />
      </div>
    </motion.section>
  );
};
export default Technologies;
