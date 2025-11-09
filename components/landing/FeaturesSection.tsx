'use client';

import React from 'react';
import { Shield, Database, Brain, Store, Clock, Key } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'Your data encrypted with Seal Protocol before storage. Complete privacy guaranteed.'
  },
  {
    icon: Database,
    title: 'Decentralized Storage',
    description: 'Store encrypted data on Walrus Protocol. Distributed, secure, and always accessible.'
  },
  {
    icon: Brain,
    title: 'AI Personality Match',
    description: 'AI trained to think and respond exactly like you. Captures your unique essence.'
  },
  {
    icon: Store,
    title: 'Marketplace Access',
    description: 'Monetize your digital twin by listing on marketplace. Earn credits from interactions.'
  },
  {
    icon: Clock,
    title: 'Temporal Analysis',
    description: 'Track how your personality evolved over time. See your growth journey.'
  },
  {
    icon: Key,
    title: 'Full Control',
    description: 'You own the decryption keys, you control access. Your data, your rules.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F5F5F5] mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-[#A3A3A3]">
            Everything you need to create and manage your digital twin
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#1E1E1E] border border-[#262626] p-6 rounded-xl 
                         hover:border-[#D97706] hover:shadow-lg hover:shadow-orange-900/10 
                         transition-all duration-300"
            >
              {/* Icon */}
              <feature.icon className="w-8 h-8 text-[#D97706] mb-4" />
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed text-[#A3A3A3]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
