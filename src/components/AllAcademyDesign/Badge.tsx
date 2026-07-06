import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'success' | 'gold' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap';

  const variantStyles = {
    primary: 'bg-ocean-100 text-ocean-700',
    success: 'bg-green-100 text-green-700',
    gold: 'bg-gold-100 text-gold-700',
    secondary: 'bg-navy-100 text-navy-700',
    outline: 'border border-ocean-300 text-ocean-600 bg-ocean-50',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

interface LevelBadgeProps {
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  const levels = {
    beginner: { label: '初心者向け', icon: '🌱', color: 'bg-green-100 text-green-700' },
    intermediate: { label: '中級者向け', icon: '📈', color: 'bg-ocean-100 text-ocean-700' },
    advanced: { label: '上級者向け', icon: '🚀', color: 'bg-purple-100 text-purple-700' },
    expert: { label: 'エキスパート', icon: '⭐', color: 'bg-gold-100 text-gold-700' },
  };

  const current = levels[level];

  return (
    <Badge variant="secondary" size="md" icon={current.icon} className={current.color}>
      {current.label}
    </Badge>
  );
};

interface AchievementBadgeProps {
  icon: string;
  label: string;
  unlocked?: boolean;
  progress?: number;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  icon,
  label,
  unlocked = true,
  progress = 0,
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all duration-250 ${unlocked ? 'bg-gold-50 border-2 border-gold-200' : 'bg-slate-100 border-2 border-slate-200 opacity-60'}`}>
      <div className={`text-4xl transition-transform duration-250 ${unlocked ? 'scale-110' : 'scale-100'}`}>
        {icon}
      </div>
      <p className="text-xs font-semibold text-navy-800 max-w-[60px]">{label}</p>
      {!unlocked && progress > 0 && (
        <div className="w-full h-1 bg-slate-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-ocean-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};
