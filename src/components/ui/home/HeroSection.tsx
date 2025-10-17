'use client';

import Topbar from '@/components/shared/Topbar';
import hero_banner from '@/images/hero_banner.png';
import hero_pattern from '@/images/hero_pattern.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pb-16 md:pb-32 lg:pb-[12.81rem] relative z-10">
      <Image
        src={hero_pattern}
        alt="hero pattern"
        quality={100}
        className="w-full h-full absolute inset-0 select-none pointer-events-none z-0 object-cover"
        priority
      />

      <Topbar />

      <div className="flex flex-col items-center wrapper z-1 relative px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-[50.375rem] w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src={hero_banner}
            alt="hero banner"
            quality={100}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-[3.56rem] flex flex-col items-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4375rem] font-semibold mb-3 md:mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            The Future of E-Commerce is On-Chain
          </motion.h1>

          <motion.p
            className="max-w-[43.3125rem] text-base sm:text-lg md:text-xl font-medium px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Buy, sell, and verify products with blockchain transparency powered
            by smart contracts, not middlemen.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[1.94rem] w-full mt-8 sm:mt-10 md:mt-12 lg:mt-[3.56rem] justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center max-w-full sm:max-w-[14.625rem] w-full h-[3.25rem] sm:h-[3.6875rem] rounded-[3.125rem] bg-nexa-blue py-3 sm:py-4 font-satoshi text-lg sm:text-xl font-bold cursor-pointer hover:opacity-90 transition-opacity"
            >
              Join as a buyer
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center max-w-full sm:max-w-[14.625rem] w-full h-[3.25rem] sm:h-[3.6875rem] rounded-[3.125rem] bg-white text-nexa-blue py-3 sm:py-4 font-satoshi text-lg sm:text-xl font-bold cursor-pointer hover:opacity-90 transition-opacity"
            >
              Join as a merchant
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
