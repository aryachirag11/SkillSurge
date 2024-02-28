import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <>
      <div className="h-auto min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#FFF"
        />
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-10  text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            “Code Your Future"
            <br />
            Explore the world of Computer Science
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Whether you are a curious beginner or an aspiring developer, our
            interactive courses, hands-on projects, and expert instructors will
            guide you through the exciting journey of programming, web
            development, and more.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
