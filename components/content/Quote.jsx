import React from 'react';

export function Quote({ children, attribution, variant = 'card', size = 'md', style }) {
  const sizes = { sm: 17, md: 21, lg: 30 };
  const grounds = {
    card: { background: 'var(--surface-card)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-card)', padding: 32, borderRadius: 'var(--radius-md)' },
    cream: { background: 'var(--kb-cream)', color: 'var(--text-primary)', padding: 32, borderRadius: 'var(--radius-md)' },
    navy: { background: 'var(--kb-navy)', color: 'var(--kb-cream)', padding: 32, borderRadius: 'var(--radius-md)' },
    plain: { background: 'transparent', color: 'var(--text-primary)', padding: 0 },
  };
  const g = grounds[variant];
  return (
    <figure style={{ margin: 0, fontFamily: 'var(--font-sans)', ...g, ...style }}>
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: sizes[size], lineHeight: 1.3, letterSpacing: '0.005em', textWrap: 'pretty',
      }}>{'\u201C'}{children}{'\u201D'}</blockquote>
      {attribution ? <figcaption style={{
        marginTop: 18, fontSize: 13, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
        color: variant === 'navy' ? 'var(--kb-yellow)' : 'var(--text-muted)',
      }}>{attribution}</figcaption> : null}
    </figure>
  );
}
