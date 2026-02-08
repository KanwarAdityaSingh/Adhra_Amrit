import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import styles from './page.module.css';

export default function Careers() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Careers</h1>
          <p className={styles.subtitle}>
            Work with legacy, build the future
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.heroSection}>
            <h2 className={styles.heroTitle}>Join Our Team</h2>
            <p className={styles.heroText}>
              At Adhra Amrit, we believe in building a team that shares our values 
              of honesty, quality, and sustainability. We're looking for passionate 
              individuals who want to be part of a growing company that's making a 
              difference in the agricultural products sector.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Culture</h2>
            <p className={styles.sectionText}>
              We foster a work environment that values integrity, collaboration, and 
              continuous learning. Our team members are encouraged to grow, innovate, 
              and contribute to our mission of delivering premium quality products 
              while maintaining ethical business practices.
            </p>
            <div className={styles.cultureGrid}>
              <div className={styles.cultureCard}>
                <h4>Integrity First</h4>
                <p>
                  We value honesty and transparency in everything we do, both 
                  internally and in our business relationships.
                </p>
              </div>
              <div className={styles.cultureCard}>
                <h4>Quality Focus</h4>
                <p>
                  We're committed to excellence and continuous improvement in all 
                  aspects of our operations.
                </p>
              </div>
              <div className={styles.cultureCard}>
                <h4>Growth Mindset</h4>
                <p>
                  We encourage learning, innovation, and professional development 
                  for all team members.
                </p>
              </div>
              <div className={styles.cultureCard}>
                <h4>Team Collaboration</h4>
                <p>
                  We believe in working together, supporting each other, and 
                  celebrating shared successes.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <p className={styles.sectionText}>
              We're always looking for talented individuals to join our team. 
              Below are some of the positions we're currently hiring for:
            </p>
            <div className={styles.positionsList}>
              <div className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <h3>Sales & Business Development Executive</h3>
                  <span className={styles.positionType}>Full-time</span>
                </div>
                <p className={styles.positionDescription}>
                  We're looking for an experienced sales professional to help expand 
                  our market reach and build relationships with wholesalers, retailers, 
                  and distributors.
                </p>
                <div className={styles.positionDetails}>
                  <div className={styles.detailItem}>
                    <strong>Location:</strong> Delhi
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Experience:</strong> 2-5 years in FMCG/Agri products
                  </div>
                </div>
              </div>

              <div className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <h3>Quality Control Specialist</h3>
                  <span className={styles.positionType}>Full-time</span>
                </div>
                <p className={styles.positionDescription}>
                  Join our quality assurance team to ensure that every product meets 
                  our high standards. Experience in agricultural product quality 
                  control preferred.
                </p>
                <div className={styles.positionDetails}>
                  <div className={styles.detailItem}>
                    <strong>Location:</strong> Delhi
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Experience:</strong> 1-3 years in quality control
                  </div>
                </div>
              </div>

              <div className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <h3>Logistics & Operations Coordinator</h3>
                  <span className={styles.positionType}>Full-time</span>
                </div>
                <p className={styles.positionDescription}>
                  Manage our supply chain operations, coordinate with logistics 
                  partners, and ensure smooth operations from warehouse to customer.
                </p>
                <div className={styles.positionDetails}>
                  <div className={styles.detailItem}>
                    <strong>Location:</strong> Delhi
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Experience:</strong> 2-4 years in logistics/operations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Work With Us</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <h4>Growth Opportunities</h4>
                <p>
                  As a growing company, we offer opportunities for career advancement 
                  and skill development.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h4>Meaningful Work</h4>
                <p>
                  Be part of a company that's making a difference in the agricultural 
                  sector and supporting farmers and communities.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h4>Ethical Environment</h4>
                <p>
                  Work in an environment that values honesty, integrity, and ethical 
                  business practices.
                </p>
              </div>
              <div className={styles.benefitItem}>
                <h4>Team Support</h4>
                <p>
                  Join a collaborative team that supports each other and works 
                  together towards common goals.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Interested in Joining Us?</h2>
            <p className={styles.ctaText}>
              If you don't see a position that matches your skills, or if you're 
              passionate about what we do, we'd still love to hear from you. 
              Send us your resume and a cover letter explaining why you'd like 
              to work with Adhra Amrit.
            </p>
            <PrimaryButton href="/contact-us">Get in Touch</PrimaryButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
