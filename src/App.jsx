import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaDownload, FaGlobe, FaMoon, FaSun, FaArrowUp } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiFlask, SiGit, SiMysql } from 'react-icons/si';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const titles = ["Full Stack Dev", "Web Developer", "AI Enthusiast"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const translations = {
    en: {
      home: {
        title: "Hi, I'm Esther Maina — Developer & AI Enthusiast",
        subtitle: "Building clean, smart web solutions.",
        viewProjects: "View Projects"
      },
      about: {
        title: "About Me",
        bio: "I'm a passionate developer with experience in building web applications. I love solving problems and creating efficient, user-friendly solutions.",
        downloadCV: "Download CV",
        downloadApp: "Download Application"
      },
      projects: {
        title: "My Projects",
        loginForm: {
          title: "Login Form",
          description: "A responsive login form with validation."
        },
        miniChallenge: {
          title: "Mini Challenge Frontend",
          description: "Frontend implementation for a coding challenge."
        },
        ussdSystem: {
          title: "USSD System",
          description: "A USSD simulation built with Python and Flask."
        },
        github: "GitHub",
        demo: "Watch Demo"
      },
      skills: {
        title: "My Skills",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools"
      },
      ai: {
        title: "Ask Me Anything!",
        placeholder: "AI Assistant coming soon!",
        exampleQuestion: "What tech did Esther Maina use in Project X?",
        inputPlaceholder: "Type your question...",
        send: "Send"
      },
      contact: {
        title: "Get In Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      },
      footer: {
        text: "© 2025 Esther Maina | Built with 💻 by Esther Maina",
        repo: "View Source Code"
      }
    },
    sw: {
      home: {
        title: "Habari, mimi ni Esther Maina — Msanidi programu na Mpenzi wa AI",
        subtitle: "Kujenga suluhu safi na zenye akili za wavuti.",
        viewProjects: "Angalia Miradi"
      },
      about: {
        title: "Kuhusu Mimi",
        bio: "Mimi ni msanidi programu mwenye shauku mwenye uzoefu wa kujenga programu za wavuti. Napenda kutatua matatizo na kuunda suluhu zenye ufanisi na rahisi kwa watumiaji.",
        downloadCV: "Pakua CV",
        downloadApp: "Pakua Fomu ya Maombi"
      },
      projects: {
        title: "Miradi Yangu",
        loginForm: {
          title: "Fomu ya Kuingia",
          description: "Fomu ya kuingia inayojibu na uthibitishaji."
        },
        miniChallenge: {
          title: "Changamoto Ndogo ya Mwanzoni",
          description: "Utekelezaji wa mwanzoni wa changamoto ya kuandika kodi."
        },
        ussdSystem: {
          title: "Mfumo wa USSD",
          description: "Uigizaji wa USSD uliojengwa na Python na Flask."
        },
        github: "GitHub",
        demo: "Tazama Onyesho"
      },
      skills: {
        title: "Ujuzi Wangu",
        frontend: "Mwanzoni",
        backend: "Nyuma",
        tools: "Vifaa"
      },
      ai: {
        title: "Niulize Kitu!",
        placeholder: "Msaidizi wa AI anakuja hivi karibuni!",
        exampleQuestion: "Ni teknolojia gani Esther Maina alitumia katika Mradi X?",
        inputPlaceholder: "Andika swali lako...",
        send: "Tuma"
      },
      contact: {
        title: "Wasiliana Nami",
        name: "Jina",
        email: "Barua Pepe",
        message: "Ujumbe",
        submit: "Tuma Ujumbe"
      },
      footer: {
        text: "© 2025 Esther Maina | Iliyojengwa na 💻 na Esther Maina",
        repo: "Tazama Chanzo cha Kanuni"
      }
    },
    fr: {
      home: {
        title: "Salut, je suis Esther Maina — Développeur & Passionné d'IA",
        subtitle: "Construire des solutions web propres et intelligentes.",
        viewProjects: "Voir les Projets"
      },
      about: {
        title: "À Propos de Moi",
        bio: "Je suis un développeur passionné avec de l'expérience dans la construction d'applications web. J'aime résoudre des problèmes et créer des solutions efficaces et conviviales.",
        downloadCV: "Télécharger CV",
        downloadApp: "Télécharger le Formulaire"
      },
      projects: {
        title: "Mes Projets",
        loginForm: {
          title: "Formulaire de Connexion",
          description: "Un formulaire de connexion responsive avec validation."
        },
        miniChallenge: {
          title: "Mini Défi Frontend",
          description: "Implémentation frontend pour un défi de codage."
        },
        ussdSystem: {
          title: "Système USSD",
          description: "Une simulation USSD construite avec Python et Flask."
        },
        github: "GitHub",
        demo: "Voir la Démo"
      },
      skills: {
        title: "Mes Compétences",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Outils"
      },
      ai: {
        title: "Demandez-Moi N'importe Quoi!",
        placeholder: "Assistant IA à venir bientôt!",
        exampleQuestion: "Quelle technologie Foo a-t-il utilisé dans le Projet X?",
        inputPlaceholder: "Tapez votre question...",
        send: "Envoyer"
      },
      contact: {
        title: "Contactez-Moi",
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer le Message"
      },
      footer: {
        text: "© 2025 Esther Maina | Construit avec 💻 par Esther Maina",
        repo: "Voir le Code Source"
      }
    }
  };


  const projects = [
    {
      title: translations[language].projects.loginForm.title,
      description: translations[language].projects.loginForm.description,
      tech: ['HTML', 'CSS', 'JS'],
      githubUrl: 'https://github.com/EstherDev-ops/my-new-project',
      demoUrl: null
    },
{
      title: translations[language].projects.miniChallenge.title,
      description: translations[language].projects.miniChallenge.description,
      tech: ['HTML', 'CSS', 'JS'],
      githubUrl: 'https://github.com/EstherDev-ops/my-coding-project',
      demoUrl: null
    },
    {
      title: translations[language].projects.ussdSystem.title,
      description: translations[language].projects.ussdSystem.description,
      tech: ['Python', 'Flask'],
      githubUrl: 'https://github.com/EstherDev-ops/USSD-SYTEM',
      demoUrl: 'https://youtu.be/LNwVzJrnk6s?si=XZuNhDYL8ja32390'
    }
  ];

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const [statusMessage, setStatusMessage] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatusMessage('');

  try {
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    setStatusMessage(data.message);
    if (data.success) {
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
    setStatusMessage('Failed to send message.');
  } finally {
    setIsSubmitting(false);
  }
};

  

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.className = savedTheme;
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`app-container ${theme}`}>
      
      <header className="app-header">
        <div className="header-content">
          <div className="logo">EM</div>
          <nav className="main-nav">
            {['home', 'about', 'projects', 'skills', 'ai', 'contact'].map((item) => (
              <Link key={item} to={item} smooth={true} duration={500} offset={-80} className="nav-link">
                {translations[language][item]?.title || item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
          <div className="header-controls">
            <div className="language-selector">
              <FaGlobe className="globe-icon" />
              <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="language-dropdown">
                <option value="en">EN</option>
                <option value="sw">SW</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">{translations[language].home.title}</h1>
            <p className="home-subtitle">{translations[language].home.subtitle}</p>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="home-button">
              {translations[language].home.viewProjects}
            </Link>
          </div>
          <div className="home-image">
            <div className="profile-image">
              <div className="profile-inner">
                <span className="profile-emoji">👩‍💻</span>
              </div>
              <div className="profile-badge">
                <span>{titles[currentTitleIndex]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].about.title}</span>
          </h2>
          <div className="about-content">
            <div className="about-card">
              <p className="about-bio">{translations[language].about.bio}</p>
              <div className="about-buttons">
                <a href="https://raw.githubusercontent.com/EstherDev-ops/portfolio-assets/main/Esther%20Application%20Letter%20(1).docx" className="download-button primary">
                  <FaDownload className="button-icon" />
                  {translations[language].about.downloadCV}
                </a>
                <a href="https://raw.githubusercontent.com/EstherDev-ops/portfolio-assets/main/Esther%20Resume'.docx" className="download-button secondary">
                  <FaDownload className="button-icon" />
                  {translations[language].about.downloadApp}
                </a>
              </div>
              <div className="social-icons">
                <a href="https://github.com/EstherDev-ops" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/esther-maina-000a3a35a" className="social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].projects.title}</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <span className="project-icon">📁</span>
                </div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a href={project.githubUrl} className="project-button github">
                      <FaGithub className="button-icon" />
                      {translations[language].projects.github}
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-button demo">
                        {translations[language].projects.demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].skills.title}</span>
          </h2>
          <div className="skills-grid">
            {/* Core Skills */}
            <div className="skills-card core-skills">
              <h3 className="skills-category-title">Core Skills</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <SiHtml5 className="skill-icon html" />
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-item">
                  <SiCss3 className="skill-icon css" />
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-item">
                  <SiJavascript className="skill-icon js" />
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <SiGit className="skill-icon git" />
                  <span className="skill-name">Git</span>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="skills-card learning">
              <h3 className="skills-category-title">Currently Learning</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <SiReact className="skill-icon react" />
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <SiPython className="skill-icon python" />
                  <span className="skill-name">Python</span>
                </div>
                <div className="skill-item">
                  <SiMysql className="skill-icon mysql" />
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-item">
                  <SiFlask className="skill-icon flask" />
                  <span className="skill-name">Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section id="ai" className="ai-section">
        <div className="section-container narrow">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].ai.title}</span>
          </h2>
          <div className="ai-card">
            <div className="ai-message">
              <p className="ai-placeholder">{translations[language].ai.placeholder}</p>
            </div>
            <div className="ai-example">
              <p className="ai-question">{translations[language].ai.exampleQuestion}</p>
            </div>
            <div className="ai-input-container">
              <input
                type="text"
                placeholder={translations[language].ai.inputPlaceholder}
                className="ai-input"
                disabled
              />
              <button className="ai-send-button" disabled>
                {translations[language].ai.send}
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].contact.title}</span>
          </h2>
          <div className="contact-grid">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.name}</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.email}</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.message}</label>
    <textarea
      name="message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      className="form-textarea"
      required
    ></textarea>
  </div>
  <button type="submit" className="submit-button" disabled={isSubmitting}>
    {isSubmitting ? 'Sending...' : translations[language].contact.submit}
  </button>
  {statusMessage && <p className="form-status">{statusMessage}</p>}
</form>

            </div>
            <div className="contact-info-card">
              <div className="contact-info">
                <h3 className="info-title">Contact Info</h3>
                <div className="info-item">
                  <div className="info-icon">
                    <span>✉️</span>
                  </div>
                  <div className="info-content">
                    <p className="info-label">Email</p>
                    <p className="info-value">mainaesther1164@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-buttons">
                  <a href="https://github.com/EstherDev-ops" className="social-button">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/esther-maina-000a3a35a" className="social-button">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-text">{translations[language].footer.text}</p>
          <div className="footer-links">
            <a href="https://github.com/EstherDev-ops" className="footer-link">{translations[language].footer.repo}</a>
            <button onClick={scrollToTop} className="back-to-top">
              <FaArrowUp className="arrow-icon" />
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;