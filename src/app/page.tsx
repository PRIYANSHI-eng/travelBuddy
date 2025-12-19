"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <main className="relative">
      {/* Navbar */}


      {/* Hero Section with Image Background */}
      <section className={styles.heroSection}>
        {/* Image Background */}
        <div className={styles.heroBackground}>
          <Image
            src="https://cdn.prod.website-files.com/67daff2a6e8cc98d865cc436/682ca903272ae46a0492aaec_tino-rischawy-NKDI7qlLsM0-unsplash-2.jpg"
            alt="Scenic Landscape"
            fill
            priority
            className={styles.backgroundImage}
            quality={100}
          />
        </div>

        {/* Overlay */}
        <div className={styles.overlay} />

        {/* Content */}
        <div className={styles.content}>
          {/* Hero Text - Centered */}
          <div className={styles.heroText}>
            <h1 className={styles.heading}>
              Stress-Free Travel,<br />Planned Just for You
            </h1>
            <p className={styles.subtext}>
              We plan your flights, hotels, and visas personally — so you travel without the hassle of comparing sites or managing details. From booking your perfect accommodations to securing travel documents, we handle every aspect of your journey.
            </p>

            {/* CTA Button */}
            <div className={styles.ctaButtons}>
              <Link href="/request" className={styles.primaryButton}>
                Start Your Travel Request
              </Link>
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
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaImageWrapper}>
          <Image 
            src="/assests/image4.jpg" 
            alt="Plan your trip"
            fill
            className={styles.ctaImage}
            sizes="100vw"
            priority={false}
          />
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Start Planning Your Next Adventure</h2>
            <p className={styles.ctaSubtext}>
              Ready to explore? Our travel experts are here to help you design the perfect trip, customized for your goals and budget!
            </p>
            <Link href="/request" className={styles.ctaButton}>
              Plan Your Trip
              <svg className={styles.ctaArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
