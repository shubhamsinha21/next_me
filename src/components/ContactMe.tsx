"use client";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

interface Contact {
  title: string;
  linkedIn: string;
  github: string;
}

const connectWithMe: Contact[] = [
  {
    title: "social media",
    linkedIn: "https://www.linkedin.com/in/shubham-sinha-39b9b2209/",
    github: "https://github.com/shubhamsinha21",
  },
];

function ContactMe() {
  return (
    <div
      className="relative h-[30rem] overflow-hidden 
    flex items-center justify-center"
      id="mycontact"
    >
      <WavyBackground
        className="w-full max-7xl mx-auto flex flex-col
      items-center justify-center h-full"
      >
        <h2
          className="text-2xl md:text-4xl 
        lg:text-7xl text-white font-bold text-center mb-8"
        >
          Connect With Me
        </h2>
        <p
          className="text-base md:text-lg text-white
         text-center mb-4"
        >
          Feel free to contact me
        </p>
        <div className="flex items-center justify-center w-full mb-10 mt-10">
          {connectWithMe.map((contact) => (
            <div
              key={contact.title}
              className="flex flex-wrap gap-10 justify-center"
            >
              <Link href={contact.linkedIn}>
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 max-sm:text-[12px]  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Message me on LinkedIn
                  </div>
                </button>
              </Link>

              <Link href={contact.github}>
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2 max-sm:text-[12px]  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Look at my Github
                  </div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </WavyBackground>
    </div>
  );
}

export default ContactMe;
