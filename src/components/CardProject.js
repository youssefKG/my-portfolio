import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const CardProject = ({ info }) => {
  return (
    <Link
      to={`/project/${info.id}`}
      className="projectCard flex items-center  flex-col sm:flex-row gap-4  relative
      hover:scale-105 border  border-gray-800 cursor-pointer hover:opacity-100
      transitionClass bg-[#001242]/40 hover:bg-[#040f16]/60
      transition-colors p-6 rounded-[4px] sm:max-w-2xl  w-full   duration-100  opacity-70"
    >
      <img className="w-30 rounded-lg h-24" src={info.images[0]} alt="" />

      <div className=" flex  flex-col gap-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <h className="text-gray-200 uppercase font-bold text-lg tracking-wide ">
            {info.title}
          </h>
          <FiArrowUpRight className="text-white font-bold w-5 h-5 upRightFlesh" />
        </div>
        <p className="text-gray-400 tracking-wide  text-[14px] line-clamp-2  ">
          {info.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {info.tec.map((t) => (
            <p className="p-1 px-3 text-gray-300  font-medium bg-[#005e7c]/70 text-[15px] rounded-full">
              {t}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};
export default CardProject;
