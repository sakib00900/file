import React,{useRef} from "react";
import Card from "./Card";


const Fg = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "jdj djghdh jdhkjgh dkjhgkjhd dhkjgjh dhkjgh dhgk",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
  ];
  return (
    <div ref={ref} className="w-full h-full fixed z-[13] top-0 left-0 ">
      {data.map((item,index)=>(
        <Card reference={ref} desc="Never underestimate the power of perseverance. Rome wasn't built in a day, and neither are dreams realized overnight. Stay committed to your goals, even when the path seems daunting."/>

      ))}
    </div>
  );
};

export default Fg;
