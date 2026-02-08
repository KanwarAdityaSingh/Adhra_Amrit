import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import StatCard from '@/components/StatCard/StatCard';
import styles from './page.module.css';

export default function ScaleSize() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Scale & Size</h1>
          <p className={styles.subtitle}>
            Building capacity, expanding reach, serving excellence
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <StatCard
                number="4+"
                label="Years of Operation"
                description="Since our incorporation in 2020"
              />
              <StatCard
                number="2"
                label="Premium Brands"
                description="Hariom and Tamaal"
              />
              <StatCard
                number="100%"
                label="Quality Commitment"
                description="Uncompromising standards"
              />
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Reach</h2>
            <p className={styles.sectionText}>
              Based in Delhi, Adhra Amrit Agro Products LLP serves customers 
              across India and beyond. Our strategic location in the capital 
              region provides us with excellent connectivity to major markets, 
              ports, and distribution networks.
            </p>
            <div className={styles.reachGrid}>
              <div className={styles.reachCard}>
                <h3>Domestic Market</h3>
                <p>
                  We serve wholesalers, retailers, and institutional buyers 
                  across India, ensuring timely delivery and consistent quality 
                  nationwide.
                </p>
              </div>
              <div className={styles.reachCard}>
                <h3>Export Markets</h3>
                <p>
                  Our products reach international markets, meeting global 
                  quality standards and catering to the growing demand for 
                  premium Indian basmati rice.
                </p>
              </div>
              <div className={styles.reachCard}>
                <h3>Distribution Network</h3>
                <p>
                  We maintain strong relationships with distributors and logistics 
                  partners to ensure efficient supply chain management and 
                  reliable delivery.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Infrastructure</h2>
            <p className={styles.sectionText}>
              Our operations are supported by robust infrastructure designed 
              to maintain quality and ensure efficient processing and distribution.
            </p>
            <div className={styles.infrastructureGrid}>
              <div className={styles.infrastructureItem}>
                <h4>Processing Facilities</h4>
                <p>
                  State-of-the-art processing facilities ensure that every grain 
                  meets our quality standards before reaching customers.
                </p>
              </div>
              <div className={styles.infrastructureItem}>
                <h4>Storage Capacity</h4>
                <p>
                  Modern storage facilities maintain optimal conditions to preserve 
                  the quality and freshness of our rice products.
                </p>
              </div>
              <div className={styles.infrastructureItem}>
                <h4>Quality Control</h4>
                <p>
                  Dedicated quality control laboratories and processes ensure 
                  consistent quality across all our products.
                </p>
              </div>
              <div className={styles.infrastructureItem}>
                <h4>Logistics</h4>
                <p>
                  Efficient logistics and distribution systems enable us to 
                  deliver products promptly and reliably to our customers.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Growth & Expansion</h2>
            <p className={styles.sectionText}>
              Since our inception in 2020, we have focused on sustainable growth, 
              building strong partnerships, and expanding our product portfolio 
              while maintaining our commitment to quality and integrity.
            </p>
            <div className={styles.growthPoints}>
              <div className={styles.growthPoint}>
                <strong>2020:</strong> Company incorporation and establishment 
                of operations in Delhi
              </div>
              <div className={styles.growthPoint}>
                <strong>2021-2022:</strong> Brand development and market expansion
              </div>
              <div className={styles.growthPoint}>
                <strong>2023-2024:</strong> Infrastructure enhancement and 
                quality certifications
              </div>
              <div className={styles.growthPoint}>
                <strong>2025:</strong> Continued growth and market leadership 
                in premium basmati rice
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
