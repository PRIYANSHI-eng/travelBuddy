"use client";

import Navbar from "@/components/Navbar";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <main className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className={styles.heroSection}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        >
          <source src="/assests/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className={styles.overlay} />

        {/* Content */}
        <div className={styles.content}>
          {/* Hero Text - Left Aligned */}
          <div className={styles.heroText}>
            <h1 className={styles.heading}>
              Stress-Free Travel,<br />Planned Just for You
            </h1>
            <p className={styles.subtext}>
              We plan your flights, hotels, and visas personally — so you travel without the hassle of comparing sites or managing details. From booking your perfect accommodations to securing travel documents, we handle every aspect of your journey.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Start Your Travel Request
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className={styles.secondaryButton}>
                How It Works
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className={styles.scrollArrow}>
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Left Column - Heading & Large Image */}
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionHeading}>
              Your Personal Travel Concierge
            </h2>
            <div className={styles.largeImageCard}>
              <Image 
                src="/assests/image1.jpg" 
                alt="Travel Experience"
                fill
                className={styles.cardImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Two Images & Text */}
          <div className={styles.rightColumn}>
            <div className={styles.imageGrid}>
              <div className={styles.smallImageCard}>
                <Image 
                  src="/assests/image2.jpg" 
                  alt="Adventure"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.smallImageCard}>
                <Image 
                  src="/assests/image3.jpg" 
                  alt="Destination"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Text Content Below Right Images */}
            <div className={styles.textContent}>
              <p className={styles.aboutSubtext}>
                TravelBuddy is not about endless comparisons or booking forms. You share a few details about your trip, and we take care of everything personally.
              </p>
              <p className={styles.aboutDescription}>
                Instead of jumping between multiple websites, simply tell us where you want to go, your dates, and preferences. Our team manually finds the best flights, hotels, and visa options, then contacts you directly to finalize everything. Simple, stress-free, and completely personalized.
              </p>

              {/* Benefits List */}
              <ul className={styles.benefitsList}>
                <li>No price comparison stress</li>
                <li>Real human assistance</li>
                <li>Minimal details, maximum comfort</li>
                <li>We contact you personally before booking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works Preview */}
        <div className={styles.howItWorksPreview}>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>Step 1:</span>
              <span className={styles.stepText}>Share basic travel details</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>Step 2:</span>
              <span className={styles.stepText}>We contact you with best options</span>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>Step 3:</span>
              <span className={styles.stepText}>You confirm, we book</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
