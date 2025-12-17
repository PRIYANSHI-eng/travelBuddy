"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            TravelBuddy
          </Link>

          {/* Center Navigation - Hidden on mobile */}
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link href="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/request" className={styles.navLink} onClick={closeMenu}>
              Travel Request
            </Link>
            <Link href="/thank-you" className={styles.navLink} onClick={closeMenu}>
              Thank You
            </Link>
            <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
              Contact
            </Link>
            {/* Mobile CTA in menu */}
            <Link href="/my-story" className={`${styles.bookButton} ${styles.mobileBookButton}`} onClick={closeMenu}>
              My Story
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link href="/my-story" className={`${styles.bookButton} ${styles.desktopBookButton}`}>
            My Story
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.menuOverlay} onClick={closeMenu}></div>
      )}
    </nav>
  );
}
