import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "@/styles/my-story.module.css";

export default function MyStoryPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assests/image8.jpg"
                alt="Manthan Chittora - Traveler"
                fill
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* Right Column - Story Content */}
          <div className={styles.textColumn}>
            <h1 className={styles.pageTitle}>My Story</h1>
            
            <p className={styles.intro}>
              Hey, my name is Manthan Chittora.
            </p>

            <div className={styles.storyText}>
              <p className={styles.paragraph}>
                I&apos;m a traveler at heart who believes that the world is best understood not through luxury itineraries or rushed checklists, but through people, patience, and the roads in between. So far, I&apos;ve traveled to 26 countries, often choosing the slower, less predictable paths—local buses, shared rides, and hitchhiking—because that&apos;s where the real stories live.
              </p>

              <p className={styles.paragraph}>
                Some of my most memorable moments have come from sitting in a stranger&apos;s car, sharing broken conversations, laughter, silence, and learning about lives completely different from my own. These experiences have taught me trust, adaptability, and the kindness that exists far beyond borders and languages.
              </p>

              <p className={styles.paragraph}>
                I don&apos;t travel to collect photos—I travel to collect perspectives. From remote villages to busy cities, I&apos;m drawn to everyday life: how people eat, commute, celebrate, struggle, and dream. I prefer staying longer in places, understanding their rhythm, and letting plans change naturally. Missed buses, unexpected invitations, and wrong turns often become the highlights of my journeys.
              </p>

              <p className={styles.paragraph}>
                Travel, for me, is also about growth. Being constantly outside my comfort zone has shaped how I see the world and myself. It has made me more open-minded, resilient, and curious. Every country adds a layer, every journey rewires how I think.
              </p>

              <p className={styles.paragraph}>
                This space is where I share my experiences—stories from the road, lessons learned, cultural insights, and moments that remind me why I started traveling in the first place. Whether it&apos;s hitchhiking across unfamiliar landscapes, navigating borders, or simply observing life unfold in a new place, I hope my journey inspires others to travel deeper, slower, and more consciously.
              </p>
            </div>

            <p className={styles.footerNote}>
              Follow my journey on Instagram — <a href="https://instagram.com/whereismanthan" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>@whereismanthan</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
