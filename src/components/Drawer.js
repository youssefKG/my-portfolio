const Drawer = ({ isDrawerOpen, closeDrawer, drawerRef }) => {
  return (
    <div
      style={{
        opacity: isDrawerOpen ? 1 : 0,
        transition: "all 400ms ",
        transform: `translateY(${isDrawerOpen ? "0" : "-60%"})`,
      }}
      ref={drawerRef}
      className="z-30 bouce-reveal flex flex-col mt-10 fixed top-0 w-full  items-center justify-center gap-4 p-6
      tracking-wider text-white text-xl tranistionClass font-bold 
      rounded-b-full bg-[#0094c6]"
    >
      <a href="# " onClick={closeDrawer}>
        About Me
      </a>
      <a href="#technologies" onClick={closeDrawer}>
        Technologies
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
  );
};
export default Drawer;
