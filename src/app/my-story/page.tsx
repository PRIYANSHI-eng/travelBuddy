"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import Testimonial from "@/components/Testimonial";


export default function MyStoryPage() {
  return (
    <main className="min-h-screen bg-cream overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary/80 uppercase">
                Owner, Travel Advisor
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif text-primary tracking-wide">
                MANTHAN CHITTORA
              </h1>
            </div>

            <div className="space-y-6 text-primary/90 text-sm md:text-base leading-relaxed font-sans text-justify">
              <p>
                Manthan chittora&apos;s wanderlust started as a teenager when he lived in England for a summer. Her love for travel has become a true passion as she continues to explore the world. Martha strives to create memorable and life-changing travel experiences for her clients. She actively listens for what the client hopes to experience and then uses her expertise and connections to design a custom itinerary.
              </p>
              <p>
                Manthan understands each client&apos;s expectations for a trip and works closely to discover their unique passions & preferences. As a Condé Nast Top Travel Specialist, Martha is extremely well-connected with suppliers and hoteliers from around the globe, and together they bring clients&apos; travel dreams to life.
              </p>
              <p>
                Manthan Travel provides exclusive access & immersive experiences that simply cannot be found on the pages of guidebooks. Some of Martha&apos;s favorite travel experiences include expedition adventures to see the polar bears in the Arctic Circle & discovering the uninhabited Galapagos Islands, private safaris in South Africa & Botswana, cruising down the stunning Dalmatian coast in Croatia, meandering through the exotic landscapes of Morocco, meeting local artists & visiting artisan workshops in Italy, hiking through the Highlands of Scotland, and snowmobiling on glaciers in Iceland!
              </p>
            </div>

            <div className="pt-4">
              <p className="font-serif italic text-lg md:text-xl text-primary/80">
                “Traveling – it leaves you speechless, then turns you into a storyteller.” <span className="not-italic text-sm font-sans uppercase tracking-wider block mt-2">— Ibn Battuta</span>
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/assests/image8.jpg" // Placeholder for Martha's photo
                alt="Martha King in Egypt"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stamp Overlay */}
            {/* <div className="absolute -bottom-10 -left-10 lg:-bottom-16 lg:-left-16 z-20">
                <Stamp />
            </div> */}
          </motion.div>

        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white/50 py-12">
        <div className="max-w-7xl mx-auto mb-8 px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">The World Through My Lens</h2>
             <p className="text-primary/60 uppercase tracking-widest text-xs md:text-sm">Captured Moments</p>
        </div>
        <div className="relative h-[600px] w-full max-w-7xl mx-auto">
          <ImageCarousel />
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonial />
      
    </main>
  );
}
