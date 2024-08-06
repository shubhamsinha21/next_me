"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Courses {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
  github: string;
  demo: string;
}

const experiences = [
  {
    title: "Data Science Intern",
  },
];

function MyExperiences() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h2
          className="text-base text-teal-600 font-semibold 
        tracking-wide uppercase"
        >
          Featured Courses
        </h2>
        <p
          className="mt-2 text-3xl leading-8 
        font-extrabold tracking-tight text-white 
        sm:text-4xl"
        >
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 gap-8 justify-center"
        >
          {/* {courseData.map((course: Courses) => ( */}
          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={`/jordans.webp`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Air Jordan 4 Retro Reimagined
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                February 17, 2024. Your best opportunity to get these right now
                is by entering raffles and waiting for the official releases.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border
         border-neutral-600 text-neutral-700 
        bg-white hover:bg-gray-100 transition duration-200"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default MyExperiences;
