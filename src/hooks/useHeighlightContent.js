import { useState, useEffect } from "react";

const useVisibleSection = (sectionsRefs) => {
  const [visisbleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      for (let i = 0; i < sectionsRefs.length; i++)
        if (!sectionsRefs[i].ref.current) return;

      const scrollTop = window.scrollY;

      for (let i = 0; i < sectionsRefs.length; i++) {
        const { ref: currentRef, refName } = sectionsRefs[i];
        if (i === sectionsRefs.length - 1) {
          if (currentRef.current.offsetTop - 250 < scrollTop)
            return setVisibleSection(refName);
        } else {
          const nextRef = sectionsRefs[i + 1].ref.current;
          if (
            currentRef.current.offsetTop < scrollTop &&
            scrollTop < nextRef.offsetTop - 250
          )
            return setVisibleSection(refName);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return [visisbleSection, setVisibleSection];
};

export default useVisibleSection;
