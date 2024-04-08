import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = ({
  setActiveList,
  activeList,
  closeDrawer,
  isDrawerOpen,
  toogleDrawer,
}) => {
  return (
    <header>
      <nav className="navbar z-30 h-full top-0 border-gray-700 justify-center fixed  flex-col flex ">
        <ul className="text-gray-500 flex flex-col p-4  gap-4 font-semibold text-[20px]">
          <li
            className={`${activeList === "about" && "active text-white transitionClass transition-colors scale-105"}  w-fit relative cursor-pointer`}
          >
            <a onClick={() => setActiveList("about")} href="#">
              About
            </a>
          </li>
          <li
            className={`${activeList === "technologies" && "active text-white transitionClass scale-105"} w-fit relative`}
          >
            <a
              onClick={() => setActiveList("technologies")}
              href="#technologies"
            >
              Technologies
            </a>
          </li>
          <li
            className={`${activeList === "journey" && "active text-white transitionClass scale-105"} w-fit relative`}
          >
            <a onClick={() => setActiveList("journey")} href="#journey">
              Journey
            </a>
          </li>
          <li
            className={`${activeList === "projects" && "active text-white transitionClass transition-colors scale-105"} relative w-fit`}
          >
            <a onClick={() => setActiveList("projects")} href="#projects">
              Projects
            </a>
          </li>
          <li
            className={`${activeList === "contact" && "active text-white transitionClass transition-colors scale-105"} relative w-fit`}
          >
            <a onClick={() => setActiveList("contact")} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex sm:hidden justify-between p-2 fixed w-full border-[4px] z-50 border-b-gray-800 top-0 text-white items-center bg-[#0094c6]">
          <h1 className="font-semibold tracking-wider text-xl">Totib</h1>
          <button
            className="hover:opacity-80 transition-all rounded-full"
            onClick={toogleDrawer}
          >
            {isDrawerOpen ? <IoCloseSharp className="text-2xl" /> : <FaBars />}
          </button>
        </div>
        <div className="sm:hidden h-[1px] w-full bg-gray-700 z-50 flex " />
      </nav>
    </header>
  );
};

export default Navbar;
