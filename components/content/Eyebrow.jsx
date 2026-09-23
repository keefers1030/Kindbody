import React from 'react';

export function Eyebrow({ children, tone = 'navy', style, ...rest }) {
  const colors = { navy: 'var(--kb-navy)', muted: 'var(--text-muted)', cream: 'var(--kb-cream)', yellow: 'var(--kb-yellow)' };
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 'var(--type-eyebrow-size)', fontWeight: 700,
      letterSpacing: 'var(--type-eyebrow-tracking)', textTransform: 'uppercase', lineHeight: 1.2,
      color: colors[tone], ...style,
    }} {...rest}>{children}</div>
  );
}
