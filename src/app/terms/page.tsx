import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <h1 className={styles.heading}>Terms & Conditions</h1>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            TravelBuddy provides travel planning assistance only.
          </li>
          <li className={styles.listItem}>
            Final bookings are confirmed only after user approval.
          </li>
          <li className={styles.listItem}>
            We are not responsible for delays, cancellations, or third-party services.
          </li>
          <li className={styles.listItem}>
            Users must provide accurate and complete information.
          </li>
        </ul>
      </section>
    </main>
  );
}
