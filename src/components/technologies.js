import { useEffect, useRef } from "react";
import useIsVisible from "../hooks/useIsVisible";
import skillsImageUrls from "../assets/data/skills";
const Technologies = ({ handleVisibleSection }) => {
  const skillsRef = useRef();
  const isVisible = useIsVisible(skillsRef);
  useEffect(() => {
    if (isVisible) {
      handleVisibleSection("technologies");
      console.log("skilll isVisible");
    } else console.log("skilll is unvisible");
  }, [isVisible]);
  return (
    <section
      id="technologies"
      className=" flex gap-14 p-4 mt-6   sm:p-0 items-center justify-center  flex-col"
      ref={skillsRef}
    >
      <h
        className=" font-extrabold justify-center  self-start justify-self-start text-2xl
        text-white border-b-[3px] border-b-[#0094c6]"
      >
        Technologies :
      </h>
      <div className=" gap-4  grid grid-cols-4 flex-1 grid-rows-4  items-center justify-center">
        {skillsImageUrls.map((url) => (
          <img
            src={url}
            className="skills border-b hover:scale-105 transition-all cursor-pointer border-r border-[#0094c6] p-2"
            alt="skills"
          />
        ))}
        <img
          src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
          className="skills bg-white border-b border-r border-[#0094c6] p-2"
          alt=""
        />
      </div>
    </section>
  );
};
export default Technologies;
