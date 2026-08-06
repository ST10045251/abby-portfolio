'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.15 } 
    }
  };

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 space-y-24">
      {/* 1. HERO SECTION */}
      <motion.section 
        className="space-y-6 pt-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          Software Developer & <br />
          <span className="text-gray-500 dark:text-gray-400">Computer Science Graduate</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Hi, I’m Abigail Finnis. I hold a Bachelor's degree in Computer & Application Development. 
          I specialize in building clean frontends, robust backends, and reliable software applications. I have studied Application and Web Development 
          for 4 years. I am currently unemployed and available to any positions.
        </motion.p>

        {/* PROFILE IMAGE */}
        <motion.div variants={fadeInUp} className="py-2">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10">
            <Image
              src="/profile.jpg"
              alt="Abigail Finnis"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-4 pt-2">
          <a href="#projects" className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
            View Projects ↓
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
            Get in Touch
          </a>
        </motion.div>
      </motion.section>

      {/* 2. SKILLS GRID */}
      <motion.section 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { category: 'Languages', items: 'Java, C#, JS, TS, Python, HTML/CSS' },
            { category: 'Frontend', items: 'React, Next.js, Tailwind CSS' },
            { category: 'Backend & DB', items: 'Node.js, Express, REST APIs, SQL' },
            { category: 'Tools', items: 'Git, GitHub, VS Code, Postman, Android Studio' }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{skill.category}</h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. FEATURED PROJECTS */}
      <motion.section 
        id="projects" 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'Table Valley Municipal App', 
              desc: 'A civic application for citizens to report municipal issues, track status updates, and access local community announcements.', 
              tags: ['.NET MAUI', 'C#', 'XAML'],
              github: 'https://github.com/VCCT-PROG7312-2025-G1/TableValleyMunicipalApp-ST10045251.git'
            },
            { 
              title: 'PROG7314 Mobile Platform', 
              desc: 'A collaborative mobile application featuring user authentication, cloud syncing, and reactive user interfaces.', 
              tags: ['Android', 'Kotlin', 'Firebase'],
              github: 'https://github.com/VCCT-PROG7314-2025-G1/PROG7314_PoeFinal.git'
            },
            { 
              title: 'INSY7314 Enterprise System', 
              desc: 'An enterprise information system managing business logic, secure database operations, and multi-tiered architectures.', 
              tags: ['C#', '.NET', 'SQL'],
              github: 'https://github.com/RiaanCarelse17/INSY7314_POE_FINAL.git'
            }
          ].map((proj, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="h-40 rounded-lg bg-gray-200 dark:bg-gray-800/80 flex items-center justify-center text-gray-500 dark:text-gray-400 font-mono text-xs text-center p-4">
                  [ Screenshot / Preview ]
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-gray-200 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
                >
                  View Code on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. FOOTER / CONTACT */}
      <footer id="contact" className="pt-12 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Abigail. Built with Next.js & Tailwind CSS.</p>
        <div className="flex gap-6">
          <a href="https://github.com/ST10045251" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/abigail-finnis/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:abby.alicia.f@icloud.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">Email</a>
        </div>
      </footer>
    </main>
  );
}