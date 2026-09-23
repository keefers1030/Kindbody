# Kindbody Design System

A design system for **Kindbody** — a leading fertility clinic network and global family-building benefits provider for employers, offering the full spectrum of reproductive care from preconception to postpartum through menopause.

Kindbody operates as three things at once: the fertility **benefits provider** for employers, the **technology platform**, and the **direct provider of care** through its own signature clinics, mobile clinics, and a global partner clinic network. That vertical integration is the company's core story — "the only employee fertility benefit solution that provides care directly."

- Mission (short): *Kindbody's mission is to make fertility care more affordable and accessible for all.*
- Vision: *To help everyone in the world realize their dream of a family.*
- Values: **We are Kind. We are Innovative. We are Nimble. We are Determined.**

## Surfaces represented here

| Surface | What it is | Where |
| --- | --- | --- |
| Marketing website | kindbody.com — services, pricing, locations, physicians, Kindstories, employer benefits | `ui_kits/website/` |
| Employer benefits site | The B2B story for HR and benefits leaders | `ui_kits/employer/` |
| Brand deck | Title / section / stat / quote slide types in the guidelines' own visual language | `slides/` |

Kindbody also runs a **Member Portal** (`portal.kindbody.com`) and a **Provider Portal** (`pcmp.kindbody.com`). Neither was provided as source material and both sit behind authentication, so **no portal UI kit is included** — recreating those screens would mean inventing them. Ask for screenshots or code access if a portal kit is needed.

## Sources used

Everything in this system traces to material the user supplied, plus the public marketing site:

- `uploads/2024_04_01_Kindbody-Brand-Guidelines.pdf` — 27-page brand book dated 1 Apr 2024. **This is the ground truth** for logo, color, typography, imagery, and messaging. Colors are transcribed exactly (hex + Pantone); type hierarchy is transcribed from pg 15.
- Brand photography extracted from pgs 17–18 of that PDF → `assets/imagery/`.
- Logos supplied as SVG: navy, white, yellow, and the standalone logomark → `assets/logos/`. **The supplied files had their `<style>` blocks stripped on export**, so every shape rendered black. The geometry is untouched; a one-line fill rule was re-added per file (navy `#272A5E`, white `#FFFFFF`, yellow `#F9E168`). The logomark's two classes carried no color at all — it is set as a **yellow circle with navy parentheses**, which is an assumption. Confirm it, or send a logomark export with colors intact.
- Retail font binaries supplied as OTF: **Domaine Display** (Klim), **Gotham** (Hoefler&Co), **Founders Grotesk Text** (Klim) → `assets/fonts/`. No substitutions were needed.
- `uploads/kindbody-com.md` — scrape of the kindbody.com homepage (nav, hero, services, physicians, testimonials, press, footer). Also fetched live at `https://kindbody.com/` for nav structure and URL map.

No Figma file, no codebase, and no slide deck source were provided. Nothing in this system was reconstructed from memory: the logo files are the supplied SVGs, the photography is extracted from the PDF, and copy is quoted from the guidelines or the site.

---

## CONTENT FUNDAMENTALS

**The voice.** Kind, approachable, empathetic, authentic — "no matter who we are talking to or what medium of communication we use." Warm, genuine, sincere. Encouraging where there is frustration; positive in moments of doubt. No jargon. Personable, inclusive, human.

**Person.** Address the reader as **you**; speak as **we/our** for Kindbody. The homepage hero does both in one sentence: *"Whether you're exploring your fertility, freezing your eggs, or ready to get pregnant, Kindbody is here with innovative technology and world-class clinical expertise to guide you every step of the way. Your future starts here."* Never "the patient" in patient-facing copy.

**Casing.** Headlines (decks, one-pagers) are **title-cased or sentence-cased** — both are correct, so pick one per artifact and hold it. Blog headlines are always title-cased ("Why Fall is an Ideal Time to Think About Fertility Preservation"). Eyebrows and CTAs are set in uppercase *typographically*, not written in caps. Footer nav on the live site renders uppercase. Kind product lines take one capital: **Kindman**, **Kindlabs**, **Kindbaby**, **Kindinstitute**, **KindbodyRx** — never KindBody, KindMan, KindLabs.

**Grammar rules from the guidelines.**
- Serial commas, always: "physical, mental, and emotional support."
- Em dashes, not hyphens, for breaks in thought.
- Numbers one through ten spelled out; 11 and above as numerals.
- Capitalize after a colon only when a full sentence follows.
- Ampersands are fine in headlines, titles, and social — not in everyday text.
- Phone numbers as `855.563.2639`. Times as `2pm-2am`. URLs drop `www.` → `kindbody.com/book`.
- No double spaces after end punctuation.

