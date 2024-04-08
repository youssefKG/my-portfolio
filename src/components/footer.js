import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex z-30 gap-2 tracking-wider font-semibold text-white w-full justify-center bg-[#0094c6] p-1  text-[14px] items-center">
      <FaRegCopyright />
      <p className="">2024 YOUSSEF TAOUSSI</p>
      <p>All Rights Reserved</p>
    </footer>
  );
};
export default Footer;
