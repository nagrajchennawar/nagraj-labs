import { useEffect, useState } from 'react'

const skillGroups = [
  { title: 'Frontend', number: '01', skills: ['ReactJS', 'Next.js', 'JavaScript', 'TypeScript', 'AngularJS'] },
  { title: 'State management', number: '02', skills: ['Redux', 'Redux Toolkit', 'RTK Query', 'Context API'] },
  { title: 'UI & styling', number: '03', skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'MUI', 'Ant Design', 'Minimal CSS'] },
  { title: 'Backend & APIs', number: '04', skills: ['Node.js', 'REST APIs'] },
  { title: 'Cloud & DevOps', number: '05', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
  { title: 'Testing & tools', number: '06', skills: ['Jest', 'React Testing Library', 'Git', 'GitHub', 'Bitbucket', 'Postman', 'Swagger', 'ESLint', 'SonarQube', 'Prettier', 'Husky'] },
]

const experience = [
  { role: 'Senior Software Engineer', company: 'Tata Communications Limited.', dates: 'March 2026 — Present', period: 'Present' },
  { role: 'Software Engineer', company: 'iProgrammer Solutions Pvt. Ltd.', dates: 'Jan 2024 — Sep 2025', period: '2024 — 2025' },
  { role: 'Software Engineer', company: 'Cybage Software Pvt. Ltd.', dates: 'Jan 2022 — Dec 2023', period: '2022 — 2023' },
]

