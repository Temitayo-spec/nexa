'use client';

import logo from '@/images/nexa_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Topbar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/profile', label: 'Profile' },
    { href: '/about-us', label: 'About us' },
  ];

  return (
    <nav className="relative z-10">
      <div className="py-[3.25rem] wrapper flex items-center justify-between">
        <motion.div
          className="w-[5rem]"
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

        <motion.ul
          className="flex items-center gap-[2.44rem]"
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
                className="text-nexa-grey text-[0.9375rem] font-semibold hover:text-nexa-blue transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Topbar;
