"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar"; // Importing Navbar for dynamic styling
import styles from "@/styles/contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mnneypvy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Travel Query from Contact Page",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>


      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch with Your Travel Buddy</h1>
          <p className={styles.heroSubtitle}>
            Have a trip in mind? Share a few details and we&apos;ll personally guide you from planning to booking.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={styles.container}>
        <div className={styles.twoColumnLayout}>
          {/* Left Column - Text Content */}
          <div className={styles.leftColumn}>
            <h2 className={styles.contentTitle}>Talk to a Real Travel Expert</h2>
            <p className={styles.contentDescription}>
              This is not automated support. Fill in minimal details, and we personally respond via email or call. 
              Every conversation is one-on-one with someone who understands travel.
            </p>
            
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✈️</div>
                <div className={styles.benefitText}>
                  <h4 className={styles.benefitTitle}>Personalized travel planning</h4>
                  <p className={styles.benefitDesc}>Custom itineraries designed for your style and budget</p>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>💬</div>
                <div className={styles.benefitText}>
                  <h4 className={styles.benefitTitle}>Human conversation, no algorithms</h4>
                  <p className={styles.benefitDesc}>Real people who care about your travel experience</p>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🤝</div>
                <div className={styles.benefitText}>
                  <h4 className={styles.benefitTitle}>One-on-one assistance before booking</h4>
                  <p className={styles.benefitDesc}>We guide you through every step until you&apos;re ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={styles.rightColumn}>
            {status === "success" ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className={styles.sendAnotherButton}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
              {status === "error" && (
                <div className={styles.errorMessage}>{error}</div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message (Trip idea / question)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                  placeholder="Tell us about your trip idea or ask us anything..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Travel Query"}
              </button>
            </form>
          )}
          </div>
        </div>
      </div>
    </main>
  );
}
