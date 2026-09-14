'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Forge Labs Frontier',
      badge: '85% accuracy',
      description: [
        { label: 'Accuracy', before: '50%', after: '85%', lift: '+70% lift' },
        { label: 'Processing Time', before: '45m', after: '1.8m', lift: '-96%' },
      ],
      features: '3-agent Retriever → Verifier retry → Compliance Judge',
      highlights: ['source + page citations', 'human flag <0.75'],
      link: 'https://github.com/radheshyamdhangar/forge-labs-frontier',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Omni-Assist',
      badge: 'Multilingual Real-time',
      description: 'Conversational AI for support',
      features: 'Integrates knowledge bases, CRM, ticketing systems',
      link: 'https://github.com/radheshyamdhangar/omni-assist',
      highlighted: false,
    },
    {
      id: 3,
      name: 'Offline Banking Assistant',
      badge: 'Air-Gapped Secure',
      description: 'Fully offline, on-prem, privacy compliant',
      features: 'Enterprise-grade security for banking systems',
      link: 'https://github.com/radheshyamdhangar/offline-banking-assistant',
      highlighted: true,
    },
    {
      id: 4,
      name: 'BFSI RAG Agent',
      badge: 'Retrieval-Augmented',
      description: 'RAG for BFSI data queries with citations',
      features: 'Azure AI Search integration, enterprise queries',
      link: 'https://github.com/radheshyamdhangar/bfsi-rag-agent',
      highlighted: false,
    },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FF6B00]">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production-ready AI solutions for enterprise challenges
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                product.highlighted
                  ? 'bg-white border-2 border-[#FF6B00] shadow-2xl'
                  : 'bg-gray-50 border border-gray-200 hover:border-[#FF6B00]/30 hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              <div className="mb-4">
                <Badge className={`${
                  product.highlighted
                    ? 'bg-[#FF6B00] text-white'
                    : 'bg-[#0A3D9C] text-white'
                }`}>
                  {product.badge}
                </Badge>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>

              {/* Product Description */}
              <p className="text-gray-600 mb-4">
                {typeof product.description === 'string'
                  ? product.description
                  : product.description[0]?.label}
              </p>

              {/* Metrics for Forge Labs */}
              {Array.isArray(product.description) && (
                <div className="space-y-3 mb-4">
                  {product.description.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-gray-400">{metric.before}</span>
                        <span className="font-semibold text-[#FF6B00]">→ {metric.after}</span>
                        <span className="text-green-600 font-medium text-xs">({metric.lift})</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Features */}
              <p className="text-sm text-gray-700 font-medium mb-3">{product.features}</p>

              {/* Highlights */}
              {product.highlights && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-[#0A3D9C] px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {/* Link Button */}
              <Link
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                    product.highlighted
                      ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90'
                      : 'bg-[#0A3D9C] text-white hover:bg-[#0A3D9C]/90'
                  }`}
                >
                  View on GitHub
                  <ArrowUpRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
