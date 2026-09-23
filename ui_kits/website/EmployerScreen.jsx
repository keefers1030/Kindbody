const { Button, Card, StatBlock, SectionHeader, Quote, Eyebrow, Icon, Accordion, Badge } = window.KindbodyDesignSystem_929fb0;

const PILLARS = [
  { head: 'We provide the care', body: 'Kindbody is the only employee fertility benefit solution that provides care directly — through signature clinics, mobile clinics, and a global partner network.', icon: 'stethoscope' },
  { head: 'One integrated platform', body: 'Benefits management, scheduling, diagnostics, and clinical care run on Kindbody’s own technology, so nothing gets handed off and lost.', icon: 'layout-grid' },
  { head: 'Lower cost, better outcomes', body: 'A seamless, integrated experience with superior health outcomes at lower cost, making fertility care more affordable and accessible for all.', icon: 'trending-down' },
];

const COVERAGE = [
  { title: 'What does the benefit cover?', content: 'The full spectrum of reproductive care from preconception to postpartum through menopause — fertility consults, IVF and IUI, egg and embryo freezing, LGBTQ+ family building, gestational surrogacy support, male fertility care, and menopause care.' },
  { title: 'How do employees get started?', content: 'Members activate their benefit online, then schedule directly with a Kindbody physician. Their coverage is applied at the time of scheduling — no claims paperwork to chase.' },
  { title: 'What do employers get?', content: 'Direct access to Kindbody clinical leadership, utilization and outcomes reporting, and a benefit design built with your population in mind.' },
];

function EmployerScreen({ onNavigate }) {
  return (
    <div>
      <Section ground="navy" pad={88}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow tone="yellow">Employer benefits</Eyebrow>
            <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-2)', lineHeight: 1.05, letterSpacing: '.01em', color: 'var(--kb-cream)' }}>
              Bringing Care Directly to Your Employees
            </h1>
            <p style={{ margin: '24px 0 32px', fontSize: 18, lineHeight: 1.6, color: 'rgba(239,233,226,.85)', maxWidth: '46ch' }}>
              Kindbody is a leading fertility clinic network and global family-building benefits provider for employers, offering the full-spectrum of reproductive care from preconception to postpartum through menopause.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" iconRight="arrow-right">Talk to our team</Button>
              <Button variant="outline-light" size="lg" onClick={() => onNavigate('services')}>See our services</Button>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', minHeight: 380, background: "url('../../assets/imagery/people-4.png') center/cover" }} />
        </div>
      </Section>

      <Section ground="yellow" pad={64}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          <StatBlock value="121" label="leading employers trust Kindbody as their fertility benefits provider" />
          <StatBlock value="3.1M" label="lives covered" />
          <StatBlock value="$315M" label="raised from leading investors including Perceptive Advisors, Morgan Health, and GV" />
        </div>
      </Section>

      <Section ground="white" pad={88}>
        <SectionHeader eyebrow="Why Kindbody" size="lg" title="The benefits provider, the platform, and the provider of care" />
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {PILLARS.map((p) => (
            <Card key={p.head} variant="cream" padding={32}>
              <Icon name={p.icon} size={28} color="var(--kb-navy)" />
              <h3 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2 }}>{p.head}</h3>
              <p style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section ground="cream" pad={80}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionHeader eyebrow="Coverage" size="md" title="A single door for fertility care" />
            <div style={{ marginTop: 26, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Badge tone="navy">Preconception</Badge><Badge tone="navy">IVF & IUI</Badge><Badge tone="navy">Egg freezing</Badge>
              <Badge tone="navy">LGBTQ+</Badge><Badge tone="navy">Surrogacy</Badge><Badge tone="navy">Postpartum</Badge><Badge tone="navy">Menopause</Badge>
            </div>
          </div>
          <Accordion items={COVERAGE} defaultOpen={[0]} />
        </div>
      </Section>

      <Section ground="white" pad={80}>
        <Quote size="lg" variant="plain" attribution="Fortune">The hottest new employee benefit</Quote>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Quote size="sm" variant="cream" attribution="CNBC">Startups such as Kindbody ... are successfully demystifying the conversation, removing the stigma and increasing accessibility.</Quote>
          <Quote size="sm" variant="cream" attribution="Inc.">The company's bigger goal is to rethink everything about the experience of going to a fertility clinic — from the look and feel of it to the lack of transparency around costs.</Quote>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { EmployerScreen });
