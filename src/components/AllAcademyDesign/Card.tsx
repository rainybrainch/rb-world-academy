import React from 'react';

interface CardProps {
  variant?: 'default' | 'elevated' | 'glass';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  onClick,
  interactive = false,
}) => {
  const baseStyles = 'rounded-2xl overflow-hidden';

  const variantStyles = {
    default: 'bg-white shadow-card hover:shadow-hover transition-all duration-250 border border-slate-100',
    elevated: 'bg-white shadow-lg hover:shadow-xl transition-all duration-250',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-250',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer hover:scale-102 active:scale-98 transition-transform duration-250'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  image,
  badge,
  children,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-soft">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          {badge}
        </div>
      )}
      {(title || subtitle) && (
        <div className="p-4">
          {title && <h3 className="font-semibold text-base text-navy-800">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-600 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`px-4 py-3 border-t border-slate-100 flex gap-2 ${className}`}>
      {children}
    </div>
  );
};
