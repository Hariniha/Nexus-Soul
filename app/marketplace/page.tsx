'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ListingCard } from '@/components/marketplace/ListingCard';
import { Search, Users, Store, TrendingUp } from 'lucide-react';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  
  const categories = ['Professional', 'Creative', 'Personal Growth', 'Entertainment', 'Research'];
  
  const listings = [
    {
      id: '1',
      name: 'Steve Jobs AI Twin',
      creator: 'apple_legacy',
      description: 'Experience conversations with one of tech\'s greatest visionaries. Learn about innovation, design thinking, and building world-changing products.',
      tags: ['Professional', 'Innovation', 'Leadership'],
      rating: 4.9,
      users: 1243,
      messages: 15678,
      price: 500,
      featured: true
    },
    {
      id: '2',
      name: 'Marie Curie Twin',
      creator: 'science_history',
      description: 'Chat with the pioneering physicist and chemist. Discuss scientific discovery, perseverance, and breaking barriers in male-dominated fields.',
      tags: ['Research', 'Science', 'History'],
      rating: 4.8,
      users: 892,
      messages: 9234,
      price: 450,
      featured: true
    },
    {
      id: '3',
      name: 'Marketing Guru AI',
      creator: 'digital_expert',
      description: 'Get expert marketing advice from an AI trained on 20 years of successful campaigns. Perfect for entrepreneurs and marketers.',
      tags: ['Professional', 'Marketing', 'Business'],
      rating: 4.7,
      users: 2156,
      messages: 23456,
      price: 350
    },
    {
      id: '4',
      name: 'Creative Writer Twin',
      creator: 'wordsmith_pro',
      description: 'Collaborate with an AI trained on award-winning literature. Get help with character development, plot structure, and creative inspiration.',
      tags: ['Creative', 'Writing', 'Art'],
      rating: 4.6,
      users: 1567,
      messages: 18903,
      price: 300
    },
    {
      id: '5',
      name: 'Meditation Master',
      creator: 'mindful_soul',
      description: 'Find inner peace with an AI trained on ancient wisdom and modern mindfulness practices. Perfect for stress relief and personal growth.',
      tags: ['Personal Growth', 'Wellness', 'Meditation'],
      rating: 4.9,
      users: 3421,
      messages: 34567,
      price: 250
    },
    {
      id: '6',
      name: 'Startup Founder AI',
      creator: 'entrepreneur_hub',
      description: 'Get advice from an AI trained on successful startup journeys. Learn about fundraising, product-market fit, and scaling your business.',
      tags: ['Professional', 'Startup', 'Business'],
      rating: 4.5,
      users: 987,
      messages: 12345,
      price: 400
    }
  ];
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter(c => c !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };
  
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      <main className="pt-24">
        {/* Header */}
        <div className="py-12 px-8 bg-gradient-to-br from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#F5F5F5] mb-4">
              AI Twin Marketplace
            </h1>
            <p className="text-xl text-[#A3A3A3] mb-8">
              Discover and access unique AI personalities
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 flex items-center gap-3 focus-within:border-[#D97706] focus-within:ring-2 focus-within:ring-[#D97706]/20 transition-all">
                <Search className="w-5 h-5 text-[#525252]" />
                <input
                  type="text"
                  placeholder="Search AI twins by expertise, personality, or use case..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-[#F5F5F5] placeholder:text-[#525252]"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 justify-center mt-8 text-sm text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4" />
                <span>{listings.length} AI Twins</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{categories.length} Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>1.2K Creators</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">Filters</h3>
                  <button
                    onClick={() => {
                      setSelectedCategory([]);
                      setSortBy('popular');
                    }}
                    className="text-sm text-[#D97706] hover:underline"
                  >
                    Clear
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#F5F5F5] mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-5 h-5 bg-[#1E1E1E] border-2 border-[#262626] rounded checked:bg-[#D97706] checked:border-[#D97706]"
                        />
                        <span className="text-sm text-[#A3A3A3]">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Sort By */}
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F5F5] mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-[#1E1E1E] border border-[#262626] text-[#F5F5F5] px-3 py-2 rounded-lg focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 focus:outline-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Listings Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    {...listing}
                    onPreview={() => console.log('Preview', listing.id)}
                    onBuy={() => console.log('Buy', listing.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
