'use client';

import { siteData } from "@/lib/data";
import { useState } from "react";


const crew = siteData.crew;

export default function Crew() {
   const [selected, setSelected] = useState(0);
  const member = crew[selected];

  return (
      <main className="flex flex-col items-center text-center px-6 py-8 min-h-screen">
      <h5 className="tracking-widest2 text-blue-100 text-sm mb-8 uppercase">
        <span className="text-white/30 mr-4">02</span>
        Meet your crew
      </h5>
      <h6 className="uppercase text-blue-100 text-lg mb-2">{member.role}</h6>
      <h2 className="font-bellefair text-3xl uppercase text-white mb-4">{member.name}</h2>
      <p className="text-blue-50 mb-8 max-w-xs">{member.bio}</p>
      {/* Dot Navigation */}
      <div className="flex gap-4 justify-center mb-8">
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
      <div className="relative w-40 h-56 md:w-72 md:h-[500px] mx-auto">
       <img src={member.images.png} alt={member.name} className="block w-full h-auto object-contain z-0" /> 
       
       <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 pointer-events-none bg-gradient-to-b from-transparent to-[#0B0D17]" />
      </div>
      
    </main>
  );
}