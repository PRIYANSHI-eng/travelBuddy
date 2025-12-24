import styles from "./policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy</h1>

        <p className={styles.text}>
          TravelBuddy respects your privacy. This policy explains how we collect,
          use, and protect your information.
        </p>

        <ul className={styles.text}>
          <li>We collect basic details like name and email.</li>
          <li>Information is used only to contact users.</li>
          <li>We do not sell or share personal data.</li>
          <li>You can request data deletion anytime.</li>
        </ul>
      </section>
    </main>
  );
}
