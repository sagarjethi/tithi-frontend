import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-moon-400 rounded-full flex items-center justify-center moon-glow`}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 40 40" 
          xmlns="http://www.w3.org/2000/svg"
          className="p-2"
        >
          {/* Night sky background */}
          <circle cx="20" cy="20" r="18" fill="#1e293b"/>
          
          {/* Crescent moon */}
          <path d="M 12 20 A 8 8 0 0 1 28 20 A 8 8 0 0 1 12 20 Z" fill="#facc15"/>
          
          {/* Stars */}
          <circle cx="24" cy="14" r="0.6" fill="#facc15"/>
          <circle cx="28" cy="18" r="0.5" fill="#facc15"/>
          <circle cx="26" cy="24" r="0.4" fill="#facc15"/>
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold text-white ${textSizes[size]}`}>
          Tithi.xyz
        </span>
      )}
    </div>
  );
};

export default Logo;
