One-line: renders the supplied Kindbody SVG logos and enforces the usage rules — never re-draw or recolor the mark by hand.

```jsx
<Logo variant="navy" width={180} href="/" basePath="../../" />
<Logo variant="navy" boxed width={150} basePath="../../" />   /* over photography */
<Logo variant="mark" width={44} basePath="../../" />
```

Navy on light is primary; `white` on navy; `boxed` (navy in a yellow box) over photos or crowded slides. `basePath` must resolve to the project root so `assets/logos/*` loads.
