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

export default function Nav(){
    const pathname = usePathname()

    return(
 <nav aria-label="Primary" className="backdrop-blur-md bg-white/5">
      <ul className="flex gap-8 px-8 py-5">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  'inline-flex gap-3 tracking-widest2 text-sm md:text-base text-white/80 border-b-2 border-transparent pb-2 transition-colors',
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
    </nav>
    )
}