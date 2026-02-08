import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import styles from './page.module.css';

export default function Portfolio() {
  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.subtitle}>
            Premium quality rice products for every need
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.brandsSection}>
            <h2 className={styles.sectionTitle}>Our Brands</h2>
            <div className={styles.brandsGrid}>
              <div className={styles.brandCard}>
                <div className={styles.brandHeader}>
                  <h3 className={styles.brandName}>Hariom</h3>
                  <span className={styles.brandBadge}>Premium</span>
                </div>
                <p className={styles.brandDescription}>
                  Hariom represents the pinnacle of basmati rice excellence. 
                  Known for its exceptional grain length, delicate aroma, and 
                  superior cooking quality, Hariom is our flagship premium brand.
                </p>
                <div className={styles.brandFeatures}>
                  <div className={styles.feature}>
                    <strong>Grain Length:</strong> Extra Long
                  </div>
                  <div className={styles.feature}>
                    <strong>Aroma:</strong> Distinctive Basmati Fragrance
                  </div>
                  <div className={styles.feature}>
                    <strong>Quality Grade:</strong> Premium
                  </div>
                  <div className={styles.feature}>
                    <strong>Best For:</strong> Special occasions, fine dining, exports
                  </div>
                </div>
              </div>

              <div className={styles.brandCard}>
                <div className={styles.brandHeader}>
                  <h3 className={styles.brandName}>Tamaal</h3>
                  <span className={styles.brandBadge}>Value</span>
                </div>
                <p className={styles.brandDescription}>
                  Tamaal brings premium basmati quality to everyday meals. 
                  Carefully selected and processed, Tamaal offers excellent 
                  value without compromising on taste or quality.
                </p>
                <div className={styles.brandFeatures}>
                  <div className={styles.feature}>
                    <strong>Grain Length:</strong> Long
                  </div>
                  <div className={styles.feature}>
                    <strong>Aroma:</strong> Pleasant Basmati Aroma
                  </div>
                  <div className={styles.feature}>
                    <strong>Quality Grade:</strong> High
                  </div>
                  <div className={styles.feature}>
                    <strong>Best For:</strong> Daily consumption, families, retail
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.categoriesSection}>
            <h2 className={styles.sectionTitle}>Product Categories</h2>
            <div className={styles.categoriesGrid}>
              <div className={styles.categoryCard}>
                <h3 className={styles.categoryName}>Premium Basmati</h3>
                <p>
                  Our premium range features the finest basmati rice with 
                  exceptional grain length, perfect aroma, and superior cooking 
                  characteristics. Ideal for discerning customers and export markets.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3 className={styles.categoryName}>Daily Basmati</h3>
                <p>
                  High-quality basmati rice that brings premium taste to everyday 
                  meals. Carefully processed to maintain quality while ensuring 
                  affordability for regular consumption.
                </p>
              </div>

              <div className={styles.categoryCard}>
                <h3 className={styles.categoryName}>Specialty Variants</h3>
                <p>
                  We offer various specialty basmati rice variants to meet specific 
                  market needs and customer preferences, each maintaining our 
                  commitment to quality and authenticity.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.qualitySection}>
            <h2 className={styles.sectionTitle}>Quality Assurance</h2>
            <p>
              Every product in our portfolio undergoes rigorous quality checks 
              to ensure it meets our exacting standards. From sourcing to packaging, 
              we maintain strict quality control at every stage of the process.
            </p>
            <div className={styles.qualityPoints}>
              <div className={styles.qualityPoint}>
                <strong>Rigorous Testing:</strong> Every batch is tested for 
                quality, purity, and authenticity
              </div>
              <div className={styles.qualityPoint}>
                <strong>Proper Storage:</strong> State-of-the-art storage facilities 
                maintain optimal conditions
              </div>
              <div className={styles.qualityPoint}>
                <strong>Traceability:</strong> Complete traceability from source 
                to destination
              </div>
              <div className={styles.qualityPoint}>
                <strong>Certification:</strong> All products meet relevant quality 
                and safety standards
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
