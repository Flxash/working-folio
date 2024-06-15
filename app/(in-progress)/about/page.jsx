'use client'
import { InProgress } from '@/components';
import { Transition } from '@/layout';
import styles from './page.module.scss'
import ZoomParallax from '../../_components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Navbar } from '@/layout';

export default function About() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  return (
    <div className={styles.page}>
      <Transition>
        <Navbar />
        <InProgress>About Me</InProgress>
      </Transition>
      <main className={styles.main}>
          <ZoomParallax />
      </main>
    </div>
  );
}
