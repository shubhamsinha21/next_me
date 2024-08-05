"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2
          className="text-base text-teal-600 font-semibold 
        tracking-wide uppercase"
        >
          Featured Courses
        </h2>
        <p>Learn with the best</p>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 gap-8 justify-center"
        >
          {featuredCourses.map((course: Courses) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white
              dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}></Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link href="/courses">View all courses</Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
