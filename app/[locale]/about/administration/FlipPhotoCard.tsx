"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type FlipPhotoCardProps = {
  frontSrc: string;
  backSrc: string;
  alt: string;
};

export default function FlipPhotoCard({
  frontSrc,
  backSrc,
  alt,
}: FlipPhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group h-[300px] w-full shrink-0 bg-[#dbe8f6] md:w-[230px]"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="pointer-events-none relative h-full w-full"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={frontSrc}
            alt={alt}
            fill
            sizes="(min-width: 768px) 230px, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image
            src={backSrc}
            alt=""
            fill
            sizes="(min-width: 768px) 230px, 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
