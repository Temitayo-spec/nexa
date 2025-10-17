'use client';

import Image from 'next/image';
import copyright from '@/svgs/copyright.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-[6rem] border-t border-[rgba(0,76,235,0.28)] pb-[0.81rem]">
      <div className="flex flex-col items-center">
        <header className="text-center space-y-[2.06rem]">
          <motion.h2
            className="max-w-[52.25rem] text-[3.875rem] font-semibold leading-[106%] tracking-[0.03875rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Let&apos;s Rebuild{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#120AFF_0%,#FBFBFE_100%)]">
              Trust Together
            </span>
          </motion.h2>
          <motion.p
            className="max-w-[26.5625rem] mx-auto text-[rgba(208,197,197,0.84)] leading-[109.809%] font-inter font-bold text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Join and be part of the e-commerce on chain revolution
          </motion.p>
        </header>

        <motion.div
          className="flex items-center gap-[1.94rem] w-full mt-[3.13rem] justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            className="inline-flex items-center justify-center max-w-[14.625rem] w-full h-[3.6875rem] rounded-[3.125rem] bg-nexa-blue py-4 font-satoshi text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Join as a buyer
          </motion.button>
          <motion.button
            type="button"
            className="inline-flex items-center justify-center max-w-[14.625rem] w-full h-[3.6875rem] rounded-[3.125rem] bg-white text-nexa-blue py-4 font-satoshi text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Join as a merchant
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-[6.94rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center gap-2">
            <motion.span
              initial={{ rotate: -180, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'backOut' }}
              className="inline-flex w-[1.25rem] aspect-square"
            >
              <Image src={copyright} alt="copyright" />
            </motion.span>
            <span className="text-nexa-copyright-blue font-inter text-[0.9375rem] font-medium leading-[109.809%]">
              2025 Nexa. Trust built on-chain
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
