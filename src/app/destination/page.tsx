'use client';
import { useState } from "react";
import { siteData } from "@/lib/data";

const destinations = siteData.destinations;

export default function DestinationPage() {
  const [selected, setSelected] = useState(0)
  const dest = destinations[selected]
  return (
     <main className="flex flex-col items-center text-center px-6 py-8 min-h-screen">
      <h5 className="tracking-widest2 text-blue-100 text-sm mb-8 uppercase">
        <span className="text-white/30 mr-4">01</span>
        Pick your destination
      </h5>
      <img
        src={dest.images.png}
        alt={dest.name}
        className="w-40 h-40 md:w-72 md:h-72 object-contain mb-8"
      />
      {/* Tab Navigation */}
      <nav className="flex gap-6 mb-8">
        {destinations.map((d, i) => (
          <button
            key={d.name}
            onClick={() => setSelected(i)}
            className={`uppercase tracking-widest2 text-blue-100 pb-2 border-b-2 transition-colors ${
              selected === i
                ? "border-white text-white"
                : "border-transparent hover:border-white/30"
            }`}
          >
            {d.name}
          </button>
        ))}
      </nav>
      <h2 className="font-bellefair text-5xl uppercase text-white mb-4">{dest.name}</h2>
      <p className="text-blue-50 mb-8 max-w-xs">{dest.description}</p>
      <hr className="border-blue-900 w-full mb-8" />
      <div className="flex flex-col gap-6 w-full">
        <div>
          <h6 className="text-blue-100 text-xs tracking-widest2 mb-2">Avg. Distance</h6>
          <span className="font-bellefair text-2xl text-white">{dest.distance}</span>
        </div>
        <div>
          <h6 className="text-blue-100 text-xs tracking-widest2 mb-2">Est. Travel Time</h6>
          <span className="font-bellefair text-2xl text-white">{dest.travel}</span>
        </div>
      </div>
      </main>
  );
}