import './globals.css';

const projects = [
  {
    icon: '📐',
    title: 'PrzedmiarAI',
    desc: 'AI automatycznie mierzy powierzchnie z rysunków PDF. Oszczędza 80% czasu kosztorysantów.',
    tag: 'Budowlanka',
    color: 'rgba(139, 92, 246, 0.15)',
    url: 'https://przedmiarai.vercel.app'
  },
  {
    icon: '🏠',
    title: 'Agentivo',
    desc: 'AI dla pośredników nieruchomości. Follow-upy, skaner ofert, trener negocjacji.',
    tag: 'Nieruchomości',
    color: 'rgba(59, 130, 246, 0.15)',
    url: 'https://agentivo.pl'
  },
  {
    icon: '💰',
    title: 'WycenaAI',
    desc: 'Wycena roboty budowlanej w 30 sekund. Aktualne stawki rynkowe.',
    tag: 'Budowlanka',
    color: 'rgba(34, 197, 94, 0.15)',
    url: 'https://wycena-ai.vercel.app'
  },
  {
    icon: '🛋️',
    title: 'WnętrzeAI',
    desc: 'AI Virtual Staging. Puste mieszkanie urządzone w 30 sekund.',
    tag: 'Nieruchomości',
    color: 'rgba(236, 72, 153, 0.15)',
    url: 'https://wnetrzeai.pl'
  },
  {
    icon: '♿',
    title: 'AccessiBot',
    desc: 'Skaner dostępności WCAG. Wykryj problemy zanim wykryje je kontrola.',
    tag: 'SaaS',
    color: 'rgba(6, 182, 212, 0.15)',
    url: 'https://accessibot.pl'
  },
  {
    icon: '🏗️',
    title: 'GTF Panel',
    desc: 'System zarządzania dla firmy budowlanej. Oferty, klienci, kalendarz.',
    tag: 'Wewnętrzne',
    color: 'rgba(249, 115, 22, 0.15)',
    url: 'https://panel.grunttofundament.pl'
  },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <div className="logo-icon">⚙️</div>
            <span className="logo-text">Architekt Systemów</span>
          </a>
          <a href="#projekty" className="nav-cta">Zobacz projekty</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          ⚡ Studio automatyzacji
        </div>
        
        <h1 className="hero-title">
          Budujemy <span className="gradient-text">systemy</span>,<br />
          które zarabiają
        </h1>
        
        <p className="hero-subtitle">
          Tworzymy narzędzia AI i automatyzacje, które oszczędzają czas i generują przychód. 
          Bez bullshitu, z wynikami.
        </p>
        
        <a href="#projekty" className="hero-cta">
          Zobacz nasze projekty →
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projekty" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-header">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Nasze projekty</h2>
            <p className="section-desc">
              Narzędzia, które budujemy i rozwijamy. Każde rozwiązuje konkretny problem.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
                <div className="project-icon" style={{ background: project.color }}>
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <span className="project-tag">{project.tag}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h3>Kim jestem</h3>
              <p>
                Marcin Zielonka — przedsiębiorca i programista z doświadczeniem w budownictwie i nieruchomościach. 
                Buduję narzędzia, które sam chciałbym mieć.
              </p>
              <p>
                Filozofia: "System działa, człowiek odpoczywa." Automatyzuję wszystko co się da, 
                żeby skupić się na tym co naprawdę ważne.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Projektów</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Lat w biznesie</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                width: 280, 
                height: 280, 
                borderRadius: 24, 
                background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80
              }}>
                🧠
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">
          © 2026 Architekt Systemów. Wszystkie prawa zastrzeżone.
        </p>
      </footer>
    </>
  );
}
