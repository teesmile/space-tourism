import PageBackground from "@/components/layout/pageBackground";
import Image from "next/image";
import ExploreButton from "@/components/ui/ExploreButton";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <PageBackground route="home">
  <div className="flex min-h-screen flex-col">
    <Header />

    <main
      className="
        flex flex-1 flex-col items-center text-center px-6 py-10
        md:px-12 md:py-12
        lg:flex-row lg:items-center lg:justify-between lg:text-left lg:gap-36 lg:px-36 lg:py-20
      "
    >
     
      <div className="w-full lg:max-w-[clamp(320px,37.5vw,540px)]">
        <p className=" uppercase tracking-widest2 text-blue-100 mb-6 text-lg md:text-xl lg:text-2xl font-barlow-condensed">
          So, you want to travel to
        </p>
        <h1 className="font-bellefair text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase text-white my-4">
          Space
        </h1>
        <p className="font-barlow text-blue-50 leading-relaxed text-base md:text-lg lg:text-xl">
          Let’s face it: if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Sit back and relax because we’ll give you a truly
          out of this world experience!
        </p>
      </div>

      {/* Explore button */}
      <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
        <ExploreButton />
      </div>
    </main>
  </div>
</PageBackground>
  );
}
