import { useState, useEffect } from "react";
const useVisibleSection = (sectionsRefs) => {
  const [visisbleSection, setVisibleSection] = useState(null);
  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visisbleSection;
};
