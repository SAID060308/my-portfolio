"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll effect for navigation links
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
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
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
              <li><a href="#projects" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section with Profile Image */}
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
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80';
              }}
            />
          </div>
        </motion.div>

        {/* Hero Text Content */}
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

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10">Education</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {/* TUIT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">TUIT</h4>
            <p className="text-gray-300 mb-2">Bachelor&apos;s in Software Engineering</p>
            <p className="text-gray-300 mb-4">2023 – Present (3rd year student)</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>Active member of the Student Council</li>
              <li>Co-founder of the Programming Club</li>
            </ul>
          </motion.div>

          {/* PDP Academy */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">PDP Academy</h4>
            <p className="text-gray-300 mb-2">Certificate: Java Backend Developer</p>
            <p className="text-gray-300 mb-4">Graduet in 2025</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>Completed intensive training in Java, Spring Boot, and SQL</li>
              <li>Worked on real-world projects and team-based assignments</li>
            </ul>
          </motion.div>

          {/* TDAU AL */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-700 rounded-lg p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">Tashkent State Agrarian University Academic Lyceum</h4>
            <p className="text-gray-300 mb-2">Diploma in Technical Programming</p>
            <p className="text-gray-300 mb-4">Graduet in 2023</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>Specialized courses in technical programming and IT fundamentals</li>
              <li>Actively participated in programming competitions and workshops</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10">My Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          {/* Task Management System */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-3 text-cyan-400">Task Management System</h4>
            <p className="text-gray-300 mb-4">
              Developed a comprehensive task management system for IT teams with advanced features including task creation, detailed descriptions, image attachments, and role-based access control with different permissions for PROGRAMMER, MAINTAINER, and ADMIN roles.
            </p>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-300 mb-2">Key Features:</h5>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Role-based access control system</li>
                <li>Task comments and discussions</li>
                <li>Secure authentication with Spring Security</li>
                <li>Image attachment functionality</li>
                <li>RESTful API architecture</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-3"><strong>Tech Stack:</strong> Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, REST API, Maven, Git, Lombok</p>
            <div className="flex space-x-3 mt-4">
              <a href="https://github.com/SAID060308/test" className="text-cyan-400 hover:text-cyan-300 transition flex items-center">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub Repository
              </a>
            </div>
          </motion.div>

          {/* Coming Soon Project */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-3 text-cyan-400">E-Commerce Backend API</h4>
            <p className="text-gray-300 mb-4">
              Currently developing a robust e-commerce backend system with product management, user authentication, shopping cart functionality, order processing, and payment integration.
            </p>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-300 mb-2">Planned Features:</h5>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>User authentication and authorization</li>
                <li>Product catalog and inventory management</li>
                <li>Shopping cart and checkout system</li>
                <li>Order tracking and management</li>
                <li>Payment gateway integration</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-3"><strong>Tech Stack:</strong> Java, Spring Boot, Spring Security, MySQL, REST API, JWT, Redis</p>
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <p className="text-cyan-400 text-center">🚧 Project in Development - Coming Soon! 🚧</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10">Experience</h3>
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-700 rounded-xl p-8">
            <h4 className="text-xl font-semibold mb-2 text-cyan-400">Task Management System (Pet Project)</h4>
            <p className="text-gray-300 mb-2">May 2025 – June 2025</p>
            <p className="text-gray-300 mb-4">
              Developed a task management system for IT teams with task creation, descriptions, and image attachments.
              Implemented role-based access: PROGRAMMER, MAINTAINER, ADMIN with different permissions.
              Added comments section and secure authentication with Spring Security.
            </p>
            <p className="text-gray-300 mb-2"><strong>Tech Stack:</strong> Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, REST API, Maven, Git, Lombok</p>
            <a href="https://github.com/SAID060308/test" className="text-cyan-400 hover:underline">View on GitHub</a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10">Skills</h3>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Technical Skills</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Java (Intermediate)</li>
                <li className="mb-2">IntelliJ IDEA</li>
                <li className="mb-2">Apache Maven</li>
                <li className="mb-2">Hibernate</li>
                <li className="mb-2">PostgreSQL</li>
                <li className="mb-2">Algorithms & Data Structures</li>
                <li className="mb-2">Spring Web</li>
                <li className="mb-2">Apache Kafka (Basic)</li>
                <li className="mb-2">Spring Boot (Basic)</li>
                <li className="mb-2">Spring Security (Basic)</li>
                <li className="mb-2">MongoDB (Basic)</li>
                <li className="mb-2">API</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Languages</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Uzbek – Native</li>
                <li className="mb-2">Kazakh – Fluent</li>
                <li className="mb-2">Russian – Basic (reading and understanding)</li>
                <li className="mb-2">English – Basic (reading and understanding)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-16 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-8">Contact</h3>
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gray-700 rounded-xl p-8">
            <p className="text-gray-300 mb-2">Mobile: <span className="text-cyan-400">+998 99 017 36 87</span></p>
            <p className="text-gray-300 mb-2">Email: <span className="text-cyan-400">said060308@gmail.com</span></p>
            <p className="text-gray-300 mb-2">LinkedIn: <span className="text-cyan-400">Saidorif Jiyenxodjayev</span></p>
            <p className="text-gray-300 mb-6">Address: 144, Samrasak Street, Samsarak MFY, Parkent District, Tashkent Region, Uzbekistan</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:said060308@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg shadow-lg transition inline-block"
            >
              Say Hello
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} Saidorif Jiyenxodjayev. All rights reserved.
      </footer>
    </main>
  );
}
