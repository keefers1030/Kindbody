const { Button, Card, Tabs, Accordion, SectionHeader, Badge, Tag, Icon, Select } = window.KindbodyDesignSystem_929fb0;

const CATEGORIES = {
  'Fertility': [
    { name: 'Fertility Consults', body: 'A one-on-one consult with a Kindbody physician to understand your options.' },
    { name: 'IVF & Conception Care', body: 'In vitro fertilization, IUI, and conception care from testing through transfer.' },
    { name: 'Egg Freezing & Embryo Banking', body: 'Preserve your options on your own timeline.' },
    { name: 'Male Fertility', body: 'Semen analysis, workup, and treatment through Kindman.' },
    { name: 'Oncofertility', body: 'Fertility preservation for patients facing cancer treatment.' },
  ],
  'Family building': [
    { name: 'LGBTQ+ Services', body: 'Care built for every path to parenthood.' },
    { name: 'Donor, surrogacy & adoption', body: 'Support for intended parents, including gestational surrogacy.' },
    { name: 'Kindbaby', body: 'Prenatal through postpartum support.' },
  ],
  'Whole-person care': [
    { name: 'Kindbody360: Holistic Care', body: 'Nutrition, mental health, and acupuncture alongside clinical care.' },
    { name: 'Menopause', body: 'Care across the menopause journey.' },
    { name: 'Kindlabs', body: 'Diagnostics and genomics run in-house.' },
  ],
};

const FAQS = [
  { title: 'Is Kindbody in-network with my health plan?', content: 'Kindbody is in-network with major health plans, and our team reviews your benefits before your first appointment so you know your costs up front.' },
  { title: 'Do you offer financing?', content: 'Yes — financing is available for self-pay patients, and members with the Kindbody benefit through their employer have their coverage applied automatically.' },
  { title: 'What if I get Kindbody through my employer?', content: 'You are a Kindbody member. Activate your benefit and your covered services are applied at the time of scheduling.' },
];

function ServicesScreen({ onNavigate }) {
  const [cat, setCat] = React.useState('Fertility');
  return (
    <div>
      <Section ground="cream" pad={64}>
        <SectionHeader eyebrow="Services & pricing" size="xl"
          title="World-Class Fertility and Family-Building Care"
          intro="Kindbody supports all paths to parenthood. Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey." />
        <div style={{ marginTop: 34, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge tone="navy">In-network with major health plans</Badge>
          <Badge tone="yellow">Financing available</Badge>
          <Badge tone="rose">Virtual consults</Badge>
        </div>
      </Section>

      <Section ground="white" pad={72}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <Tabs items={Object.keys(CATEGORIES)} value={cat} onChange={setCat} style={{ flex: 1 }} />
          <Select options={['All locations','New York, NY','Chicago, IL','Virtual']} style={{ width: 220 }} />
        </div>
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {CATEGORIES[cat].map((s) => (
            <Card key={s.name} variant="hairline" padding={28} interactive>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, color: 'var(--kb-navy)' }}>{s.name}</h3>
              <p style={{ margin: '12px 0 20px', fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{s.body}</p>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Pricing shown at scheduling</span>
                <Icon name="arrow-right" size={18} />
              </div>
            </Card>
          ))}
        </div>
        <p style={{ marginTop: 26, fontSize: 12, lineHeight: 1.45, color: 'var(--text-muted)', maxWidth: '70ch' }}>
          Note for this kit: Kindbody’s published self-pay prices were not part of the provided source material, so no figures are shown. Add the real price table before using this screen with patients.
        </p>
      </Section>

      <Section ground="cream" pad={72}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56, alignItems: 'start' }}>
          <SectionHeader eyebrow="Insurance & financing" size="md" title="Making care accessible"
            intro="Through employee benefits, financing, and insurance options." />
          <Accordion items={FAQS} defaultOpen={[0]} />
        </div>
      </Section>

      <Section ground="navy" pad={72}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-3)', lineHeight: 1.08, color: 'var(--kb-cream)', maxWidth: '24ch' }}>
            Ready when you are.
          </h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconRight="arrow-right">Schedule</Button>
            <Button variant="outline-light" size="lg" onClick={() => onNavigate('experts')}>Meet our physicians</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ServicesScreen });
