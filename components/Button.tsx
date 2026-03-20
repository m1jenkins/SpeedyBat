import React from 'react';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'alert';
  children: React.ReactNode;
  className?: string;
};

type AnchorProps = BaseButtonProps & {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonNodeProps = BaseButtonProps & {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorProps | ButtonNodeProps;

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 border-2 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:border-slate-500",
    secondary: "bg-transparent border-slate-600 text-slate-300 hover:border-white hover:text-white",
    alert: "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};