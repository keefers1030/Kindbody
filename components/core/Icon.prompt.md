One-line: renders a single UI glyph from the substituted Lucide set, colored by `currentColor` so it inherits navy ink — use it anywhere an icon is needed instead of inlining SVG.

```jsx
<Icon name="arrow-right" size={20} />
<Icon name="calendar" size={24} label="Appointments" />
```

Notes: Lucide is a **substitution** (Kindbody supplied no icon set) at stroke-width 1.5. Pass `label` only when the icon carries meaning alone; decorative icons stay aria-hidden. Icons load from CDN via CSS mask, so they tint with `color`.
