import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#D97706]/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-[#D97706] text-white rounded-lg hover:bg-[#B45309] hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[#D97706]/30',
    secondary: 'bg-[#1E1E1E] border border-[#404040] text-[#F5F5F5] rounded-lg hover:bg-[#252525] hover:border-[#D97706] active:scale-[0.98]',
    ghost: 'bg-transparent text-[#A3A3A3] rounded-lg hover:text-[#D97706] hover:bg-[#1C1C1C] active:scale-[0.98]'
  };
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};
