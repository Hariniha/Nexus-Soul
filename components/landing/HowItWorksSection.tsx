'use client';

import React from 'react';
import { Upload, Brain, Users, Shield } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Upload conversations, documents, images, or any content that represents you. Our system securely processes your unique data.'
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Trains Securely',
    description: 'Your data is encrypted with Seal Protocol before training. The AI learns your patterns, personality, and communication style.'
  },
  {
    number: '03',
    icon: Users,
    title: 'Meet Your Twin',
    description: 'Chat with your AI twin and see how accurately it captures your essence. Test it, refine it, and watch it evolve.'
  },
  {
    number: '04',
    icon: Shield,
    title: 'Control & Monetize',
    description: 'You own the decryption keys. Choose who can access your twin. List it on the marketplace and earn credits.'
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#0A0A0A] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F5F5F5] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[#A3A3A3]">
            Create your digital twin in four simple steps
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-[#1E1E1E] border border-[#262626] p-8 rounded-2xl hover:border-[#404040] hover:scale-[1.02] transition-all duration-300"
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-[#D97706]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#D97706]">{step.number}</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#D97706]/20 to-transparent rounded-xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-[#D97706]" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-base leading-relaxed text-[#A3A3A3]">
                {step.description}
              </p>
              
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[calc(25%+2rem)] w-[calc(25%-4rem)] h-0.5 border-t-2 border-dashed border-[#404040]" 
                     style={{ left: `calc(${(index + 1) * 25}% - 2rem)` }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
