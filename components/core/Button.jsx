import React from 'react';
import { Icon } from './Icon.jsx';

const sizes = {
  sm: { padding: '9px 18px', fontSize: 13, gap: 6 },
  md: { padding: '13px 26px', fontSize: 15, gap: 8 },
  lg: { padding: '17px 34px', fontSize: 16, gap: 10 },
};

const variants = {
  primary: { background: 'var(--kb-yellow)', color: 'var(--kb-navy)', border: '2px solid var(--kb-yellow)' },
  navy: { background: 'var(--kb-navy)', color: 'var(--kb-cream)', border: '2px solid var(--kb-navy)' },
  outline: { background: 'transparent', color: 'var(--kb-navy)', border: '2px solid var(--kb-navy)' },
  'outline-light': { background: 'transparent', color: 'var(--kb-cream)', border: '2px solid var(--kb-cream)' },
  ghost: { background: 'transparent', color: 'var(--kb-navy)', border: '2px solid transparent' },
};

const hovers = {
  primary: { background: 'var(--kb-yellow-deep)', borderColor: 'var(--kb-yellow-deep)' },
  navy: { background: 'var(--kb-navy-deep)', borderColor: 'var(--kb-navy-deep)' },
  outline: { background: 'var(--kb-navy)', color: 'var(--kb-cream)' },
  'outline-light': { background: 'var(--kb-cream)', color: 'var(--kb-navy)' },
  ghost: { background: 'var(--kb-cream)' },
};

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth, disabled, as, href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const s = sizes[size] || sizes.md;
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '0.04em',
        textTransform: 'uppercase', textDecoration: 'none', lineHeight: 1,
        borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: s.padding, fontSize: s.fontSize,
        transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        opacity: disabled ? 0.45 : 1,
        ...variants[variant],
        ...(hover && !disabled ? hovers[variant] : null),
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={size === 'sm' ? 16 : 18} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={size === 'sm' ? 16 : 18} /> : null}
    </Tag>
  );
}
