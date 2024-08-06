import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-borders";
import HeroText from "./HeroText";

function Hero() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md 
    flex flex-col items-center justify-center relative 
    overflow-hidden mx-auto py-20 md:py-96 dark:bg-grid-white/[0.01]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center space-y-10">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
         text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Hey, I'm <br /> Shubham Sinha
        </h1>
        <div
          className="mt-4 font-normal text-base 
           md:text-lg text-neutral-300 max-w-xl mx-auto"
        >
          <HeroText />
        </div>
        <div className="mt-4">
          <Link href="#myprojects">
            <Button
              borderRadius="1.75rem"
              className="bg-white shadow-xl shadow-black dark:bg-black
               text-black dark:text-white border-neutral-200
                dark:border-slate-800"
            >
              See my projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
