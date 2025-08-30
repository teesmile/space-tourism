import { ReactNode } from "react";
import clsx from 'clsx'
import { RouteKey } from "@/lib/types";

export default function PageBackground({
    route,
    children,
}:
{
    route: RouteKey;
    children: ReactNode;
}){
    const base = 'min-h-screen bg-no-repeat bg-cover bg-center bg-hover'
    const bg = {
        home: 'bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)]',
        destination: 'bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] xl:bg-[url(/assets/destination/background-destination-desktop.jpg)]',
        crew: 'bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] xl:bg-[url(/assets/crew/background-crew-desktop.jpg)]',
    technology:
      'bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] xl:bg-[url(/assets/technology/background-technology-desktop.jpg)]',
    }[route]
    return <div className={clsx(base, bg)}>{children}</div>
}
