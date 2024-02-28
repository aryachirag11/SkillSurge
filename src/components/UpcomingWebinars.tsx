"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            UPCOMING WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-19">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href={"#"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View all Webinars
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export const projects = [
  {
    title: "Exploring Quantum Computing: From Theory to Applications",
    description:
      "Dive into the fascinating world of quantum computing. Understand the principles behind qubits, superposition, and entanglement. Explore potential applications in cryptography, optimization, and drug discovery. Join us for an interactive session with leading experts in the field.",
    link: "exploring-quantum-computing",
  },
  {
    title:
      "AI Ethics: Navigating the Ethical Challenges of Artificial Intelligence",
    description:
      "As AI becomes more pervasive, ethical considerations are crucial. Delve into topics like bias, transparency, and accountability in AI systems. Learn how to design AI solutions that align with human values and societal well-being.",
    link: "ai-ethics",
  },
  {
    title: "Blockchain Revolution: Beyond Cryptocurrencies",
    description:
      "Beyond Bitcoin, blockchain technology has transformative potential. Explore decentralized ledgers, smart contracts, and their impact on industries like finance, supply chain, and healthcare. Discover real-world use cases and future trends.",
    link: "blockchain-revolution",
  },
  {
    title: "Cybersecurity Essentials: Protecting Data in a Digital World",
    description:
      "Cyber threats are on the rise. Learn fundamental cybersecurity practices to safeguard sensitive information. Understand encryption, authentication, and risk management. Get practical tips for securing networks and devices.",
    link: "cybersecurity-essentials",
  },
  {
    title: "Edge Computing: Bridging the Gap Between Cloud and Devices",
    description:
      "Edge computing is reshaping how we process data. Explore the concept of computing at the network edge. Learn about latency reduction, real-time analytics, and use cases in IoT, autonomous vehicles, and smart cities",
    link: "edge-computing",
  },
  {
    title: "Human-Computer Interaction: Designing User-Centric Interfaces",
    description:
      "Great software starts with great user interfaces. Discover principles of usability, accessibility, and user experience (UX) design. Learn how to create intuitive interfaces that delight users and enhance productivity.",
    link: "human-computer-interaction",
  },
];

export default UpcomingWebinars;
