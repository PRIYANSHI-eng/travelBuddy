"use client";

import Navbar from "@/components/Navbar"; // Importing Navbar for dynamic styling
import RequestForm from "@/components/RequestForm";
import styles from "@/styles/request.module.css";

export default function RequestPage() {
  return (
    <div className="page-with-sidebar">
      <main className={styles.main}>

        <RequestForm />
      </main>
    </div>
  );
}
