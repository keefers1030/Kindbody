const { Button, Card, Quote, SectionHeader, Eyebrow, Icon, Input, StatBlock } = window.KindbodyDesignSystem_929fb0;

const SERVICES = [
  { head: 'Our services', body: 'Fertility and family-building care in modern, tech-enabled clinics.', cta: 'Services & Pricing', route: 'services' },
  { head: 'Making care accessible', body: 'Through employee benefits, financing, and insurance options.', cta: 'Insurance & financing', route: 'services' },
  { head: 'Employee benefits', body: 'Kindbody is the only employee fertility benefit solution that provides care directly.', cta: 'For Employers', route: 'employer' },
];

const TESTIMONIALS = [
  { q: 'Kindbody has provided me with an experience that made me feel valued. Starting IVF was an unknown & confusing journey. They were available for every question and concern. I was treated as an individual by all the providers and I am grateful.', a: '-New York Patient' },
  { q: 'Our doctor and her team were outstanding. Her knowledge and understanding of me as a patient gave us hope and confidence throughout the process, ultimately leading us to success.', a: '-St. Louis Patient' },
  { q: 'Kindbody and the team made an experience that can be scary and overwhelming feel nothing but smooth. I’m so thankful for their transparent communication, welcoming environment, and knowledge.', a: '-Princeton Patient' },
];

const PRESS = [
  { outlet: 'CNN', quote: 'Making it easier and less intimidating to start the conversation on fertility.' },
  { outlet: 'Well+Good', quote: 'Kindbody aims to be as approachable as possible. The doctors don’t wear lab coats and the offices look more like a chic hangout than a clinic.' },
  { outlet: 'Fortune', quote: 'The hottest new employee benefit' },
  { outlet: 'CNBC', quote: 'Startups such as Kindbody ... are successfully demystifying the conversation, removing the stigma and increasing accessibility.' },
];

function Hero({ onNavigate }) {
  return (
    <section style={{ background: 'var(--kb-cream)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', minHeight: 560 }}>
        <div style={{ padding: '72px 0' }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-1)', lineHeight: 1.04, letterSpacing: '.01em', color: 'var(--kb-navy)', textWrap: 'pretty' }}>
            Leading the Future of Fertility Care
          </h1>
          <p style={{ margin: '26px 0 34px', fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '46ch' }}>
            Whether you’re exploring your fertility, freezing your eggs, or ready to get pregnant, Kindbody is here with innovative technology and world-class clinical expertise to guide you every step of the way. Your future starts here.
          </p>
          <Button size="lg" iconRight="arrow-right" onClick={() => onNavigate('services')}>Get started</Button>
        </div>
        <div style={{ alignSelf: 'stretch', margin: '40px 0', borderRadius: 'var(--radius-xl)', background: "url('../../assets/imagery/people-1.png') center/cover", minHeight: 460 }} />
      </div>
    </section>
  );
}

function HomeScreen({ onNavigate, onOpenSignup }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Section ground="white">
        <SectionHeader title="A new generation of fertility care has arrived" size="lg" />
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {SERVICES.map((s) => (
            <Card key={s.head} variant="cream" interactive padding={32} onClick={() => onNavigate(s.route)}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 700 }}>{s.head}</h3>
              <p style={{ margin: '12px 0 22px', fontSize: 16, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{s.body}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--kb-navy)' }}>
                {s.cta}<Icon name="arrow-right" size={16} />
              </span>
            </Card>
          ))}
        </div>
      </Section>

      <Section ground="navy">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <SectionHeader tone="light" eyebrow="Patient stories" size="md"
              title="The Kindbody patient experience"
              intro="Kindbody can support you in every step of your family-building journey. Meet a few of the wonderful patients who made us a part of theirs." />
            <div style={{ marginTop: 32 }}>
              <Button variant="primary" iconLeft="play" onClick={onOpenSignup}>Watch video</Button>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: 340, background: "url('../../assets/imagery/people-3.png') center/cover" }}>
            <div style={{ position: 'absolute', inset: 0, background: 'var(--image-protection)' }} />
          </div>
        </div>
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, borderTop: '1px solid rgba(239,233,226,.2)', paddingTop: 48 }}>
          <StatBlock tone="light" size="sm" value="121" label="leading employers trust Kindbody as their fertility benefits provider" />
          <StatBlock tone="light" size="sm" value="3.1M" label="lives covered" />
          <StatBlock tone="light" size="sm" value="$315M" label="raised from leading investors" />
        </div>
      </Section>

      <Section ground="yellow" pad={72}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-4)', lineHeight: 1.1, color: 'var(--kb-navy)' }}>
              Start with the Basics: Sign Up to Watch “Fertility 101”
            </h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); onOpenSignup(); }} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr auto', gap: 12, alignItems: 'end' }}>
            <Input label="Email" type="email" required placeholder="you@example.com" />
            <Input label="ZIP Code" hint="5-digit" />
            <Button as="button" variant="navy" style={{ height: 50 }}>Sign up</Button>
          </form>
        </div>
      </Section>

      <Section ground="cream">
        <SectionHeader eyebrow="Kindstories" title="Hear from our patients" size="lg" />
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'start' }}>
          {TESTIMONIALS.map((t) => <Quote key={t.a} size="sm" attribution={t.a}>{t.q}</Quote>)}
        </div>
      </Section>

      <Section ground="white" pad={72}>
        <Eyebrow>Press</Eyebrow>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {PRESS.map((p) => (
            <div key={p.outlet} style={{ borderTop: '2px solid var(--kb-navy)', paddingTop: 18 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.outlet}</div>
              <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.35, color: 'var(--kb-navy)' }}>{p.quote}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 34 }}><Button variant="outline" size="sm" iconRight="arrow-right">See more press</Button></div>
      </Section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
