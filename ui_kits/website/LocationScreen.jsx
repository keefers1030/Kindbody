const { Button, Card, Badge, Icon, SectionHeader, Quote, Select, Switch } = window.KindbodyDesignSystem_929fb0;

const HOURS = [['Monday – Thursday','7am-4pm'],['Friday','7am-2pm'],['Saturday','7am-12pm'],['Sunday','Closed']];
const SERVICES = ['Fertility consults','IVF & conception care','Egg & embryo freezing','LGBTQ+ services','Male fertility care','Kindbody360: holistic care'];

function LocationScreen({ onNavigate }) {
  const [virtualOnly, setVirtualOnly] = React.useState(false);
  return (
    <div>
      <div style={{ position: 'relative', height: 460, background: "url('../../assets/imagery/clinic-2.png') center/cover" }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--image-protection)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 48px' }}>
            <Badge tone="yellow">Kindbody signature clinic</Badge>
            <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display-2)', lineHeight: 1.05, color: 'var(--kb-white)' }}>
              Kindbody New York City
            </h1>
          </div>
        </div>
      </div>
      <Section ground="white" pad={64}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionHeader eyebrow="Visit Kindbody New York City" size="md"
              title="Care that feels nothing like a clinic"
              intro="Our clinics are designed around people, not procedures — a living room instead of a waiting room, and a care team that knows your name." />
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 12 }}>Services at this clinic</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {SERVICES.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 12 }}>Hours</div>
                <table style={{ borderCollapse: 'collapse', fontSize: 15.5, width: '100%' }}>
                  <tbody>{HOURS.map(([d, h]) => (
                    <tr key={d}><td style={{ padding: '7px 0', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>{d}</td><td style={{ padding: '7px 0', borderBottom: '1px solid var(--border-subtle)', textAlign: 'right', fontWeight: 500 }}>{h}</td></tr>
                  ))}</tbody>
                </table>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>Hours are illustrative — the provided sources did not include clinic hours.</p>
              </div>
            </div>
            <div style={{ marginTop: 40, borderRadius: 'var(--radius-image)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ aspectRatio: '4/3', background: "url('../../assets/imagery/clinic-1.png') center/cover", borderRadius: 'var(--radius-image)' }} />
              <div style={{ aspectRatio: '4/3', background: "url('../../assets/imagery/clinic-3.png') center/cover", borderRadius: 'var(--radius-image)' }} />
            </div>
          </div>
          <Card variant="elevated" padding={28} style={{ position: 'sticky', top: 120 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.2 }}>Book an appointment</div>
            <div style={{ marginTop: 20, display: 'grid', gap: 16 }}>
              <Select label="Appointment type" options={['Fertility consult','Egg freezing consult','IVF consult','Second opinion']} />
              <Select label="Clinic" options={['New York, NY — 16 W 22nd St','Virtual']} />
              <Switch label="Virtual visits only" checked={virtualOnly} onChange={() => setVirtualOnly(!virtualOnly)} />
              <Button fullWidth size="lg" iconRight="arrow-right">Continue</Button>
            </div>
            <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid var(--border-subtle)', display: 'grid', gap: 10, fontSize: 14.5, color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="phone" size={17} /> 1-855-KND-BODY</span>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="mail" size={17} /> navigator@kindbody.com</span>
            </div>
          </Card>
        </div>
      </Section>
      <Section ground="cream" pad={72}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Quote size="sm" attribution="-New York Patient">I was treated as an individual by all the providers and I am grateful. The team is absolutely amazing and caring. My doctor is one of a kind.</Quote>
          <Quote size="sm" variant="cream" attribution="-Silicon Valley Patient">The staff at Kindbody is so kind and welcoming. We really appreciated the transparency of information from Kindbody.</Quote>
        </div>
        <div style={{ marginTop: 36 }}><Button variant="outline" onClick={() => onNavigate('experts')}>Meet the physicians here</Button></div>
      </Section>
    </div>
  );
}

Object.assign(window, { LocationScreen });
