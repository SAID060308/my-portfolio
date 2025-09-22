"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("english");

  // Translations object
  const translations = {
    english: {
      about: "About",
      education: "Education",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      heroTitle: "Hi, I'm <span>Saidorif Jiyenxodjayev</span>",
      heroText: "I'm a passionate <span>Java Backend Developer</span> with experience in designing, developing, and testing scalable web applications.",
      viewWork: "View My Work",
      aboutTitle: "About Me",
      aboutText1: "Java Backend Developer with strong problem-solving skills and proven experience in designing, developing, and testing scalable web applications. Skilled in Java, Spring Boot, and SQL, with a solid understanding of software development best practices.",
      aboutText2: "Passionate about continuous learning, writing clean code, and contributing to team success.",
      educationTitle: "Education",
      tuit: "TUIT",
      tuitDesc: "Bachelor's in Software Engineering",
      tuitPeriod: "2023 – Present (3rd year student)",
      tuitBullet1: "Active member of the Student Council",
      tuitBullet2: "Co-founder of the Programming Club",
      pdp: "PDP Academy",
      pdpDesc: "Certificate: Java Backend Developer",
      pdpPeriod: "Graduate in 2025",
      pdpBullet1: "Completed intensive training in Java, Spring Boot, and SQL",
      pdpBullet2: "Worked on real-world projects and team-based assignments",
      tdau: "Tashkent State Agrarian University Academic Lyceum",
      tdauDesc: "Diploma in Technical Programming",
      tdauPeriod: "Graduate in 2023",
      tdauBullet1: "Specialized courses in technical programming and IT fundamentals",
      tdauBullet2: "Actively participated in programming competitions and workshops",
      projectsTitle: "My Projects",
      taskTitle: "Task Management System",
      taskDesc: "Developed a comprehensive task management system for IT teams with advanced features including task creation, detailed descriptions, image attachments, and role-based access control with different permissions for PROGRAMMER, MAINTAINER, and ADMIN roles.",
      keyFeatures: "Key Features:",
      feature1: "Role-based access control system",
      feature2: "Task comments and discussions",
      feature3: "Secure authentication with Spring Security",
      feature4: "Image attachment functionality",
      feature5: "RESTful API architecture",
      techStack: "Tech Stack:",
      github: "GitHub Repository",
      ecomTitle: "E-Commerce Backend API",
      ecomDesc: "Currently developing a robust e-commerce backend system with product management, user authentication, shopping cart functionality, order processing, and payment integration.",
      plannedFeatures: "Planned Features:",
      pFeature1: "User authentication and authorization",
      pFeature2: "Product catalog and inventory management",
      pFeature3: "Shopping cart and checkout system",
      pFeature4: "Order tracking and management",
      pFeature5: "Payment gateway integration",
      comingSoon: "🚧 Project in Development - Coming Soon! 🚧",
      experienceTitle: "Experience",
      expTitle: "Task Management System (Pet Project)",
      expPeriod: "May 2025 – June 2025",
      expDesc: "Developed a task management system for IT teams with task creation, descriptions, and image attachments. Implemented role-based access: PROGRAMMER, MAINTAINER, ADMIN with different permissions. Added comments section and secure authentication with Spring Security.",
      viewGithub: "View on GitHub",
      skillsTitle: "Skills",
      technicalSkills: "Technical Skills",
      languages: "Languages",
      uzbek: "Uzbek – Native",
      kazakh: "Kazakh – Fluent",
      russian: "Russian – Basic (reading and understanding)",
      englishLang: "English – Basic (reading and understanding)",
      contactTitle: "Contact",
      mobile: "Mobile:",
      email: "Email:",
      linkedin: "LinkedIn:",
      address: "Address: 144, Samrasak Street, Samsarak MFY, Parkent District, Tashkent Region, Uzbekistan",
      sayHello: "Say Hello",
      footer: "© {year} Saidorif Jiyenxodjayev. All rights reserved.",
    },
    uzbek: {
      about: "Men haqimda",
      education: "Ta'lim",
      projects: "Loyihalar",
      experience: "Tajriba",
      skills: "Ko'nikmalar",
      contact: "Aloqa",
      heroTitle: "Salom, men <span>Saidorif Jiyenxodjayev</span>",
      heroText: "Men <span>Java Backend Dasturchisi</span> bo'lib, kengaytiriladigan veb-ilovalarni loyihalash, ishlab chiqish va sinovdan o'tkazish bo'yicha tajribaga egaman.",
      viewWork: "Ishlarimni ko'rish",
      aboutTitle: "Men haqimda",
      aboutText1: "Java Backend Dasturchisi, kuchli muammolarni hal qilish qobiliyatiga ega va kengaytiriladigan veb-ilovalarni loyihalash, ishlab chiqish va sinovdan o'tkazish bo'yicha tajribali. Java, Spring Boot va SQL bo'yicha mahoratli, dasturiy ta'minot ishlab chiqishning eng yaxshi amaliyotlarini yaxshi biladi.",
      aboutText2: "Doimiy o'rganish, toza kod yozish va jamoa muvaffaqiyatiga hissa qo'shishga ishtiyoqli.",
      educationTitle: "Ta'lim",
      tuit: "TUIT",
      tuitDesc: "Dasturiy injiniring bo'yicha bakalavr",
      tuitPeriod: "2023 – Hozirgacha (3-kurs talabasi)",
      tuitBullet1: "Talabalar kengashining faol a'zosi",
      tuitBullet2: "Dasturlash klubining asoschilaridan biri",
      pdp: "PDP Akademiyasi",
      pdpDesc: "Sertifikat: Java Backend Dasturchisi",
      pdpPeriod: "2025 yilda bitiruvchi",
      pdpBullet1: "Java, Spring Boot va SQL bo'yicha intensiv treningni tamomlagan",
      pdpBullet2: "Haqiqiy loyihalar va jamoa topshiriqlari ustida ishlagan",
      tdau: "Toshkent Davlat Agrar Universiteti Akademik Litseyi",
      tdauDesc: "Texnik dasturlash bo'yicha diploma",
      tdauPeriod: "2023 yilda bitiruvchi",
      tdauBullet1: "Texnik dasturlash va IT asoslari bo'yicha ixtisoslashtirilgan kurslar",
      tdauBullet2: "Dasturlash musobaqalari va seminarlarida faol ishtirok etgan",
      projectsTitle: "Mening loyihalarim",
      taskTitle: "Vazifalarni boshqarish tizimi",
      taskDesc: "IT jamoalari uchun vazifa yaratish, batafsil tavsiflar, rasm ilovalari va PROGRAMMER, MAINTAINER va ADMIN rollari uchun turli ruxsatlar bilan rolga asoslangan kirish nazoratini o'z ichiga olgan keng qamrovli vazifalarni boshqarish tizimini ishlab chiqdi.",
      keyFeatures: "Asosiy xususiyatlar:",
      feature1: "Rolga asoslangan kirish nazorati tizimi",
      feature2: "Vazifa sharhlari va muhokamalari",
      feature3: "Spring Security bilan xavfsiz autentifikatsiya",
      feature4: "Rasm ilova funksionalligi",
      feature5: "RESTful API arxitekturasi",
      techStack: "Texnologiya steki:",
      github: "GitHub ombori",
      ecomTitle: "Elektron tijorat backend API",
      ecomDesc: "Hozirda mahsulotlarni boshqarish, foydalanuvchi autentifikatsiyasi, savat funksionalligi, buyurtmalarni qayta ishlash va to'lov integratsiyasi bilan mustahkam elektron tijorat backend tizimini ishlab chiqmoqdaman.",
      plannedFeatures: "Rejalashtirilgan xususiyatlar:",
      pFeature1: "Foydalanuvchi autentifikatsiyasi va avtorizatsiyasi",
      pFeature2: "Mahsulot katalogi va inventarizatsiyani boshqarish",
      pFeature3: "Savat va chekaut tizimi",
      pFeature4: "Buyurtmalarni kuzatish va boshqarish",
      pFeature5: "To'lov shlyuzi integratsiyasi",
      comingSoon: "🚧 Loyiha ishlab chiqilmoqda - Tez kunda! 🚧",
      experienceTitle: "Tajriba",
      expTitle: "Vazifalarni boshqarish tizimi (Shaxsiy loyiha)",
      expPeriod: "May 2025 – Iyun 2025",
      expDesc: "IT jamoalari uchun vazifa yaratish, tavsiflar va rasm ilovalari bilan vazifalarni boshqarish tizimini ishlab chiqdi. Turli ruxsatlar bilan rolga asoslangan kirishni amalga oshirdi: PROGRAMMER, MAINTAINER, ADMIN. Sharhlar bo'limi va Spring Security bilan xavfsiz autentifikatsiyani qo'shdi.",
      viewGithub: "GitHubda ko'rish",
      skillsTitle: "Ko'nikmalar",
      technicalSkills: "Texnik ko'nikmalar",
      languages: "Tillar",
      uzbek: "O'zbek - ona tili",
      kazakh: "Qozoq - erkin",
      russian: "Rus - asosiy (o'qish va tushunish)",
      englishLang: "Ingliz - asosiy (o'qish va tushunish)",
      contactTitle: "Aloqa",
      mobile: "Telefon:",
      email: "Elektron pochta:",
      linkedin: "LinkedIn:",
      address: "Manzil: 144, Samrasak ko'chasi, Samsarak MFY, Parkent tumani, Toshkent viloyati, O'zbekiston",
      sayHello: "Xabar yuborish",
      footer: "© {year} Saidorif Jiyenxodjayev. Barcha huquqlar himoyalangan.",
    },
    russian: {
      about: "Обо мне",
      education: "Образование",
      projects: "Проекты",
      experience: "Опыт",
      skills: "Навыки",
      contact: "Контакт",
      heroTitle: "Привет, я <span>Сайдориф Джиенходжаев</span>",
      heroText: "Я страстный <span>Java Backend Разработчик</span> с опытом проектирования, разработки и тестирования масштабируемых веб-приложений.",
      viewWork: "Посмотреть мои работы",
      aboutTitle: "Обо мне",
      aboutText1: "Java Backend Разработчик с сильными навыками решения проблем и проверенным опытом проектирования, разработки и тестирования масштабируемых веб-приложений. Владею Java, Spring Boot и SQL, с твердым пониманием лучших практик разработки программного обеспечения.",
      aboutText2: "Увлечен непрерывным обучением, написанием чистого кода и вкладом в успех команды.",
      educationTitle: "Образование",
      tuit: "ТУИТ",
      tuitDesc: "Бакалавр по программной инженерии",
      tuitPeriod: "2023 – настоящее время (студент 3 курса)",
      tuitBullet1: "Активный член Студенческого совета",
      tuitBullet2: "Соучредитель Клуба программирования",
      pdp: "PDP Академия",
      pdpDesc: "Сертификат: Java Backend Разработчик",
      pdpPeriod: "Выпускник 2025 года",
      pdpBullet1: "Прошел интенсивное обучение Java, Spring Boot и SQL",
      pdpBullet2: "Работал над реальными проектами и командными заданиями",
      tdau: "Академический лицей Ташкентского государственного аграрного университета",
      tdauDesc: "Диплом по техническому программированию",
      tdauPeriod: "Выпускник 2023 года",
      tdauBullet1: "Специализированные курсы по техническому программированию и основам IT",
      tdauBullet2: "Активно участвовал в соревнованиях и семинарах по программированию",
      projectsTitle: "Мои проекты",
      taskTitle: "Система управления задачами",
      taskDesc: "Разработал комплексную систему управления задачами для IT-команд с расширенными функциями, включая создание задач, подробные описания, прикрепление изображений и управление доступом на основе ролей с разными разрешениями для ролей PROGRAMMER, MAINTAINER и ADMIN.",
      keyFeatures: "Ключевые особенности:",
      feature1: "Система управления доступом на основе ролей",
      feature2: "Комментарии и обсуждения задач",
      feature3: "Безопасная аутентификация с Spring Security",
      feature4: "Функциональность прикрепления изображений",
      feature5: "RESTful API архитектура",
      techStack: "Технологический стек:",
      github: "Репозиторий GitHub",
      ecomTitle: "E-Commerce Backend API",
      ecomDesc: "В настоящее время разрабатываю надежную бэкенд-систему электронной коммерции с управлением продуктами, аутентификацией пользователей, функциональностью корзины покупок, обработкой заказов и интеграцией платежей.",
      plannedFeatures: "Планируемые функции:",
      pFeature1: "Аутентификация и авторизация пользователей",
      pFeature2: "Каталог продуктов и управление запасами",
      pFeature3: "Корзина покупок и система оформления заказа",
      pFeature4: "Отслеживание и управление заказами",
      pFeature5: "Интеграция платежного шлюза",
      comingSoon: "🚧 Проект в разработке - Скоро! 🚧",
      experienceTitle: "Опыт",
      expTitle: "Система управления задачами (Пет-проект)",
      expPeriod: "Май 2025 – Июнь 2025",
      expDesc: "Разработал систему управления задачами для IT-команд с созданием задач, описаниями и прикреплением изображений. Реализовал доступ на основе ролей: PROGRAMMER, MAINTAINER, ADMIN с разными разрешениями. Добавил раздел комментариев и безопасную аутентификацию с Spring Security.",
      viewGithub: "Посмотреть на GitHub",
      skillsTitle: "Навыки",
      technicalSkills: "Технические навыки",
      languages: "Языки",
      uzbek: "Узбекский - родной",
      kazakh: "Казахский - свободно",
      russian: "Русский - базовый (чтение и понимание)",
      englishLang: "Английский - базовый (чтение и понимание)",
      contactTitle: "Контакт",
      mobile: "Телефон:",
      email: "Эл. почта:",
      linkedin: "LinkedIn:",
      address: "Адрес: 144, ул. Самрасак, Самсарак MFY, Паркентский район, Ташкентская область, Узбекистан",
      sayHello: "Написать сообщение",
      footer: "© {year} Сайдориф Джиенходжаев. Все права защищены.",
    },
  };

  const t = translations[language];

  useEffect(() => {
    // Smooth scroll effect for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, [language]);

  const handlePhoneClick = () => {
    window.location.href = "tel:+998990173687";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:said060308@gmail.com";
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Saidorif
          </h1>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition flex items-center gap-1">
                <span className="text-sm">
                  {language === "english" ? "EN" : language === "uzbek" ? "UZ" : "RU"}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-1 w-20 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => setLanguage("english")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 rounded-t-md"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("uzbek")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage("russian")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 rounded-b-md"
                >
                  RU
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-300 transition">
                  {t.education}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition">
                  {t.projects}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition">
                  {t.experience}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition">
                  {t.skills}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition">
                  {t.contact}
                </a>
              </li>
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
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md px-4 pb-4">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.education}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.projects}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.experience}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.skills}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-300 transition block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.contact}
                </a>
              </li>
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
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20">
            <Image
              src="/images/profile_image.jpg"
              alt="Saidorif Jiyenxodjayev"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80";
              }}
            />
          </div>
        </motion.div>

        {/* Hero Text Content */}
        <div className="text-center md:text-left">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            dangerouslySetInnerHTML={{
              __html: t.heroTitle.replace(
                "<span>",
                '<span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">'
              ),
            }}
          />
          <p
            className="text-lg text-gray-300 max-w-2xl mb-6"
            dangerouslySetInnerHTML={{
              __html: t.heroText.replace('<span>', '<span class="text-cyan-300">'),
            }}
          />
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg transition inline-block"
          >
            {t.viewWork}
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
        <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.aboutTitle}
        </h3>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-gray-700">
          <p className="text-gray-300 mb-4">{t.aboutText1}</p>
          <p className="text-gray-300">{t.aboutText2}</p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800/40 py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.educationTitle}
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {/* TUIT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-lg p-6 shadow-lg border border-gray-600"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-300">{t.tuit}</h4>
            <p className="text-gray-300 mb-2">{t.tuitDesc}</p>
            <p className="text-gray-300 mb-4">{t.tuitPeriod}</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>{t.tuitBullet1}</li>
              <li>{t.tuitBullet2}</li>
            </ul>
          </motion.div>

          {/* PDP Academy */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-lg p-6 shadow-lg border border-gray-600"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-300">{t.pdp}</h4>
            <p className="text-gray-300 mb-2">{t.pdpDesc}</p>
            <p className="text-gray-300 mb-4">{t.pdpPeriod}</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>{t.pdpBullet1}</li>
              <li>{t.pdpBullet2}</li>
            </ul>
          </motion.div>

          {/* TDAU AL */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-lg p-6 shadow-lg border border-gray-600"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-300">{t.tdau}</h4>
            <p className="text-gray-300 mb-2">{t.tdauDesc}</p>
            <p className="text-gray-300 mb-4">{t.tdauPeriod}</p>
            <ul className="text-gray-300 text-sm list-disc list-inside">
              <li>{t.tdauBullet1}</li>
              <li>{t.tdauBullet2}</li>
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
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.projectsTitle}
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 container mx-auto">
          {/* Task Management System */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <h4 className="text-xl font-semibold mb-3 text-cyan-300">{t.taskTitle}</h4>
            <p className="text-gray-300 mb-4">{t.taskDesc}</p>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-300 mb-2">{t.keyFeatures}</h5>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>{t.feature1}</li>
                <li>{t.feature2}</li>
                <li>{t.feature3}</li>
                <li>{t.feature4}</li>
                <li>{t.feature5}</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-3">
              <strong>{t.techStack}</strong> Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, REST API, Maven, Git, Lombok
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://github.com/SAID060308/test"
                className="text-cyan-300 hover:text-cyan-200 transition flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.393.1 2.646.641.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.github}
              </a>
            </div>
          </motion.div>

          {/* E-Commerce Backend API */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <h4 className="text-xl font-semibold mb-3 text-cyan-300">{t.ecomTitle}</h4>
            <p className="text-gray-300 mb-4">{t.ecomDesc}</p>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-300 mb-2">{t.plannedFeatures}</h5>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>{t.pFeature1}</li>
                <li>{t.pFeature2}</li>
                <li>{t.pFeature3}</li>
                <li>{t.pFeature4}</li>
                <li>{t.pFeature5}</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-3">
              <strong>{t.techStack}</strong> Java, Spring Boot, Spring Security, PostgreSQL, REST API, Docker, Git
            </p>
            <p className="text-gray-300">{t.comingSoon}</p>
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
        className="bg-gray-800/40 py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.experienceTitle}
        </h3>
        <div className="container mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-lg p-6 shadow-lg border border-gray-600"
          >
            <h4 className="text-xl font-semibold mb-2 text-cyan-300">{t.expTitle}</h4>
            <p className="text-gray-300 mb-2">{t.expPeriod}</p>
            <p className="text-gray-300 mb-4">{t.expDesc}</p>
            <a
              href="https://github.com/SAID060308/test"
              className="text-cyan-300 hover:text-cyan-200 transition flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.203 2.393.1 2.646.641.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              {t.viewGithub}
            </a>
          </motion.div>
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
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.skillsTitle}
        </h3>
        <div className="grid gap-8 md:grid-cols-2 container mx-auto">
          <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-xl p-6 shadow-lg border border-gray-700">
            <h4 className="text-xl font-semibold mb-3 text-cyan-300">{t.technicalSkills}</h4>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>Spring Data JPA</li>
              <li>PostgreSQL</li>
              <li>REST API</li>
              <li>Maven</li>
              <li>Git</li>
              <li>Lombok</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 rounded-xl p-6 shadow-lg border border-gray-700">
            <h4 className="text-xl font-semibold mb-3 text-cyan-300">{t.languages}</h4>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>{t.uzbek}</li>
              <li>{t.kazakh}</li>
              <li>{t.russian}</li>
              <li>{t.englishLang}</li>
            </ul>
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
        className="bg-gray-800/40 py-16 px-6"
      >
        <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {t.contactTitle}
        </h3>
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-b from-gray-700/80 to-gray-800/80 rounded-lg p-6 shadow-lg border border-gray-600">
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>{t.mobile}</strong>{" "}
                <a href="tel:+998990173687" onClick={handlePhoneClick} className="text-cyan-300 hover:text-cyan-200 transition">
                  +998 99 017 36 87
                </a>
              </p>
              <p className="text-gray-300">
                <strong>{t.email}</strong>{" "}
                <a
                  href="mailto:said060308@gmail.com"
                  onClick={handleEmailClick}
                  className="text-cyan-300 hover:text-cyan-200 transition"
                >
                  said060308@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong>{t.linkedin}</strong>{" "}
                <a
                  href="https://linkedin.com/in/saidorif-jiyenxodjayev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 transition"
                >
                  Saidorif Jiyenxodjayev
                </a>
              </p>
              <p className="text-gray-300">
                <strong>{t.address}</strong>
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:said060308@gmail.com"
              className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg transition inline-block w-full text-center"
            >
              {t.sayHello}
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800/80 py-6">
        <div className="container mx-auto text-center text-gray-300">
          <p>{t.footer.replace("{year}", new Date().getFullYear())}</p>
        </div>
      </footer>
    </main>
  );
}
