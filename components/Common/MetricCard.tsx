import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: LucideIcon;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  color = 'blue',
  size = 'md'
}) => {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100/50 border-blue-200',
    green: 'from-green-50 to-green-100/50 border-green-200',
    red: 'from-red-50 to-red-100/50 border-red-200',
    yellow: 'from-yellow-50 to-yellow-100/50 border-yellow-200',
    purple: 'from-purple-50 to-purple-100/50 border-purple-200'
  };

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600'
  };

  const sizeClasses = {
    sm: 'p-3 lg:p-4',
    md: 'p-4 lg:p-6',
    lg: 'p-6 lg:p-8'
  };

  return (
    <div className={`
      bg-gradient-to-br ${colorClasses[color]} 
      border backdrop-blur-sm rounded-xl ${sizeClasses[size]}
      hover:shadow-lg transition-all duration-300 shadow-professional
    `}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          {change !== undefined && (
            <div className="flex items-center space-x-1">
              <span className={`text-sm font-medium ${
                change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {change >= 0 ? '+' : ''}{change}%
              </span>
              {changeLabel && (
                <span className="text-xs text-gray-500">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        {Icon && (
          <div className={`p-2 rounded-lg bg-white/70 ${iconColors[color]} shadow-sm`}>
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
};