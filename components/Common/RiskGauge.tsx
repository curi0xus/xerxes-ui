import React from 'react';

interface RiskGaugeProps {
  value: number;
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RiskGauge: React.FC<RiskGaugeProps> = ({
  value,
  title,
  subtitle,
  size = 'md'
}) => {
  const sizeConfig = {
    sm: { radius: 35, strokeWidth: 5, fontSize: 'text-base' },
    md: { radius: 60, strokeWidth: 8, fontSize: 'text-2xl' },
    lg: { radius: 80, strokeWidth: 10, fontSize: 'text-3xl' }
  };

  const config = sizeConfig[size];
  const circumference = 2 * Math.PI * config.radius;
  const strokeDasharray = circumference * 0.75; // 3/4 circle
  const strokeDashoffset = strokeDasharray - (strokeDasharray * Math.min(value, 100)) / 100;

  const getColor = (val: number) => {
    if (val <= 40) return '#10B981'; // green
    if (val <= 70) return '#F59E0B'; // yellow
    return '#EF4444'; // red
  };

  const getRiskLevel = (val: number) => {
    if (val <= 40) return 'LOW';
    if (val <= 70) return 'MEDIUM';
    return 'HIGH';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          width={config.radius * 2 + 20}
          height={config.radius * 2 + 20}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={config.radius + 10}
            cy={config.radius + 10}
            r={config.radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={config.strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={circumference * 0.125}
            strokeLinecap="round"
          />
          
          {/* Progress circle */}
          <circle
            cx={config.radius + 10}
            cy={config.radius + 10}
            r={config.radius}
            fill="none"
            stroke={getColor(value)}
            strokeWidth={config.strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset + circumference * 0.125}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold text-gray-900 ${config.fontSize}`}>
            {Math.round(value)}
          </span>
          <span className="text-xs text-gray-500 mt-1">
            {getRiskLevel(value)}
          </span>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
};