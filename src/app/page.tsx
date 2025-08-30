import PageBackground from "@/components/layout/pageBackground";
import Image from "next/image";
import ExploreButton from "@/components/ui/ExploreButton";

export default function Home() {
  return (
    <PageBackground route="home"> 
        <main className="flex flex-col items-center justify-center text-center px-6 py-12 md:flex-row md:justify-between md:text-left">
        <div className="max-w-md">
          <p className="uppercase tracking-widest2 text-space-gray text-lg md:text-xl">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair text-7xl md:text-9xl uppercase text-white my-4">
            Space
          </h1>
          <p className="text-space-gray leading-relaxed">
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Sit back and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <ExploreButton />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </PageBackground>
  );
}
