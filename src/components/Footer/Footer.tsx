import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logoMain}>ADHRA AMRIT</h3>
            <p className={styles.logoTagline}>PURITY IN EVERY GRAIN</p>
            <p className={styles.description}>
              Delhi-based basmati rice wholesaler specializing in premium quality rice 
              with a commitment to honesty, quality, and sustainability.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/explore-rice">Explore Rice</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact</h4>
            <p>
              House No. 25, 1st Floor, Chamber 3<br />
              Block G, Pocket 2, Sector 11<br />
              Rohini, Delhi, 110085
            </p>
            <p className={styles.llpin}>
              LLPIN: AAU-3262
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Adhra Amrit Agro Products LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
