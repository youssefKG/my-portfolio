const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  return (
    isDrawerOpen && (
      <div
        className="z-30 flex flex-col mt-10 fixed top-0 w-full  items-center justify-center gap-4 p-6
      tracking-wider text-white text-xl tranistionClass font-bold 
      rounded-b-full bg-[#0094c6]"
      >
        <a href="#" onClick={closeDrawer}>
          About
        </a>
        <a href="#skills" onClick={closeDrawer}>
          Skills
        </a>
        <a href="#journey" onClick={closeDrawer}>
          Journey
        </a>
        <a href="#projects" onClick={closeDrawer}>
          Projects
        </a>
        <a href="#contact" onClick={closeDrawer}>
          Contact
        </a>
      </div>
    )
  );
};
export default Drawer;