const projects = [
  {
    name: 'Deep Marine Mind',
    index: '01',
    accent: 'ocean',
    mark: 'DM',
    role: 'Frontend Developer',
    description: 'Responsive frontend development with API integration and a RESTful microservices architecture.',
    technologies: ['ReactJS', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Saga', 'Redux Thunk', 'Redux Toolkit', 'RTK Query', 'MongoDB', 'Node.js', 'AWS', 'Microservices', 'Docker', 'Kubernetes'],
    contributions: ['Built responsive user interfaces and integrated APIs with RTK Query.', 'Worked with RESTful microservices architecture.', 'Supported Kubernetes load balancing, auto-scaling, and high availability.', 'Worked with AWS EC2, S3, and CloudFront.'],
  },
  {
    name: 'Puravankara',
    index: '02',
    accent: 'sand',
    mark: 'P.',
    role: 'Frontend Developer',
    description: 'Frontend development with reusable UI components and type-safe Redux state management.',
    technologies: ['ReactJS', 'Redux', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'MUI', 'Minimal', 'Redux Toolkit', 'Node.js'],
    contributions: ['Built reusable, modular components with MUI and Minimal component libraries.', 'Managed application state with Redux.', 'Used ES6 features and arrow functions.', 'Applied TypeScript for type-safe development.'],
  },
  {
    name: 'Ask U-tech / UltraTech',
    index: '03',
    accent: 'lime',
    mark: 'U+',
    role: 'ReactJS Developer',
    description: 'Customer engagement platform for user queries and consultation bookings.',
    technologies: ['ReactJS', 'Next.js', 'Redux', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    contributions: ['Developed experiences for user queries and consultation booking.', 'Used TypeScript and Next.js to support performance and SEO.', 'Built reusable UI components.'],
  },
  {
    name: 'Ebrochure / U-tech',
    index: '04',
    accent: 'blue',
    mark: 'E.',
    role: 'ReactJS Developer',
    description: 'Dynamic, responsive web application for product and application showcases.',
    technologies: ['ReactJS', 'Redux', 'MySQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux Toolkit'],
    contributions: ['Built reusable UI components and integrated APIs with Redux Toolkit.', 'Worked on performance optimization.', 'Developed a comprehensive admin panel for brochure content, user data, and system settings.'],
  },
  {
    name: 'Space Captain / ioffice by Eptura',
    index: '05',
    accent: 'violet',
    mark: 'SC',
    role: 'Frontend Developer',
    description: 'Frontend development with reusable components and REST API integration.',
    technologies: ['ReactJS', 'AngularJS', 'Java', 'JavaScript', 'TypeScript', 'Bootstrap', 'HTML', 'CSS', 'Azure', 'Docker', 'Microservices', 'Azure Storage', 'Azure DevOps'],
    contributions: ['Developed reusable frontend components and integrated REST APIs.', 'Collaborated across teams on requirements, development, testing, and delivery.', 'Worked with Azure Storage and Azure DevOps CI/CD pipelines.'],
  },
]

const projectFilters = [
  { label: 'All projects', matches: () => true },
  { label: 'React', matches: (project) => project.technologies.includes('ReactJS') },
  { label: 'Next.js', matches: (project) => project.technologies.includes('Next.js') },
  { label: 'TypeScript', matches: (project) => project.technologies.includes('TypeScript') },
  { label: 'Cloud & DevOps', matches: (project) => project.technologies.some((technology) => ['AWS', 'Azure', 'Docker', 'Kubernetes'].includes(technology)) },
]

const techTiles = [
  { name: 'ReactJS', kind: 'core', symbol: '⚛' },
  { name: 'TypeScript', kind: 'language', symbol: 'TS' },
  { name: 'Next.js', kind: 'framework', symbol: 'N' },
  { name: 'Redux Toolkit', kind: 'state', symbol: 'R' },
  { name: 'JavaScript', kind: 'language', symbol: 'JS' },
  { name: 'Tailwind CSS', kind: 'ui', symbol: '≈' },
  { name: 'Node.js', kind: 'backend', symbol: '⬡' },
  { name: 'Jest', kind: 'testing', symbol: '◈' },
]

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

const runtimeCapabilities = [
  { id: 'interface', label: 'INTERFACE', stack: 'React · Next.js · TypeScript', detail: 'Reusable, responsive UI built for real product workflows.' },
  { id: 'state', label: 'APPLICATION STATE', stack: 'Redux Toolkit · RTK Query', detail: 'Structured state and API-connected application experiences.' },
  { id: 'delivery', label: 'DELIVERY', stack: 'AWS · Docker · Kubernetes', detail: 'Cloud and container technologies from professional projects.' },
]

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    down: <><path d="M12 5v14M19 12l-7 7-7-7" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.3 13.3 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 2.7 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18.1V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function Header({ theme, setTheme, active, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Nagraj Chennawar, home">
        <span className="brand-mark">N<span>.</span></span>
        <span className="brand-name">nagraj<span>.dev</span></span>
      </a>
      <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <a key={id} className={active === id ? 'nav-link nav-link-active' : 'nav-link'} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Icon name="arrow" size={15} /></a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>
      </div>
    </header>
  )
}

function SystemBar({ active }) {
  return (
    <div className="system-bar" aria-label="Portfolio status">
      <span className="system-path"><span className="system-path-mark">NC</span><span className="system-path-separator">/</span>portfolio<span className="system-path-separator">/</span><strong>{active}</strong></span>
      <span className="system-online"><span /> PORTFOLIO ONLINE</span>
      <span className="system-build">FRONTEND ENGINEERING <span>·</span> 4+ YEARS</span>
    </div>
  )
}

function HeroVisual() {
  const [selected, setSelected] = useState(runtimeCapabilities[0])

  return (
    <div className="hero-visual" aria-label="Interactive frontend engineering capability panel">
      <div className="runtime-panel">
        <div className="runtime-panel-top">
          <span><span className="runtime-brand-mark">NC</span> NAGRAJ.RUNTIME</span>
          <span className="runtime-live"><i /> LIVE</span>
        </div>
        <div className="runtime-identity">
          <span className="runtime-overline">ENGINEERING FOCUS</span>
          <strong>Frontend<br /><em>experiences.</em></strong>
          <span className="runtime-note"><span>↳</span> thoughtful by design / ready to scale</span>
        </div>
        <div className="runtime-nodes" aria-label="Explore engineering capabilities">
          {runtimeCapabilities.map((capability, index) => (
            <button key={capability.id} className={`runtime-node${selected.id === capability.id ? ' runtime-node-active' : ''}`} onClick={() => setSelected(capability)} aria-pressed={selected.id === capability.id}>
              <span className="runtime-node-number">0{index + 1}</span>
              <span className="runtime-node-copy"><strong>{capability.label}</strong><small>{capability.stack}</small></span>
              <Icon name="arrow" size={14} />
            </button>
          ))}
        </div>
        <div className="runtime-terminal" aria-live="polite">
          <span className="terminal-prompt"><i /> {selected.label}</span>
          <p>{selected.detail}</p>
          <span className="terminal-cursor" aria-hidden="true">_</span>
        </div>
        <div className="runtime-panel-footer"><span>NC / 01</span><span>FRONTEND DEVELOPER</span><span>↗</span></div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> FRONTEND ENGINEERING <span className="availability-slash">/</span> PORTFOLIO 01</div>
        <p className="hero-kicker">Hello, I’m</p>
        <h1>Nagraj<br /><span>Chennawar</span><i>.</i></h1>
        <div className="hero-role"><span className="role-rule" /> ReactJS Developer <span className="role-divider">/</span> 4+ years in frontend</div>
        <p className="hero-intro">I build considered, reliable web experiences—turning complex ideas into interfaces that feel effortless to use.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View Projects <Icon name="arrow" size={16} /></a>
          <a href="#contact" className="button button-secondary">Contact Me <Icon name="down" size={15} /></a>
        </div>
        <a className="hero-resume" href="/nagraj-chennawar-resume.txt" download="Nagraj-Chennawar-Resume.txt"><span><Icon name="down" size={14} /></span> Download Resume <span className="resume-note">· profile draft</span></a>
      </div>
      <HeroVisual />
      <div className="hero-bottom">
        <div className="hero-proof"><span className="proof-number">04<span>+</span></span><span>years building<br />for the web</span></div>
        <div className="hero-proof"><span className="proof-number">05</span><span>professional<br />projects</span></div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line" /></a>
        <span className="hero-location">DESIGNED WITH INTENTION&nbsp; · &nbsp;BUILT WITH REACT</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-shell about-grid">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Good interfaces<br />make things <em>click.</em></>} />
        <div className="about-copy">
          <p className="about-lead">I’m a frontend developer with <strong>4+ years of experience</strong>, focused on building thoughtful digital products with React.</p>
          <p>My work spans reusable UI, API-connected experiences, and the details that make an application feel fast, clear, and dependable. I enjoy making complex requirements feel simple—and building frontends that are ready to grow.</p>
          <div className="about-highlights">
            <div><span className="highlight-icon"><Icon name="check" size={15} /></span><span>Reusable, scalable UI</span></div>
            <div><span className="highlight-icon"><Icon name="check" size={15} /></span><span>API integration</span></div>
            <div><span className="highlight-icon"><Icon name="check" size={15} /></span><span>Performance-minded frontend</span></div>
          </div>
          <a className="text-link" href="#experience">A little more about my journey <Icon name="arrow" size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Frontend', 'UI', 'Tools']
  const displayedGroups = skillGroups.filter((group) => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Frontend') return ['Frontend', 'State management'].includes(group.title)
    if (activeCategory === 'UI') return ['UI & styling'].includes(group.title)
    return ['Backend & APIs', 'Cloud & DevOps', 'Testing & tools'].includes(group.title)
  })
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="section-shell">
        <div className="skills-intro">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools for turning<br />ideas into <em>interfaces.</em></>} description="A practical mix of frontend, state, UI, API, cloud, and testing tools." />
          <div className="skill-filters" aria-label="Filter skill categories">
            {categories.map((category) => <button key={category} className={activeCategory === category ? 'filter-button filter-active' : 'filter-button'} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
        </div>
        <div className="skill-grid">
          {displayedGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading"><span className="skill-number">{group.number}</span><h3>{group.title}</h3><span className="skill-card-arrow"><Icon name="arrow" size={15} /></span></div>
              <div className="skill-tags">{group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="skills-footnote"><span className="footnote-star">✳</span> Curious by nature. Always learning what’s next.</div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="section-shell experience-grid">
        <div className="experience-heading">
          <SectionHeading eyebrow="THE JOURNEY" title={<>Built on real<br /><em>experience.</em></>} description="Growing through hands-on work with product teams and real-world applications." />
          <div className="experience-aside"><span className="aside-symbol">↗</span><span>4+ years of frontend<br />development experience</span></div>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="timeline-content">
                <div className="timeline-topline"><span className={`period-pill${index === 0 ? ' period-current' : ''}`}><span />{job.period}</span><span className="timeline-dates">{job.dates}</span></div>
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
              </div>
            </article>
          ))}
          <article className="timeline-item timeline-education">
            <div className="timeline-marker timeline-marker-muted"><span>03</span></div>
            <div className="timeline-content">
              <div className="timeline-topline"><span className="period-pill"><span />Education</span><span className="timeline-dates">Completed 2020</span></div>
              <h3>BE in Computer Science</h3>
              <p className="timeline-company">A foundation in computer science.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Projects({ setSelectedProject }) {
  const [activeFilter, setActiveFilter] = useState('All projects')
  const visibleProjects = projects.filter((project) => projectFilters.find((filter) => filter.label === activeFilter).matches(project))

  return (
    <section className="projects-section section-pad" id="projects">
      <div className="section-shell">
        <div className="projects-heading-row">
          <SectionHeading eyebrow="SELECTED WORK" title={<>A few names from<br />the <em>workbench.</em></>} description="A selection of professional projects, with technologies and contributions from my experience." />
          <span className="project-counter">{String(visibleProjects.length).padStart(2, '0')} <span>PROJECTS</span></span>
        </div>
        <div className="project-filters" aria-label="Filter projects by technology">
          {projectFilters.map((filter) => <button key={filter.label} className={activeFilter === filter.label ? 'filter-button filter-active' : 'filter-button'} onClick={() => setActiveFilter(filter.label)} aria-pressed={activeFilter === filter.label}>{filter.label}</button>)}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className={`project-card project-${project.accent}`} key={project.name}>
              <div className="project-art">
                <span className="project-art-grid" />
                <span className="project-index">{project.index} / 05</span>
                <span className="project-monogram">{project.mark}</span>
                <span className="project-art-orb" />
                <span className="project-art-line" />
                <span className="project-art-label">SELECTED WORK</span>
              </div>
              <div className="project-card-body">
                <div className="project-meta"><span>PROFESSIONAL PROJECT</span><span className="project-meta-dot" /></div>
                <h3>{project.name}</h3>
                <p className="project-role">{project.role}</p>
                <p>{project.description}</p>
                <div className="project-tech-tags" aria-label={`${project.name} technologies`}>
                  {project.technologies.slice(0, 4).map((technology) => <span className="project-tech-tag" key={technology}>{technology}</span>)}
                  {project.technologies.length > 4 && <span className="project-tech-more">+{project.technologies.length - 4}</span>}
                </div>
                <button className="project-details" onClick={() => setSelectedProject(project)}>View details <Icon name="arrow" size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  const [selected, setSelected] = useState('ReactJS')
  return (
    <section className="stack-section section-pad">
      <div className="section-shell stack-grid">
        <div className="stack-copy">
          <SectionHeading eyebrow="IN MY EVERYDAY" title={<>A stack that<br /><em>gets things done.</em></>} description="The technologies I reach for to build modern, maintainable web experiences." />
          <div className="stack-selected"><span className="stack-selected-dot" /><span><strong>{selected}</strong><small> part of my toolkit</small></span></div>
        </div>
        <div className="tech-grid">
          {techTiles.map((tech, index) => <button className={`tech-tile${selected === tech.name ? ' tech-selected' : ''}`} key={tech.name} onClick={() => setSelected(tech.name)} style={{ '--tile-index': index }} aria-pressed={selected === tech.name}>
            <span className={`tech-symbol symbol-${tech.kind}`}>{tech.symbol}</span><span className="tech-name">{tech.name}</span><Icon name="arrow" size={14} />
          </button>)}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Nagraj,\n\n${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    setSent(true)
  }
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <SectionHeading eyebrow="LET’S CONNECT" title={<>Have a good one<br />in <em>mind?</em></>} description="I’m always glad to hear about thoughtful products, interesting challenges, and new connections." light />
          <a className="contact-email-link" href="mailto:?subject=Hello%20Nagraj"><span className="contact-email-icon"><Icon name="mail" size={18} /></span><span><small>DROP ME A LINE</small><strong>Start a conversation</strong></span><Icon name="arrow" size={18} /></a>
          <p className="contact-note">My direct contact details will be added once my resume is available.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>01 — A NOTE TO NAGRAJ</span><span className="form-required">* required</span></div>
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input id="contact-name" type="text" autoComplete="name" placeholder="Jane Smith" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          <label htmlFor="contact-email">Your email <span>*</span></label>
          <input id="contact-email" type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
          <label htmlFor="contact-message">What’s on your mind? <span>*</span></label>
          <textarea id="contact-message" rows="4" placeholder="A little about what you have in mind..." value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
          <button className="button button-form" type="submit">{sent ? 'Email draft opened' : 'Open email draft'} <Icon name={sent ? 'check' : 'arrow'} size={16} /></button>
          <p className="form-disclaimer">{sent ? 'Your email app should open with your message. Add my address once it’s available.' : 'Opens a pre-filled message in your email app. No information is sent from this site.'}</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="footer-brand" href="#home"><span className="brand-mark">N<span>.</span></span><span><strong>Nagraj Chennawar</strong><small>ReactJS Developer</small></span></a>
        <span className="footer-credit">Thoughtful frontend. Built with React.</span>
        <div className="footer-links">
          <a href="mailto:?subject=Hello%20Nagraj" aria-label="Email Nagraj"><Icon name="mail" size={17} /></a>
          <a href="#contact" aria-label="Contact Nagraj"><Icon name="arrow" size={17} /></a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Nagraj Chennawar</span>
      </div>
    </footer>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><Icon name="close" size={19} /></button>
        <span className="eyebrow"><span className="eyebrow-dot" />PROJECT {project.index}</span>
        <h2 id="modal-title">{project.name}</h2>
        <p className="modal-project-role">{project.role}</p>
        <p>{project.description}</p>
        <h3 className="modal-subheading">Technologies</h3>
        <div className="modal-tech-tags">{project.technologies.map((technology) => <span className="project-tech-tag" key={technology}>{technology}</span>)}</div>
        <h3 className="modal-subheading">Contributions</h3>
        <ul className="modal-contributions">{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
        <button className="button button-primary" onClick={onClose}>Back to projects <Icon name="arrow" size={16} /></button>
      </section>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'dark' ? '#0c0e0d' : '#f3f4ee'
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const sections = ['home', ...navItems.map(([, id]) => id)]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length) setActive(visible[0].target.id)
    }, { rootMargin: '-18% 0px -65% 0px', threshold: [0, 0.15, 0.35, 0.6] })
    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 560)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject, menuOpen])

  return (
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SystemBar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects setSelectedProject={setSelectedProject} />
        <TechStack />
        <section className="education-strip">
          <div className="section-shell education-inner"><span className="education-label">THE FOUNDATION</span><span className="education-title">BE in Computer Science</span><span className="education-year">Completed 2020</span><span className="education-icon">✳</span></div>
        </section>
        <Contact />
      </main>
      <Footer />
      {showTop && <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><Icon name="down" size={18} /></button>}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default App
