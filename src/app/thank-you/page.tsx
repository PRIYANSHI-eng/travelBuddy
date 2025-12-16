"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
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
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Warning Illustration */}
            <div className={styles.illustration}>
              <svg viewBox="0 0 200 200" className={styles.illustrationSvg}>
                {/* Warning Icon */}
                <circle cx="100" cy="100" r="60" fill="#fbbf24" />
                <text x="100" y="125" fontSize="80" textAnchor="middle" fill="#fff" fontWeight="bold">!</text>
              </svg>
            </div>

            <h1 className={styles.title}>Oops!</h1>
            
            <p className={styles.message}>
              You haven't submitted a travel request yet.
            </p>
            
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Ready to plan your dream trip?</h3>
              <p className={styles.infoDescription}>
                Fill out our travel request form and let our expert help you create the perfect journey. It only takes a few minutes!
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <Link href="/request" className={styles.homeButton}>
                Start Travel Request
              </Link>
              <Link href="/" className={styles.secondaryButton}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Success state - form was submitted
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Video */}
          <div className={styles.videoContainer}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            >
              <source src="/assests/video 2.mp4" type="video/mp4" />
            </video>
          </div>

          <h1 className={styles.title}>Thank You!</h1>
          
          <p className={styles.message}>
            Your travel request has been received successfully.
          </p>
          
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>What happens next?</h3>
            <p className={styles.infoDescription}>
              Our travel expert will review your request and contact you within 24 hours to discuss your trip details and provide personalized recommendations.
            </p>
          </div>

          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
