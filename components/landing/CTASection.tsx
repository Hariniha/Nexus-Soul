'use client';

import React from 'react';
import { ArrowRight, Shield, Database, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#D97706]/10 via-[#0A0A0A] to-[#DC2626]/10 py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-bold text-[#F5F5F5] mb-6">
          Ready to Create Your Digital Twin?
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-[#A3A3A3] mb-10">
          Start preserving your legacy today. First 3 AI twins are free.
        </p>
        
        {/* CTA Button */}
        <Link href="/create-twin">
          <Button variant="primary" size="large" icon={ArrowRight}>
            Get Started Free
          </Button>
        </Link>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-8 justify-center items-center mt-12">
          <div className="flex items-center gap-2 text-sm text-[#525252]">
            <Shield className="w-4 h-4" />
            <span>Encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#525252]">
            <Database className="w-4 h-4" />
            <span>Decentralized</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#525252]">
            <Lock className="w-4 h-4" />
            <span>Your Data</span>
          </div>
        </div>
      </div>
    </section>
  );
};
