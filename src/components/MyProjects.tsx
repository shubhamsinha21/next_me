"use client";

import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";
import { Meteors } from "./ui/meteors";

interface project {
  title: string;
  description: JSX.Element;
  badge: string;
  image: string;
  tech: Array<{ techStack: string }>;
  github: string;
  live: string;
}

const myprojects: project[] = [
  {
    title: "Portfolio Website",
    description: (
      <>
        <p>
          Welcome to my Portfolio Website, made with advanced animation and
          effects.
        </p>
      </>
    ),
    badge: "Portfolio",
    image: "/pfolio.png",
    tech: [
      {
        techStack: "Next Js",
      },
      {
        techStack: "React",
      },
      {
        techStack: "Tailwind",
      },
      {
        techStack: "Typescript",
      },
      {
        techStack: "Aceternity UI",
      },
    ],
    github: "https://github.com/shubhamsinha21/next_me",
    live: "https://github.com/shubhamsinha21/next_me",
  },
  {
    title: "Virtual-R",
    description: (
      <>
        <p>
          VirtualR build tools for developers | Empower your creativity and
          bring your VR app ideas to life with our initiative development tools.
        </p>
      </>
    ),
    badge: "VirtualR",
    image: "/virtualR.png",
    tech: [
      {
        techStack: "React",
      },
      {
        techStack: "Tailwind",
      },
      {
        techStack: "Javascript",
      },
    ],
    github: "https://github.com/shubhamsinha21/virtual-R",
    live: "https://virtualrweb.vercel.app/",
  },
  {
    title: "Web App To Desktop App",
    description: (
      <>
        <p>
          A Complete Mobile Responsive Landing Page with animations, toggle
          option, scroll-view, hover effect and many more.
        </p>
      </>
    ),
    badge: "ToDesktop",
    image: "/todesktop.png",
    tech: [
      {
        techStack: "React",
      },
      {
        techStack: "Tailwind",
      },
      {
        techStack: "Javascript",
      },
    ],
    github: "https://github.com/shubhamsinha21/ToDesktop",
    live: "https://todesktoweb.vercel.app/",
  },
  {
    title: "The New Arrival Of Nike",
    description: (
      <>
        <p>
          A Complete Fully Responsive Single Page E-commerce Website, compatible
          to both Mobile and Desktop Screen.
        </p>
      </>
    ),
    badge: "Nike",
    image: "/nike.png",
    tech: [
      {
        techStack: "React",
      },
      {
        techStack: "Tailwind",
      },
      {
        techStack: "Javascript",
      },
      {
        techStack: "Css",
      },
    ],
    github: "https://github.com/shubhamsinha21/Nike",
    live: "https://usehub.vercel.app/",
  },
  {
    title: "New To Usability",
    description: (
      <>
        <p>
          A single page website, though it&apos;s not related to rea world
          scenario but it showcases my skills.
        </p>
      </>
    ),
    badge: "UsabilityHub",
    image: "/usability.png",
    tech: [
      {
        techStack: "Html",
      },
      {
        techStack: "Css",
      },
      {
        techStack: "Javascript",
      },
    ],
    github: "https://github.com/shubhamsinha21/UsabilityHub",
    live: "https://usehub.vercel.app/",
  },
];

function MyProjects() {
  return (
    <div className="py-12" id="myprojects">
      <div className="text-center">
        <h2
          className="text-base text-teal-600 drop-shadow-lg font-semibold 
        tracking-wide uppercase"
        >
          My Projects
        </h2>
        <p
          className="mt-2 text-3xl leading-8 
        font-extrabold tracking-tight text-white 
        sm:text-4xl drop-shadow-lg"
        >
          Get Ready For My Projects
        </p>
      </div>

      <TracingBeam className="px-6 mt-24">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {myprojects.map((item, index) => (
            <div key={index} className="mb-20">
              <h2 className="bg-teal-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="text-lg prose prose-sm dark:prose-invert text-white">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                <span>{item.description}</span>
                <div className="flex items-center flex-wrap gap-4 mt-4 justify-center">
                  {item.tech.map((stack) => (
                    <button
                      key={stack.techStack}
                      className="px-4 py-1 rounded-md border border-neutral-300
                     bg-gray-900 text-white text-sm hover:-translate-y-1 
                     transform transition duration-200 hover:shadow-md max-sm:text-[11px]"
                    >
                      {stack.techStack}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <Link href={item.github}>
                    <button className="w-28 max-sm:w-20 font-semibold px-4 max-sm:px-2 py-2 rounded-md border border-black bg-white text-teal-600 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                      Github
                    </button>
                  </Link>
                  <Link href={item.live}>
                    <button className="w-28 max-sm:w-20 px-4 py-2 font-semibold max-sm:px-2 rounded-md border border-black bg-white text-teal-600 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

export default MyProjects;
