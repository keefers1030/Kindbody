import React from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', style }) {
  const [internal, setInternal] = React.useState(items[0] && (items[0].value ?? items[0]));
  const active = value !== undefined ? value : internal;
  const set = (v) => { setInternal(v); onChange && onChange(v); };
  const norm = items.map((i) => (typeof i === 'string' ? { value: i, label: i } : i));
  return (
    <div role="tablist" style={{
      display: 'flex', gap: variant === 'pill' ? 8 : 32, fontFamily: 'var(--font-sans)',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      flexWrap: 'wrap', ...style,
    }}>
      {norm.map((t) => {
        const on = t.value === active;
        return (
          <button key={t.value} role="tab" aria-selected={on} onClick={() => set(t.value)} style={
            variant === 'pill' ? {
              fontSize: 14, fontWeight: 500, padding: '10px 18px', borderRadius: 'var(--radius-pill)',
              border: on ? '2px solid var(--kb-navy)' : '1px solid var(--border-default)',
              background: on ? 'var(--kb-navy)' : 'var(--kb-white)',
              color: on ? 'var(--kb-cream)' : 'var(--kb-navy)', cursor: 'pointer',
              transition: 'background var(--duration-fast) var(--ease-standard)',
            } : {
              fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '0 0 14px', background: 'none', border: 'none', cursor: 'pointer',
              color: on ? 'var(--kb-navy)' : 'var(--text-muted)',
              borderBottom: `3px solid ${on ? 'var(--kb-yellow)' : 'transparent'}`, marginBottom: -1,
              transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
            }
          }>{t.label}</button>
        );
      })}
    </div>
  );
}
