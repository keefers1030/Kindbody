import React from 'react';

export function Card({ children, variant = 'elevated', interactive, padding = 24, radius = 'var(--radius-md)', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    elevated: { background: 'var(--surface-card)', boxShadow: 'var(--shadow-card)', border: 'none' },
    hairline: { background: 'var(--surface-card)', border: '1px solid var(--border-default)', boxShadow: 'none' },
    cream: { background: 'var(--kb-cream)', border: '1px solid var(--border-subtle)', boxShadow: 'none' },
    navy: { background: 'var(--kb-navy)', color: 'var(--kb-cream)', border: 'none', boxShadow: 'none' },
    yellow: { background: 'var(--kb-yellow)', color: 'var(--kb-navy)', border: 'none', boxShadow: 'none' },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: radius, padding, boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)', color: 'var(--text-primary)',
        transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : undefined,
        ...variants[variant],
        ...(interactive && hover ? { boxShadow: 'var(--shadow-raised)', transform: 'translateY(-2px)' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
