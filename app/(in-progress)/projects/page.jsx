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
    </Transition>
  );
}
