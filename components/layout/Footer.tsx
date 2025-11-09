'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const platformLinks = ['Features', 'Marketplace', 'Pricing', 'Docs'];
  const techStack = ['Sui', 'Seal Protocol', 'Walrus', 'Groq'];
  
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">
              SYNTHETIC SOULS
            </h3>
            <p className="text-sm text-[#525252]">
              Your Digital Twin Platform
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] mb-4">
              Platform
            </h4>
            <div className="space-y-2">
              {platformLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-[#A3A3A3] hover:text-[#D97706] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Built With */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] mb-4">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#1E1E1E] border border-[#262626] rounded-full text-xs text-[#A3A3A3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-[#262626]">
          <p className="text-sm text-[#525252] text-center">
            © 2024 Synthetic Souls. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
