"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Working with Martha is fabulous! She is super knowledgeable from first hand experience and has the best resources and staff to help plan an amazing trip. She helps to guide you in the various experiences available based on your interests.",
    author: "Mary"
  },
  {
    text: "Our honeymoon was absolutely magical thanks to Martha's meticulous planning. Every detail was taken care of, from private transfers to exclusive dinner reservations. We didn't have to worry about a thing and could just enjoy the moment.",
    author: "Sarah & James"
  },
  {
    text: "I've traveled with many agents before, but Martha's personal touch is unmatched. She suggested hidden gems in Italy that we would never have found on our own. It truly felt like a trip curated just for us.",
    author: "Robert T."
  },
  {
    text: "From the moment we landed until our departure, everything was seamless. Martha's recommendations for local cuisine were spot on, and the boutique hotels she selected were simply stunning.",
    author: "Elena K."
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div 
        className="relative p-8 md:p-16 bg-cream rounded-3xl min-h-[300px] flex items-center justify-center"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23A7C7E7FF' stroke-width='4' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            border: 'none'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 max-w-2xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-primary">
              “{TESTIMONIALS[current].text}”
            </p>
            <p className="font-bold text-sm tracking-wider uppercase text-accent">
              — {TESTIMONIALS[current].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
