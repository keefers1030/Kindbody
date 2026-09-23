One-line: single-choice control for appointment types, visit format (virtual / in clinic), and payment method.

```jsx
<Radio name="visit" label="Virtual consult" description="45 minutes, by video" checked={v==='virtual'} onChange={...} />
```

Navy ring with a navy dot. Use Radio for two to five mutually exclusive options; use Select beyond that.
