# Slide types

1280×720. The only deck Kindbody supplied is the brand guidelines book itself, so these types follow its conventions: navy / cream / yellow / rose grounds, a small uppercase runner across the top, Domaine Display headlines, Gotham body, left-justified everything, and real photography from the book.

| File | Component | Use |
| --- | --- | --- |
| `title.html` | `TitleSlide` | Opening slide — yellow wordmark on navy, half-bleed photo |
| `section.html` | `SectionSlide` | Chapter divider on yellow with the oversized parenthesis |
| `content.html` | `ContentSlide` | Headline + body + bullet list |
| `stats.html` | `StatSlide` | Three proof numbers on navy |
| `quote.html` | `QuoteSlide` | Patient testimonial on rose |
| `photo.html` | `PhotoSlide` | Full-bleed photography with the yellow-box logo |
| `comparison.html` | `ComparisonSlide` | Two-panel say-this-not-that |
| `closing.html` | `ClosingSlide` | Contact / CTA close |

All eight components live in `Slides.jsx` and take props, so a deck can be assembled by importing that file and passing content. Keep one or two grounds per deck — the guidelines are explicit that the palette should not be mixed freely.
