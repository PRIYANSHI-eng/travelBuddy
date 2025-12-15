"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "@/styles/thank-you.module.css";

export default function ThankYouPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <svg 
              className={styles.checkIcon}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className={styles.title}>Thank You!</h1>
          
          <p className={styles.message}>
            Your travel request has been received successfully.
          </p>
          
          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              <strong>What happens next?</strong>
            </p>
            <p className={styles.infoDescription}>
              Our travel expert will review your request and contact you within 24 hours to discuss your trip details and provide personalized recommendations.
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.homeButton}>
              Back to Home
            </Link>
          </div>

          <p className={styles.contactText}>
            Need immediate assistance? <br />
            <a href="tel:+1234567890" className={styles.phoneLink}>Call us at +1 234 567 8900</a>
          </p>
        </div>
      </div>
    </main>
  );
}
