import Image from "next/image";
import styles from "@/styles/my-story.module.css";

export default function MyStoryPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* ===== ABOUT SECTION ===== */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutGrid}>

            {/* Text */}
            <div className={styles.aboutText}>
              <h1 className={styles.pageTitle}>About Me</h1>
              <p className={styles.subtitle}>
                Traveler • Storyteller • Slow Explorer
              </p>

              <p className={styles.paragraph}>
                Hey, my name is Manthan Chittora. I’m a traveler at heart who believes
                the world is best understood through people, patience, and the roads
                in between—not luxury itineraries or rushed checklists.
              </p>

              <p className={styles.paragraph}>
                I’ve traveled across 26 countries, often choosing local buses,
                hitchhiking, and shared rides. Some of my most meaningful experiences
                came from conversations with strangers and moments that weren’t
                planned.
              </p>

              <p className={styles.paragraph}>
                I don’t travel to collect photos—I travel to collect perspectives.
                Missed buses, wrong turns, and unexpected invitations often become the
                highlights of my journey.
              </p>

              <a
                href="https://instagram.com/whereismanthan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Get in Touch
              </a>
            </div>

            {/* Image */}
            <div className={styles.aboutImage}>
              <Image
                src="/assests/image8.jpg"
                alt="Manthan Chittora"
                fill
                priority
                className={styles.image}
              />
            </div>
          </div>
        </section>

        {/* ===== MY CLICKS SECTION ===== */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.sectionTitle}>My Clicks</h2>
            <p className={styles.sectionSubtext}>
              Places I’ve visited and moments I’ve captured along the way.
            </p>
          </div>

          { <div className={styles.galleryGrid}>
            <div className={styles.galleryCard}>
              <Image src="/assests/click1.jpeg" alt="Travel Click" fill className={styles.image} />
            </div>
            <div className={styles.galleryCard}>
              <Image src="/assests/click2.jpeg" alt="Travel Click" fill className={styles.image} />
            </div>
            <div className={styles.galleryCard}>
              <Image src="/assests/click3.jpeg" alt="Travel Click" fill className={styles.image} />
            </div>
          </div> }

          <p className={styles.instagramNote}>
            To view more, visit my Instagram —
            <a
              href="https://instagram.com/whereismanthan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              @whereismanthan
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
