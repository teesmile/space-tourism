'use client'

import { useState } from 'react';
import Nav from './Nav'
import {motion, AnimatePresence} from 'framer-motion'

export default function Header(){
    const [open, setOpen] = useState(false);
    return(
<header className="relative flex items-center justify-between p-6 md:p-8 lg:pl-8 lg:pr-0 lg:gap-8">
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

  <div className="hidden md:flex items-center flex-1 justify-end relative">
    
    <div className="hidden lg:block absolute left-0 right-170 top-1/2 -translate-y-1/2 h-px bg-white/20 z-20 pointer-events-none" />

    {/* Primary navigation (sits above the line) */}
    <nav className="relative z-10 md:bg-white/5 md:backdrop-blur-sm bg-white/5 backdrop-blur-sm px-10 lg:px-30 lg:pr-20">
      <Nav />
    </nav>
    </div>

  {/* Mobile Nav */}
<AnimatePresence>
        {open && (
       
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/5"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          // sliding panel
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.35 }}
            className="fixed right-0 top-0 z-50 w-2/3 max-w-xs h-full backdrop-blur-lg bg-white/5 p-6 pr-0"
          >
            <button
              aria-label="close navigation"
              onClick={() => setOpen(false)}
              className="mb-8"
            >
              <img
                src="/assets/shared/icon-close.svg"
                alt="Close menu"
                className="w-4 h-4 absolute right-5"
              />
            </button>
            <Nav onNavigate={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
</header>
    );
}