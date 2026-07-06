import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'default' | 'animated' | 'chunked';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showLabel?: boolean;
  color?: 'ocean' | 'gold' | 'green' | 'navy';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'default',
  size = 'md',
  label,
  showLabel = false,
  color = 'ocean',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  const colorStyles = {
    ocean: 'from-ocean-400 to-ocean-500',
    gold: 'from-gold-400 to-gold-500',
    green: 'from-green-400 to-green-500',
    navy: 'from-navy-600 to-navy-800',
  };

  const getDisplayLabel = () => {
    if (label) return label;
    return `${Math.round(progress)}%`;
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold text-navy-800">進捗</span>
          <span className="text-xs font-semibold text-ocean-600">{getDisplayLabel()}</span>
        </div>
      )}

      {variant === 'chunked' ? (
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${sizeStyles[size]} rounded-full transition-all duration-300 ${
                progress >= (i + 1) * 10
                  ? `bg-gradient-to-r ${colorStyles[color]}`
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      ) : (
        <div className={`w-full ${sizeStyles[size]} bg-slate-200 rounded-full overflow-hidden`}>
          <div
            className={`h-full bg-gradient-to-r ${colorStyles[color]} transition-all duration-500 ${
              variant === 'animated' ? 'animate-pulse-subtle' : ''
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

interface CircularProgressProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  color?: 'ocean' | 'gold' | 'green' | 'navy';
  showLabel?: boolean;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 'md',
  color = 'ocean',
  showLabel = true,
  icon,
  label,
  className = '',
}) => {
  const sizeMap = {
    sm: { radius: 40, circumference: 251 },
    md: { radius: 60, circumference: 377 },
    lg: { radius: 80, circumference: 503 },
  };

  const sizeDim = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  };

  const fontSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const { radius, circumference } = sizeMap[size];
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const colorMap = {
    ocean: { stroke: '#4ecdc4', bg: 'rgba(78, 205, 196, 0.1)' },
    gold: { stroke: '#f5c842', bg: 'rgba(245, 200, 66, 0.1)' },
    green: { stroke: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    navy: { stroke: '#1a1a2e', bg: 'rgba(26, 26, 46, 0.1)' },
  };

  const current = colorMap[color];

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className={`relative ${sizeDim[size]}`}>
        <svg
          className="absolute inset-0 -rotate-90"
          width={radius * 2}
          height={radius * 2}
        >
          {/* Background circle */}
          <circle
            cx={radius}
            cy={radius}
            r={radius - 8}
            fill="none"
            stroke={current.bg}
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx={radius}
            cy={radius}
            r={radius - 8}
            fill="none"
            stroke={current.stroke}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(78, 205, 196, 0.2))' }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon && <div className={`${fontSizes[size]} mb-1`}>{icon}</div>}
          {showLabel && <span className={`font-bold text-navy-800 ${fontSizes[size]}`}>{progress}%</span>}
        </div>
      </div>

      {label && <p className="text-xs font-semibold text-navy-800 text-center">{label}</p>}
    </div>
  );
};

interface StepProgressProps {
  steps: { label: string; completed: boolean }[];
  currentStep: number;
  className?: string;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full font-semibold flex items-center justify-center transition-all duration-250 ${
                i < currentStep
                  ? 'bg-gold-500 text-white scale-110'
                  : i === currentStep
                  ? 'bg-ocean-400 text-white scale-110'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span className="text-xs font-semibold text-center max-w-16 text-navy-800">{step.label}</span>
          </div>

          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 rounded-full transition-all duration-250 ${
                i < currentStep ? 'bg-gold-500' : 'bg-slate-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
