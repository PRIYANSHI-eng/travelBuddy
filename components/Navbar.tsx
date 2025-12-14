"use client";

import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logo}>
            TravelBuddy
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#how-it-works" className={styles.navLink}>
              How It Works
            </a>
            <a href="#services" className={styles.navLink}>
              Services
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className={styles.bookButton}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
