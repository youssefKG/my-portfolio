import { motion } from "framer-motion";
import skillsImageUrls from "../assets/data/skills";
import {
  initial,
  animate as whileInView,
  transition,
  viewPort,
} from "../utils/animation";

const Technologies = ({ technologiesRef }) => {
  return (
    <motion.section
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewPort}
      id="technologies"
      className="flex h-screen items-center flex-col gap-12 p-4 m-6 sm:p-0"
      ref={technologiesRef}
    >
      <h
        className=" font-extrabold self-start justify-self-start text-2xl
        text-white border-b-[3px] border-b-[#0094c6]"
      >
        Technologies :
      </h>
      <div className=" gap-4 rounded-full  grid grid-cols-4 items-center justify-center ">
        {skillsImageUrls.map((url) => (
          <img
            src={url}
            className="skills border-b rounded-full hover:scale-105 transition-all cursor-pointer border-r min-w-[20px] border-[#0094c6] p-2"
            alt="skills"
          />
        ))}
        <img
          src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
          className="skills bg-white rounded-full max-w-[200px] max-h-[200px] border-b border-r border-[#0094c6] p-2"
          alt=""
        />
      </div>
    </motion.section>
  );
};

export default Technologies;
