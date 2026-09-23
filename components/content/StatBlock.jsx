import React from 'react';

export function StatBlock({ value, label, tone = 'navy', align = 'left', size = 'md', style }) {
  const sizes = { sm: 'var(--type-display-4)', md: 'var(--type-display-2)', lg: 'var(--type-display-1)' };
  const ink = tone === 'light' ? 'var(--kb-cream)' : 'var(--kb-navy)';
  return (
    <div style={{ textAlign: align, fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: sizes[size],
        lineHeight: 1, letterSpacing: '0.01em', color: ink,
      }}>{value}</div>
      <div style={{
        marginTop: 12, fontSize: 14, fontWeight: 500, lineHeight: 1.4, maxWidth: '26ch',
        color: tone === 'light' ? 'rgba(239,233,226,.8)' : 'var(--text-secondary)',
        marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined,
      }}>{label}</div>
    </div>
  );
}
