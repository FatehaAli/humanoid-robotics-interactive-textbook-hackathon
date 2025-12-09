import React, { useCallback } from "react";
import Layout from "@theme/Layout";
import styles from "./features.module.css";

// --- Tilt Card for Features ---
function FeatureCard({ title, description, link, color }) {
  const handleMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    el.style.setProperty("--mx", `${mx}deg`);
    el.style.setProperty("--my", `${my}deg`);
  }, []);

  const handleLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", "0deg");
    el.style.setProperty("--my", "0deg");
  }, []);

  return (
    <article
      className={styles.featureCard}
      style={{ borderColor: color }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={styles.cardInner}>
        <h3 style={{ color }}>{title}</h3>
        <p>{description}</p>
        {/* {link && (
          <Link className="button button--outline" to={link}>
            Learn More →
          </Link>
        )} */}
      </div>
    </article>
  );
}

// --- Features Page ---
export default function FeaturesPage() {
  const features = [
    {
      title: "Interactive RAG Chatbot",
      description: "Ask questions directly from the book content and get accurate AI-powered answers.",
      // link: "/docs/rag-chatbot",
      color: "#6B5B95",
    },
    {
      title: "Personalized Chapters",
      description: "Generate chapters customized to your knowledge level, learning style, and robotics background.",
      // link: "/docs/personalization",
      color: "#4ECDC4",
    },
    {
      title: "Urdu Translation",
      description: "Read the entire textbook in Urdu with accurate translations for accessibility.",
      // link: "/docs/urdu-translation",
      color: "#88B04B",
    },
    {
      title: "Claude Subagents",
      description: "Small AI assistants embedded in the book to explain ROS code, summarize chapters, and more.",
      // link: "/docs/claude-subagents",
      color: "#FFA500",
    },
    {
      title: "Signup & Profile System",
      description: "Create a user profile to save progress, preferences, and personalized chapters.",
      // link: "/docs/signup",
      color: "#FF6F61",
    },
    {
      title: "Capstone Integration",
      description: "Work on a full humanoid robotics project combining all learned concepts in simulation and real hardware.",
      // link: "/docs/capstone-project",
      color: "#0096FF",
    },
  ];

  return (
    <Layout title="Features" description="Book Features Overview">
      <header className={styles.heroSection}>
        <h1 className={styles.title}>Book Features</h1>
        <p className={styles.subtitle}>
          Explore the unique features that make the Physical AI & Humanoid Robotics Book interactive, personalized, and AI-powered.
        </p>
      </header>

      <main className={styles.featuresSection}>
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </main>
    </Layout>
  );
}
