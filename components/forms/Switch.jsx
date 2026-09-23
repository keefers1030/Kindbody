import React from 'react';

export function Switch({ label, checked, onChange, disabled, id, style, ...rest }) {
  const switchId = id || React.useId();
  return (
    <label htmlFor={switchId} style={{ display: 'inline-flex', gap: 12, alignItems: 'center', fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={switchId} type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 46, height: 26, borderRadius: 'var(--radius-pill)', flex: '0 0 auto',
        background: checked ? 'var(--kb-navy)' : 'var(--kb-grey-200)',
        position: 'relative', transition: 'background var(--duration-base) var(--ease-standard)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: checked ? 23 : 3, width: 20, height: 20, borderRadius: '50%',
          background: checked ? 'var(--kb-yellow)' : 'var(--kb-white)',
          boxShadow: '0 1px 3px rgba(39,42,94,.25)',
          transition: 'left var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)',
        }} />
      </span>
      {label ? <span style={{ fontSize: 15, color: 'var(--text-primary)' }}>{label}</span> : null}
    </label>
  );
}
