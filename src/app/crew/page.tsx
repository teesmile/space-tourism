'use client';

import { siteData } from "@/lib/data";
import { useState } from "react";


const crew = siteData.crew;

export default function Crew() {
   const [selected, setSelected] = useState(0);
  const member = crew[selected];

  return (
     <main
  className="
    flex flex-col items-center text-center px-6 py-8 min-h-screen
    lg:flex-row lg:items-center lg:justify-between lg:text-left lg:gap-20 lg:px-36 lg:py-20 md:pt-0
  "
>

   <div className="w-full">
    <h5 className="font-barlow-condensed tracking-widest2 text-blue-100 text-sm mb-8 uppercase md:text-left !text-left">
      <span className="text-white/30 mr-4">02</span>
      Meet your crew
    </h5>
    <div className="w-full max-w-[540px] mx-auto px-8 md:px-0 text-center lg:text-left">
    <h6 className="font-bellefair uppercase text-blue-100 text-lg mb-2">{member.role}</h6>
    <h2 className="font-bellefair text-3xl md:text-5xl lg:text-6xl uppercase text-white mb-4">
      {member.name}
    </h2>
    <p className="font-barlow text-blue-50 mb-8 leading-relaxed">
      {member.bio}
    </p>

    </div>
    
    {/* Dot Navigation */}
    <div className="flex gap-4 justify-center lg:justify-start ">
      {crew.map((_, i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            selected === i
              ? "bg-white"
              : "bg-white/20 hover:bg-white/50"
          }`}
          aria-label={`Show crew member ${i + 1}`}
        />
      ))}
    </div>
  </div>

  {/* Right column: crew image */}
  <div className="relative w-40 h-56 md:w-72  mx-auto lg:mx-0 justify-end items-end ">
    <img
      src={member.images.png}
      alt={member.name}
      className="block h-[300px]       
      md:w-[420px] md:h-[420px]
       lg:w-[500px] lg:h-auto
      object-contain z-0"
    />
    {/* <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 pointer-events-none bg-gradient-to-b from-transparent to-[#0B0D17]" /> */}
  </div>
</main>

  );
}