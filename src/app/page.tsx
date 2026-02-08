'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import ValueCard from '@/components/ValueCard/ValueCard';
import Reveal from '@/components/Reveal/Reveal';
import styles from './page.module.css';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.9,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        <motion.div
          className={styles.heroBackground}
          style={{
            y: shouldReduceMotion ? 0 : backgroundY,
          }}
        />
        <motion.div
          className={styles.heroContent}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          style={{
            opacity: shouldReduceMotion ? 1 : contentOpacity,
          }}
        >
          <motion.div className={styles.legacyBadge} variants={itemVariants}>
            SINCE 2020
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={itemVariants}>
            Purity in Every Grain
          </motion.h1>
          <motion.p className={styles.heroSubtext} variants={itemVariants}>
            Adhra Amrit Agro Products LLP brings you the finest basmati rice, 
            cultivated with care and delivered with honesty. Rooted in Delhi, 
            serving the world with premium quality and unwavering commitment.
          </motion.p>
          <motion.div variants={itemVariants}>
            <PrimaryButton href="/about-us">Know Us Better</PrimaryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview */}
      <SectionWrapper>
        <Reveal>
          <div className={styles.aboutPreview}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About Adhra Amrit</h2>
              <p className={styles.aboutText}>
                Adhra Amrit Agro Products LLP is a Delhi-based company specializing in 
                the wholesale of premium agricultural products, with a primary focus on 
                basmati rice. Incorporated in 2020, we have quickly established ourselves 
                as a trusted partner for quality-conscious buyers.
              </p>
              <p className={styles.aboutText}>
                Our commitment extends beyond just selling rice—we ensure every grain 
                meets our exacting standards of quality, purity, and authenticity. 
                Through our brands <strong>Hariom</strong> and <strong>Tamaal</strong>, 
                we cater to both premium and daily consumption needs, maintaining the 
                highest standards across all our offerings.
              </p>
              <PrimaryButton href="/about-us">Learn More</PrimaryButton>
            </div>
            <div className={styles.aboutPattern}></div>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper variant="light">
        <Reveal>
          <div className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide everything we do
            </p>
            <div className={styles.valuesGrid}>
              <ValueCard
                title="Honesty"
                description="Transparency in every transaction. We believe in building 
                relationships based on trust and integrity, ensuring our partners know 
                exactly what they're getting."
                icon="✓"
              />
              <ValueCard
                title="Quality"
                description="Uncompromising standards from paddy to plate. Every grain 
                is carefully selected and processed to meet the highest quality benchmarks 
                in the industry."
                icon="★"
              />
              <ValueCard
                title="Sustainability"
                description="Responsible sourcing and ethical practices. We work closely 
                with farmers and ensure sustainable agricultural practices that benefit 
                communities and the environment."
                icon="🌾"
              />
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Brands Section */}
      <SectionWrapper>
        <Reveal>
          <div className={styles.brandsSection}>
            <h2 className={styles.sectionTitle}>Our Brands</h2>
            <p className={styles.sectionSubtitle}>
              Premium quality rice for every need
            </p>
            <div className={styles.brandsGrid}>
              <div className={styles.brandCard}>
                <h3 className={styles.brandName}>Hariom</h3>
                <p className={styles.brandDescription}>
                  Our premium basmati rice brand, known for its exceptional length, 
                  delicate aroma, and superior quality. Perfect for discerning customers 
                  who demand the finest.
                </p>
              </div>
              <div className={styles.brandCard}>
                <h3 className={styles.brandName}>Tamaal</h3>
                <p className={styles.brandDescription}>
                  Quality basmati rice that brings premium taste to everyday meals. 
                  Tamaal represents our commitment to making excellent rice accessible 
                  to families across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="dark">
        <Reveal>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>
              Connect with our experts for business enquiries
            </h2>
            <p className={styles.ctaSubtext}>
              Whether you're a wholesaler, distributor, or looking to establish a 
              long-term partnership, we're here to help.
            </p>
            <PrimaryButton href="/contact-us">Enquire Now</PrimaryButton>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
