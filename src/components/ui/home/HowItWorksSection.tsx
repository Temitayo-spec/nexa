'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Pay with USDC',
    description:
      'You select an item and pay with USDC on Base. The payment is instantly locked in a smart contract escrow',
  },
  {
    title: 'Secure Escrow Hold',
    description:
      'The merchants ships the item. Funds remain in escrow until you confirm delivery or a timeout releases them automatically',
  },
  {
    title: 'NFT Receipt Minted',
    description:
      'Upon confirmation, funds are released to the seller, and an NFT receipt is minted to your  wallet as verifiable proof of purchase',
  },
] as const;

const HowItWorksSection = () => {
  return (
    <section className="mt-[20rem] pb-[9.38rem]">
      <div className="wrapper space-y-[6rem] flex flex-col items-center">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="max-w-[37.5625rem] text-[3.4375rem] font-semibold leading-[109.809%]">
            How Nexa{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#120AFF_0%,#FBFBFE_100%)]">
              Works
            </span>
          </h2>
        </motion.header>

        <div className="flex gap-[3.06rem] w-full justify-between">
          {steps.map((step, index) => (
            <motion.div
              className="flex flex-col items-center w-full flex-1 text-center"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="w-[3.5rem] aspect-square rounded-full bg-nexa-blue inline-flex items-center justify-center text-[2rem] font-semibold leading-[109.809%] mb-[1.44rem]"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.2,
                  ease: 'backOut',
                  rotate: { duration: 0.8 },
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                {index + 1}
              </motion.div>
              <motion.h3
                className="text-2xl font-bold leading-[109.809%] mb-[1.31rem]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-[1.0625rem] font-inter font-bold mt-2 max-w-[25.3125rem] text-[rgba(208,197,197,0.84)] leading-[109.809%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
