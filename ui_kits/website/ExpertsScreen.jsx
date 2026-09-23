const { Button, Card, Tag, SectionHeader, Icon, Dialog } = window.KindbodyDesignSystem_929fb0;

const DOCTORS = [
  { name: 'Dr. Lynn Westphal', title: 'Lead CMO, Medicine + Research & REI', loc: 'Los Altos, CA', bio: 'Lynn Marie Westphal, M.D., FACOG, graduated summa cum laude from Lawrence University, earned her M.D. degree at Stanford University, and did her residency training in obstetrics and gynecology at UCLA and Stanford University. She is double board-certified in Obstetrics and Gynecology / Reproductive Endocrinology and Infertility.' },
  { name: 'Dr. Amber Cooper', title: 'CMO, Genomics + Lab Operations & REI', loc: 'St. Louis, MO', bio: 'Dr. Amber R. Cooper, MD, MS is Chief Medical Officer-Genomics and Laboratory Sciences, and Medical and IVF Practice Director, St. Louis. She is a globally recognized expert on the topic of artificial intelligence and automation to increase access to fertility treatments.' },
  { name: 'Dr. Fahimeh Sasan', title: 'Founding Physician & Chief Innovation Officer', loc: 'New York, NY', bio: 'Dr. Sasan is a board certified and practicing Ob/Gyn who completed her residency at Mount Sinai Hospital in New York City and is an Assistant Professor of Obstetrics, Gynecology, and Reproductive Medicine at Mount Sinai Hospital.' },
  { name: 'Dr. Juan Alvarez', title: 'Reproductive Endocrinologist', loc: 'Chicago, IL', bio: 'Dr. Juan Alvarez is a double board certified Reproductive Endocrinologist and Infertility Specialist. As both a member of the LGBTQ+ community and a fertility specialist, he has a special interest in LGBTQ+ fertility care and education.' },
  { name: 'Dr. Kristen Cain', title: 'Reproductive Endocrinologist', loc: 'Minneapolis, MN', bio: 'Dr. Kristen Cain is a board-certified Ob/Gyn and Reproductive Endocrinologist who has worked in infertility since completing her fellowship at UCLA in 1995.' },
  { name: 'Dr. Rachael Cohen', title: 'Reproductive Endocrinologist', loc: 'Princeton, NJ', bio: 'Rachael Cohen, DO is a double board-certified reproductive endocrinologist and infertility specialist. Her personal experience with IVF to build her family has heavily influenced her approach to patient care.' },
  { name: 'Dr. Geraldine Ekpo', title: 'Reproductive Endocrinologist', loc: 'San Francisco, CA', bio: 'Dr. Geraldine Ekpo is a Reproductive Endocrinology and Infertility Specialist with years of experience providing compassionate fertility care in the San Francisco Bay Area.' },
  { name: 'Dr. Anupama Kathiresan', title: 'Reproductive Endocrinologist', loc: 'Houston, TX', bio: 'Dr. Kathiresan is board certified in both Reproductive Endocrinology and Infertility and Obstetrics & Gynecology, and is passionate about promoting fertility education awareness.' },
];

const REGIONS = ['All','New York, NY','Chicago, IL','San Francisco, CA','St. Louis, MO','Houston, TX'];

function ExpertsScreen() {
  const [region, setRegion] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const list = region === 'All' ? DOCTORS : DOCTORS.filter((d) => d.loc === region);
  return (
    <div>
      <Section ground="cream" pad={64}>
        <SectionHeader eyebrow="Our experts" size="xl" title="Meet our physicians"
          intro="Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey." />
        <div style={{ marginTop: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {REGIONS.map((r) => <Tag key={r} selected={r === region} onClick={() => setRegion(r)}>{r}</Tag>)}
        </div>
      </Section>
      <Section ground="white" pad={72}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {list.map((d, i) => (
            <Card key={d.name} variant="elevated" padding={0} interactive onClick={() => setOpen(d)} style={{ overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/5', background: `url('../../assets/imagery/${['people-1','people-2','people-3','people-4'][i % 4]}.png') center/cover` }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.2, color: 'var(--kb-navy)' }}>{d.name}</h3>
                <div style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.4, color: 'var(--text-secondary)' }}>{d.title}</div>
                <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase' }}>
                  View more<Icon name="arrow-right" size={14} />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 12, color: 'var(--text-muted)' }}>
          Physician headshots are placeholders drawn from the brand book’s clinic photography — real headshots are shot in-clinic in neutral clothing.
        </p>
      </Section>
      <Dialog open={Boolean(open)} onClose={() => setOpen(null)} title={open ? open.name : ''} width={620}
        footer={<Button size="sm" iconRight="arrow-right">Schedule with {open ? open.name.split(' ').slice(-1)[0] : ''}</Button>}>
        {open ? (<div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{open.title} · {open.loc}</div>
          <p style={{ margin: '16px 0 0' }}>{open.bio}</p>
        </div>) : null}
      </Dialog>
    </div>
  );
}

Object.assign(window, { ExpertsScreen });
