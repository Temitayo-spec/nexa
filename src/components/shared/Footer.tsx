'use client';

import Image from 'next/image';
import copyright from '@/svgs/copyright.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';

const Footer = () => {
  const setWalletAddress = useStore((state) => state.setWalletAddress);
  const router = useRouter();

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask or another Web3 wallet.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      setWalletAddress(account);
      alert(`Wallet connected: ${account.slice(0, 6)}...${account.slice(-4)}`);
      router.push('/seller'); // redirect to seller page
    } catch (err) {
      console.error(err);
      alert('Failed to connect wallet.');
    }
  };

  return (
    <footer className="pt-12 sm:pt-16 md:pt-20 lg:pt-[6rem] border-t border-[rgba(0,76,235,0.28)] pb-4 sm:pb-[0.81rem]">
      <div className="flex flex-col items-center wrapper">
        <header className="text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[2.06rem]">
          <motion.h2
            className="max-w-[52.25rem] text-3xl sm:text-4xl md:text-5xl lg:text-[3.875rem] font-semibold leading-[106%] tracking-[0.03875rem] px-4"
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
            className="max-w-[26.5625rem] mx-auto text-[rgba(208,197,197,0.84)] leading-[109.809%] font-inter font-bold text-base sm:text-lg md:text-xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Join and be part of the e-commerce on chain revolution
          </motion.p>
        </header>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[1.94rem] w-full mt-8 sm:mt-10 md:mt-12 lg:mt-[3.13rem] justify-center wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            onClick={connectWallet}
            className="inline-flex items-center justify-center max-w-full sm:max-w-[14.625rem] w-full h-[3.25rem] sm:h-[3.6875rem] rounded-[3.125rem] bg-nexa-blue py-3 sm:py-4 font-satoshi text-lg sm:text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-[6.94rem]"
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
              className="inline-flex w-4 sm:w-5 md:w-[1.25rem] aspect-square"
            >
              <Image src={copyright} alt="copyright" />
            </motion.span>
            <span className="text-nexa-copyright-blue font-inter text-sm sm:text-[0.9375rem] font-medium leading-[109.809%]">
              2025 Nexa. Trust built on-chain
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
