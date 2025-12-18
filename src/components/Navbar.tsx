"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          TravelBuddy
        </Link>

        {/* Desktop Links */}
        <div className={styles.links}>
          <Link className={`${styles.link} ${isActive("/") ? styles.active : ""}`} href="/">
            Home
          </Link>
          <Link className={`${styles.link} ${isActive("/request") ? styles.active : ""}`} href="/request">
            Travel Request
          </Link>
          <Link className={`${styles.link} ${isActive("/my-story") ? styles.active : ""}`} href="/my-story">
            My Story
          </Link>
          <Link className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`} href="/contact">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <Link href="/request" className={styles.bookNow}>
            Book Now
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu (NO extra button anymore) */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/request" onClick={() => setOpen(false)}>Travel Request</Link>
          <Link href="/my-story" onClick={() => setOpen(false)}>My Story</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
