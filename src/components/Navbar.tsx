"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            TravelBuddy
          </Link>

          {/* Center Navigation - Hidden on mobile */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/request" className={styles.navLink}>
              Travel Request
            </Link>
            <Link href="/thank-you" className={styles.navLink}>
              Thank You
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/request" className={styles.bookButton}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
