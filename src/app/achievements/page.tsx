import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import styles from './page.module.css';

export default function Achievements() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Achievements</h1>
          <p className={styles.subtitle}>
            Recognition for excellence and commitment to quality
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Registrations & Certifications</h2>
            <div className={styles.achievementsGrid}>
              <div className={styles.achievementCard}>
                <h3>APEDA Registration</h3>
                <p>
                  Registered with the Agricultural and Processed Food Products 
                  Export Development Authority (APEDA), enabling us to export 
                  our premium basmati rice to international markets while 
                  maintaining compliance with all regulatory standards.
                </p>
              </div>

              <div className={styles.achievementCard}>
                <h3>MCA Registration</h3>
                <p>
                  Legally incorporated as a Limited Liability Partnership (LLP) 
                  with the Ministry of Corporate Affairs, ensuring transparency, 
                  accountability, and compliance with all statutory requirements.
                </p>
                <div className={styles.detail}>
                  <strong>LLPIN:</strong> AAU-3262
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Quality Standards</h2>
            <p className={styles.sectionText}>
              We maintain the highest quality standards across all our operations, 
              ensuring that every product meets or exceeds industry benchmarks.
            </p>
            <div className={styles.standardsGrid}>
              <div className={styles.standardItem}>
                <h4>Grain Quality</h4>
                <p>
                  Rigorous testing for grain length, aroma, moisture content, 
                  and purity ensures consistent premium quality.
                </p>
              </div>
              <div className={styles.standardItem}>
                <h4>Processing Standards</h4>
                <p>
                  State-of-the-art processing facilities maintain hygiene and 
                  quality at every stage.
                </p>
              </div>
              <div className={styles.standardItem}>
                <h4>Packaging</h4>
                <p>
                  Quality packaging ensures product freshness and integrity 
                  throughout the supply chain.
                </p>
              </div>
              <div className={styles.standardItem}>
                <h4>Traceability</h4>
                <p>
                  Complete traceability from source to destination ensures 
                  transparency and quality assurance.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Milestones</h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h3>Company Incorporation</h3>
                  <p>
                    Adhra Amrit Agro Products LLP was incorporated on October 20, 2020, 
                    marking the beginning of our journey in the basmati rice wholesale sector.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2021</div>
                <div className={styles.timelineContent}>
                  <h3>Brand Development</h3>
                  <p>
                    Launch of our premium brands Hariom and Tamaal, establishing our 
                    presence in the market with quality-focused products.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2022-2023</div>
                <div className={styles.timelineContent}>
                  <h3>Market Expansion</h3>
                  <p>
                    Expansion of our distribution network and establishment of strong 
                    partnerships with wholesalers and retailers across India.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024-2025</div>
                <div className={styles.timelineContent}>
                  <h3>Quality Excellence</h3>
                  <p>
                    Continued focus on quality improvement, infrastructure enhancement, 
                    and building a reputation for reliability and excellence in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Industry Recognition</h2>
            <p className={styles.sectionText}>
              While we continue to grow and establish our presence, our commitment 
              to quality, honesty, and customer satisfaction has been recognized 
              by our partners and customers in the industry.
            </p>
            <div className={styles.recognitionGrid}>
              <div className={styles.recognitionCard}>
                <h4>Trusted Partner</h4>
                <p>
                  Recognized by our partners for reliability, transparency, 
                  and consistent quality delivery.
                </p>
              </div>
              <div className={styles.recognitionCard}>
                <h4>Quality Focus</h4>
                <p>
                  Known for maintaining uncompromising quality standards 
                  across all our products and operations.
                </p>
              </div>
              <div className={styles.recognitionCard}>
                <h4>Customer Satisfaction</h4>
                <p>
                  Building long-term relationships through honest business 
                  practices and customer-centric approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
