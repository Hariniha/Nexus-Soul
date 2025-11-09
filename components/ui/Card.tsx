import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'base' | 'feature' | 'gradient';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'base',
  className = '',
  hover = true,
  onClick
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    base: 'bg-[#1E1E1E] border border-[#262626] p-6',
    feature: 'bg-gradient-to-br from-[#1E1E1E] to-[#141414] border border-[#262626] p-8 rounded-2xl',
    gradient: 'bg-gradient-to-br from-[#D97706]/10 to-[#DC2626]/10 border border-[#404040] p-8 rounded-2xl'
  };
  
  const hoverStyles = hover ? 'hover:border-[#404040] hover:scale-[1.01]' : '';
  const cursorStyle = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${cursorStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
