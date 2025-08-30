import Nav from './Nav'

export default function Header(){
    return(
        <header className=" flex items-center justify-between p-6 md:p-8">
            <div className="shrink-0 logo"> 
                <img 
                className='w-10 h-10 md:w-12 md:h-12'
                src="/assets/shared/logo.svg" alt="Space Tourism Logo" />
            </div>
            {/* divider line for desktop */}
            <div className="hidden"></div>
            {/* Primary navigation */}
            <Nav />
        </header>
    );
}