**Terminology.** Doctors are **Kindbody physicians**. People who get Kindbody through their employer are **members**; people who come directly are **patients**. Clinics are **Kindbody signature clinics** (lowercase s, lowercase c) in the U.S., plus a **global clinic partner network**. "Family-building care" is hyphenated as a modifier; "family building" is not hyphenated when it stands alone. Prefer *complementary* over *free*, *Donor Conceived People* over *Donor Conceived Children*, *Intended Parents*, *gestational surrogate*, *fertility workup*, *healthcare*, *preimplantation genetic testing*, *U.S.*, *Ob/Gyns*, *state-of-the-art*, *onsite*. Spell out **in vitro fertilization**, **preimplantation genetic testing**, and **Reproductive Endocrinologist** on first use before abbreviating.

**Exclamation points and emoji.** The guidelines are explicit: minimal use of exclamation points, "if necessary at all." Product and marketing copy carries **no emoji**. The one exception is Instagram, where the social team does use emoji heavily — a yellow heart 💛 and ✨ recur as brand-adjacent motifs. Do not port that into web, print, or deck copy.

**The vibe.** Clinical credibility delivered warmly. Copy pairs a hard claim with a human sentence: "121 leading employers, covering 3.1 million lives" sits next to "one family, one community, one baby at a time." Patient testimonials are quoted verbatim and attributed by city, not name — *"-St. Louis Patient"*. Press quotes lead with the outside voice ("The hottest new employee benefit" — Fortune). Nothing is hyped; the optimism comes from the yellow, not from adjectives.

---

## VISUAL FOUNDATIONS

**Color.** Four primaries, no more. **Yellow #F9E168** (Pantone 2003C) is *the* brand color — "a warming effect, arouses cheerfulness… joy, optimism, happiness, sunshine, imagination, and hope." It's balanced by three primary neutrals: **Cream #EFE9E2**, **Navy #272A5E** (Pantone 2119C), **Rose #F9CDC6** (Pantone 2337C at 80%). Cream is the default page ground, navy is the default ink and the inverse ground, rose is an accent for softer or more intimate contexts. There is no published secondary palette and no semantic palette — the tints, greys, and success/warning/error colors in `tokens/colors.css` are clearly flagged as UI-only derivations. Keep any single layout to one or two grounds: cream + white, or navy + yellow. Text ink is navy, never pure black.

**Typography.** Two families, strictly divided. **Domaine Display** (Bold and Medium being the weights used most) for all headlines — a high-contrast serif that carries the warmth. **Gotham** for everything else: Book for body and bullets, Medium for subhead 1, Bold for eyebrows, subhead 2, and CTA emphasis. Eyebrow is Gotham Bold at +10 tracking, uppercase; headline is Domaine Bold at +10 tracking; subhead 1 is Gotham Medium at −10 tracking with leading equal to font size. **All styles are left justified** — Kindbody does not center paragraph copy. Founders Grotesk Text was supplied alongside and appears on newer web surfaces; treat it as an alternate sans, not a replacement for Gotham.

**Logo.** A wordmark set in Pitch and Locke — typewriter-homage faces — with the parentheses as the ownable device: "the body is essentially a container for the soul. The parenthesis embody both the body and mind." Navy on a light ground is primary. White or a navy logo inside a **yellow box** for legibility on photography or busy slides. Minimum clear space equals the width of one parenthesis. Never recolor outside yellow/navy/cream, never add a stroke, never color only the parentheses, never rotate, skew, drop-shadow, bevel, or box it in (except the press logo). Co-branding uses a **plus-sign lockup** — horizontal or stacked — with the client mark.

**Backgrounds.** Flat brand color, full-bleed photography, or cream. **No gradients** as decoration — the only gradient in the system is `--image-protection`, a bottom-up navy scrim for text over photos. No repeating patterns, no textures, no noise, no hand-drawn illustration layer. The parenthesis can be used oversized as a graphic device; do not invent other ornament.

