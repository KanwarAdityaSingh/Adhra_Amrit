import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import styles from './page.module.css';

export default function Events() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Events</h1>
          <p className={styles.subtitle}>
            Connecting with the industry, showcasing excellence
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Industry Events & Exhibitions</h2>
            <p className={styles.sectionText}>
              We actively participate in industry events, trade fairs, and exhibitions 
              to connect with partners, showcase our products, and stay updated with 
              industry trends and opportunities.
            </p>
          </div>

          <div className={styles.eventsSection}>
            <div className={styles.eventsCategory}>
              <h3 className={styles.categoryTitle}>Upcoming Events</h3>
              <div className={styles.eventsList}>
                <div className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.month}>TBD</span>
                    <span className={styles.year}>2025</span>
                  </div>
                  <div className={styles.eventContent}>
                    <h4>Agricultural Trade Fair</h4>
                    <p>
                      Participating in major agricultural trade fairs to showcase 
                      our premium basmati rice products and connect with potential 
                      partners and customers.
                    </p>
                    <div className={styles.eventLocation}>
                      <strong>Location:</strong> To be announced
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.eventsCategory}>
              <h3 className={styles.categoryTitle}>Past Events</h3>
              <div className={styles.eventsList}>
                <div className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.month}>2024</span>
                    <span className={styles.year}>Various</span>
                  </div>
                  <div className={styles.eventContent}>
                    <h4>Industry Exhibitions</h4>
                    <p>
                      Participated in various agricultural and food product exhibitions 
                      across India, showcasing our brands Hariom and Tamaal to 
                      wholesalers, retailers, and international buyers.
                    </p>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.month}>2023</span>
                    <span className={styles.year}>Various</span>
                  </div>
                  <div className={styles.eventContent}>
                    <h4>Trade Fairs & Expos</h4>
                    <p>
                      Active participation in regional and national trade fairs, 
                      building relationships with distributors and exploring new 
                      market opportunities.
                    </p>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.month}>2022</span>
                    <span className={styles.year}>Launch</span>
                  </div>
                  <div className={styles.eventContent}>
                    <h4>Brand Launch Events</h4>
                    <p>
                      Introduction of our premium brands Hariom and Tamaal to the 
                      market, establishing our presence in the basmati rice sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Event Participation</h2>
            <p className={styles.sectionText}>
              Our participation in industry events allows us to:
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h4>Showcase Products</h4>
                <p>
                  Display our premium basmati rice products and demonstrate quality 
                  to potential customers and partners.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Build Networks</h4>
                <p>
                  Connect with wholesalers, retailers, exporters, and industry 
                  professionals to expand our reach.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Stay Updated</h4>
                <p>
                  Learn about industry trends, market opportunities, and emerging 
                  technologies in the agricultural sector.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h4>Explore Opportunities</h4>
                <p>
                  Identify new markets, partnerships, and business opportunities 
                  for growth and expansion.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p>
              Interested in meeting us at an upcoming event or inviting us to 
              participate in your exhibition? 
            </p>
            <p>
              <a href="/contact-us" className={styles.ctaLink}>
                Get in touch with us
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
