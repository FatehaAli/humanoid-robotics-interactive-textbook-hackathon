import React, { useCallback } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

// --- Interactive Tilt Card ---
function FeatureCard({ title, description, link, color }) {
  const handleMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    el.style.setProperty('--mx', `${mx}deg`);
    el.style.setProperty('--my', `${my}deg`);
  }, []);

  const handleLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty('--mx', '0deg');
    el.style.setProperty('--my', '0deg');
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
        <Link className="button button--outline" to={link}>
          Learn More →
        </Link>
      </div>
    </article>
  );
}

// --- HERO HEADER ---
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Physical AI and Humanoid Robotics</h1>
        <p className={styles.heroSubtitle}>
          Master AI-driven robotics, humanoid systems, and real-world integration with interactive modules and hands-on projects.
        </p>

        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start Learning 🚀
          </Link>
          <Link className="button button--secondary button--lg" to="/features">
            Explore Features 🎯
          </Link>
        </div>

        <div className={styles.quickLinks}>
          <a href="#foundations">Foundations</a>
          <a href="#ros2">ROS 2</a>
          <a href="#simulation">Simulation</a>
          <a href="#vla">VLA</a>
        </div>
      </div>
    </header>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="Interactive textbook on AI-driven humanoid robotics"
    >
      <HomepageHeader />


{/* What this textbook covers section */}
      <main className={styles.mainContent}>
        {/* --- What This Textbook Covers Section --- */}
        <section className={styles.coverageSection}>
          <h2 className={styles.coverageHeading}>What This Textbook Covers</h2>
          <p className={styles.coverageDescription}>
            This textbook guides you through Physical AI and Humanoid Robotics, including foundations of AI, ROS 2, high-fidelity simulations, LLM-driven robot control, interactive RAG tools, personalization, Urdu translation, and a complete capstone project.
          </p>
        </section>

      </main>

      <main className={styles.mainContent}>
        {/* --- Section Heading --- */}
        <h2 className={styles.featuresHeading}>Explore All Modules</h2>
        <section id="modules" className={styles.featuresSection}>

          {/* ROW 1 */}
          <FeatureCard
            title="Module 1: ROS 2 Fundamentals"
            description="Learn nodes, topics, services & build the humanoid nervous system."
           link="/docs/module-1-ros2/ros2-fundamentals"
            color="#6B5B95"
          />
          <FeatureCard
            title="Module 2: Gazebo Simulation"
            description="Simulate your robot using physics-accurate virtual environments."
            link="/docs/module-2-gazebo/hello-gazebo"
            color="#4ECDC4"
          />
          <FeatureCard
            title="Module 3: Isaac Sim"
            description="Master NVIDIA high-fidelity robotics simulation workflows."
            link="/docs/module-3-isaac-sim/hello-isaac-sim"
            color="#88B04B"
          />

          {/* ROW 2 */}
          <FeatureCard
            title="Module 4: Vision-Language-Action (VLA)"
            description="Use LLMs, perception & reasoning to control robots intelligently."
            link="/docs/module-4-vla/voice-to-text-whisper"
            color="#FFA500"
          />
          <FeatureCard
            title="Module 5: Capstone: Autonomous Humanoid"
            description="Build a complete humanoid system using all modules together."
            link="/docs/module-5-capstone/system-architecture-setup"
            color="#FF6F61"
          />
          <FeatureCard
            title="Module 6: AI-Native Interactive Tools"
            description="RAG chatbot, highlight-to-ask, personalization, Urdu translation."
            link="/docs/module-6-ai-native/rag-chatbot"
            color="#0096FF"
          />
        </section>
      </main>

    </Layout>
  );
}
