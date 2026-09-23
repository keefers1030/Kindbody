import React from 'react';
import { Icon } from './Icon.jsx';

const boxes = { sm: 34, md: 42, lg: 52 };

export function IconButton({ icon, label, variant = 'outline', size = 'md', disabled, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = boxes[size] || boxes.md;
  const base = {
    primary: { background: 'var(--kb-yellow)', color: 'var(--kb-navy)', border: '2px solid var(--kb-yellow)' },
    navy: { background: 'var(--kb-navy)', color: 'var(--kb-cream)', border: '2px solid var(--kb-navy)' },
    outline: { background: 'transparent', color: 'var(--kb-navy)', border: '2px solid var(--kb-navy)' },
    ghost: { background: 'transparent', color: 'var(--kb-navy)', border: '2px solid transparent' },
  }[variant];
  const hov = {
    primary: { background: 'var(--kb-yellow-deep)', borderColor: 'var(--kb-yellow-deep)' },
    navy: { background: 'var(--kb-navy-deep)', borderColor: 'var(--kb-navy-deep)' },
    outline: { background: 'var(--kb-navy)', color: 'var(--kb-cream)' },
    ghost: { background: 'var(--kb-cream)' },
  }[variant];
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: box, height: box, borderRadius: 'var(--radius-pill)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        ...base, ...(hover && !disabled ? hov : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
    </button>
  );
}
