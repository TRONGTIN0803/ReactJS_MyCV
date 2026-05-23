import './App.css'
import avatarImage from './assets/avatar.png'
import bannerImage from './assets/ChatGPT Image Banner.png'

const contacts = [
  { label: 'Phone', value: '0398 124 501', href: 'tel:0398124501' },
  { label: 'Email', value: 'phamtrongtin0803@gmail.com', href: 'mailto:phamtrongtin0803@gmail.com' },
  { label: 'GitHub', value: 'github.com/TRONGTIN0803', href: 'https://github.com/TRONGTIN0803' },
  { label: 'Location', value: 'Quan 7, Ho Chi Minh City' },
]

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['C#', '.NET Framework 4.8', 'ASP.NET', '.NET Core', 'VB.NET', 'Java', 'JavaScript', 'PHP', 'React Native'],
  },
  {
    title: 'Backend & Architecture',
    items: ['RESTful API', 'ABP Framework', 'Layered Architecture', 'EF Core', 'Microservices-oriented Backend'],
  },
  {
    title: 'Tools & Database',
    items: ['Visual Studio', 'VS Code', 'Android Studio', 'Hangfire', 'Bootstrap', 'SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
  },
]

const experiences = [
  {
    role: 'Junior .NET Developer',
    company: 'HQSOFT',
    time: '12/2023 - 06/2026',
    tag: 'Backend Developer (.NET)',
    bullets: [
      'Developed, maintained, and troubleshot Cloud Back Office and DMS systems using .NET Framework 4.8.',
      'Built complex business features for promotions, gift programs, customer points, and sales policy management.',
      'Designed RESTful APIs with ASP.NET Core for data integrations with third-party systems such as DSM and nRetail.',
      'Maintained and extended VB.NET features across the eBiz4E ecosystem.',
      'Applied AI tools to support code refactoring, query optimization, and business processing performance improvements.',
    ],
  },
  {
    role: 'ABP Framework / Modern Backend Experience',
    company: 'HQSOFT',
    time: 'Project work',
    tag: 'ASP.NET Core, EF Core, PostgreSQL',
    bullets: [
      'Contributed to backend systems following ABP Layered Architecture.',
      'Worked across Domain, Application, Entity Framework Core, HttpApi, HttpApi.Host, and DbMigrator layers.',
      'Built and maintained Web API services using clean layered architecture.',
      'Handled database migrations, entity mapping, repository logic, Swagger, CORS, background jobs, and API integrations.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'ALTA SOFTWARE',
    time: '07/2023 - 11/2023',
    tag: 'Internship',
    bullets: [
      'Collaborated with the team to analyze feature requirements from systems and users.',
      'Designed ERD diagrams and optimized database structure.',
      'Developed APIs for core application features.',
    ],
  },
]

const education = [
  {
    school: 'FPT Polytechnic College',
    major: 'Mobile Programming',
    time: '09/2021 - 02/2024',
    note: 'Graduated with Good classification',
  },
]

function App() {
  return (
    <main className="resume-shell">
      <section className="hero-section" aria-labelledby="profile-title" style={{ '--banner-image': `url("${bannerImage}")` }}>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Backend Developer</p>
          <h1 id="profile-title">Pham Trong Tin</h1>
          <p className="headline">
            .NET Developer focused on reliable backend services, business workflows, and API integrations.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="primary-action" href="mailto:phamtrongtin0803@gmail.com">Contact me</a>
            <a className="secondary-action" href="https://github.com/TRONGTIN0803" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile summary">
          <div className="avatar-wrap">
            <img className="avatar" src={avatarImage} alt="Pham Trong Tin" />
            <span className="status-pill">Available for Backend work</span>
          </div>
          <div>
            <p className="panel-label">Current Focus</p>
            <p className="panel-title">ASP.NET Core, ABP Framework, EF Core</p>
          </div>
          <div className="metric-grid">
            <div>
              <strong>2+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Database stacks</span>
            </div>
          </div>
          <div className="tech-radar" aria-label="Core strengths">
            <span>API</span>
            <span>SQL</span>
            <span>AI</span>
          </div>
        </aside>
      </section>

      <section className="contact-strip" aria-label="Contact information">
        {contacts.map((item) => (
          <div className="contact-item" key={item.label}>
            <span>{item.label}</span>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                {item.value}
              </a>
            ) : (
              <strong>{item.value}</strong>
            )}
          </div>
        ))}
      </section>

      <div className="content-grid">
        <section className="main-column" aria-labelledby="experience-title">
          <div className="section-heading">
            <p>Experience</p>
            <h2 id="experience-title">Backend work shaped by real business systems</h2>
          </div>
          <div className="timeline">
            {experiences.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-meta">
                  <span>{job.time}</span>
                  <strong>{job.company}</strong>
                </div>
                <div className="timeline-body">
                  <p className="role-tag">{job.tag}</p>
                  <h3>{job.role}</h3>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="side-column">
          <section aria-labelledby="skills-title">
            <div className="section-heading compact">
              <p>Toolkit</p>
              <h2 id="skills-title">Skills</h2>
            </div>
            <div className="skill-stack">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="education-title">
            <div className="section-heading compact">
              <p>Education</p>
              <h2 id="education-title">Learning path</h2>
            </div>
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <span>{item.time}</span>
                <h3>{item.school}</h3>
                <p>{item.major}</p>
                <strong>{item.note}</strong>
              </article>
            ))}
          </section>
        </aside>
      </div>
    </main>
  )
}

export default App
