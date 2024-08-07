"use client";

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Experiences {
  title: string;
  organization: string;
  duration: string;
  tech: Array<{ tech: string }>;
  type: string;
}

const experiences: Experiences[] = [
  {
    title: "Machine Learning Intern",
    organization: "Dave AI",
    duration: "Jul 2024 - Present",
    tech: [
      {
        tech: "Python",
      },
      {
        tech: "Blender",
      },
      {
        tech: "Machine Learning",
      },
      {
        tech: "AI",
      },
    ],
    type: "Full Time",
  },
  {
    title: "Software Engineer Fellow",
    organization: "Headstarter AI",
    duration: "Jul 2024 - Present",
    tech: [
      {
        tech: "React Js",
      },
      {
        tech: "Next Js",
      },
      {
        tech: "AI",
      },
      {
        tech: "Firebase",
      },
      {
        tech: "Google Analytics",
      },
    ],
    type: "Internship",
  },
  {
    title: "React Native Developer",
    organization: "Codeate",
    duration: "Nov 2023 - Mar 2023",
    tech: [
      {
        tech: "React Native",
      },
      {
        tech: "Tailwind",
      },
      {
        tech: " Reanimated",
      },
      {
        tech: "React Navigation",
      },
    ],
    type: "Part Time",
  },
  {
    title: "Data Science Intern",
    organization: "Fintech and BlockChain Association",
    duration: "May 2023 - Aug 2024",
    tech: [
      {
        tech: "Python",
      },
      {
        tech: "Numpy",
      },
      {
        tech: "Pandas",
      },
      {
        tech: "Matplotlib",
      },
    ],
    type: "Internhip",
  },
];

function MyExperiences() {
  return (
    <div className="py-12 mt-10 bg-black" id="myexperiences">
      <div className="text-center">
        <h2
          className="text-base text-teal-600 font-semibold 
        tracking-wide uppercase"
        >
          Experience
        </h2>
        <p
          className="mt-2 text-3xl leading-8 
        font-extrabold tracking-tight text-white 
        sm:text-4xl"
        >
          Compatible With different Roles.
        </p>
      </div>
      <div className="mt-20">
        <div className="flex flex-wrap justify-center items-center gap-8 mx-10">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="flex justify-center items-center"
            >
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-xl text-black mt-4 mb-[2px] dark:text-neutral-200">
                  {experience.title}
                </p>

                <button className="px-4 py-1 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
                  {experience.organization}
                </button>

                <div className="flex flex-wrap gap-4 mt-6">
                  {experience.tech.map((tech) => (
                    <button
                      key={tech.tech}
                      className="px-4 py-1 rounded-md border border-neutral-300
                    bg-gray-900 text-white text-sm hover:-translate-y-1 
                    transform transition duration-200 hover:shadow-md max-sm:text-[12px]"
                    >
                      {tech.tech}
                    </button>
                  ))}
                </div>

                <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>{experience.duration} </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyExperiences;
