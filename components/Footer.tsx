'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Users, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 pb-12 border-b border-gray-800"
        >        <h3 className="text-lg font-semibold mb-6">Certifications & Trust</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <div>
                <p className="font-semibold">Microsoft</p>
                <p className="text-sm text-gray-400">GH-300 Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0A3D9C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <p className="font-semibold">AI Certification</p>
                <p className="text-sm text-gray-400">AI-102 Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <div>
                <p className="font-semibold">Advanced Builder</p>
                <p className="text-sm text-gray-400">AB-100 Certified</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/footer.svg"
                alt="R18 AI Labs Logo"
                width={300}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Building safe, scalable AI solutions for enterprise challenges.
            </p>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="https://github.com/radheshyamdhangar/forge-labs-frontier" 
                  className="hover:text-[#FF6B00] transition-colors">
                  Forge Labs Frontier
                </Link>
              </li>
              <li>
                <Link href="https://github.com/radheshyamdhangar/omni-assist"
                  className="hover:text-[#FF6B00] transition-colors">
                  Omni-Assist
                </Link>
              </li>
              <li>
                <Link href="https://github.com/radheshyamdhangar/offline-banking-assistant"
                  className="hover:text-[#FF6B00] transition-colors">
                  Offline Banking Assistant
                </Link>
              </li>
              <li>
                <Link href="https://github.com/radheshyamdhangar/bfsi-rag-agent"
                  className="hover:text-[#FF6B00] transition-colors">
                  BFSI RAG Agent
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF6B00] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B00] transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B00] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <Link href="https://github.com/r18ailabs" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                >
                  <Code size={20} />
                </motion.div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0A3D9C] transition-colors"
                >
                  <Users size={20} />
                </motion.div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                >
                  <MessageCircle size={20} />
                </motion.div>
              </Link>
              <Link href="mailto:hello@r18ailabs.com">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0A3D9C] transition-colors"
                >
                  <Mail size={20} />
                </motion.div>
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              <a href="mailto:radheshyam@r18ailabs.com" className="hover:text-[#FF6B00] transition-colors">
                support@r18ailabs.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            ©2026 <span className="text-[#FF6B00] font-semibold">R18 AI Labs</span> | All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#FF6B00] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FF6B00] transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
