'use client'

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import clsx from "clsx"

const links = [
    {href: '/', label: 'HOME', num: '00'},
    {href: '/destination', label: 'DESTINATION', num: '01'},
    {href: '/crew', label: 'CREW', num: '02'},
    {href: '/technology', label: 'TECHNOLOGY', num: '03'},
];

export default function Nav({onNavigate}: {onNavigate?: ()=> void}){
    const pathname = usePathname()

    return(
 <div aria-label="Primary" className=" ">
      <ul className="flex flex-col md:flex-row gap-6 md:gap-8  py-8 w-full ">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href} className="w-full md:w-auto h-fit font-barlow-condensed">
              <Link
                href={l.href}
                onClick={onNavigate}
                className={clsx(
                  'flex w-full md:w-auto gap-3 tracking-widest2 text-sm md:text-base text-blue-50 border-r-3 md:border-r-0 md:border-b-3 border-transparent transition-colors',
                  active && 'text-white border-white',
                  !active &&
                    'hover:border-white/30 focus-visible:border-white/60'
                )}
              >
                <span className="font-bold">{l.num}</span>
                <span className="font-normal">{l.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    )
}