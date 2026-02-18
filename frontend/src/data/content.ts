export type Lang = "tr" | "en";

export const content: Record<Lang, any> = {
  tr: {
    nav: { about: "Hakkımda", edu: "Eğitim", exp: "Deneyim", hackathons: "Hackathonlar", projects: "Projeler", certificates: "Sertifikalar", contact: "İletişim", skillMap: "Yetenek Haritam" },
    hero: {
      title: "Merhaba, ben Nisa",
      subtitle: "Full Stack Developer Trainee | Öğrenci",
      description: "Modern web teknolojileriyle projeler geliştirmeye ilgi duyan Full Stack Developer adayıyım. Robotik kodlama, yazılım geliştirme ve yapay zeka alanlarında deneyime sahibim. Problem çözme becerilerimi geliştirmeyi ve kullanıcı odaklı, sürdürülebilir yazılım çözümleri üretmeyi hedefliyorum.",
      
      languages: [
        { name: "İngilizce", level: "B1" },
        { name: "Almanca", level: "B1" }
      ],
      cta1: "Projelerim",
      cta2: "İletişime Geç",
      cvLink: "/cv.pdf",
      cvButton: "CV'mi İndir",
      photo: "", // Fotoğrafınızı src/assets klasörüne ekleyip buraya yolunu yazın, örn: "/src/assets/photo.jpg"
    },
    chatbot: {
      title: "NisaBot",
      placeholder: "Bana Nisa hakkında soru sor...",
      send: "Gönder",
    },
    education: {
      title: "Eğitim",
      items: [
        {
          school: "İstanbul Üniversitesi",
          degree: "Bilgisayar Programcılığı",
          period: "2025 – 2027",
          description: "",
        },
        {
          school: "İstanbul Üniversitesi - Cerrahpaşa",
          degree: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği",
          period: "2022 - 2026",
          description: "",
        },
      ],
    },
    experience: {
      title: "Deneyimler",
      items: [
        {
          position: "Full Stack Developer Trainee",
          company: "Workintech",
          period: "Temmuz 2025 - Günümüz",
          description: "Frontend ve backend teknolojileriyle uygulama geliştirme üzerine deneyim kazanıyorum. Takım çalışması ve proje geliştirme süreçlerinde aktif rol alıyorum.",
          technologies: ["React", "JavaScript", "Java", "Spring Boot", "SQL", "Git"],
        },
        {
          position: "Yarı Zamanlı Öğrenci Asistanı",
          company: "AUZEM - YETAM XR, İstanbul Üniversitesi - Cerrahpaşa",
          period: "Kasım 2024 - Günümüz",
          description: "Ziyaretçilere VR (sanal gerçeklik) gözlüklerinin kullanımı hakkında bilgilendirme ve uygulamalı tanıtım yapıyorum.",
          technologies: ["VR", "Sanal Gerçeklik"],
        },
        {
          position: "Robotik Kodlama Öğretmeni",
          company: "Robotik Bilim, YTÜ Teknopark",
          period: "Mart 2025 - Eylül 2025",
          description: "Robotik ve programlama eğitimi vererek, temel kodlama, problem çözme ve teknoloji kavramlarını öğretiyorum. Uygulamalı robotik projeleriyle yaratıcılık ve eleştirel düşünme becerilerini geliştiriyorum.",
          technologies: ["Robotik", "Programlama", "Eğitim"],
        },
        {
          position: "Eğitmen, Yapay Zeka ve Web 2.0 Araçları Eğitimi",
          company: "Şişli Öğretmenevi",
          period: "Aralık 2024",
          description: "İÜC - Doç. Dr. Özgür Yılmaz Hocamız ve ekibimizle birlikte Türkiye'nin farklı illerinden gelen öğretmenlere yönelik kapsamlı bir eğitim programı gerçekleştirdik. Eğitimde dijital dönüşüm uygulamaları ve yapay zekâ tabanlı öğretim yöntemleri üzerinde duruldu.",
          technologies: ["Yapay Zeka", "Web 2.0", "Eğitim Teknolojileri"],
        },
      ],
    },
    hackathons: {
      title: "Katıldığım Hackathonlar",
      labelWhatWeDid: "Neler yaptık?",
      labelProjectLinks: "Proje linkleri",
      items: [
        {
          name: "Ankara Hackathon 26'",
          period: "5 - 6 Şubat 2026",
          organizer: "BTK Akademi",
          description: "Takım arkadaşım ile birlikte geliştirdiğimiz SafeBank AI projesi kapsamında, bir AI Agent çözümü üzerine çalıştık.",
          projectName: "Proje reposu",
          projectUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
        },
        {
          name: "Freya & Fal – Voice AI Hackathon",
          period: "15 Şubat 2026",
          organizer: "Freya AI × fal.ai",
          description: "Türkiye'nin ilk Voice AI Hackathon'unda 7/24 çalışan, telefonla ya da mikrofon üzerinden arama alıp gerçek zamanlı takvim sorgulayan ve randevu oluşturabilen otonom bir yapay zekâ sesli resepsiyon asistanı geliştirdik. Tool-based mimari ile LLM karar vermeden önce takvim araçları çağrılır; halüsinasyon önleyici bir yapı kullandık.",
          projectName: "Voice AI — Otonom Sesli Resepsiyon",
          projectUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Tool-based mimari"],
        },
      ],
    },
    certificates: {
      title: "Sertifikalar",
      items: [
        {
          name: "Ankara AI Hackathon (BTK Akademi)",
          period: "5 – 6 Şubat 2026",
          description: "Ankara Hackathon 26 kapsamında SafeBank AI projesi ile AI Agent çözümü geliştirdim.",
          image: "/certificate-ankara-ai-hackathon.jpg",
        },
        {
          name: "INSIDER ONE – AI WEEKEND",
          period: "29 Kasım – 30 Kasım 2025",
          description: "LLM temelleri ve n8n ile otomasyon geliştirme alanlarında eğitim aldım.",
          image: "/certificate-ai-weekend.jpg",
        },
      ],
    },
    projects: {
      title: "Projelerim",
      items: [
        {
          name: "n8n Workflow Projects",
          description: "Her proje; API entegrasyonları, OpenAI destekli ajanlar ve Slack/Gmail gibi servislerle gerçek iş senaryolarını otomatikleştirir.",
          technologies: ["n8n", "OpenAI", "AI Agents", "Slack", "Gmail"],
          githubUrl: "https://github.com/nisatas/insider-n8n-workflows",
          demoUrl: "", // Opsiyonel: Canlı demo linki
        },
        {
          name: "Nisspy",
          description: "Haftalık stratejik plan sayfam. Gemini 3 tabanlı yapay zeka koçu ile hedeflerini planlayıp takip edebilirsin. Canlı demo Vercel'de yayında.",
          technologies: ["TypeScript", "React", "Gemini 3", "Vercel"],
          githubUrl: "https://github.com/nisatas/nisspy",
          demoUrl: "https://nisspy.vercel.app",
        },
        {
          name: "SafeBank AI",
          description: "Ankara Hackathon 26' (BTK Akademi) kapsamında takım arkadaşımla geliştirdiğimiz AI Agent çözümü. Güvenli bankacılık senaryoları için yapay zeka tabanlı bir uygulama.",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
          githubUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
        },
        {
          name: "NURAI — Otonom Sesli Resepsiyon Asistanı",
          description: "Freya & Fal Voice AI Hackathon'unda geliştirdiğimiz 7/24 çalışan otonom sesli resepsiyon asistanı. Telefon veya mikrofon ile arama alır, gerçek zamanlı takvim sorgulayıp randevu oluşturur. Tool-based mimari ile halüsinasyon önleyici yapı.",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Python"],
          githubUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
        },
        {
          name: "Cypress Login Form E2E Project",
          description: "React ile oluşturulmuş bir login formunun Cypress kullanılarak uçtan uca (E2E) test edilmesini amaçlamaktadır.",
          technologies: ["React", "Cypress", "JavaScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/cypress-login-project",
          demoUrl: "", // Opsiyonel: Canlı demo linki
        },
        {
          name: "user-posts-app",
          description: "Angular ve jQuery kullanılarak geliştirilmiş bir kullanıcı gönderileri (user-posts) uygulamasıdır",
          technologies: ["Angular", "jQuery", "TypeScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/user-posts-app",
          demoUrl: "", // Opsiyonel: Canlı demo linki
        },
        {
          name: "MeetingApp",
          description: "Toplantı/meeting yönetimi sağlayan web uygulaması.",
          technologies: ["ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap", "JavaScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/ASP.Net-Core-8.0-MeetingApp/tree/main/MeetingApp",
          demoUrl: "", // Opsiyonel: Canlı demo linki
        },
        {
          name: "Pizza Sipariş Formu",
          description: " Verilen Figma tasarımına birebir uyan, mobil ve desktop uyumlu statik bir HTML yapısı oluşturmak.",
          technologies: ["HTML", "CSS", "Figma"],
          githubUrl: "https://github.com/nisatas/Pizza-Siparis-Formu",
          demoUrl: "", // Opsiyonel: Canlı demo linki
        },
        
      ],
    },
    contact: {
      title: "İletişim",
      infoTitle: "İletişim Bilgileri",
      info: [
        {
          label: "E-posta",
          value: "nisatas544@gmail.com",
          link: "mailto:nisatas544@gmail.com",
          icon: "📧",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/nisaatas",
          link: "https://linkedin.com/in/nisaatas",
          icon: "💼",
        },
        {
          label: "GitHub",
          value: "github.com/nisatas",
          link: "https://github.com/nisatas",
          icon: "💻",
        },
      ],
      form: {
        name: "Adınız",
        email: "E-posta",
        message: "Mesajınız",
        submit: "Gönder",
        formNote: "Mesajınız Gmail'de taslak olarak açılır; gönder butonu ile bana ulaşır.",
      },
    },
    skillMap: {
      title: "Yetenek Haritam",
      subtitle: "Her ada bir yeteneği temsil ediyor — tıkla, becerileri gör.",
      skillsTitle: "Beceriler",
      frontend: "Front-End",
      backend: "Back-End",
      other: "Other",
      frontendList: "JavaScript, React.js, Hooks, Redux, HTML, CSS, TailwindCSS, TypeScript",
      backendList: "Java, Spring Boot, SQL, Git, ASP.NET, C#, Python",
      otherList: "Algorithms, Debugging, Deployment, Problem Solving, API Integration, Figma, Teamwork",
      islands: [
        { id: "react", label: "React", ability: "UI bileşenleri, hooks, state", type: "frontend", libraries: "TypeScript, Hooks" },
        { id: "javascript", label: "JavaScript", ability: "ES6+, async, DOM", type: "frontend", libraries: "ES6+, Tailwind" },
        { id: "java", label: "Java", ability: "Backend, OOP", type: "backend", libraries: "Spring Boot" },
        { id: "python", label: "Python", ability: "Backend, API", type: "backend", libraries: "FastAPI" },
        { id: "sql", label: "SQL", ability: "Veritabanı tasarımı ve sorgular", type: "backend" },
        { id: "git", label: "Git", ability: "Sürüm kontrolü, ekip çalışması", type: "tool" },
        { id: "agents", label: "AI Agent", ability: "Tool-based LLM ajanları (SafeBank AI, NURAI)", type: "other" },
        { id: "ai", label: "Yapay Zeka", ability: "LLM, sesli asistanlar, otomasyon", type: "other" },
        { id: "robotik", label: "Robotik", ability: "Kodlama ve eğitim", type: "other" },
      ],
    },
  },
  en: {
    nav: { about: "About", edu: "Education", exp: "Experience", hackathons: "Hackathons", projects: "Projects", certificates: "Certificates", contact: "Contact", skillMap: "Skill Map" },
    hero: {
      title: "Hi, I'm Nisa",
      subtitle: "Full Stack Developer Trainee | Student",
      description: "I am a Full Stack Developer candidate interested in developing projects with modern web technologies. I have experience in robotics programming, software development, and artificial intelligence. I aim to improve my problem-solving skills and produce user-oriented, sustainable software solutions.",
      
      languages: [
        { name: "English", level: "B1" },
        { name: "German", level: "B1" }
      ],
      cta1: "My Projects",
      cta2: "Contact Me",
      cvLink: "/cv.pdf",
      cvButton: "Download CV",
      photo: "", // Add your photo path here, e.g., "/src/assets/photo.jpg"
    },
    chatbot: {
      title: "NisaBot",
      placeholder: "Ask me something about Nisa...",
      send: "Send",
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Istanbul University",
          degree: "Computer Programming",
          period: "2025 – 2027",
          description: "",
        },
        {
          school: "Istanbul University - Cerrahpaşa",
          degree: "Computer and Instructional Technologies Education",
          period: "2022 - 2026",
          description: "",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          position: "Full Stack Developer Trainee",
          company: "Workintech",
          period: "July 2025 - Present",
          description: "I am gaining experience in application development with frontend and backend technologies. I actively participate in teamwork and project development processes.",
          technologies: ["React", "JavaScript", "Java", "Spring Boot", "SQL", "Git"],
        },
        {
          position: "Part-Time Student Assistant",
          company: "AUZEM - YETAM XR, Istanbul University - Cerrahpaşa",
          period: "November 2024 - Present",
          description: "I provide information and hands-on demonstrations to visitors about the use of VR (virtual reality) headsets.",
          technologies: ["VR", "Virtual Reality"],
        },
        {
          position: "Robotics Coding Teacher",
          company: "Robotics Science, YTÜ Technopark",
          period: "March 2025 - September 2025",
          description: "I teach robotics and programming, teaching basic coding, problem-solving, and technology concepts. I develop creativity and critical thinking skills through hands-on robotics projects.",
          technologies: ["Robotics", "Programming", "Education"],
        },
        {
          position: "Instructor, AI and Web 2.0 Tools Training",
          company: "Şişli Teachers' House",
          period: "December 2024",
          description: "Together with Assoc. Prof. Dr. Özgür Yılmaz and our team, we conducted a comprehensive training program for teachers from different provinces of Turkey. The training focused on digital transformation applications and AI-based teaching methods.",
          technologies: ["Artificial Intelligence", "Web 2.0", "Educational Technologies"],
        },
      ],
    },
    hackathons: {
      title: "Hackathons I Joined",
      labelWhatWeDid: "What we did",
      labelProjectLinks: "Project links",
      items: [
        {
          name: "Ankara Hackathon 26'",
          period: "February 5–6, 2026",
          organizer: "BTK Akademi",
          description: "Together with my teammate we worked on an AI Agent solution as part of the SafeBank AI project we developed.",
          projectName: "Project repo",
          projectUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
        },
        {
          name: "Freya & Fal – Voice AI Hackathon",
          period: "February 15, 2026",
          organizer: "Freya AI × fal.ai",
          description: "At Turkey's first Voice AI Hackathon we built an autonomous AI voice receptionist that runs 24/7, answers calls via phone or microphone, queries the calendar in real time, and can create appointments. We used a tool-based architecture so calendar tools are called before the LLM decides, reducing hallucinations.",
          projectName: "Voice AI — Autonomous Voice Receptionist",
          projectUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Tool-based architecture"],
        },
      ],
    },
    certificates: {
      title: "Certificates",
      items: [
        {
          name: "Ankara AI Hackathon (BTK Academy)",
          period: "February 5 – 6, 2026",
          description: "Developed an AI Agent solution with the SafeBank AI project at Ankara Hackathon 26.",
          image: "/certificate-ankara-ai-hackathon.jpg",
        },
        {
          name: "INSIDER ONE – AI WEEKEND",
          period: "November 29 – November 30 2025",
          description: "I received training in LLM fundamentals and automation development with n8n.",
          image: "/certificate-ai-weekend.jpg",
        },
      ],
    },
    projects: {
      title: "My Projects",
      items: [
        {
          name: "n8n Workflow Projects",
          description: "Each project automates real-world business scenarios using API integrations, OpenAI-powered agents, and services such as Slack and Gmail.",
          technologies: ["n8n", "OpenAI", "AI Agents", "Slack", "Gmail"],
          githubUrl: "https://github.com/nisatas/insider-n8n-workflows",
          demoUrl: "", // Optional: Live demo link
        },
        {
          name: "Nisspy",
          description: "My weekly strategic plan page. Plan and track your goals with a Gemini 3-based AI coach. Live demo deployed on Vercel.",
          technologies: ["TypeScript", "React", "Gemini 3", "Vercel"],
          githubUrl: "https://github.com/nisatas/nisspy",
          demoUrl: "https://nisspy.vercel.app",
        },
        {
          name: "SafeBank AI",
          description: "AI Agent solution we developed with my teammate at Ankara Hackathon 26' (BTK Akademi). An AI-based application for secure banking scenarios.",
          technologies: ["Python", "Flask", "Ollama", "Pandas", "MySQL 8.0", "Docker"],
          githubUrl: "https://github.com/ugurazi/safebankai",
          demoUrl: "",
        },
        {
          name: "NURAI — Autonomous Voice Receptionist Assistant",
          description: "Autonomous 24/7 voice receptionist we built at the Freya & Fal Voice AI Hackathon. Answers calls via phone or microphone, queries the calendar in real time, and creates appointments. Tool-based architecture to reduce hallucinations.",
          technologies: ["Gemini 3", "Freya STT", "Google Calendar API", "FastAPI", "Python"],
          githubUrl: "https://github.com/nisatas/voice-ai-project",
          demoUrl: "",
        },
        {
          name: "Cypress Login Form E2E Project",
          description: "This project focuses on end-to-end (E2E) testing of a login form built with React using Cypress.",
          technologies: ["React", "Cypress", "JavaScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/cypress-login-project",
          demoUrl: "", // Optional: Live demo link
        },
        {
          name: "User Posts App",
          description: "A user posts application developed using Angular and jQuery.",
          technologies: ["Angular", "jQuery", "TypeScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/user-posts-app",
          demoUrl: "", // Optional: Live demo link
        },
        {
          name: "MeetingApp",
          description: "A web application designed to manage meetings and meeting-related data.",
          technologies: ["ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap", "JavaScript", "HTML", "CSS"],
          githubUrl: "https://github.com/nisatas/ASP.Net-Core-8.0-MeetingApp/tree/main/MeetingApp",
          demoUrl: "", // Optional: Live demo link
        },
        {
          name: "Pizza Order Form",
          description: "A static HTML layout built to exactly match the provided Figma design, fully responsive for both mobile and desktop devices.",
          technologies: ["HTML", "CSS", "Figma"],
          githubUrl: "https://github.com/nisatas/Pizza-Siparis-Formu",
          demoUrl: "", // Optional: Live demo link
        }
        
      ],
    },
    contact: {
      title: "Contact",
      infoTitle: "Contact Information",
      info: [
        {
          label: "Email",
          value: "nisatas544@gmail.com",
          link: "mailto:nisatas544@gmail.com",
          icon: "📧",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/nisaatas",
          link: "https://linkedin.com/in/nisaatas",
          icon: "💼",
        },
        {
          label: "GitHub",
          value: "github.com/nisatas",
          link: "https://github.com/nisatas",
          icon: "💻",
        },
      ],
      form: {
        name: "Your Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        formNote: "Your message will open as a draft in Gmail; send from there to reach me.",
      },
    },
    skillMap: {
      title: "My Skill Map",
      subtitle: "Each island represents a skill — click to see skills.",
      skillsTitle: "Skills",
      frontend: "Front-End",
      backend: "Back-End",
      other: "Other",
      frontendList: "JavaScript, React.js, Hooks, Redux, HTML, CSS, TailwindCSS, TypeScript",
      backendList: "Java, Spring Boot, SQL, Git, ASP.NET, C#, Python",
      otherList: "Algorithms, Debugging, Deployment, Problem Solving, API Integration, Figma, Teamwork",
      islands: [
        { id: "react", label: "React", ability: "UI components, hooks, state", type: "frontend", libraries: "TypeScript, Hooks" },
        { id: "javascript", label: "JavaScript", ability: "ES6+, async, DOM", type: "frontend", libraries: "ES6+, Tailwind" },
        { id: "java", label: "Java", ability: "Backend, OOP", type: "backend", libraries: "Spring Boot" },
        { id: "python", label: "Python", ability: "Backend, API", type: "backend", libraries: "FastAPI" },
        { id: "sql", label: "SQL", ability: "Database design & queries", type: "backend" },
        { id: "git", label: "Git", ability: "Version control, teamwork", type: "tool" },
        { id: "agents", label: "AI Agents", ability: "Tool-based LLM agents (SafeBank AI, NURAI)", type: "other" },
        { id: "ai", label: "AI", ability: "LLM, voice agents, automation", type: "other" },
        { id: "robotik", label: "Robotics", ability: "Coding & teaching", type: "other" },
      ],
    },
  },
};
