import React from 'react';

const SRC = {
  navy: 'assets/logos/kindbody-logo-navy.svg',
  white: 'assets/logos/kindbody-logo-white.svg',
  yellow: 'assets/logos/kindbody-logo-yellow.svg',
  mark: 'assets/logos/kindbody-logomark.svg',
};

export function Logo({ variant = 'navy', width = 180, boxed, basePath = '', href, style }) {
  const isMark = variant === 'mark';
  const img = (
    <img
      src={basePath + SRC[variant]}
      alt="Kindbody"
      style={{ display: 'block', width: isMark ? width : width, height: 'auto' }}
    />
  );
  // Per the guidelines: on busy backgrounds and photography, use the navy logo inside a yellow box.
  const content = boxed
    ? <span style={{ background: 'var(--kb-yellow)', padding: '0.5em 0.6em', display: 'inline-block' }}>{img}</span>
    : img;
  return href
    ? <a href={href} style={{ display: 'inline-block', lineHeight: 0, ...style }}>{content}</a>
    : <span style={{ display: 'inline-block', lineHeight: 0, ...style }}>{content}</span>;
}
