import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, error, options = [], placeholder, required, disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return (
    <label htmlFor={selectId} style={{ display: 'block', fontFamily: 'var(--font-sans)', ...style }}>
      {label ? (
        <span style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
          {label}{required ? <span style={{ color: 'var(--kb-error)' }}> *</span> : null}
        </span>
      ) : null}
      <span style={{ position: 'relative', display: 'block' }}>
        <select
          id={selectId} disabled={disabled} required={required}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: 50, appearance: 'none', WebkitAppearance: 'none',
            padding: '0 42px 0 14px', boxSizing: 'border-box',
            fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-primary)',
            background: disabled ? 'var(--kb-grey-100)' : 'var(--kb-white)',
            border: `2px solid ${error ? 'var(--kb-error)' : focus ? 'var(--kb-navy)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-sm)', outline: 'none',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none',
          }}
          {...rest}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: 15, pointerEvents: 'none' }}>
          <Icon name="chevron-down" size={20} color="var(--kb-navy)" />
        </span>
      </span>
      {error ? <span style={{ display: 'block', fontSize: 12.5, color: 'var(--kb-error)', marginTop: 6 }}>{error}</span>
        : hint ? <span style={{ display: 'block', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 6 }}>{hint}</span> : null}
    </label>
  );
}
