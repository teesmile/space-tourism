import PageBackground from "@/components/layout/pageBackground";
import Link from "next/link";


export default function ExploreButton() {
  return (
       <div className="relative flex items-center justify-center group w-60 h-60 rounded-full">
     
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full">
        <span className="transition-all duration-300 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-40 w-full h-full rounded-full bg-white/20"></span>
      </span>
      <Link  href='/destination' className=' cursor-pointer'>
       <button className="font-bellefair cursor-pointer w-38 h-38 rounded-full bg-white text-black flex items-center justify-center text-lg shadow-lg  hover:text-black/80 hover:font-light transition-all duration-200">
        EXPLORE
      </button>
      </Link>
    </div>

  );
}