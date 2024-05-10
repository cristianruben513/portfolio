"use client";

import Halo from "@/app/components/ui/Halo";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type PhotoProps = {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  children?: ReactNode;
};

export function Photo({
  src,
  alt,
  width,
  height,
  rotate,
  left,
  index,
  children,
}: PhotoProps) {
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative w-full h-full shadow-md rounded-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateX: 10,
          },
        }}
      >
        <Halo strength={20} className="absolute inset-0 rounded-xl" >
          <div className="absolute h-full w-full rounded-xl overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="absolute inset-0 object-cover w-full h-full bg-neutral-400 pointer-events-none rounded-xl"
              priority
            />
            {children}
          </div>
        </Halo>
      </motion.div>
    </motion.div>
  );
}
