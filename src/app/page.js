"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Saidorif</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 pb-4">
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Education</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center flex-1 px-4 py-12 container mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-0 md:mr-12 flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
            <Image 
              src="/images/profile_image.jpg" 
              alt="Saidorif Jiyenxodjayev" 
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-cyan-400">Saidorif Jiyenxodjayev</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">
            I&apos;m a passionate <span className="text-cyan-400">Java Backend Developer</span> 
            with experience in designing, developing, and testing scalable web applications.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg shadow-lg transition inline-block"
          >
            View My Work
          </motion.a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
        <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
          <p className="text-gray-300 mb-4">
            Java Backend Developer with strong problem-solving skills and proven experience in designing, developing, and testing scalable web applications. Skilled in Java, Spring Boot, and SQL, with a solid understanding of software development best practices.
          </p>
          <p className="text-gray-300">
            Passionate about continuous learning, writing clean code, and contributing to team success.
          </p>
        </div>
      </motion.section>

      {/* Education, Experience, Skills, Contact Sections */}
      {/* ... (Siz ilgari bergan kodni shunday davom ettiring) */}

    </main>
  );
}
