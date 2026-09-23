import React from 'react';

export function Tooltip({ children, content, placement = 'top', style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}
    >
      {children}
      {show ? (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, zIndex: 50, whiteSpace: 'nowrap',
          background: 'var(--kb-navy)', color: 'var(--kb-cream)',
          fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.3,
          padding: '8px 11px', borderRadius: 'var(--radius-xs)', boxShadow: 'var(--shadow-card)',
        }}>{content}</span>
      ) : null}
    </span>
  );
}
