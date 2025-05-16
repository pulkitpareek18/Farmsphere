import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-forest-green text-white hover:bg-dark-olive focus:ring-2 focus:ring-offset-2 focus:ring-forest-green',
    secondary: 'bg-sky-blue text-charcoal hover:bg-sky-blue/80 focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue',
    outline: 'border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-forest-green',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;