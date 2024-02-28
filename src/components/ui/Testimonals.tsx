import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";

const Testimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear It From Our Champions: Inspiring Testimonials
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    quote:
      "I used to regularly watch the recorded videos and solve various practice tests available on the app. This helped boost my confidence level.",
    name: "Shruti Rajput",
    title: "Introduction to Computer Science",
  },
  {
    quote:
      "CodeVerse's web development course transformed my understanding of HTML, CSS, and JavaScript. The hands-on projects allowed me to build real websites, and the community support was invaluable.",
    name: "Rachin Khurana",
    title: "Web Development Fundamentals",
  },
  {
    quote:
      "Understanding operating systems was never this engaging! CodeVerse's OS course provided a solid foundation, and I appreciate the supportive community.",
    name: "Riya Patel",
    title: "Operating System Essentials",
  },
  {
    quote:
      " As a working professional, CodeVerse's flexible learning platform allowed me to upskill in cloud computing. The expert instructors and practical assignments made the learning experience enjoyable.",
    name: "Jagjeet Singh",
    title: " Introduction to Cloud Computing",
  },
  {
    quote:
      "The DBMS course at CodeVerse covered everything from SQL queries to normalization techniques. I now feel confident in handling complex databases.",
    name: "Neha Gupta",
    title: "Mastering DBMS Concepts",
  },
  {
    quote:
      "CodeVerse's AI course demystified machine learning and neural networks for me. The personalized mentorship and career guidance were exceptional.",
    name: "Priya Sharma",
    title: "AI Foundations",
  },
];
