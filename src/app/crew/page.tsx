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
    lg:flex-row  lg:items-center lg:justify-between lg:text-left lg:gap-20  lg:py-10 md:pt-0
  "
    >

      <div className="content lg:w-1/2 lg:px-18">
        <div className="w-full ">
          <h5 className="lg:w-3xl font-barlow-condensed tracking-widest2 text-orange-50 text-sm mb-8 uppercase md:!text-left">
            <span className="text-white/30 mr-4">02</span>
            Meet your crew
          </h5>
        </div>

        <div className=" px-8 md:px-0 text-center lg:text-left pr-10">
          <h6 className="font-bellefair uppercase text-blue-100 text-lg mb-2">{member.role}</h6>
          <h2 className="font-bellefair text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-4">
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
              className={`w-3 h-3 lg:w-6 lg:h-6 cursor-pointer rounded-full transition-all ${selected === i
                ? "bg-white"
                : "bg-white/20 hover:bg-white/50"
                }`}
              aria-label={`Show crew member ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right column: crew image */}
      <div className="relative lg:w-1/2 justify-end items-end ">
        <img
          src={member.images.png}
          alt={member.name}
          className="block h-[300px]       
      md:w-[420px] md:h-[420px]
       lg:w-[1024] lg:h-[680]
      object-contain z-0"
        />
        {/* <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 pointer-events-none bg-gradient-to-b from-transparent to-[#0B0D17]" /> */}
      </div>
    </main>

  );
}