import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


import { FaGithub, FaLinkedin, FaDownload, FaGlobe, FaMoon, FaSun, FaArrowUp } from 'react-icons/fa';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa'; 
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
        exampleQuestion: "Quelle technologie Esther Maina a-t-il utilisé dans le Projet X?",
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
      githubUrl: 'https://github.com/EstherDev-ops/my-new-project',
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

 
  const skills = {
    core: [
      { name: 'HTML', icon: <SiHtml5 className="skill-icon" /> },
      { name: 'CSS', icon: <SiCss3 className="skill-icon" /> },
      { name: 'JavaScript', icon: <SiJavascript className="skill-icon" /> },
      { name: 'Git', icon: <SiGit className="skill-icon" /> }
    ],
    learning: [
      { name: 'React', icon: <SiReact className="skill-icon" /> },
      { name: 'Python', icon: <SiPython className="skill-icon" /> },
      { name: 'MySQL', icon: <SiMysql className="skill-icon" /> },
      { name: 'Flask', icon: <SiFlask className="skill-icon" /> }
    ]
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

 useEffect(() => {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Your browser does not support voice recognition.');
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = language === 'en' ? 'en-US' : language === 'sw' ? 'sw' : 'fr-FR';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => setListening(true);
  recognition.onend = () => setListening(false);
  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    setAiInput(speechResult);
    addMessage('user', speechResult);
    processUserMessage(speechResult); 
  };

  recognitionRef.current = recognition;

  return () => {
    recognition.stop(); 
  };
}, [addMessage,language, processUserMessage]);

	
	

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_pz3r4ot',
    'template_qfukwo7',
    e.target,
    'ma26BScO84Qn3aYIP'
  ).then(
    () => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    },
    (error) => {
      alert("❌ Failed to send message.");
      console.error(error);
    }
  );
};
  

const [aiInput, setAiInput] = useState('');
const [chatHistory, setChatHistory] = useState([
  { sender: 'bot', message: translations[language].ai.placeholder }
]);
const [listening, setListening] = useState(false);
const recognitionRef = useRef(null);

const handleSend = () => {
  if (!aiInput.trim()) return;
  addMessage('user', aiInput.trim());
  processUserMessage(aiInput.trim());
  setAiInput('');
};


const addMessage = useCallback((sender, message) => {
  setChatHistory(prev => [...prev, { sender, message }]);
}, []);



 const processUserMessage = useCallback((msg) => {
  let response = "Sorry, I didn't understand that.";
  const lower = msg.toLowerCase();

  if (lower.includes('project')) {
    response = "I have projects like a Login Form, Mini Challenge, and a USSD System using Python and Flask.";
  } else if (lower.includes('skills')) {
    response = "I am skilled in HTML, CSS, JavaScript, Git, and currently learning React, Python, MySQL, and Flask.";
  } else if (lower.includes('hello') || lower.includes('hi')) {
    response = "Hi there! Ask me anything about my work or skills.";
  }

  addMessage('bot', response);

  const synth = window.speechSynthesis; 
  const utter = new SpeechSynthesisUtterance(response);
  synth.speak(utter);
}, [addMessage]);




const toggleListening = () => {
  if (!recognitionRef.current) {
    alert("Voice recognition not supported in this browser.");
    return;
  }

  if (listening) {
    recognitionRef.current.stop();
  } else {
    recognitionRef.current.start();
  }
};


  return (
    <div className={`app-container ${theme}`}>
      
      <header className="app-header">
        <div className="header-content">
          <div className="logo">EM</div>
          
          <nav className="main-nav">
            {['home', 'about', 'projects', 'skills', 'ai', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
              >
                {translations[language][item]?.title || item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
          
          <div className="header-controls">
            <div className="language-selector">
              <FaGlobe className="globe-icon" />
              <select 
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-dropdown"
              >
                <option value="en">EN</option>
                <option value="sw">SW</option>
                <option value="fr">FR</option>
              </select>
            </div>
            <button 
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </header>

      
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              {translations[language].home.title}
            </h1>
            <p className="home-subtitle">
              {translations[language].home.subtitle}
            </p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="home-button"
            >
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
              <p className="about-bio">
                {translations[language].about.bio}
              </p>
              <div className="about-buttons">
                <a 
                  href="https://raw.githubusercontent.com/EstherDev-ops/portfolio-assets/main/Esther%20Resume'.docx"
                  className="download-button primary"
                >
                  <FaDownload className="button-icon" />
                  {translations[language].about.downloadCV}
                </a>
                <a 
                  href="https://raw.githubusercontent.com/EstherDev-ops/portfolio-assets/main/Esther%20Application%20Letter%20(1).docx"
                  className="download-button secondary"
                >
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
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a 
                      href={project.githubUrl} 
                      className="project-button github"
                    >
                      <FaGithub className="button-icon" />
                      {translations[language].projects.github}
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-button demo"
                      >
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

     
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-underline">{translations[language].skills.title}</span>
          </h2>
          <div className="skills-grid">
           
            <div className="skills-card core-skills">
              <h3 className="skills-category-title">Core Skills</h3>
              <div className="skills-list">
                {skills.core.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

          
            <div className="skills-card learning">
              <h3 className="skills-category-title">Currently Learning</h3>
              <div className="skills-list">
                {skills.learning.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
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
    <div className="ai-chat-container">
      <div className="chat-history">
        {chatHistory.map((chat, idx) => (
          <div
            key={idx}
            className={`chat-message ${chat.sender === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            {chat.message}
          </div>
        ))}
      </div>
      <div className="ai-input-container">
        <input
          type="text"
          placeholder={translations[language].ai.inputPlaceholder}
          className="ai-input"
          value={aiInput}
          onChange={(e) => setAiInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="ai-send-button"
          aria-label="Send message"
        >
          <FaPaperPlane />
        </button>
        <button
          onClick={toggleListening}
          className={`ai-voice-button ${listening ? 'listening' : ''}`}
          aria-label="Toggle voice input"
        >
          <FaMicrophone />
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
              <form className="contact-form" onSubmit={sendEmail}>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.name}</label>
    <input 
      type="text" 
      className="form-input" 
      name="name"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.email}</label>
    <input 
      type="email" 
      className="form-input" 
      name="email"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">{translations[language].contact.message}</label>
    <textarea 
      rows="5" 
      className="form-textarea"
      name="message"
      required
    ></textarea>
  </div>
  <button 
    type="submit" 
    className="submit-button"
  >
    {translations[language].contact.submit}
  </button>
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
          <p className="footer-text">
            {translations[language].footer.text}
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">
              {translations[language].footer.repo}
            </a>
            <button 
              onClick={scrollToTop}
              className="back-to-top"
            >
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