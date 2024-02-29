"use client";
import React, { FormEvent, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-6xl text-xl text-white relative z-20 mt-40 max-w-2xl"
        )}
      >
        Get in Touch
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-2xl">
        Our contact page is more than just a form—it's a gateway to
        collaboration, innovation, and exciting possibilities. Reach out, and
        let's turn ideas into reality! 🌟
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4 z-20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 hover:bg-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
          shadow-[0_0_0_3px_#000000_inset]  bg-transparent border border-black dark:border-white dark:text-white text-black font-bold transform hover:-translate-y-1 transition duration-400
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default page;
