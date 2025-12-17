"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "@/styles/thank-you.module.css";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const [hasSubmitted, setHasSubmitted] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user came from form submission via URL parameter
    const submitted = searchParams.get("submitted");
    console.log("Thank you page loaded, submitted param:", submitted);
    
    if (submitted === "true") {
      console.log("User has submitted form");
      setHasSubmitted(true);
    } else {
      console.log("User has not submitted form");
      setHasSubmitted(false);
    }
  }, [searchParams]);

  // Loading state
  if (hasSubmitted === null) {
    return null;
  }

  // If form not submitted, show different message
  if (!hasSubmitted) {
    return (
      <main className={styles.emptyState}>
        <Navbar />
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>You're Almost There</h1>
            
            <p className={styles.heroSubtitle}>
              Looks like you haven't submitted your travel request yet. Share a few details and we'll personally take it from here.
            </p>
            
            <Link href="/request" className={styles.heroCta}>
              Start Your Travel Request
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Success state - form was submitted
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src="/assests/image5.png"
              alt="Travel confirmation"
              className={styles.mainImage}
            />
          </div>
          
          <p className={styles.message}>
            Your travel request has been received successfully.
          </p>
          
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>What happens next?</h3>
            <p className={styles.infoDescription}>
              Our travel expert will review your request and contact you within 24 hours to discuss your trip details and provide personalized recommendations.
            </p>
          </div>

          <Link href="/contact" className={styles.submitButton}>
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
