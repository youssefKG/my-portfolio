import React, { useEffect, useRef } from "react";
import useIsVisible from "../hooks/useIsVisible";
const About = ({ handleVisibleSection }) => {
  const aboutRef = useRef(null);
  const isVisible = useIsVisible(aboutRef);
  useEffect(() => {
    if (isVisible) {
      handleVisibleSection("about");
      console.log("about isVisible");
    } else console.log("about is unvisible");
  }, [isVisible]);
  return (
    <section
      ref={aboutRef}
      id=""
      className="h-screen  flex flex-col justify-center items-center gap-8 relative
      p-4 mt-24 text-white font-medium   "
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider w-fit self-start
        border-b-[3px] border-b-[#0094c6] p-2"
      >
        About Me:
      </h>
      <div
        className="flex items-center border-dashed border-gray-700 border-y gap-27 p-4
        text-white justify-center"
      >
        <div className="gap-6 flex flex-col">
          <div>
            <h
              className="text-[#0094c6] border-dotted  border-gray-600 border p-4 tracking-wider
              uppercase font-bold text-2xl flex flex-col mb-8"
            >
              Hi I'm Youssef Taoussi
            </h>
            <p className="max-w-xl border-dotted  border-gray-600 border-x p-8 tracking-wider text-gray-200">
              Hi There, I'm{" "}
              <span className="font-semibold text-[#0094c6]">
                Youssed Taoussi
              </span>{" "}
              I'm a self-motivated and detail-oriented MERN stack developer with
              a good understanding of the HTML, CSS ans Javascript concepts
              necessary to build interactive and pixel-perfect user interface
              designs to serve-side back-end programming. Keen to gain more
              experience in software development and everything in its orbit
              through challenging projects. Excited about learning new
              technologies and practicing code with a serious focus on
              developing scalable and clean code.
            </p>
          </div>
          <button
            className="p-2 rounded border border-white cursor-pointer hover:bg-[#005e7c] transitionClass 
            text-white font-medium px-6 hover:opacity-80"
          >
            <p>Resume</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
