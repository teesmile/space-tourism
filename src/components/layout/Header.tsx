'use client'

import { useState } from 'react';
import Nav from './Nav'

export default function Header(){
    const [open, setOpen] = useState(false);
    return(
        <header className=" flex items-center justify-between p-6 md:p-8">
            <div className="shrink-0 logo"> 
                <img 
                className='w-10 h-10 md:w-12 md:h-12'
                src="/assets/shared/logo.svg" alt="Space Tourism Logo" />
            </div>
            {/* Hamburger */}
            <button
            className='md:hidden'
            aria-label='open Navigation'
            onClick={() => setOpen(true)}
            >
             <img src="/assets/shared/icon-hamburger.svg" alt="Open menu" className="w-4 h-4" />
            </button>
            {/* divider line for desktop */}
            <div className="hidden"></div>
            {/* Primary navigation */}
            <nav className="hidden md:block"> 
             <Nav />
            </nav>
           
           {/* Mobile Nav */}
           {
            open && (
                <div className=" inset-0 z-50 bg-black/5">
                    <div className="absolute right-0 top-0 w-2/3 max-w-xs backdrop-blur-lg h-full p-6 pr-0">
                    <button className="mb-8"
                    aria-label='close navigation'
                    onClick={() => setOpen(false)}
                    >
                         <img src="/assets/shared/icon-close.svg" alt="Close menu" className="w-4 h-4 absolute right-5" />
                    </button>
                    <Nav onNavigate={() => setOpen(false)} />
                    </div>
                    <div className="w-full h-full"onClick={() => setOpen(false)} />

                </div>
            )
           }

        </header>
    );
}