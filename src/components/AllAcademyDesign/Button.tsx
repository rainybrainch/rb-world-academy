import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  onClick,
  className = '',
  icon,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 font-semibold rounded-2xl transition-all duration-250 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-gradient-to-br from-ocean-400 to-ocean-500 text-white shadow-md hover:shadow-lg hover:scale-105 disabled:hover:scale-100',
    secondary: 'bg-navy-800 text-white shadow-md hover:shadow-lg hover:scale-105 disabled:hover:scale-100',
    tertiary: 'border-2 border-ocean-400 text-ocean-500 hover:bg-ocean-50 hover:scale-105 disabled:hover:scale-100',
    ghost: 'text-navy-800 hover:bg-slate-100 hover:scale-105 disabled:hover:scale-100',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
