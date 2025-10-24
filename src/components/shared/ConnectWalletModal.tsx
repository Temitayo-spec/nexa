'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { walletAddress, setWalletAddress } = useStore();

  const connectWallet = async () => {
    if (typeof window === 'undefined') return;
    const { ethereum } = window as any;

    if (!ethereum) {
      setError('No wallet detected. Please install MetaMask.');
      return;
    }

    try {
      setLoading(true);
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setWalletAddress(account);
      onClose();
      router.push('/seller');
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0A2A] border border-blue-800/40 rounded-2xl p-6 w-[90%] max-w-sm z-50 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Connect Your Wallet</h2>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button
              onClick={connectWallet}
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? 'Connecting...' : 'Connect with MetaMask'}
            </button>

            <button
              onClick={onClose}
              className="w-full py-2 mt-3 border border-gray-600 hover:bg-gray-800 text-gray-300 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
