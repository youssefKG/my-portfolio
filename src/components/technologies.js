import skillsImageUrls from "../assets/data/skills";
const Technologies = ({ skillsRef }) => {
  return (
    <section
      id="technologies"
      className="screen flex gap-14 p-4 mt-6  sm:p-0 items-center justify-center  flex-col"
      ref={skillsRef}
    >
      <h
        className=" font-extrabold justify-center  self-start justify-self-start text-2xl
        text-white border-b-[3px] border-b-[#0094c6]"
      >
        Technologies :
      </h>
      <div className=" gap-4 self-center justify-self-center   grid grid-cols-4 flex-1 grid-rows-4  items-center justify-center">
        {skillsImageUrls.map((url) => (
          <img src={url} className="skills" alt="skills-image" />
        ))}
        <img
          src="https://www.nextontop.com/assets/img/services/web/expressjs.svg"
          className="skills bg-white"
          alt=""
        />
      </div>
    </section>
  );
};
export default Technologies;
