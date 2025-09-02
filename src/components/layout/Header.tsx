'use client'

import { useState } from 'react';
import Nav from './Nav'

export default function Header(){
    const [open, setOpen] = useState(false);
    return(
       <header
  className="
    flex items-center justify-between p-6 
    lg:pl-8 lg:pr-0 lg:gap-8
  "
>
  {/* Logo */}
  <div className="shrink-0 logo">
    <img
      className="w-10 h-10 md:w-12 md:h-12"
      src="/assets/shared/logo.svg"
      alt="Space Tourism Logo"
    />
  </div>

  {/* Hamburger (mobile only) */}
  <button
    className="md:hidden"
    aria-label="open Navigation"
    onClick={() => setOpen(true)}
  >
    <img
      src="/assets/shared/icon-hamburger.svg"
      alt="Open menu"
      className="w-4 h-4"
    />
  </button>

  {/* Divider line — only on large screens */}
  <div className="hidden lg:block flex-grow h-px bg-white/20 relative left-8 z-500"></div>

  {/* Primary navigation */}
  <nav
    className=" items-center justify-center
      hidden md:flex
      lg:bg-white/5 lg:backdrop-blur-lg md:bg-white/5 md:backdrop-blur-lg lg:px-16 z-499 
    "
  >
    <Nav />
  </nav>

  {/* Mobile Nav */}
  {open && (
    <div className="inset-0 z-50 bg-black/5">
      <div className="absolute right-0 top-0 w-2/3 max-w-xs backdrop-blur-lg h-full p-6 pr-0">
        <button
          className="mb-8"
          aria-label="close navigation"
          onClick={() => setOpen(false)}
        >
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close menu"
            className="w-4 h-4 absolute right-5"
          />
        </button>
        <Nav onNavigate={() => setOpen(false)} />
      </div>
      <div className="w-full h-full" onClick={() => setOpen(false)} />
    </div>
  )}
</header>

    );
}