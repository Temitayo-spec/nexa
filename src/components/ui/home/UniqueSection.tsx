'use client';

import protect from '@/svgs/protect.svg';
import lightning from '@/svgs/lightning.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const uniques = [
  {
    icon: protect,
    title: 'Smart Contract Escrow',
    description:
      'Funds are held securely on-chain until delivery is confirmed. No chargebacks, no disputes',
  },
  {
    icon: lightning,
    title: 'NFT Proof of Purchase',
    description:
      'Every transaction mints an NFT receipt which is a verifiable proof that unlocks loyalty rewards and resale rights.',
  },
] as const;

const UniqueSection = () => {
  return (
    <section className="mt-[15.69rem]">
      <div className="wrapper space-y-[4.62rem] flex flex-col items-center">
        <header className="space-y-[2.69rem] text-center">
          <motion.h2
            className="max-w-[37.5625rem] text-[3.4375rem] font-semibold leading-[109.809%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Why Nexa is{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#120AFF_0%,#FBFBFE_100%)]">
              Unique
            </span>
          </motion.h2>
          <motion.p
            className="max-w-[43.3125rem] mx-auto text-nexa-grey-2 text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Nexa replaces middlemen with transparent smart contracts. Every
            transaction is verifiable, secure and owned by you.
          </motion.p>
        </header>

        <div className="flex gap-[2.94rem] w-full justify-between">
          {uniques.map((unique, index) => (
            <motion.div
              className="flex flex-col w-full flex-1 pb-[3.94rem] pt-[1.44rem] px-[3.56rem] rounded-[0.625rem] bg-[linear-gradient(141deg,#030237_20.67%,#0B085D_75.06%)] text-left"
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  ease: 'backOut',
                }}
              >
                <Image
                  src={unique.icon}
                  alt={unique.title}
                  quality={100}
                  className="w-[4.3125rem] aspect-square mb-[1.31rem]"
                />
              </motion.div>
              <h3 className="text-2xl font-bold leading-[109.809%] mb-[1.44rem]">
                {unique.title}
              </h3>
              <p className="text-[1.0625rem] font-inter font-bold mt-2 max-w-[23.3125rem] text-[rgba(208,197,197,0.84)] leading-[109.809%]">
                {unique.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
