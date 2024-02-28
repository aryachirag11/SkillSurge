import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonals";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-s bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
