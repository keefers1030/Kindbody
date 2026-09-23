import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ items = [], allowMultiple, defaultOpen = [], style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = (i) => setOpen((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : allowMultiple ? [...prev, i] : [i]);
  return (
    <div style={{ fontFamily: 'var(--font-sans)', borderTop: '1px solid var(--border-subtle)', ...style }}>
      {items.map((it, i) => {
        const on = open.includes(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button onClick={() => toggle(i)} aria-expanded={on} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, lineHeight: 1.25, color: 'var(--text-primary)' }}>{it.title}</span>
              <Icon name={on ? 'minus' : 'plus'} size={22} color="var(--kb-navy)" />
            </button>
            {on ? <div style={{ padding: '0 0 22px', fontSize: 16, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '64ch' }}>{it.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
