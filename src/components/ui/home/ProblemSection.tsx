'use client';

import plartform_fees from '@/svgs/hidden_fees.svg';
import guarantee from '@/svgs/guarantee.svg';
import user from '@/svgs/user.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: plartform_fees,
    title: 'High Platform Fees',
    description:
      'Nexa reduces the massive cuts centralized platform takes thereby increasing seller profits',
  },
  {
    icon: guarantee,
    title: 'Fraud & Trust Issues',
    description:
      'With Nexa, the issue of trust and fraudulent buys is greatly minimized for all parties',
  },
  {
    icon: user,
    title: 'No User Control',
    description:
      'Nexa gives you as a user complete control over your wallet and data',
  },
] as const;

const ProblemSection = () => {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-[4.38rem]">
      <div className="wrapper space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-[8.94rem] flex flex-col items-center px-4 sm:px-6 md:px-8">
        <motion.h2
          className="max-w-[38.375rem] text-3xl sm:text-4xl md:text-5xl lg:text-[3.4375rem] font-semibold leading-[109.809%] text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          The Problem Nexa is{' '}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#120AFF_0%,#FBFBFE_100%)]">
            Solving
          </span>
        </motion.h2>

        <div className="flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[5.13rem] w-full justify-between">
          {problems.map((problem, index) => (
            <motion.div
              className="flex flex-col items-center max-w-full md:max-w-[21.5625rem] h-auto md:h-[17.625rem] w-full flex-1 pb-6 sm:pb-8 pt-6 sm:pt-[1.69rem] px-4 rounded-[0.625rem] bg-[linear-gradient(141deg,#030237_20.67%,#0B085D_75.06%)] text-center"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + 0.2,
                  ease: 'backOut',
                }}
              >
                <Image
                  src={problem.icon}
                  alt={problem.title}
                  quality={100}
                  className="w-8 sm:w-10 md:w-[2.5625rem] aspect-square mb-3 sm:mb-[0.87rem]"
                />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold max-w-full md:max-w-[11.6875rem] leading-[109.809%] mb-4 sm:mb-6 md:mb-[2.31rem]">
                {problem.title}
              </h3>
              <p className="text-base sm:text-[1.0625rem] font-inter font-bold mt-2 max-w-full md:max-w-[13.5rem] text-[rgba(208,197,197,0.84)] leading-[109.809%]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
