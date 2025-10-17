'use client';

import Topbar from '@/components/shared/Topbar';
import hero_banner from '@/images/hero_banner.png';
import hero_pattern from '@/images/hero_pattern.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pb-[12.81rem] relative">
      <Image
        src={hero_pattern}
        alt="hero pattern"
        quality={100}
        className="w-full h-full absolute inset-0 select-none pointer-events-none z-0 object-cover"
        priority
      />

      <Topbar />

      <div className="flex flex-col items-center wrapper z-10 relative">
        <motion.div
          className="max-w-[50.375rem]"
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
            placeholder="blur"
          />
        </motion.div>

        <div className="text-center mt-[3.56rem] flex flex-col items-center">
          <motion.h1
            className="text-[3.4375rem] font-semibold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            The Future of E-Commerce is On-Chain
          </motion.h1>

          <motion.p
            className="max-w-[43.3125rem] text-xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Buy, sell, and verify products with blockchain transparency powered
            by smart contracts, not middlemen.
          </motion.p>

          <motion.div
            className="flex items-center gap-[1.94rem] w-full mt-[3.56rem] justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center max-w-[14.625rem] w-full h-[3.6875rem] rounded-[3.125rem] bg-nexa-blue py-4 font-satoshi text-xl font-bold cursor-pointer hover:opacity-90 transition-opacity"
            >
              Join as a buyer
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center max-w-[14.625rem] w-full h-[3.6875rem] rounded-[3.125rem] bg-white text-nexa-blue py-4 font-satoshi text-xl font-bold cursor-pointer hover:opacity-90 transition-opacity"
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
