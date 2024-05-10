import {  Outlet  } from "react-router-dom";
import ParticlesContainer from "../components/Particles";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Footer from "../components/footer";

const DefaultLayout = ()=>{
  return (
    <div className="App overflow-x-hidden flex flex-col">
      <ParticlesContainer />
      <Outlet />
      <div className="flex flex-col z-40 gap-4 mb-6 fixed bottom-0 left-8">
        <a href="https://github.com/youssefKG" target="_blank" rel="noreferrer">
          <FaGithub className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        </a>
        <FaFacebook className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        <a
          href="https://www.linkedin.com/in/youssef-taoussi-0081a7264/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-8 h-8 cursor-pointer transitionClass text-white hover:text-[#e0aaff]" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout; 
