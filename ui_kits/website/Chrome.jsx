const { Logo, Button, Icon, Input } = window.KindbodyDesignSystem_929fb0;

const NAV = [
  { label: 'About Us', items: ['About Us','Clinical Excellence','Our Experts','Leadership','Kindstories','Press','Careers','FAQ','Blog'] },
  { label: 'Pricing', items: ['Services & Pricing','Insurance','Financing'] },
  { label: 'Services', items: ['IVF & Conception Care','Egg Freezing & Embryo Banking','LGBTQ+','Fertility Consults','Male Fertility','Menopause','Kindlabs','Kindbody360: Holistic Care','Oncofertility'] },
  { label: 'Locations', items: ['All Locations','Virtual','Austin, TX','Bethesda, MD','Charlotte, NC','Chicago, IL','Dallas, TX','Denver, CO','Houston, TX','Los Altos, CA','Milwaukee, WI','Minneapolis, MN','New York, NY','Newport Beach, CA','Princeton, NJ','Rogers, AR','San Francisco, CA','Santa Monica, CA','St. Louis, MO','Walnut Creek, CA','Washington, D.C.'] },
  { label: 'Kindbody Benefit', items: ['For Members','For Employers','Health Plans'] },
  { label: 'Resources', items: ['Medteach','Fertility Education','Resource Hub'] },
];

function UtilityBar() {
  return (
    <div style={{ background: 'var(--kb-navy)', color: 'var(--kb-cream)', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '9px 32px', display: 'flex', justifyContent: 'flex-end', gap: 26 }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Schedule</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Member Portal</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Provider Portal</a>
      </div>
    </div>
  );
}

function Header({ onNavigate, active }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40 }}>
      <UtilityBar />
      <div onMouseLeave={() => setOpen(null)} style={{ background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', height: 78, display: 'flex', alignItems: 'center', gap: 40 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ lineHeight: 0 }}>
            <Logo variant="navy" width={158} basePath="../../" />
          </a>
          <nav style={{ display: 'flex', gap: 26, flex: 1, fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500 }}>
            {NAV.map((n) => (
              <span key={n.label} onMouseEnter={() => setOpen(n.label)} style={{ position: 'relative', padding: '28px 0', cursor: 'pointer', color: 'var(--kb-navy)', display: 'inline-flex', alignItems: 'center', gap: 5, borderBottom: open === n.label ? '3px solid var(--kb-yellow)' : '3px solid transparent' }}>
                {n.label}<Icon name="chevron-down" size={14} />
              </span>
            ))}
          </nav>
          <Button size="sm" onClick={() => onNavigate('services')}>Schedule</Button>
        </div>
        {open ? (
          <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--kb-white)', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto', padding: '26px 32px 30px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px 32px', fontFamily: 'var(--font-sans)', fontSize: 14.5 }}>
              {NAV.find((n) => n.label === open).items.map((i) => (
                <a key={i} href="#" onClick={(e) => { e.preventDefault(); setOpen(null); onNavigate(routeFor(i)); }}
                  style={{ color: 'var(--kb-navy)', textDecoration: 'none', padding: '6px 0' }}>{i}</a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function routeFor(item) {
  if (item === 'Services & Pricing') return 'services';
  if (item === 'Our Experts' || item === 'Leadership') return 'experts';
  if (item === 'For Employers') return 'employer';
  if (item === 'New York, NY' || item === 'All Locations') return 'location';
  return 'home';
}

const FOOTER = [
  { head: 'Company', items: ['About Us','Our Doctors','Join Our Team','Employer Benefits','Blog','Contact Us'] },
  { head: 'Services', items: ['Egg Freezing','IVF & Conception','Holistic Care','Oncofertility'] },
  { head: 'Resources', items: ['Press','Patient Portal','FAQ','Access to Care','Financing','Fertility Education','Medteach','Referring Providers','Physician Licenses'] },
];

function Footer() {
  return (
    <footer style={{ background: 'var(--kb-navy)', color: 'var(--kb-cream)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 32px 32px', display: 'grid', gridTemplateColumns: '1.3fr repeat(3,1fr)', gap: 40 }}>
        <div>
          <Logo variant="white" width={170} basePath="../../" />
          <div style={{ marginTop: 26, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>Stay in touch with Kindbody</div>
          <div style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7 }}>
            <a href="tel:1-855-563-2639" style={{ color: 'var(--kb-yellow)', textDecoration: 'none' }}>1-855-KND-BODY</a><br />
            <a href="mailto:navigator@kindbody.com" style={{ color: 'var(--kb-yellow)', textDecoration: 'none' }}>navigator@kindbody.com</a>
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 14 }}>
            {['facebook','instagram','twitter','linkedin'].map((s) => <Icon key={s} name={s} size={20} color="var(--kb-cream)" label={s} />)}
          </div>
        </div>
        {FOOTER.map((col) => (
          <div key={col.head}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--kb-yellow)' }}>{col.head}</div>
            <div style={{ marginTop: 16, display: 'grid', gap: 10, fontSize: 12.5, letterSpacing: '.07em', textTransform: 'uppercase' }}>
              {col.items.map((i) => <a key={i} href="#" style={{ color: 'var(--kb-cream)', textDecoration: 'none' }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(239,233,226,.2)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 32px', display: 'flex', flexWrap: 'wrap', gap: 18, fontSize: 12, color: 'rgba(239,233,226,.75)' }}>
          <span>© 2026 Kindbody</span>
          {['Privacy Policy','Terms of Use','SMS Terms','HIPAA Privacy','Data Processing'].map((i) => <a key={i} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{i}</a>)}
        </div>
      </div>
    </footer>
  );
}

function Section({ children, ground = 'cream', pad = 96, style }) {
  const grounds = { cream: 'var(--kb-cream)', white: 'var(--kb-white)', navy: 'var(--kb-navy)', rose: 'var(--kb-rose)', yellow: 'var(--kb-yellow)' };
  return (
    <section style={{ background: grounds[ground], padding: `${pad}px 0`, ...style }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Header, Footer, Section, UtilityBar, NAV });
