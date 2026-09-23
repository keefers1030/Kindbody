One-line: modal for scheduling confirmations, the "Fertility 101" signup, and video lightboxes.

```jsx
<Dialog open={open} onClose={close} title="Start with the basics"
  footer={<><Button variant="ghost" onClick={close}>Not now</Button><Button onClick={submit}>Sign up</Button></>}>
  <Input label="Email" type="email" required />
</Dialog>
```

24px radius, 32px padding, `--shadow-overlay`, 55% navy scrim. No entrance bounce — fade only.
