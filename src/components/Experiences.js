import { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "../assets/data/journey";
import useIsVisible from "../hooks/useIsVisible";
const Journey = ({ handleVisibleSection }) => {
  const journeyRef = useRef();
  const isVisible = useIsVisible(journeyRef);
  useEffect(() => {
    if (isVisible) handleVisibleSection("journey");
  }, [isVisible]);
  return (
    <section ref={journeyRef} id="journey" className="p-6 flex flex-col  ">
      <h
        className=" font-extrabold text-white mb-4  text-2xl tracking-wider
        border-b-[3px]  border-b-[#0094c6] p-2  w-fit  "
      >
        Journey :
      </h>
      <div className="flex">
        <VerticalTimeline animate={true}>
          {data.map((e, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#001242", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #005e7c",
                }}
                iconStyle={{
                  background: "#005e7c",
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                  display: "none",
                }}
              >
                <div className="flex flex-col hover:opacity-90 ">
                  <h3 className="vertical-timeline-element-title text-[#0094c6] font-bold  text-xl underline">
                    {e.title}
                  </h3>

                  <p className=" text-gray-300 text-xs font-normal ">
                    {e.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Journey;
