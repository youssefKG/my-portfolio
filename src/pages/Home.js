import { useState, useEffect, useRef } from "react";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Journey from "../components/Experiences";
import Navbar from "../components/Navabar.js";
import Contact from "../components/Contact";
import Technologies from "../components/technologies.js";
import Drawer from "../components/Drawer.js";
const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const [activeList, setActiveList] = useState("about");
  useEffect(() => {
    const changeActiveSection = () => {
      if (
        aboutRef.current &&
        contactRef.current &&
        journeyRef.current &&
        projectsRef.current
      ) {
        const windowHeight = window.pageYOffset;
        const aboutHeight = aboutRef.current.offsetHeight;
        const skillsHeight = aboutHeight + skillsRef.current.offsetHeight;
        const journeyHeight = journeyRef.current.offsetHeight + skillsHeight;
        const projectsHeight = journeyHeight + projectsRef.current.offsetHeight;
        if (windowHeight >= 0 && windowHeight <= aboutHeight)
          setActiveList("about");
        else if (windowHeight > aboutHeight && windowHeight <= skillsHeight)
          setActiveList("technologies");
        else if (windowHeight > skillsHeight && windowHeight <= journeyHeight)
          setActiveList("journey");
        else if (windowHeight > journeyHeight && windowHeight <= projectsHeight)
          setActiveList("projects");
        else if (windowHeight > projectsHeight) setActiveList("contact");
        console.log(windowHeight, projectsHeight);
      }
    };
    document.addEventListener("scroll", changeActiveSection);
    return () => document.removeEventListener("scroll", changeActiveSection);
  }, []);
  return (
    <div className="homeContainer z-20 overflow-x-hidden font-mono">
      <Navbar
        activeList={activeList}
        isDrawerOpen={isDrawerOpen}
        setActiveList={(l) => setActiveList(l)}
        toogleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <Drawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
      <div className="flex flex-col">
        <About aboutRef={aboutRef} />
        <Technologies skillsRef={skillsRef} />
        <Journey journeyRef={journeyRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
};
export default Home;
