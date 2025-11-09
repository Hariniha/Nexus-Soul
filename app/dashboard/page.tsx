'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { TwinCard } from '@/components/ai-twin/TwinCard';
import { Button } from '@/components/ui/Button';
import { 
  Users, Store, MessageSquare, TrendingUp, Coins, 
  ArrowUpRight, ArrowDownLeft, Plus 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  
  const overviewCards = [
    {
      icon: Users,
      value: '3',
      label: 'AI Twins',
      trend: '+2 this month',
      trendPositive: true
    },
    {
      icon: Store,
      value: '1',
      label: 'Listed',
      trend: 'Active',
      trendPositive: true
    },
    {
      icon: MessageSquare,
      value: '234',
      label: 'Conversations',
      trend: '+45 this week',
      trendPositive: true
    },
    {
      icon: TrendingUp,
      value: '1,250',
      label: 'Credits Earned',
      trend: '+350',
      trendPositive: true
    }
  ];
  
  const myTwins = [
    {
      id: '1',
      name: 'Professional Me',
      avatar: 'P',
      createdAt: 'Created 2 days ago',
      filesCount: 12,
      conversationsCount: 47
    },
    {
      id: '2',
      name: 'Creative Twin',
      avatar: 'C',
      createdAt: 'Created 1 week ago',
      filesCount: 8,
      conversationsCount: 23
    },
    {
      id: '3',
      name: 'Casual Me',
      avatar: 'C',
      createdAt: 'Created 2 weeks ago',
      filesCount: 15,
      conversationsCount: 89
    }
  ];
  
  const marketplaceActivity = [
    {
      twin: 'Professional Me',
      views: 1234,
      purchases: 23,
      revenue: 1150,
      status: 'active'
    }
  ];
  
  const transactions = [
    {
      type: 'earned',
      description: 'Purchase of Professional Me',
      amount: 50,
      date: '2 hours ago'
    },
    {
      type: 'spent',
      description: 'Purchased Steve Jobs AI Twin',
      amount: -500,
      date: '1 day ago'
    },
    {
      type: 'earned',
      description: 'Purchase of Professional Me',
      amount: 50,
      date: '2 days ago'
    },
    {
      type: 'spent',
      description: 'Upgraded storage plan',
      amount: -100,
      date: '3 days ago'
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Dashboard Header */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">Dashboard</h1>
              <p className="text-lg text-[#A3A3A3]">Welcome back, User</p>
            </div>
            
            {/* Credits Balance */}
            <div className="bg-gradient-to-br from-[#D97706]/20 to-transparent border border-[#404040] rounded-xl px-6 py-3 flex items-center gap-3">
              <Coins className="w-6 h-6 text-[#D97706]" />
              <div>
                <p className="text-xl font-semibold text-[#F5F5F5]">2,450 Credits</p>
                <Button variant="secondary" size="small" className="mt-2">
                  Buy More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {overviewCards.map((card) => (
              <div
                key={card.label}
                className="bg-[#1E1E1E] border border-[#262626] p-6 rounded-xl hover:border-[#404040] transition-colors"
              >
                <card.icon className="w-6 h-6 text-[#D97706] mb-4" />
                <p className="text-3xl font-bold text-[#F5F5F5] mb-1">{card.value}</p>
                <p className="text-sm text-[#A3A3A3] mb-2">{card.label}</p>
                <p className={`text-xs ${card.trendPositive ? 'text-[#059669]' : 'text-[#DC2626]'}`}>
                  {card.trend}
                </p>
              </div>
            ))}
          </div>
          
          {/* My AI Twins Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">My AI Twins</h2>
              <button className="text-sm text-[#D97706] hover:underline">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {myTwins.map((twin) => (
                <TwinCard
                  key={twin.id}
                  {...twin}
                  onChat={() => router.push(`/chat/${twin.id}`)}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              ))}
            </div>
          </div>
          
          {/* Marketplace Activity */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">
              Marketplace Activity
            </h2>
            
            <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#141414] border-b border-[#262626]">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">AI Twin</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">Views</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">Purchases</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">Revenue</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">Status</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A3A3A3]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {marketplaceActivity.map((activity, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#262626] hover:bg-[#1C1C1C] transition-colors"
                    >
                      <td className="p-4 text-sm text-[#F5F5F5]">{activity.twin}</td>
                      <td className="p-4 text-sm text-[#F5F5F5]">{activity.views}</td>
                      <td className="p-4 text-sm text-[#F5F5F5]">{activity.purchases}</td>
                      <td className="p-4 text-sm text-[#F5F5F5]">{activity.revenue} credits</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-[#059669]/10 text-[#059669] text-xs font-medium rounded-full">
                          {activity.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="small">
                          Manage
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Credits Section */}
          <div className="bg-gradient-to-br from-[#D97706]/10 to-transparent border border-[#404040] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-6">
              Credits & Billing
            </h2>
            
            <div className="mb-6">
              <p className="text-5xl font-bold text-[#D97706] mb-2">2,450</p>
              <p className="text-lg text-[#A3A3A3]">Available Credits</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4">
                Recent Transactions
              </h3>
              
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="bg-[#1E1E1E]/50 p-3 rounded-lg flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {transaction.type === 'earned' ? (
                        <ArrowDownLeft className="w-5 h-5 text-[#059669]" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-[#DC2626]" />
                      )}
                      <div>
                        <p className="text-sm text-[#F5F5F5]">{transaction.description}</p>
                        <p className="text-xs text-[#525252]">{transaction.date}</p>
                      </div>
                    </div>
                    <p
                      className={`text-sm font-semibold ${
                        transaction.type === 'earned' ? 'text-[#059669]' : 'text-[#DC2626]'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <Button variant="primary" size="large" icon={Plus} iconPosition="left" className="mt-6">
              Buy More Credits
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
