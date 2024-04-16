const Drawer = ({ isMenuOpen, closeMenu, menuRef }) => {
  return (
    <div
      style={{
        opacity: isMenuOpen ? 1 : 0,
        transition: "all 400ms ",
        transform: `translateY(${isMenuOpen ? "0" : "-60%"})`,
      }}
      ref={menuRef}
      className="z-30 bouce-reveal flex flex-col mt-10 fixed top-0 w-full  items-center justify-center gap-4 p-6
      tracking-wider text-white text-xl tranistionClass font-bold 
      rounded-b-full bg-[#0094c6]"
    >
      <a href="# " onClick={closeMenu}>
        About Me
      </a>
      <a href="#technologies" onClick={closeMenu}>
        Technologies
      </a>
      <a href="#journey" onClick={closeMenu}>
        Journey
      </a>
      <a href="#projects" onClick={closeMenu}>
        Projects
      </a>
      <a href="#contact" onClick={closeMenu}>
        Contact
      </a>
    </div>
  );
};
export default Drawer;
