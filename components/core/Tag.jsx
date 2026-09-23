import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, selected, onClick, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, lineHeight: 1,
        padding: '10px 16px', borderRadius: 'var(--radius-pill)',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        cursor: clickable ? 'pointer' : 'default',
        border: selected ? '2px solid var(--kb-navy)' : '1px solid var(--border-default)',
        background: selected ? 'var(--kb-navy)' : hover && clickable ? 'var(--kb-cream)' : 'var(--kb-white)',
        color: selected ? 'var(--kb-cream)' : 'var(--kb-navy)',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ display: 'inline-flex', cursor: 'pointer' }}><Icon name="x" size={14} /></span> : null}
    </span>
  );
}
