import React from 'react';

// SUBSTITUTED ICON SET — Lucide (lucide-static 0.544.0) via CDN, stroke-width 1.5 by default.
// Kindbody supplied no icon library; see readme.md ICONOGRAPHY. Swap CDN_BASE to move to a real set.
const CDN_BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';

export function Icon({ name, size = 20, color = 'currentColor', strokeWidth, label, style, ...rest }) {
  const url = `url("${CDN_BASE}${name}.svg")`;
  return (
    <span
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block', width: size, height: size, flex: '0 0 auto',
        backgroundColor: color,
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        opacity: strokeWidth && strokeWidth < 1.5 ? 0.85 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}
