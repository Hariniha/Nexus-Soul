'use client';

import React, { useState } from 'react';

type TabType = 'Personal' | 'Professional' | 'Creative' | 'Legacy';

interface UseCase {
  title: string;
  description: string;
}

const useCases: Record<TabType, UseCase[]> = {
  Personal: [
    {
      title: 'Talk to Younger Self',
      description: 'Train on old journals and messages. Have conversations with your past self to gain perspective.'
    },
    {
      title: 'Decision Advisor',
      description: 'AI helps make decisions based on your past patterns and values. Stay true to yourself.'
    },
    {
      title: 'Personal Growth Tracker',
      description: 'See how your thoughts and opinions have evolved. Track your personal development journey.'
    },
    {
      title: 'Memory Preservation',
      description: 'Never forget important details, stories, or moments. Your AI twin remembers everything.'
    }
  ],
  Professional: [
    {
      title: 'Corporate Knowledge',
      description: 'Preserve institutional wisdom and expertise. Never lose critical knowledge when employees leave.'
    },
    {
      title: 'Mentorship at Scale',
      description: 'Share your expertise via AI. Mentor multiple people simultaneously without time constraints.'
    },
    {
      title: 'Exit Planning',
      description: 'Leave an AI version when transitioning roles. Ensure smooth knowledge transfer.'
    },
    {
      title: 'Team Training',
      description: 'Train new hires with AI versions of experienced team members. Accelerate onboarding.'
    }
  ],
  Creative: [
    {
      title: 'Character Research',
      description: 'Writers can interview AI personalities for authentic character development.'
    },
    {
      title: 'Perspective Generation',
      description: 'Get diverse viewpoints for creative projects. See ideas through different lenses.'
    },
    {
      title: 'Historical Recreation',
      description: 'Recreate historical figures based on their writings. Bring history to life.'
    },
    {
      title: 'Content Creation',
      description: 'Generate content in your authentic voice. Maintain consistency across all platforms.'
    }
  ],
  Legacy: [
    {
      title: 'Family Connection',
      description: 'Loved ones can chat with you after you\'re gone. Leave a lasting presence for future generations.'
    },
    {
      title: 'Wisdom Sharing',
      description: 'Pass knowledge to future generations. Your wisdom lives on indefinitely.'
    },
    {
      title: 'Video Messages',
      description: 'AI creates personalized messages for specific future events. Graduations, weddings, birthdays.'
    },
    {
      title: 'Estate Planning',
      description: 'AI explains your wishes and decisions. Provides context and reasoning to beneficiaries.'
    }
  ]
};

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Personal');
  
  const tabs: TabType[] = ['Personal', 'Professional', 'Creative', 'Legacy'];
  
  return (
    <section className="bg-[#0A0A0A] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F5F5F5] mb-4">
            Endless Possibilities
          </h2>
          <p className="text-xl text-[#A3A3A3]">
            Discover how digital twins transform every aspect of life
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#D97706] text-white border border-[#D97706]'
                  : 'bg-[#1E1E1E] border border-[#262626] text-[#A3A3A3] hover:border-[#404040]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {useCases[activeTab].map((useCase) => (
            <div
              key={useCase.title}
              className="bg-[#1E1E1E] border border-[#262626] border-l-4 border-l-[#D97706] p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A3A3A3]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
