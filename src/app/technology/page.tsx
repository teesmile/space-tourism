'use client';

import { siteData } from "@/lib/data";
import { useState } from "react";

const tech = siteData.technology;

export default function Technology() {
  const [selected, setSelected] = useState(0);
  const item = tech[selected];
  return (
   
       <main className="flex flex-col items-center text-center  py-8 min-h-screen">
      <h5 className="tracking-widest2 text-blue-100 text-sm mb-8 uppercase">
        <span className="text-white/30 mr-4">03</span>
        Space Launch 101
      </h5>
      <img
        src={item.images.portrait}
        alt={item.name}
        className="w-full h-60 object-cover mb-8"
      />
      {/* Circular Tab Navigation */}
      <div className="flex gap-4 justify-center mb-8">
        {tech.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all ${
              selected === i
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/30 hover:border-white"
            }`}
            aria-label={`Show technology ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="mb-2 text-blue-100 tracking-widest2 uppercase text-sm">
        The terminology...
      </div>
      <h2 className="font-bellefair text-3xl uppercase text-white mb-4">{item.name}</h2>
      <p className="text-blue-50 mb-8 max-w-xs">{item.description}</p>
    </main>
   
  );
}