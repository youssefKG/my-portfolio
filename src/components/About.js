import React from "react";
const About = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      id=""
      className="h-screen flex flex-col justify-center items-center  gap-8 relative  p-4 mt-14  text-white font-medium   "
    >
      <h
        className=" font-extrabold text-white text-2xl tracking-wider w-fit self-start
        border-b-[3px] border-b-[#0094c6] p-2"
      >
        About :
      </h>
      <div className="flex items-center   text-white justify-center   ">
        <div className="flex gap-24 flex-col  border-dashed border-gray-700 border-y  ">
          <div className="   gap-6 flex flex-col  ">
            <div>
              <h
                className="text-[#0094c6]  border-dotted  border-gray-600
								border p-4 tracking-wider uppercase font-bold text-2xl flex flex-col
								mb-8"
              >
                Hi I'm Youssef Taoussi
              </h>
              <p className="max-w-xl font-medium  border-dotted  border-gray-600 border-x px-8 tracking-wider text-gray-200">
                I'm self tought FRONT-END devlopper with a keen eye for
                FULLSTACK devlopper
              </p>
            </div>
          </div>
          <div className="flex  justify-center items-center flex-wrap  gap-4 border-y  border-dotted border-gray-700 p-6 ">
            <div className="flex  gap-3 items-center flex-wrap">
              <h className=" font-bold text-xl text-[#0094c6]">Skills:</h>
              <img
                src="https://i.pinimg.com/564x/c5/73/ff/c573ff5552d6da9a1d28ec4e27cd1445.jpg"
                className="skills"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/b8/48/d5/b848d5d9bb221592064de0f356f61676.jpg"
                alt=""
                className=" skills"
              />
              <img
                src="https://i.pinimg.com/564x/2a/e1/8a/2ae18a66f89f1dc3fff96203288fcb64.jpg"
                className=" skills"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/69/16/e2/6916e2b11f37661b5ba69a422c49460c.jpg"
                alt=""
                className="w-10 h-10 skills"
              />
              <img
                src="https://i.pinimg.com/564x/11/a7/b5/11a7b5fb70c24e5632f2baccce14603c.jpg"
                alt=""
                className="skills"
              />
              <img
                src="https://i.pinimg.com/564x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg"
                alt=""
                className=" skills"
              />
              <img
                src="https://i.pinimg.com/564x/af/0d/ad/af0dad0aff317476578e26326f7e565a.jpg"
                alt=""
                className="skills"
              />
            </div>
            <button className="p-2 rounded border border-white cursor-pointer hover:bg-[#005e7c] transitionClass  text-white  font-medium px-6  hover:opacity-80">
              <p>Resume</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
