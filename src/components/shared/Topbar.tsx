'use client';

import logo from '@/images/nexa_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Topbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/profile', label: 'Profile' },
    { href: '/about-us', label: 'About us' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative z-10">
      <div className="py-6 sm:py-8 md:py-12 lg:py-[3.25rem] wrapper flex items-center justify-between px-4 sm:px-6 md:px-8">
        <motion.div
          className="w-16 sm:w-20 md:w-[5rem] relative z-50"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={logo}
            alt="logo"
            quality={100}
            className="w-full"
            priority
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex items-center gap-6 lg:gap-[2.44rem]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <Link
                href={item.href}
                className={`text-nexa-grey text-sm lg:text-[0.9375rem] font-semibold hover:text-nexa-blue transition-colors ${
                  pathname === item.href ? 'underline' : ''
                }`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-64 bg-[#030237] border-l border-[rgba(0,76,235,0.28)] z-40 md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ul className="flex flex-col pt-24 px-6 gap-6">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`text-nexa-grey text-lg font-semibold hover:text-nexa-blue transition-colors block ${
                          pathname === item.href
                            ? 'text-nexa-blue underline'
                            : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Topbar;
