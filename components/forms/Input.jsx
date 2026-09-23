import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, iconLeft, required, disabled, type = 'text', id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return (
    <label htmlFor={inputId} style={{ display: 'block', fontFamily: 'var(--font-sans)', ...style }}>
      {label ? (
        <span style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: 8 }}>
          {label}{required ? <span style={{ color: 'var(--kb-error)' }}> *</span> : null}
        </span>
      ) : null}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 10, background: disabled ? 'var(--kb-grey-100)' : 'var(--kb-white)',
        border: `2px solid ${error ? 'var(--kb-error)' : focus ? 'var(--kb-navy)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)', padding: '0 14px', height: 50,
        boxShadow: focus ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      }}>
        {iconLeft ? <Icon name={iconLeft} size={18} color="var(--kb-grey-600)" /> : null}
        <input
          id={inputId} type={type} disabled={disabled} required={required}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-primary)', minWidth: 0,
          }}
          {...rest}
        />
      </span>
      {error ? <span style={{ display: 'block', fontSize: 12.5, color: 'var(--kb-error)', marginTop: 6 }}>{error}</span>
        : hint ? <span style={{ display: 'block', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 6 }}>{hint}</span> : null}
    </label>
  );
}
