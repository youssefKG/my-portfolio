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
  const drawerRef = useRef(null);
  const navbarRef = useRef(null);
  const [activeList, setActiveList] = useState("about");
  const handleVisibleSection = (sectionName) => setActiveList(sectionName);

  useEffect(() => {
    const clickOutside = (e) => {
      if (
        drawerRef.current &&
        navbarRef.current &&
        isDrawerOpen &&
        !drawerRef.current.contains(e.target) &&
        !navbarRef.current.contains(e.target)
      )
        setIsDrawerOpen(false);
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  });
  return (
    <div className="homeContainer  z-20 overflow-x-hidden font-mono">
      <Navbar
        activeList={activeList}
        isDrawerOpen={isDrawerOpen}
        setActiveList={(l) => setActiveList(l)}
        navbarRef={navbarRef}
        toogleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <Drawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
        drawerRef={drawerRef}
      />
      <div className="flex flex-col gap-10">
        <About handleVisibleSection={handleVisibleSection} />
        <Technologies handleVisibleSection={handleVisibleSection} />
        <Journey handleVisibleSection={handleVisibleSection} />
        <Projects handleVisibleSection={handleVisibleSection} />
        <Contact handleVisibleSection={handleVisibleSection} />
      </div>
    </div>
  );
};
export default Home;
