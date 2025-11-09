'use client';

import React from 'react';
import { Plus } from 'lucide-react';

interface CreateNewCardProps {
  onClick: () => void;
}

export const CreateNewCard: React.FC<CreateNewCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-[#D97706]/10 to-[#DC2626]/10 border-2 border-dashed border-[#404040] p-8 rounded-2xl min-h-[300px] 
                 flex flex-col items-center justify-center cursor-pointer 
                 hover:border-[#D97706] hover:scale-[1.02] transition-all duration-300"
    >
      <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center p-4 mb-4">
        <Plus className="w-12 h-12 text-[#D97706]" />
      </div>
      
      <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
        Create New AI Twin
      </h3>
      
      <p className="text-sm text-[#A3A3A3] text-center">
        Upload data and train your digital clone
      </p>
    </div>
  );
};
