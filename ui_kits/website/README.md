# UI kit — kindbody.com

A click-through recreation of the Kindbody marketing website.

**Screens** (switch via the header nav or the in-page CTAs):

| Route | File | Based on |
| --- | --- | --- |
| `home` | `HomeScreen.jsx` | kindbody.com homepage — hero, "A new generation of fertility care has arrived", patient experience, Fertility 101 signup, Kindstories, press |
| `services` | `ServicesScreen.jsx` | /services-pricing — service categories, insurance & financing FAQ |
| `experts` | `ExpertsScreen.jsx` | /kindbody-doctors — physician grid with bio dialog |
| `location` | `LocationScreen.jsx` | /new-york-location — clinic hero, services, hours, booking card |
| `employer` | `EmployerScreen.jsx` | /employer-benefits (also mounted standalone in `ui_kits/employer/`) |

`Chrome.jsx` holds the shared `Header` (utility bar + mega-menu), `Footer`, and `Section` wrapper. The nav tree, footer columns, hero and section copy, testimonials, press quotes, and physician bios are quoted from the supplied homepage scrape and the brand book.

**Deliberately blank / flagged**

- **No prices.** Kindbody's self-pay price table was not in the provided sources, so service cards say "Pricing shown at scheduling" and the screen carries a note. Drop in the real figures before use.
- **Physician headshots** use clinic photography from the brand book as placeholders; real headshots are shot in-clinic in neutral clothing.
- **Clinic hours** on the location screen are illustrative and labelled as such.
- **Icons are Lucide**, a flagged substitution — Kindbody supplied no icon set.
- The homepage's Instagram feed and video lightbox are represented by the signup dialog rather than recreated, since neither the embed nor the video was provided.
