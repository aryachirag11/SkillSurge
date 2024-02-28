"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const courseContent = [
  {
    title: "Expert Instructors:",
    description:
      "Our passionate instructors are industry professionals, coding wizards, and educators. They bring real-world experience and a love for teaching to every lesson. Whether you're diving into HTML, mastering machine learning, or exploring cybersecurity, our instructors are your guides.",
  },
  {
    title: "Cutting-Edge Curriculum:",
    description:
      "Our courses are meticulously designed to cover the latest technologies and trends. From web development to artificial intelligence, we've got you covered. Learn by doing, with hands-on projects that mirror real-world scenarios.",
  },
  {
    title: "Hands-On Projects",
    description:
      "At CodeVerse, we believe in learning by doing. Dive into projects, build your portfolio, and gain practical skills that employers value. Whether you're creating a responsive website, analyzing data, or developing a mobile app, our interactive projects will challenge and inspire you.",
  },
  {
    title: "Community & Support:",
    description:
      "Join our vibrant community of learners, mentors, and fellow enthusiasts. Collaborate, share ideas, and celebrate wins together. Need help? Our support team is here for you, ensuring you stay motivated and on track.",
  },
  {
    title: "Flexible Learning: ",
    description:
      "Life is busy, and we get it. That's why our platform adapts to your schedule. Learn at your own pace, whether you're a night owl or an early bird. Access our courses anytime, anywhere, and on any device.",
  },
  {
    title: "Career Pathways:",
    description:
      "CodeVerse isn't just about learning; it's about building a future. Explore career pathways, connect with industry professionals, and discover job opportunities. Whether you're aiming for a tech startup, a corporate role, or freelance gigs, we'll help you get there.",
  },
];
function WhyChooseUs() {
  return (
    <div className="h-auto min-h-screen">
      <StickyScroll content={courseContent} />
    </div>
  );
}

export default WhyChooseUs;
