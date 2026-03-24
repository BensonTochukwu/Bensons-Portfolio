import React, { useState, useEffect, useRef } from "react";
import * as FiIcons from "react-icons/fi";
import {
  skillCategories as sharedSkillCategories,
  skillsData,
} from "../../data/skills";
import SEO from "../seo/SEO";
import "../../styles/components/About.css";
import mrHPhoto from "/images/Benson.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const aboutRef = useRef(null);

  const tabs = [
    { id: "overview", label: "Overview", icon: FiIcons.FiUser },
    { id: "skills", label: "Skills", icon: FiIcons.FiCode },
    { id: "experience", label: "Experience", icon: FiIcons.FiTrendingUp },
  ];

  const highlights = [
    {
      icon: FiIcons.FiCode,
      title: "Clean & Structured Code",
      description:
        "I focus on writing readable, well-structured code that is easy to maintain and scale.",
      color: "#6366f1",
    },
    {
      icon: FiIcons.FiLayout,
      title: "Frontend Craftsmanship",
      description:
        "I build responsive and intuitive user interfaces with attention to detail and usability.",
      color: "#8b5cf6",
    },
    {
      icon: FiIcons.FiTrendingUp,
      title: "Growing Full Stack Skills",
      description:
        "Actively expanding into backend development to build complete, end-to-end applications.",
      color: "#06b6d4",
    },
    {
      icon: FiIcons.FiTool,
      title: "Practical Problem Solving",
      description:
        "I enjoy breaking down complex problems and building efficient, real-world solutions.",
      color: "#10b981",
    },
  ];
  // Use shared skill categories and data, mapping icon string to icon component
  const skillCategories = sharedSkillCategories.map((cat) => ({
    ...cat,
    icon: FiIcons[cat.icon] || FiIcons.FiCode,
    skills: skillsData[cat.id] || [],
  }));

  const journey = [
    {
      year: "2026",
      title: "Frontend Developer (Transitioning to Full Stack)",
      company: "Personal Projects",
      description:
        "Currently expanding into backend development using Node.js while continuing to build modern frontend applications with React.",
      achievements: [
        "Learning Node.js and Express for backend development",
        "Building full stack projects integrating frontend and backend",
        "Strengthening understanding of APIs and server-side logic",
      ],
    },
    {
      year: "2025",
      title: "Frontend Developer",
      company: "Self-Learning & Projects",
      description:
        "Focused on mastering JavaScript and React, building dynamic and interactive web applications.",
      achievements: [
        "Built multiple JavaScript-based projects",
        "Developed React applications using components and hooks",
        "Learned core frontend concepts and modern development practices",
      ],
    },
    {
      year: "2024",
      title: "Java Developer Intern",
      company: "Internship Program",
      description:
        "Completed a 6-month internship focused on Java, gaining exposure to programming fundamentals and structured development practices.",
      achievements: [
        "Worked with Java and core programming concepts",
        "Gained experience in structured problem solving",
        "Understood software development workflows",
      ],
    },
    {
      year: "2024",
      title: "Frontend Foundations",
      company: "Self-Learning",
      description:
        "Began web development journey by learning HTML and CSS and building foundational projects.",
      achievements: [
        "Learned HTML and CSS fundamentals",
        "Built initial static web pages",
        "Developed interest in web development",
      ],
    },
  ];
  
  const stats = [
    { number: "3+", label: "Years Learning", icon: FiIcons.FiAward },
    { number: "2+", label: "Years Working", icon: FiIcons.FiTrendingUp },
    { number: "100%", label: "Dedication", icon: FiIcons.FiHeart },
    { number: "24/7", label: "Learning Mode", icon: FiIcons.FiCoffee },
  ];

  useEffect(() => {
    // Always visible on mobile
    if (window.innerWidth <= 768) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const renderOverview = () => (
    <div className="about__overview">
      {/* Background Accent Blob */}
      <div className="about__accent-blob" aria-hidden="true"></div>
      <div className="about__intro">
        <div className="about__intro-header">
          <div className="about__photo about__photo--circle-glow">
            <img
              src={mrHPhoto}
              alt="Teco-Benson Tochukwu"
              className="about__photo-img"
            />
          </div>
          <div className="about__intro-text-content">
            <h3 className="about__intro-title">
              Hi, I'm <span className="text-gradient">Teco-Benson Tochukwu</span>
            </h3>
            <h4 className="about__intro-role">Frontend Developer</h4>
            <p className="about__intro-text">
              I'm a frontend-focused developer from Lagos, Nigeria, who enjoys turning complex problems into clean, intuitive solutions. 
              With solid experience in modern frontend development and a growing backend skill set, I build applications that combine 
              engaging user interfaces with dependable functionality.
            </p>
            <p className="about__intro-text">
              I am focused on continuous improvement, consistently building and refining my skills through practical projects and hands-on experience. 
              I take a structured approach to development, prioritizing clean code, performance, and maintainability across the applications I build.
            </p>
          </div>
        </div>
      </div>

      <div className="about__highlights">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <div
              key={index}
              className="highlight-card highlight-card--animated"
              style={{
                "--highlight-color": highlight.color,
                "--delay": `${index * 0.1}s`,
              }}
            >
              <div className="highlight-card__icon highlight-card__icon--pulse">
                <IconComponent />
              </div>
              <div className="highlight-card__content">
                <h4 className="highlight-card__title">{highlight.title}</h4>
                <p className="highlight-card__description">
                  {highlight.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="about__stats">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="stat-card stat-card--animated">
              <div className="stat-card__icon">
                <IconComponent />
              </div>
              <div className="stat-card__content">
                <span
                  className="stat-card__number stat-card__number--count"
                  data-count={stat.number}
                >
                  {stat.number}
                </span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="about__skills">
      {skillCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        return (
          <div
            key={categoryIndex}
            className="skill-category"
            style={{ "--category-color": category.color }}
          >
            <div className="skill-category__header">
              <div className="skill-category__icon">
                <IconComponent />
              </div>
              <h4 className="skill-category__title">{category.title}</h4>
            </div>
            <div className="skill-category__skills">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item"
                  style={{ "--delay": `${skillIndex * 0.1}s` }}
                >
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__level">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div
                      className="skill-item__progress"
                      style={{ "--progress": `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-item__description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderJourney = () => (
    <div className="about__journey">
      <div className="journey-timeline">
        {journey.map((item, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="timeline-item__marker">
              <span className="timeline-item__year">{item.year}</span>
            </div>
            <div className="timeline-item__content">
              <h4 className="timeline-item__title">{item.title}</h4>
              <p className="timeline-item__company">{item.company}</p>
              <p className="timeline-item__description">{item.description}</p>
              <ul className="timeline-item__achievements">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "skills":
        return renderSkills();
      case "experience":
        return renderJourney();
      default:
        return renderOverview();
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Teco-Benson Tochukwu",
    description:
      "Learn about Teco-Benson Tochukwu, a passionate Frontend Developer from Lagos, Nigeria, specializing in React and modern JavaScript for responsive and user-focused web applications.",
    url: "https://mr-heritage.name.ng/",
    mainEntity: {
      "@type": "Person",
      name: "Teco-Benson Tochukwu",
      alternateName: ["Tochukwu", "Tochukwu_dev", "Benson"],
      jobTitle: "Frontend Developer",
      description:
        "Passionate Frontend Developer from Lagos, Nigeria, who loves turning complex problems into simple, beautiful solutions. With modern frontend technologies.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },
      knowsAbout: [
        "Python",
        "Django",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Backend Development",
        "Frontend Development",
        "Full Stack Development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Frontend Developer",
        description:
          "Specializing in React and modern JavaScript for responsive and user-focused web applications",
      },
    },
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <SEO
        title="About Me - Teco-Benson Tochukwu"
        description = "Frontend developer specializing in React and modern JavaScript, building responsive and user-focused web applications while growing into full stack development."
        keywords = "Teco-Benson Tochukwu, Tochukwu_dev, Frontend Developer, React Developer, JavaScript Developer, Node.js, Full Stack Developer, Web Developer Nigeria, Portfolio, Lagos Nigeria"
        url="https://mr-heritage.name.ng/"
        structuredData={structuredData}
      />
      <div className="about__background">
        <div className="about__gradient about__gradient--1"></div>
        <div className="about__gradient about__gradient--2"></div>
      </div>

      <div className="about__container">
        <div
          className={`about__content ${
            isVisible ? "about__content--visible" : ""
          }`}
        >
          {/* Section Header */}
          <div className="about__header">
            <h2 className="about__title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="about__subtitle">
              Get to know the person behind the code
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="about__tabs">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "tab-button--active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent className="tab-button__icon" />
                  <span className="tab-button__text">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="about__tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
