import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked, onChange, disabled, id, style, ...rest }) {
  const boxId = id || React.useId();
  return (
    <label htmlFor={boxId} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <input id={boxId} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 22, height: 22, flex: '0 0 auto', borderRadius: 'var(--radius-xs)',
        border: `2px solid ${checked ? 'var(--kb-navy)' : 'var(--border-default)'}`,
        background: checked ? 'var(--kb-navy)' : 'var(--kb-white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
        transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      }}>
        {checked ? <Icon name="check" size={14} color="var(--kb-yellow)" /> : null}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 15, lineHeight: 1.4, color: 'var(--text-primary)' }}>{label}</span>
        {description ? <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
