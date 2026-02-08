'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import styles from './page.module.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <SectionWrapper>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Get in touch with us for business enquiries and partnerships
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.textarea}
                  ></textarea>
                </div>

                <PrimaryButton type="submit">Send Message</PrimaryButton>
              </form>
            </div>

            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              
              <div className={styles.infoCard}>
                <h3>Registered Office</h3>
                <p>
                  House No. 25, 1st Floor, Chamber 3<br />
                  Block G, Pocket 2, Sector 11<br />
                  Rohini, Delhi, 110085
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Company Details</h3>
                <p>
                  <strong>LLPIN:</strong> AAU-3262<br />
                  <strong>Incorporated:</strong> October 20, 2020
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>For Business Enquiries</h3>
                <p>
                  We welcome enquiries from wholesalers, distributors, retailers, 
                  and potential partners. Please use the contact form or reach out 
                  to us directly.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.mapSection}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <div className={styles.mapPlaceholder}>
              <p>Map location will be displayed here</p>
              <p className={styles.mapAddress}>
                House No. 25, 1st Floor, Chamber 3, Block G, Pocket 2, Sector 11, Rohini, Delhi, 110085
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
