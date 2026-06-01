"use client";

import React, { useState, useEffect } from "react";
import cvData from "../data/cv.json";
import { 
  MapPin, Mail, Phone,
  Briefcase, GraduationCap, Award, Code, Globe, MonitorPlay, Target, Star, Brain, Sun, Moon
} from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 p-3 rounded-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] shadow-lg hover:scale-110 transition-all z-50 text-[var(--text-primary)]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default function Home() {
  const { 
    personal_information: personal,
    work_experience: experience,
    education,
    computer_skills: skills,
    honors_and_awards: honors,
    languages
  } = cvData;

  return (
    <>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <ThemeToggle />

      <main className="container">
        
        {/* Profile Header */}
        <section className="profile-header fade-in">
          <h1 className="text-gradient">{personal.name}</h1>
          <h2>AI Team Lead & Computer Vision Researcher</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Specializing in cutting-edge computer vision systems, from CCTV analytics with TensorRT to X-ray cargo inspection models.
          </p>
          
          <div className="contact-info fade-in delay-1">
            <a href={`mailto:${personal.email}`} className="contact-badge">
              <Mail size={16} /> Contact Me
            </a>
            <a href="#" className="contact-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
              {personal.links.github}
            </a>
            <a href="#" className="contact-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              {personal.links.linkedin}
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }} className="fade-in delay-2">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {personal.location}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> {personal.phone}</span>
          </div>
        </section>

        {/* Core Impact / Projects */}
        <section className="fade-in delay-3">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Target size={24} /> Core Impact & Projects
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card">
              <MonitorPlay size={32} color="var(--gradient-2)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CCTV AI Analytics Engine</h2>
              <p>Developed comprehensive modules for modern surveillance systems utilizing Triton and TensorRT for high-performance inference.</p>
              <div className="skills-grid">
                {['Car Plate/Model Detection', 'Face Recognition', 'Fire Detection', 'OCR'].map(tag => (
                  <span key={tag} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <Brain size={32} color="var(--gradient-1)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Cargo X-Ray Intelligence</h2>
              <p>Researched and deployed advanced CNN architectures for cargo inspection devices to perform material discrimination and atomic number prediction.</p>
              <div className="skills-grid">
                {['Material Discrimination', 'CNNs', 'Load Type Classification'].map(tag => (
                  <span key={tag} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Briefcase size={24} /> Experience
          </h3>
          <div className="glass-card">
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">{exp.company} • {exp.location}</div>
                    </div>
                    <div className="timeline-date">{exp.period}</div>
                  </div>
                  <p>{exp.description}</p>
                  {exp.achievements && (
                    <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                      {exp.achievements.map((ach, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Arsenal (Skills) */}
        <section>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Code size={24} /> Technical Arsenal
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="glass-card">
                <h4 style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {category.replace(/_/g, ' ')}
                </h4>
                <div className="skills-grid">
                  {items.map((skill: string) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Other */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* Education */}
          <section>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={24} /> Education
            </h3>
            <div className="timeline" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(16px)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role" style={{ fontSize: '1.1rem' }}>{edu.degree}</div>
                      <div className="timeline-company">{edu.institution}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <span className="timeline-date" style={{ background: 'transparent', padding: '0', color: 'var(--text-secondary)' }}>{edu.period}</span>
                    <span className="contact-badge" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>GPA: {edu.gpa}</span>
                  </div>
                  {edu.thesis && (
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.5rem' }}>
                      <strong>Thesis:</strong> {edu.thesis}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Honors & Awards */}
            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Award size={24} /> Honors & Awards
              </h3>
              <div className="glass-card">
                <ul style={{ listStyle: 'none' }}>
                  {honors.map((honor, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                      <Star size={20} color="var(--accent-color)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{honor.title}</div>
                        {honor.year && <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{honor.year}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <Globe size={24} /> Languages
              </h3>
              <div className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>English</h2>
                  <span className="contact-badge">{languages.english.proficiency}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['reading', 'listening', 'writing', 'speaking'].map((skill) => {
                    const level = languages.english[skill as keyof typeof languages.english];
                    const percentage = level === 'Advanced' ? '90%' : level === 'Upper-Intermediate' ? '75%' : '50%';
                    
                    return (
                      <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ width: '80px', textTransform: 'capitalize', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill}</span>
                        <div style={{ flex: 1, height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: percentage, height: '100%', background: 'linear-gradient(90deg, var(--gradient-1), var(--gradient-2))', borderRadius: '4px', transition: 'width 1s ease-in-out' }}></div>
                        </div>
                        <span style={{ width: '100px', textAlign: 'right', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{level}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
    </>
  );
}
