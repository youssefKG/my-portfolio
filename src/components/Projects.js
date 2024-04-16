import CardProject from "./CardProject";
import { FaArrowRightLong } from "react-icons/fa6";
import projectsData from "../assets/data/projectsData";
const Projects = ({ projectsRef }) => {
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="m-6 relative items-center flex flex-col gap-12"
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider
        self-start border-b-[3px] border-b-[#0094c6] p-2"
      >
        Recent Projects :
      </h>

      <div className="flex items-center flex-col justify-center gap-6 w-full sm:px-10 mt-6">
        {projectsData.map((e, i) => (
          <CardProject info={e} key={e.id} />
        ))}
        <button
          className=" text-xl mt-4 font-bold text-gray-400
          hover:opacity-80 transition-opacity flex gap-2  items-center"
        >
          <h>View All Projects</h>
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default Projects;
