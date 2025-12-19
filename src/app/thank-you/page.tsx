"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/thank-you.module.css";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const [hasSubmitted, setHasSubmitted] = useState<boolean | null>(null);

  useEffect(() => {
    const submitted = searchParams.get("submitted");
    setHasSubmitted(submitted === "true");
  }, [searchParams]);

  if (hasSubmitted === null) return null;

  // ❌ NOT SUBMITTED
  if (!hasSubmitted) {
    return (
      <main className={styles.emptyState}>
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>You're Almost There</h1>

            <p className={styles.heroSubtitle}>
              Looks like you haven't submitted your travel request yet.
            </p>

            <Link href="/request" className={styles.heroCta}>
              Start Your Travel Request
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ✅ SUBMITTED
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
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
              Our travel expert will contact you within 24 hours.
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

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
