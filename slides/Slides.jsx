const { Logo, Eyebrow, Quote, StatBlock, Badge, Button, Icon } = window.KindbodyDesignSystem_929fb0;

const W = 1280, H = 720;

function Frame({ children, ground = 'cream', pad = 80, style }) {
  const grounds = { cream: 'var(--kb-cream)', white: 'var(--kb-white)', navy: 'var(--kb-navy)', yellow: 'var(--kb-yellow)', rose: 'var(--kb-rose)' };
  return (
    <div style={{ width: W, height: H, background: grounds[ground], position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-sans)', padding: pad, boxSizing: 'border-box', ...style }}>
      {children}
    </div>
  );
}

function Runner({ label, page, tone = 'navy' }) {
  const ink = tone === 'light' ? 'rgba(239,233,226,.75)' : 'var(--text-muted)';
  return (
    <div style={{ position: 'absolute', top: 34, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: ink }}>
      <span>{label}</span><span>{page}</span>
    </div>
  );
}

/* 1 — Title */
function TitleSlide({ title = 'World-Class Fertility and Family-Building Care', subtitle = 'Kindbody supports all paths to parenthood.', footnote = 'April 2024' }) {
  return (
    <Frame ground="navy" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 64, alignItems: 'center', padding: 0 }}>
      <div style={{ padding: '80px 0 80px 80px' }}>
        <Logo variant="yellow" width={210} basePath="../" />
        <h1 style={{ margin: '48px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1.04, letterSpacing: '.01em', color: 'var(--kb-cream)', textWrap: 'pretty' }}>{title}</h1>
        <div style={{ marginTop: 26, fontSize: 22, fontWeight: 500, letterSpacing: '-.01em', lineHeight: 1, color: 'var(--kb-yellow)' }}>{subtitle}</div>
        <div style={{ marginTop: 58, fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(239,233,226,.7)' }}>{footnote}</div>
      </div>
      <div style={{ height: '100%', background: "url('../assets/imagery/people-2.png') center/cover" }} />
    </Frame>
  );
}

/* 2 — Section divider */
function SectionSlide({ number = '01', title = 'Color Palette', intro = 'The Kindbody color palette embodies the spirit of the brand. It’s important to use the colors as directed across all creative assets.' }) {
  return (
    <Frame ground="yellow">
      <Runner label="Kindbody" page={number} />
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '22ch' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1.02, letterSpacing: '.01em', color: 'var(--kb-navy)' }}>{title}</div>
        <p style={{ margin: '28px 0 0', fontSize: 18, lineHeight: 1.55, color: 'var(--kb-navy)', maxWidth: '44ch' }}>{intro}</p>
      </div>
      <div style={{ position: 'absolute', right: -60, bottom: -180, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 620, lineHeight: .8, color: 'rgba(39,42,94,.12)' }}>)</div>
    </Frame>
  );
}

/* 3 — Content: headline + subhead + bullets */
function ContentSlide({ eyebrow = 'Visit Kindbody New York City', title = 'Some of our services include:', bullets = ['IVF, IUI, & conception care','Egg & embryo freezing','Donor, surrogacy, & adoption','LGBTQ+ services','Male fertility care'], body = 'Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey. Kindbody partners with employers to provide fertility benefits and is in-network with major health plans.' }) {
  return (
    <Frame ground="cream">
      <Runner label="Kindbody" page="Services" />
      <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.08, letterSpacing: '.01em', color: 'var(--kb-navy)' }}>{title}</h2>
          <p style={{ margin: '22px 0 0', fontSize: 17, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '46ch' }}>{body}</p>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 14 }}>
          {bullets.map((b) => (
            <li key={b} style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 19, borderBottom: '1px solid var(--kb-cream-deep)', paddingBottom: 14 }}>
              <Icon name="check" size={20} color="var(--kb-navy)" />{b}
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* 4 — Stats */
function StatSlide({ eyebrow = 'About Kindbody', title = 'The benefits provider, the platform, and the provider of care', stats = [['121','leading employers'],['3.1M','lives covered'],['$315M','raised to date']] }) {
  return (
    <Frame ground="navy">
      <Runner label="Kindbody" page="Scale" tone="light" />
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow tone="yellow">{eyebrow}</Eyebrow>
        <h2 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.08, letterSpacing: '.01em', color: 'var(--kb-cream)', maxWidth: '28ch' }}>{title}</h2>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40, borderTop: '1px solid rgba(239,233,226,.25)', paddingTop: 44 }}>
          {stats.map(([v, l]) => <StatBlock key={v} tone="light" value={v} label={l} />)}
        </div>
      </div>
    </Frame>
  );
}

