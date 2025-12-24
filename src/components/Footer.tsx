"use client";

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <h3 className={styles.brandName}>TravelBuddy</h3>
            <p className={styles.brandTagline}>
              Your personal travel concierge for stress-free journeys
            </p>
          </div>

          {/* Explore Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Explore</h4>
            <ul className={styles.linkList}>
              <li><a href="/" className={styles.footerLink}>Home</a></li>
              <li><a href="/request" className={styles.footerLink}>Travel Request</a></li>
              <li><a href="/my-story" className={styles.footerLink}>My Story</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact</a></li>
            </ul>
          </div>

          {/* Company Column */}
         <div className={styles.footerColumn}>
  <h4 className={styles.columnTitle}>Company</h4>
  <ul className={styles.linkList}>
    <li>
      <a href="/privacy-policy" className={styles.footerLink}>
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="/terms" className={styles.footerLink}>
        Terms & Conditions
      </a>
    </li>
  </ul>
</div>

          {/* Support Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <ul className={styles.linkList}>
              <li><a href="/contact" className={styles.footerLink}>Help Center</a></li>
              <li><a href="/faq" className={styles.footerLink}>FAQ</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TravelBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
