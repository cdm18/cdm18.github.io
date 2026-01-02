'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navigation */}
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full backdrop-blur-md bg-gray-900/50 border-b border-gray-800 z-50"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
            >
              Portafolio
            </motion.span>
            <div className="flex gap-6">
              {['Inicio', 'Skills', 'Experiencia', 'Certificaciones', 'Proyectos', 'Contacto'].map((item, i) => (
                  <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors text-sm hidden md:block"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
              <motion.p
                  className="text-blue-400 font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
              >
                👋 Hola, soy
              </motion.p>
              <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
              >
                Carlos Daniel
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mejía Febres
              </span>
              </motion.h1>
              <motion.h2
                  className="text-2xl md:text-3xl text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
              >
                Full-Stack Developer <span className="text-blue-400">|</span> Backend Enthusiast
              </motion.h2>
              <motion.p
                  className="text-lg text-gray-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
              >
                Estudiante de 7mo ciclo de Ingeniería en Sistemas Computacionales en Loja, Ecuador.
                Especializado en crear soluciones web innovadoras con Django, React y tecnologías modernas.
              </motion.p>

              {/* Stats */}
              <motion.div
                  className="grid grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
              >
                {stats.map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                ))}
              </motion.div>

              <motion.div
                  className="flex gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
              >
                <motion.a
                    href="#proyectos"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/50"
                >
                  Ver Proyectos
                </motion.a>
                <motion.a
                    href="#contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Contactar
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                  className="flex gap-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
              >
                {[
                  { icon: '💻', href: 'https://github.com/cdm18', label: 'GitHub' },
                  { icon: '💼', href: '#', label: 'LinkedIn' },
                  { icon: '📧', href: 'mailto:carlos_mejia2004@hotmail.com', label: 'Email' }
                ].map((social) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center text-2xl transition-all shadow-lg"
                        title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
              <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
                <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                    <Image
                        src="/profile.png"
                        alt="Carlos Mejía"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Sobre <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mí</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {aboutCards.map((card, index) => (
                  <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{card.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Stack <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tecnológico</span>
              </h2>
              <p className="text-gray-400 text-lg">Tecnologías y herramientas con las que trabajo</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                  <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center border border-gray-700 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mx-auto rounded-full"></div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experiencia <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Profesional</span>
              </h2>
              <p className="text-gray-400 text-lg">Mi trayectoria laboral</p>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                  <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all"
                    >
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <ul className="space-y-2 text-gray-400">
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-1">▸</span>
                              <span>{resp}</span>
                            </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificaciones" className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Certificaciones <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">& Cursos</span>
              </h2>
              <p className="text-gray-400 text-lg">Formación continua y certificaciones profesionales</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                  <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-blue-400 text-sm font-semibold mb-1">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Proyectos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Destacados</span>
              </h2>
              <p className="text-gray-400 text-lg">Algunos de mis trabajos más recientes</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                  <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -10 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 group"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                        ))}
                      </div>
                      {project.achievements && (
                          <ul className="space-y-1 text-sm text-gray-400">
                            {project.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-green-400">✓</span>
                                  <span>{achievement}</span>
                                </li>
                            ))}
                          </ul>
                      )}
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Trabajemos <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Juntos?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                ¿Tienes un proyecto en mente? Estoy disponible para freelance, colaboraciones y oportunidades laborales.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                    <motion.a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-600/20 hover:to-purple-600/20 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group"
                    >
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                      <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                      <p className="text-gray-400 text-sm break-all">{method.value}</p>
                    </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-800 relative">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-2"
          >
            <p className="text-lg">© 2026 Carlos Daniel Mejía Febres</p>
            <p className="text-sm">Hecho con 💙 usando Next.js, TypeScript y Tailwind CSS</p>
            <p className="text-xs text-gray-600">Loja, Ecuador 🇪🇨</p>
          </motion.div>
        </footer>
      </main>
  )
}

// Data
const stats = [
  { value: '7°', label: 'Ciclo' },
  { value: '4+', label: 'Proyectos' },
  { value: '8+', label: 'Certificaciones' }
]

const aboutCards = [
  {
    icon: '🎓',
    title: 'Educación',
    description: '7mo ciclo de Ingeniería en Sistemas Computacionales con enfoque en desarrollo web y backend.'
  },
  {
    icon: '💡',
    title: 'Innovación',
    description: 'Apasionado por crear soluciones tecnológicas que resuelvan problemas reales y mejoren la vida de las personas.'
  },
  {
    icon: '🚀',
    title: 'Objetivos',
    description: 'Convertirme en un desarrollador full-stack senior y contribuir a proyectos de impacto internacional.'
  }
]

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎯' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'TypeScript', icon: '💙' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Flutter', icon: '📱' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '📦' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'PHP', icon: '🐘' },
  { name: 'WordPress', icon: '📝' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'REST APIs', icon: '🔌' },
]

const experience = [
  {
    role: 'Manejo Avanzado en Equipos Informáticos',
    company: 'ACCESNET Soluciones Informáticas',
    period: '2023 - 2024',
    responsibilities: [
      'Atención al cliente y gestión del establecimiento',
      'Diagnóstico y solución de problemas de software en equipos de escritorio y móviles',
      'Reparación y mantenimiento de hardware',
      'Eficiencia en resolución de tareas de ofimática'
    ]
  },
  {
    role: 'Asistente Diseñador Gráfico',
    company: 'Deportivo Cat',
    period: '2022 - 2023',
    responsibilities: [
      'Diseño de uniformes deportivos y vestimenta personalizada',
      'Servicio de producción textil',
      'Gestión y atención al cliente',
      'Manejo de software de diseño gráfico profesional'
    ]
  },
  {
    role: 'Desarrollador Full-Stack (Freelance)',
    company: 'Proyectos Independientes',
    period: '2023 - Presente',
    responsibilities: [
      'Desarrollo de aplicaciones web con Django y React',
      'Creación de aplicaciones móviles con Flutter',
      'Implementación de sistemas de facturación electrónica',
      'Gestión de bases de datos y APIs RESTful'
    ]
  }
]

const certifications = [
  {
    title: 'Proficiencia en Python',
    issuer: 'Cisco Networking Academy',
    date: 'Mayo 2023',
    icon: '🐍'
  },
  {
    title: 'Python y Data Science',
    issuer: 'Udemy Academy',
    date: 'Marzo 2023',
    icon: '📊'
  },
  {
    title: 'Curso Práctico en Django',
    issuer: 'Udemy Academy',
    date: 'Abril 2024',
    icon: '🎯'
  },
  {
    title: 'Proficiencia en Angular + Django',
    issuer: 'Udemy Academy',
    date: 'Diciembre 2025',
    icon: '🅰️'
  },
  {
    title: 'POO + Diseño Web',
    issuer: 'Udemy Academy',
    date: 'Abril 2025',
    icon: '💻'
  },
  {
    title: 'PHP, WordPress, HTML + CSS',
    issuer: 'Udemy Academy',
    date: 'Abril 2025',
    icon: '🌐'
  },
  {
    title: 'Proficiencia en Inglés',
    issuer: 'Fine Tuned English',
    date: '2020',
    icon: '🇬🇧'
  },
  {
    title: 'Bachillerato en Ciencias',
    issuer: 'U.E. Fiscomisional Calasanz',
    date: '2022',
    icon: '🎓'
  }
]

const projects = [
  {
    title: 'WeHome',
    icon: '🏠',
    description: 'Plataforma e-commerce completa para materiales de construcción en Loja, Ecuador. Sistema robusto con gestión de inventario en tiempo real, carrito de compras inteligente y pasarela de pagos integrada.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Stripe', 'Redis'],
    achievements: [
      'Sistema de inventario en tiempo real',
      'Integración con múltiples métodos de pago',
      'Panel administrativo personalizado'
    ]
  },
  {
    title: 'App Educativa Interactiva',
    icon: '📚',
    description: 'Aplicación móvil multiplataforma de quizzes educativos con sistema de gamificación avanzado, seguimiento de progreso del estudiante y generación de reportes.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
    achievements: [
      'Más de 100+ preguntas categorizadas',
      'Sistema de logros y recompensas',
      'Analytics de rendimiento estudiantil'
    ]
  },
  {
    title: 'Sistema de Facturación SRI',
    icon: '💼',
    description: 'Sistema completo de facturación electrónica cumpliendo normativas del SRI Ecuador. Generación automática de XML, RIDE en PDF y autorización en tiempo real.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Celery', 'XML'],
    achievements: [
      'Cumplimiento total normativa SRI',
      'Autorización automática de comprobantes',
      'Generación de reportes contables'
    ]
  },
  {
    title: 'Portfolio Personal',
    icon: '✨',
    description: 'Portafolio web profesional con diseño moderno, animaciones fluidas con Framer Motion y totalmente responsive. Optimizado para SEO y rendimiento.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    achievements: [
      'Animaciones suaves y profesionales',
      '100% responsive design',
      'Desplegado en GitHub Pages'
    ]
  }
]

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'carlos_mejia2004@hotmail.com',
    href: 'mailto:carlos_mejia2004@hotmail.com'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/cdm18',
    href: 'https://github.com/cdm18'
  },
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+593 98 721 7450',
    href: 'https://wa.me/593987217450'
  }
]
