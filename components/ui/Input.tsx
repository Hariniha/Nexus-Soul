import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#F5F5F5] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#525252]">
            {icon}
          </div>
        )}
        <input
          className={`w-full bg-[#141414] border border-[#262626] text-[#F5F5F5] px-4 py-3 rounded-lg 
            focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 focus:outline-none
            placeholder:text-[#525252] transition-all duration-200
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-[#DC2626]' : ''}
            ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-[#DC2626]">{error}</p>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
  showCounter?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  maxLength,
  showCounter = false,
  className = '',
  value,
  ...props
}) => {
  const currentLength = typeof value === 'string' ? value.length : 0;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#F5F5F5] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-[#141414] border border-[#262626] text-[#F5F5F5] px-4 py-3 rounded-lg 
          focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 focus:outline-none
          placeholder:text-[#525252] transition-all duration-200 resize-none
          ${error ? 'border-[#DC2626]' : ''}
          ${className}`}
        maxLength={maxLength}
        value={value}
        {...props}
      />
      <div className="flex justify-between items-center mt-2">
        {error && <p className="text-sm text-[#DC2626]">{error}</p>}
        {showCounter && maxLength && (
          <p className="text-xs text-[#525252] ml-auto">
            {currentLength}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};
