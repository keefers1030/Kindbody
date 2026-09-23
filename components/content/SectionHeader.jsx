import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function SectionHeader({ eyebrow, title, intro, align = 'left', tone = 'navy', size = 'lg', action, style }) {
  const sizes = { sm: 'var(--type-display-5)', md: 'var(--type-display-4)', lg: 'var(--type-display-3)', xl: 'var(--type-display-2)' };
  const ink = tone === 'light' ? 'var(--kb-cream)' : 'var(--kb-navy)';
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32,
      textAlign: align, ...style,
    }}>
      <div style={{ maxWidth: '38ch' }}>
        {eyebrow ? <Eyebrow tone={tone === 'light' ? 'yellow' : 'navy'} style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow> : null}
        <h2 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: sizes[size], lineHeight: 1.06, letterSpacing: '0.01em', color: ink, textWrap: 'pretty',
        }}>{title}</h2>
        {intro ? <p style={{
          margin: '18px 0 0', fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.55,
          color: tone === 'light' ? 'rgba(239,233,226,.82)' : 'var(--text-secondary)', maxWidth: '58ch',
        }}>{intro}</p> : null}
      </div>
      {action ? <div style={{ flex: '0 0 auto', paddingBottom: 4 }}>{action}</div> : null}
    </div>
  );
}
