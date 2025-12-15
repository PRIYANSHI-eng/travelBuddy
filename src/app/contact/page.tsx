"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
          message: formData.message,
          _subject: "Quick Question from Contact Page",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
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
      <Navbar />

      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Talk to a Real Travel Expert</h1>
          <p className={styles.subtitle}>
            Have a quick question? We&apos;re here to help with personalized service and expert advice.
          </p>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ready to plan your next trip?
          </p>
          <Link href="/request" className={styles.primaryCta}>
            Submit a Travel Request
          </Link>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerText}>or send us a quick message</span>
        </div>

        <div className={styles.formWrapper}>
          {status === "success" ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successText}>
                Thank you for reaching out. We&apos;ll get back to you within 12-24 hours.
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
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>What happens next?</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h4 className={styles.infoCardTitle}>We Receive Your Message</h4>
              <p className={styles.infoCardText}>
                Your inquiry goes directly to our travel experts
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💬</div>
              <h4 className={styles.infoCardTitle}>Personal Response</h4>
              <p className={styles.infoCardText}>
                A real person reviews and responds to your question
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⏱️</div>
              <h4 className={styles.infoCardTitle}>12-24 Hour Response</h4>
              <p className={styles.infoCardText}>
                We typically respond within one business day
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
