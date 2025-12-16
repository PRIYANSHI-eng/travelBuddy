"use client";

import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import styles from "@/styles/request.module.css";

export default function RequestPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <RequestForm />
    </main>
  );
}
