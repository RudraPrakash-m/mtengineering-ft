import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900',
    secondary: 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400',
    amber: 'bg-amber-600 text-white hover:bg-amber-700 border border-amber-600 shadow-amber-600/20',
    brass: 'bg-amber-600 text-white hover:bg-amber-700 border border-amber-600',
    darkOutline: 'bg-transparent text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600',
    link: 'bg-transparent text-amber-600 hover:text-amber-700 p-0 shadow-none gap-1 underline-offset-4',
  };

  const renderIcon = () => {
    if (icon === 'arrow-up-right') {
      return <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    }
    if (icon === 'arrow-right') {
      return <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />;
    }
    return null;
  };

  const combinedClass = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.primary} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
