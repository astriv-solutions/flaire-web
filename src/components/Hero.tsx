'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

// Helper: split heading into lines (supporting \n for multi-line headings)
const getHeadingLines = (heading: string) => heading.split(/\r?\n/);

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-16 md:pt-20 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <div className="text-center">
        <h1 className="font-funnel text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto flex flex-col items-center">
          {getHeadingLines(heroDetails.heading).map((line, i) => (
            <motion.span
              key={i}
              initial={{ filter: 'blur(8px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.3, ease: 'easeOut' }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ filter: 'blur(8px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mt-4 text-foreground max-w-lg mx-auto shiny-text"
        >
          {heroDetails.subheading}
        </motion.p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <AppStoreButton dark />
          <PlayStoreButton dark />
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
