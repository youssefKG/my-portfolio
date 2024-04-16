import { useRef, useState, useEffect } from "react";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Journey from "../components/Experiences";
import Navbar from "../components/Navabar.js";
import Contact from "../components/Contact";
import Technologies from "../components/technologies.js";
const Home = () => {
  const [activeList, setActiveList] = useState("about");
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const handleVisibleSection = (sectionName) => setActiveList(sectionName);
  useEffect(() => {
    const onScroll = (e) => {
      let scrollTop = window.scrollY;
      if (
        contactRef.current &&
        projectsRef.current &&
        journeyRef.current &&
        aboutRef.current &&
        technologiesRef.current
      ) {
        if (
          aboutRef.current.offsetTop < scrollTop &&
          scrollTop < technologiesRef.current.offsetTop - 250
        )
          setActiveList("about");
        else if (
          technologiesRef.current.offsetTop < scrollTop &&
          scrollTop < journeyRef.current.offsetTop - 250
        )
          setActiveList("technologies");
        else if (
          journeyRef.current.offsetTop < scrollTop &&
          scrollTop < projectsRef.current.offsetTop - 250
        )
          setActiveList("journey");
        else if (
          projectsRef.current.offsetTop - 100 < scrollTop &&
          scrollTop < contactRef.current.offsetTop - 250
        )
          setActiveList("projects");
        else setActiveList("contact");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="homeContainer  z-20 overflow-x-hidden font-mono">
      <Navbar activeList={activeList} />
      <div className="flex flex-col gap-10">
        <About
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
          aboutRef={aboutRef}
        />
        <Technologies
          handleVisibleSection={handleVisibleSection}
          visibleSection={activeList}
          technologiesRef={technologiesRef}
        />
        <Journey
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
          journeyRef={journeyRef}
        />
        <Projects
          projectsRef={projectsRef}
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
        />
        <Contact
          contactRef={contactRef}
          visibleSection={activeList}
          handleVisibleSection={handleVisibleSection}
        />
      </div>
    </div>
  );
};
export default Home;
