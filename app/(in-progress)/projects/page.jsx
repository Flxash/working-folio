import { InProgress } from '@/components';
import { Transition } from '@/layout';
import React from 'react';
import styles from './projects.module.css';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Projects() {
  return (
    <Transition>
      <InProgress>Projects</InProgress>
      <div className={styles.projectsContainer}>
        <div className={styles.projectBlock}>
        <video src={require('@/public/videos/120fps.mp4')} autoPlay muted loop />
          <p className={styles.projectTitle}>Cofolios.com</p>
          <p className={styles.projectDescription}>I created an inspiration site for early career designers. 100k+ monthly page views.</p>
        </div>
        <div className={styles.projectBlock}>
          <video className={styles.video} controls autoPlay muted loop>
            <source src={'@/public/videos/120fps.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.projectTitle}>Curve.design</p>
          <p className={styles.projectDescription}>An inspiration site for mobile designers.</p>
        </div>
        <div className={styles.projectBlock}>
          <video src={require('@/public/videos/120fps.mp4')} autoPlay muted loop />
          <p className={styles.projectTitle}>Instagram</p>
          <p className={styles.projectDescription}>Designer on Stories & Conversation Starters.</p>
        </div>
        <div className={styles.projectBlock}>
          <video className={styles.video} controls>
            <source src='@/public/videos/120fps.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.projectTitle}>FirstFloor</p>
          <p className={styles.projectDescription}>I cofounded and raised $1,000,000 from Samsung & Chapter One to run a startup.</p>
        </div>
      </div>
    </Transition>
  );
}
