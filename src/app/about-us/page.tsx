import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import styles from './page.module.css';

export default function AboutUs() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Building trust through quality, one grain at a time
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p>
              Adhra Amrit Agro Products LLP was incorporated on October 20, 2020, 
              with a vision to bring the finest basmati rice to markets across India 
              and beyond. Based in Delhi, we have quickly established ourselves as a 
              trusted name in the agricultural products wholesale sector.
            </p>
            <p>
              Our journey began with a simple yet powerful commitment: to provide 
              premium quality rice that meets the highest standards of purity and 
              authenticity. From our registered office in Rohini, Delhi, we have 
              built strong relationships with farmers, processors, and distributors, 
              ensuring a seamless supply chain from paddy to plate.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p>
              To be recognized as India's most trusted basmati rice wholesaler, 
              known for uncompromising quality, ethical business practices, and 
              sustainable agricultural partnerships. We aim to bridge the gap between 
              premium agricultural produce and quality-conscious consumers worldwide.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p>
              We are committed to sourcing, processing, and delivering the finest 
              basmati rice while maintaining the highest standards of quality, 
              transparency, and customer satisfaction. Through our brands Hariom and 
              Tamaal, we serve diverse market segments with products that reflect our 
              core values of honesty, quality, and sustainability.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Leadership</h2>
            <div className={styles.leadership}>
              <div className={styles.leaderCard}>
                <h3>Anupam Garg</h3>
                <p className={styles.role}>Designated Partner</p>
                <p>
                  Leading Adhra Amrit with a deep understanding of the agricultural 
                  sector and a commitment to excellence, Anupam Garg ensures that 
                  every aspect of our operations reflects our core values of quality 
                  and integrity.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
            <p>
              At Adhra Amrit, we believe that great rice comes from great relationships. 
              We work closely with farmers who share our commitment to quality and 
              sustainable practices. Every grain we source undergoes rigorous quality 
              checks to ensure it meets our exacting standards.
            </p>
            <p>
              Our philosophy is built on three pillars: <strong>Honesty</strong> in 
              every transaction, <strong>Quality</strong> in every grain, and 
              <strong> Sustainability</strong> in every practice. These principles 
              guide our decisions and shape our relationships with partners, customers, 
              and the communities we serve.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Company Details</h2>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong>Incorporation Date:</strong> October 20, 2020
              </div>
              <div className={styles.detailItem}>
                <strong>LLPIN:</strong> AAU-3262
              </div>
              <div className={styles.detailItem}>
                <strong>Registered Office:</strong><br />
                House No. 25, 1st Floor, Chamber 3<br />
                Block G, Pocket 2, Sector 11<br />
                Rohini, Delhi, 110085
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