**Imagery.** Real patients and real physicians in real Kindbody clinics. Bright, colorful, warm daylight; people over empty rooms. Clinic photography covers exteriors, "living rooms" (Kindbody's word for the lobby), and exam rooms — pale plywood, white walls, brass, dried florals, yellow accents. Physician headshots are shot in-clinic in neutral clothing, or against a neutral background. Color grade is warm and bright, mid-contrast, never cool, never black and white, never grainy. Photos are cropped with a 20px radius (`--radius-image`) or run full-bleed.

**Layout.** 1240px container, 32px desktop gutter (20px mobile), 96px section rhythm, 64ch reading measure. Generous whitespace is the default. The site header is fixed with a slim utility bar above it (Schedule / Member Portal / Provider Portal); the primary nav is a mega-menu. Content is asymmetric more often than centered — copy left, image right.

**Corner radii and cards.** 4 / 8 / 14 / 20 / 24 / 36px plus a full pill. Cards are white on cream with a soft shadow and no border, or cream on white with a 1px `--border-subtle` hairline and no shadow — one or the other, not both. Buttons and tags are full pills. Nothing is square-cornered except full-bleed image bands.

**Shadows.** Warm navy-tinted, low opacity, used sparingly: `--shadow-card` for resting cards, `--shadow-raised` for hover and popovers, `--shadow-overlay` for modals and drawers. No inner shadows anywhere. No colored glows.

**Borders.** 1px hairlines in `--border-subtle` (cream-deep) on light grounds, `--border-default` (grey-200) on white. 2px navy for selected/active states and for outline buttons. Dividers are hairlines, full-width, never double rules.

**Animation.** Understated. Fades and small translations (8–16px) on scroll reveal, 200ms, `--ease-standard` — a flat cubic-bezier with no overshoot. **No bounce, no spring, no parallax, no autoplaying motion graphics.** Carousels and drawers use 420ms. Hovers are 120ms.

**Hover states.** Filled yellow buttons darken to `--kb-yellow-deep`; filled navy buttons darken to `--kb-navy-deep`. Outline buttons fill with their border color and flip the label. Text links underline on hover (they are navy, not blue, and underlined on hover rather than at rest). Cards lift from `--shadow-card` to `--shadow-raised` and images inside them scale to 1.03. Never use opacity fades for hover on interactive controls.

**Press states.** Color only — one step darker still, plus removal of any lift. No scale-down, no inset shadow.

**Focus.** 3px `--shadow-focus` navy ring at 18% plus a 2px navy outline on form controls. Always visible; never removed.

**Transparency and blur.** Rare. A navy scrim at 55% (`--overlay-scrim`) behind modals; the image-protection gradient under text on photography. Backdrop blur is used only on the fixed header once scrolled (white at 92% + 8px blur). Never blur-behind cards or badges over photography — use the yellow box or a solid capsule instead.

---

## ICONOGRAPHY

Kindbody's provided material contains **no icon set** — the brand book covers logo, color, type, imagery, and messaging only, and no codebase or Figma file was supplied. The marketing site uses a small number of utility glyphs (nav chevrons, hamburger, cart, social marks, arrow CTAs) with no published library behind them.

**What this system does:** it substitutes **[Lucide](https://lucide.dev)** (CDN, `lucide@0.544.0`) as the icon set, at `stroke-width: 1.5`, sized 20 or 24px, colored `currentColor` (navy by default). Lucide's geometric round-cap line style is the closest available match to the site's thin utility glyphs. **This is a substitution, not brand-approved** — flagged here and in the components readme. If Kindbody has a real icon library, swap it in and delete the CDN link in `components/core/icons.card.html` and `ui_kits/*/index.html`.

- **No emoji** in product, web, print, or deck surfaces. Instagram is the one place the brand uses them (💛, ✨) and that is social-team voice only.
- **No unicode characters as icons.** The one exception is the **parenthesis**, which is a brand device rather than an icon: it can be set oversized in Domaine as a graphic element, and the logomark is the parenthesis pair.
- Icons are always paired with a label in navigation and never carry meaning alone except in the icon-only button variant, which requires an `aria-label`.
- The logomark (`assets/logos/kindbody-logomark.svg`) is the app/social avatar; the navy, white, and yellow wordmarks are in `assets/logos/`.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front matter, for use in Claude Code.
- `thumbnail.html` — homepage tile for this system.

**`tokens/`** — `fonts.css` (@font-face for all three families), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows, motion).

**`assets/`** — `logos/` (navy, white, yellow wordmarks + logomark), `fonts/` (Domaine Display, Gotham, Founders Grotesk Text OTFs), `imagery/` (patient and clinic photography extracted from the brand book).

**`guidelines/`** — 20 specimen cards feeding the Design System tab, grouped Colors / Type / Spacing / Effects / Brand.

**`components/`** — 20 primitives, each with `.jsx`, `.d.ts` and `.prompt.md`, one `@dsCard` per directory:
- `core/` — `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `Tag`
- `forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- `navigation/` — `Tabs`, `Accordion`
- `content/` — `Logo`, `Eyebrow`, `SectionHeader`, `Quote`, `StatBlock`
- `overlay/` — `Dialog`, `Tooltip`

**`ui_kits/`** — `website/` (kindbody.com: home, services & pricing, physicians, New York clinic page, plus the employer screen; shared `Chrome.jsx` header/footer), `employer/` (standalone mount of the employer benefits page). Each has its own `README.md` listing what was deliberately left blank.

**`slides/`** — eight brand-deck slide types at 1280×720 (`Slides.jsx` + one HTML per type): title, section divider, content + bullets, proof numbers, patient quote, full-bleed photo, two-column comparison, closing.

### Intentional additions

The brand book defines no component inventory, so the component set is a standard authored one sized to Kindbody's surfaces. Three entries are worth calling out explicitly:

- **`Icon`** — a wrapper over the substituted Lucide set, so a future real icon library can be swapped in one place.
- **`Logo`** — enforces the guidelines' color and clear-space rules (including the yellow-box-over-photography variant) rather than leaving them to each consumer.
- **`Quote`** / **`StatBlock`** — the two content shapes that recur across every Kindbody surface (patient testimonials attributed by city; benefit-scale numbers), lifted from the site and the boilerplate rather than invented.
