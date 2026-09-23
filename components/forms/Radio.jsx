import React from 'react';

export function Radio({ label, description, checked, onChange, name, value, disabled, id, style, ...rest }) {
  const radioId = id || React.useId();
  return (
    <label htmlFor={radioId} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={radioId} type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 22, height: 22, flex: '0 0 auto', borderRadius: '50%', marginTop: 1,
        border: `2px solid ${checked ? 'var(--kb-navy)' : 'var(--border-default)'}`,
        background: 'var(--kb-white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--duration-fast) var(--ease-standard)',
      }}>
        {checked ? <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--kb-navy)' }} /> : null}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 15, lineHeight: 1.4, color: 'var(--text-primary)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
