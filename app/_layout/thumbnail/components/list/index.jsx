'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, position }, index) => {
    const id = index;
    return (
      <motion.li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
        whileHover="hovered"
        initial="initial"
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap'
          passHref
        >
          <motion.h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
            variants={{
              initial: { x: 0, color: '#000' },
              hovered: { x: -20, color: '#707070' }, // Adjusted lighter color
            }}
            transition={{ type: 'tween', duration: 0.5 }} // Smooth transition without bounce
          >
            {title}
          </motion.h4>
          <motion.p
            className='text-lg font-medium'
            variants={{
              initial: { x: 0, color: '#000' },
              hovered: { x: 20, color: '#707070' }, // Adjusted lighter color
            }}
            transition={{ type: 'tween', duration: 0.5 }} // Smooth transition without bounce
          >
            {position}
          </motion.p>
        </Link>
      </motion.li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
