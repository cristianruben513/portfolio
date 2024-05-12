"use client"

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const possibleRotations = [3.7, -3.7,];

interface PhotoProps {
  img: StaticImageData;
  title: string;
  alt: string;
  idx: number;
}

export const Photo = ({ img, title, alt, idx }: PhotoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      key={img.src}
      initial={{
        scale: 1, rotate: possibleRotations[idx % possibleRotations.length], opacity: 0
      }}
      whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
      whileInView={{ opacity: 1, transition: { delay: idx / 100 } }}
      viewport={{ once: true }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className={clsx(
        'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800',
      )}
    >
      <Image
        src={img}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-cover"
        placeholder="blur"
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full bg-gradient-to-t from-black/75 via-black/30 flex items-end"
          >
            <h3 className="px-3 py-2 font-mono text-xs font-bold">{title}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
