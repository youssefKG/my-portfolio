import { FiArrowUpRight } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CardProject = ({ info }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ x: 700, scale: 0.5, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1, x: [-90, 30, 0] }}
      transition={{ duration: 0.1, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true }}
      onClick={() => navigate("/project/" + info.id)}
      to={`/project/${info.id}`}
      className="projectCard flex items-center flex-col  gap-4  relative pt-12
      hover:scale-105 border  border-gray-800 cursor-pointer hover:opacity-100
      transitionClass bg-[#001242]/40 hover:bg-[#040f16]/60
       p-6 rounded-[4px] sm:max-w-2xl  w-full opacity-70"
    >
      <img className=" rounded-lg " src={info.images[0]} alt="project img" />
      <div className=" flex  flex-col gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <h className="text-gray-200 uppercase font-bold text-lg tracking-wide ">
            {info.title}
          </h>
          <FiArrowUpRight className="text-white font-bold w-5 h-5 upRightFlesh" />
        </div>
        <p className="text-gray-400 tracking-wide  text-[14px] line-clamp-3  ">
          {info.description}
        </p>
        <div className="self-start justify-self-start text-start text-white">
          <p>Demo:</p>
          <p className="px-4">
            <span>Email :</span> {info.demo.email}
          </p>
          <p className="px-4">
            <span>Password : </span>
            {info.demo.password}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {info.tec.map((t) => (
            <p
              className="p-1 px-3 text-gray-300  font-medium bg-[#005e7c]/70
              text-[15px] rounded-full"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4  flex z-30 gap-4 text-white ">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/youssefKG"
          className="text-2xl opacity-70 hover:opacity-100 transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/youssefKG"
          className="text-2xl opacity-70 hover:opacity-100 transition-all"
          rel="noreferrer"
          target="_blank"
        >
          <FaShare />
        </a>
      </div>
    </motion.button>
  );
};
export default CardProject;
