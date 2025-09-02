'use client';

import { siteData } from "@/lib/data";
import { useState } from "react";

const tech = siteData.technology;

export default function Technology() {
  const [selected, setSelected] = useState(0);
  const item = tech[selected];
  return (

    <main
      className="
    flex flex-col items-center text-center py-8 min-h-screen
    lg:flex-row-reverse lg:items-center lg:justify-between lg:text-left lg:gap-20 lg:pl-36 lg:py-20
  "
    >

      <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
        <img
          src={item.images.portrait}
          alt={item.name}
          className="w-full  h-auto object-cover"
        />
      </div>


      <div className="w-full relative">

        <h5 className="font-barlow-condensed tracking-widest2 text-blue-100 text-sm mb-8 uppercase text-center md:text-left">
          <span className="text-white/30 mr-4">03</span>
          Space Launch 101
        </h5>

        {/* Mobile/tablet image */}
        <div className="w-full mb-8 lg:hidden">
          <img
            src={item.images.portrait}
            alt={item.name}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="flex lg:flex-col lg:absolute lg:gap-12 gap-4 items-center justify-center lg:justify-start mb-8">
          {tech.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`font-bellefair w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all ${selected === i
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/30 hover:border-white"
                }`}
              aria-label={`Show technology ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="items-center justify-center lg:text-left w-full  lg:max-w-[clamp(280px,37.5vw,540px)] px-8 md:px-0 lg:px-0 lg:ml-20">
          <div className="font-bellefair mb-2 text-blue-100 tracking-widest2 uppercase text-sm">
            The terminology...
          </div>
          <h2 className="font-bellefair text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-4">
            {item.name}
          </h2>
          <p className="font-barlow text-blue-50 mb-8 leading-relaxed">
            {item.description}
          </p>
        </div>

      </div>
    </main>




  );
}