/* 5 — Big quote */
function QuoteSlide({ quote = 'Kindbody and the team made an experience that can be scary and overwhelming feel nothing but smooth.', attribution = '-Princeton Patient' }) {
  return (
    <Frame ground="rose">
      <Runner label="Kindstories" page="Patient voice" />
      <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 56, alignItems: 'center' }}>
        <Quote variant="plain" size="lg" attribution={attribution} style={{ fontSize: 34 }}>{quote}</Quote>
        <div style={{ borderRadius: 'var(--radius-lg)', height: 420, background: "url('../assets/imagery/people-4.png') center/cover" }} />
      </div>
    </Frame>
  );
}

/* 6 — Full-bleed photo with yellow-box logo */
function PhotoSlide({ title = 'Care that feels nothing like a clinic', kicker = 'Kindbody signature clinics' }) {
  return (
    <Frame ground="navy" pad={0} style={{ background: "url('../assets/imagery/clinic-2.png') center/cover" }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--image-protection)' }} />
      <div style={{ position: 'absolute', top: 48, left: 56 }}>
        <Logo variant="navy" boxed width={170} basePath="../" />
      </div>
      <div style={{ position: 'absolute', left: 56, right: 56, bottom: 56 }}>
        <Eyebrow tone="cream">{kicker}</Eyebrow>
        <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 52, lineHeight: 1.05, letterSpacing: '.01em', color: 'var(--kb-white)', maxWidth: '26ch' }}>{title}</h2>
      </div>
    </Frame>
  );
}

/* 7 — Two-column comparison */
function ComparisonSlide({ title = 'We Say This, Not That', left = { head: 'We say this', items: ['Family-building care','Gestational surrogate','Complementary','Kindman','healthcare','U.S.'] }, right = { head: 'Not that', items: ['Family building care','Surrogate','Free','KindMan','health care','US'] } }) {
  return (
    <Frame ground="white">
      <Runner label="Messaging" page="Rules" />
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, lineHeight: 1.08, letterSpacing: '.01em', color: 'var(--kb-navy)' }}>{title}</h2>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {[[left, 'var(--kb-yellow)'], [right, 'var(--kb-cream)']].map(([col, bg]) => (
            <div key={col.head} style={{ background: bg, borderRadius: 'var(--radius-md)', padding: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kb-navy)' }}>{col.head}</div>
              <ul style={{ margin: '18px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 10, fontSize: 19, color: 'var(--kb-navy)' }}>
                {col.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* 8 — Closing */
function ClosingSlide({ title = 'Let’s connect', body = 'We’re currently offering virtual consultations with a board certified physician.', cta = 'kindbody.com/book' }) {
  return (
    <Frame ground="cream">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Logo variant="navy" width={230} basePath="../" />
        <h2 style={{ margin: '44px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, lineHeight: 1.05, letterSpacing: '.01em', color: 'var(--kb-navy)' }}>{title}</h2>
        <p style={{ margin: '22px 0 0', fontSize: 19, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '48ch' }}>{body}</p>
        <div style={{ marginTop: 40, display: 'flex', gap: 14, alignItems: 'center' }}>
          <Button size="lg" iconRight="arrow-right">{cta}</Button>
          <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>1-855-KND-BODY · navigator@kindbody.com</span>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 26, background: 'var(--kb-yellow)' }} />
    </Frame>
  );
}

Object.assign(window, { Frame, Runner, TitleSlide, SectionSlide, ContentSlide, StatSlide, QuoteSlide, PhotoSlide, ComparisonSlide, ClosingSlide });
