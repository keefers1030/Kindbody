import React from 'react';

export function Badge({ children, tone = 'navy', style, ...rest }) {
  const tones = {
    navy: { background: 'var(--kb-navy)', color: 'var(--kb-cream)' },
    yellow: { background: 'var(--kb-yellow)', color: 'var(--kb-navy)' },
    rose: { background: 'var(--kb-rose)', color: 'var(--kb-navy)' },
    cream: { background: 'var(--kb-cream)', color: 'var(--kb-navy)' },
    success: { background: 'var(--kb-success-soft)', color: 'var(--kb-success)' },
    warning: { background: 'var(--kb-warning-soft)', color: 'var(--kb-warning)' },
    error: { background: 'var(--kb-error-soft)', color: 'var(--kb-error)' },
  };
  return (
    <span style={{
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1,
      padding: '6px 11px', borderRadius: 'var(--radius-pill)',
      display: 'inline-block', ...tones[tone], ...style,
    }} {...rest}>{children}</span>
  );
}
