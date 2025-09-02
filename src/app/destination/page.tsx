'use client';
import { useState } from "react";
import { siteData } from "@/lib/data";

const destinations = siteData.destinations;

export default function DestinationPage() {
  const [selected, setSelected] = useState(0)
  const dest = destinations[selected]
  return (
   <main
  className="
    flex flex-col items-center text-center px-6 py-8 min-h-screen
    lg:flex-row lg:items-start lg:justify-center lg:gap-24 lg:text-left
  "
>
  <div className="md:relative flex flex-col items-center lg:items-start">
   <h5 className="tracking-widest2 text-blue-100 text-sm mb-8 uppercase lg:mb-16 md:text-left !text-left">
  <span className="text-white/30 mr-4">01</span>
  Pick your destination
</h5>

    <img
      src={dest.images.png}
      alt={dest.name}
      className="w-40 h-40 md:w-72 md:h-72 lg:w-[445px] lg:h-[445px] object-contain"
    />
  </div>


  <div className="mt-8 lg:mt-28 w-full max-w-md lg:max-w-[clamp(320px,37.5vw,540px)]">
    {/* Tab Navigation */}
    <nav className="flex gap-6 mb-8 justify-center lg:justify-start">
      {destinations.map((d, i) => (
        <button
          key={d.name}
          onClick={() => setSelected(i)}
          className={`uppercase tracking-widest2 font-barlow-condensed text-blue-100 pb-2 border-b-2 transition-colors ${
            selected === i
              ? "border-white text-white"
              : "border-transparent hover:border-white/30"
          }`}
        >
          {d.name}
        </button>
      ))}
    </nav>

    <h2 className="font-bellefair text-5xl md:text-6xl lg:text-7xl uppercase text-white mb-4">
      {dest.name}
    </h2>
    <p className="font-barlow text-blue-50 mb-8 leading-relaxed">
      {dest.description}
    </p>

    <hr className="border-white/70 w-full mb-8" />

    <div className="uppercase flex flex-col gap-6 items-center justify-around w-full md:flex-row md:gap-16">
      <div>
        <h6 className="font-barlow-condensed text-blue-100 text-xs tracking-widest2 mb-2">
          Avg. Distance
        </h6>
        <span className="font-bellefair text-2xl text-white">
          {dest.distance}
        </span>
      </div>
      <div>
        <h6 className="font-barlow-condensed text-blue-100 text-xs tracking-widest2 mb-2">
          Est. Travel Time
        </h6>
        <span className="font-bellefair text-2xl text-white">
          {dest.travel}
        </span>
      </div>
    </div>
  </div>
</main>

  );
}