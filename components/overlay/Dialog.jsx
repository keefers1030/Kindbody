import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open, onClose, title, children, footer, width = 520, style }) {
  if (!open) return null;
  return (
    <div
      role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--overlay-scrim)', padding: 24, fontFamily: 'var(--font-sans)',
      }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-overlay)',
        width, maxWidth: '100%', maxHeight: '86vh', overflow: 'auto', padding: 32, boxSizing: 'border-box',
        animation: 'none', ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
          {title ? <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-5)',
            lineHeight: 1.15, letterSpacing: '0.01em', color: 'var(--text-primary)',
          }}>{title}</h2> : <span />}
          <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} />
        </div>
        <div style={{ marginTop: 18, fontSize: 16, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{children}</div>
        {footer ? <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
