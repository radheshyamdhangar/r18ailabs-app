'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center"
          >
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </motion.div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-[#FF6B00] font-['Montserrat']">R18</span>
            <span className="text-xs font-light text-[#0A3D9C] font-['Inter']">AI LABS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[#FF6B00] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#FF6B00] text-white font-semibold rounded-lg hover:bg-[#FF6B00]/90 transition-colors"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-gray-700 hover:text-[#FF6B00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2 bg-[#FF6B00] text-white font-semibold rounded-lg hover:bg-[#FF6B00]/90 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
