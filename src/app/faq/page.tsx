"use client";

import { useState } from "react";
import styles from "./faq.module.css";

export default function FAQPage() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "faq",        // 👈 backend ko pata chale
          email,
          message: question,    // 👈 map it like request form
        }),
      });

      setSuccess(true);
      setEmail("");
      setQuestion("");
    } catch (err) {
      console.error("FAQ submit failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>

        {success ? (
          <p className={styles.success}>
            Thanks! Your question has been sent. We’ll get back to you soon.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Write your question here..."
              rows={4}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Question"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
