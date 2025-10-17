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
    <section className="pt-[4.38rem]">
      <div className="wrapper space-y-[8.94rem] flex flex-col items-center">
        <motion.h2
          className="max-w-[38.375rem] text-[3.4375rem] font-semibold leading-[109.809%] text-center"
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

        <div className="flex gap-[5.13rem] w-full justify-between">
          {problems.map((problem, index) => (
            <motion.div
              className="flex flex-col items-center max-w-[21.5625rem] h-[17.625rem] w-full flex-1 pb-8 pt-[1.69rem] rounded-[0.625rem] bg-[linear-gradient(141deg,#030237_20.67%,#0B085D_75.06%)] text-center"
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
                  className="w-[2.5625rem] aspect-square mb-[0.87rem]"
                />
              </motion.div>
              <h3 className="text-2xl font-bold max-w-[11.6875rem] leading-[109.809%] mb-[2.31rem]">
                {problem.title}
              </h3>
              <p className="text-[1.0625rem] font-inter font-bold mt-2 max-w-[13.5rem] text-[rgba(208,197,197,0.84)] leading-[109.809%]">
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
