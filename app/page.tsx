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
              CDMF
            </motion.span>
            <div className="flex gap-6">
              {navItems.map((item, i) => (
                  <motion.a
                      key={item.href}
                      href={item.href}
                      className="hover:text-blue-400 transition-colors text-sm hidden md:block"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                  >
                    {item.label}
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
                Full Stack Developer <span className="text-blue-400">|</span> Django · React · PostgreSQL
              </motion.h2>
              <motion.p
                  className="text-lg text-gray-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
              >
                Estudiante de Ingeniería en Ciencias de la Computación (8.° ciclo de 9) en la UTPL,
                Loja, Ecuador. Desarrollador Full Stack con productos reales en producción y
                coautor de dos software registrados ante el SENADI.
              </motion.p>

              {/* Stats */}
              <motion.div
                  className="grid grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
              >
                {stats.map((stat) => (
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
                <motion.a
                    href="/CV-Carlos-Mejia.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  <span>⬇️</span> Descargar CV
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
                  { icon: '💼', href: 'https://www.linkedin.com/in/carlos-mejia-1315571aa', label: 'LinkedIn' },
                  { icon: '📧', href: 'mailto:cdmejia4@utpl.edu.ec', label: 'Email' }
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
                        alt="Carlos Daniel Mejía Febres"
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
        <section id="sobre-mi" className="py-32 px-4 relative">
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
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Desarrollador Full Stack orientado a resultados, con experiencia real llevando
                productos a producción y participando en registros de propiedad intelectual.
              </p>
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
              <p className="text-gray-400 text-lg">Trayectoria laboral, académica y de liderazgo</p>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                  <motion.div
                      key={`${exp.company}-${exp.role}`}
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
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
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

        {/* Education Section */}
        <section id="educacion" className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Formación <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Académica</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                  <motion.div
                      key={edu.institution}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-semibold mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{edu.detail}</p>
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
              <p className="text-gray-400 text-lg">Productos reales, algunos en producción y con registro de propiedad intelectual</p>
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
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          {project.link && (
                              <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm hover:underline"
                              >
                                {project.link.replace('https://', '')}
                              </a>
                          )}
                        </div>
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

        {/* Recognition & Intellectual Property Section */}
        <section id="reconocimientos" className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Propiedad Intelectual <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">& Reconocimientos</span>
              </h2>
              <p className="text-gray-400 text-lg">Software registrado ante el SENADI y logros destacados</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {recognitions.map((item, index) => (
                  <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-blue-400 text-sm font-semibold mb-1">{item.issuer}</p>
                        <p className="text-gray-400 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificaciones" className="py-32 px-4 relative">
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
                Estoy disponible para prácticas, colaboraciones y oportunidades laborales.
                ¿Hablamos?
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
const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

const stats = [
  { value: '8.°', label: 'Ciclo (de 9)' },
  { value: '2', label: 'Registros SENADI' },
  { value: '6+', label: 'Proyectos' }
]

const aboutCards = [
  {
    icon: '🎓',
    title: 'Educación',
    description: 'Ingeniería en Ciencias de la Computación en la UTPL (8.° ciclo de 9), con titulación prevista para febrero de 2027.'
  },
  {
    icon: '🚀',
    title: 'Productos en Producción',
    description: 'Diseñé y desplegué WeHome (wehome.com.ec), un e-commerce completo para la cadena de suministro de materiales de construcción.'
  },
  {
    icon: '🛡️',
    title: 'Propiedad Intelectual',
    description: 'Coautor y cotitular de dos software registrados ante el SENADI: PyWallet y la Bolsa de Empleos Digital.'
  }
]

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎯' },
  { name: 'Django REST', icon: '🔌' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'TypeScript', icon: '💙' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'CI/CD', icon: '🔄' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Tableau', icon: '📊' },
  { name: 'HTML / CSS', icon: '🌐' },
  { name: 'C#', icon: '🎵' },
  { name: 'Unity', icon: '🎮' },
  { name: 'Cisco CCNA', icon: '🛰️' },
  { name: 'SCRUM', icon: '🏃' },
  { name: 'UML / EA', icon: '📐' },
  { name: 'REST APIs', icon: '🔗' },
]

const experience = [
  {
    role: 'Desarrollador Full Stack — Proyecto WeHome',
    company: 'Cliente privado · Sector construcción',
    period: '2024 – Presente',
    responsibilities: [
      'Diseñé y desplegué una plataforma e-commerce de extremo a extremo, actualmente en producción en wehome.com.ec',
      'Modelé la base de datos relacional, autenticación JWT y módulo de gestión de inventario con Django REST + React.js + PostgreSQL',
      'Desplegué la aplicación en contenedores Docker e implementé un flujo de integración continua mediante GitHub'
    ]
  },
  {
    role: 'Desarrollador de Software — Equipo de Innovación',
    company: 'UTPL · Parque Científico y Tecnológico (Bolsa de Empleos Digital)',
    period: 'Oct. 2024 – May. 2026',
    responsibilities: [
      'Desarrollé la plataforma Bolsa de Empleos Digital gestionando ciclos completos de DevOps: planificación, control de versiones, pruebas, despliegue e iteración continua',
      'Apliqué la metodología ágil SCRUM para coordinar sprints, revisiones y entregas incrementales',
      'Participé en el proceso de registro de propiedad intelectual ante el SENADI (Reg. QUI-072056)'
    ]
  },
  {
    role: 'Desarrollador Backend — Sistema de Facturación Electrónica',
    company: 'Proyecto personal',
    period: '2024 – 2025',
    responsibilities: [
      'Construí un sistema completo de facturación en Python/Django: generación de comprobantes, gestión de clientes y exportación de reportes',
      'Diseñé módulos de reportería aplicables a entornos corporativos de registro y trazabilidad de costos operativos'
    ]
  },
  {
    role: 'Pasante de Sistemas',
    company: 'UTPL · Dirección de TIC y Transformación Digital',
    period: 'Abr. 2025 – Jul. 2025',
    responsibilities: [
      'Contribuí en proyectos de transformación digital institucional bajo supervisión del Director de TIC (96 horas)',
      'Desarrollé y mantuve soluciones de software en un entorno universitario TI real, coordinando con equipos técnicos y administrativos'
    ]
  },
  {
    role: 'Desarrollador Web — Reto Empresarial',
    company: 'Cámara de Comercio de Loja · Semestre Ascendere',
    period: 'Abr. 2025 – Jul. 2025',
    responsibilities: [
      'Diseñé y lancé un portal web funcional como respuesta a un reto real propuesto por la Cámara de Comercio de Loja',
      'Proyecto evaluado y certificado por el sector empresarial'
    ]
  },
  {
    role: 'Participante — Proyecto "Vulcano"',
    company: 'UTPL · Academia Ascendere (Parque Científico, LiiD, XRLAB)',
    period: 'Abr. 2023 – Feb. 2024',
    responsibilities: [
      'Participé en un proyecto de innovación educativa de 192 horas que integró realidad extendida (XRLAB)',
      'Investigación aplicada en tecnología educativa'
    ]
  }
]

const education = [
  {
    icon: '🎓',
    degree: 'Ingeniería en Ciencias de la Computación',
    institution: 'Universidad Técnica Particular de Loja (UTPL)',
    period: '2022 – Feb. 2027 (prevista) · 8.° ciclo de 9',
    detail: 'Materias relevantes: Redes y Comunicaciones, Bases de Datos, Desarrollo de Software, Estructuras de Datos, Sistemas Operativos, Ingeniería de Software, Ingeniería en Datos y Visualización con Tableau. Prácticas preprofesionales en la Dirección de TIC (96 h) y el Parque Científico y Tecnológico (96 h).'
  },
  {
    icon: '🏫',
    degree: 'Bachillerato en Ciencias',
    institution: 'Unidad Educativa Fiscomisional Calasanz',
    period: 'Graduado en junio 2022',
    detail: 'Formación secundaria con especialización en ciencias, Loja, Ecuador.'
  }
]

const projects = [
  {
    title: 'WeHome',
    icon: '🏠',
    link: 'https://wehome.com.ec',
    description: 'Plataforma e-commerce de extremo a extremo para la cadena de suministro de materiales de construcción, actualmente en producción. Incluye autenticación JWT y gestión de inventario en tiempo real.',
    technologies: ['Django REST', 'React.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    achievements: [
      'En producción en wehome.com.ec',
      'Despliegue en contenedores Docker',
      'Integración continua vía GitHub'
    ]
  },
  {
    title: 'Bolsa de Empleos Digital',
    icon: '💼',
    description: 'Plataforma de bolsa de empleo digital desarrollada en la UTPL con un equipo multidisciplinario, gestionando ciclos completos de DevOps bajo metodología SCRUM.',
    technologies: ['Django', 'SCRUM', 'DevOps', 'Git'],
    achievements: [
      'Registrada ante el SENADI (Reg. QUI-072056)',
      'Coautor y cotitular del software',
      'Ciclos completos de DevOps e iteración continua'
    ]
  },
  {
    title: 'PyWallet — Billetera Virtual',
    icon: '💳',
    description: 'Aplicación de billetera digital desarrollada en la UTPL. Registrada como obra de software ante el SENADI bajo el COESCCI.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    achievements: [
      'Registrada ante el SENADI (Reg. QUI-071386)',
      'Coautor y cotitular del software',
      'Reconocida en PuntoPymes (BillWallet)'
    ]
  },
  {
    title: 'Sistema de Facturación Electrónica',
    icon: '🧾',
    description: 'Sistema completo de facturación en Python/Django: generación de comprobantes, gestión de clientes y exportación de reportes para entornos corporativos.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Reportería'],
    achievements: [
      'Generación de comprobantes y gestión de clientes',
      'Módulos de reportería y trazabilidad de costos',
      'Exportación de reportes operativos'
    ]
  }
]

const recognitions = [
  {
    icon: '🛡️',
    title: 'PyWallet — Billetera Virtual',
    issuer: 'SENADI Ecuador · Reg. QUI-071386',
    detail: 'Coautor y cotitular de software registrado bajo el COESCCI (abr. 2026).'
  },
  {
    icon: '🛡️',
    title: 'Bolsa de Empleos Digital',
    issuer: 'SENADI Ecuador · Reg. QUI-072056',
    detail: 'Coautor y cotitular de software registrado (may. 2026).'
  },
  {
    icon: '🏆',
    title: '3.er lugar — Categoría Junior de Programación',
    issuer: 'ProgrOlimpiadas UTPL · FEUTPL',
    detail: 'Tercer puesto en la olimpiada universitaria de programación (jun. 2024).'
  },
  {
    icon: '🌟',
    title: 'Reconocimiento — Desarrollo de BillWallet',
    issuer: 'PuntoPymes Software Development Center',
    detail: 'Distinción por compromiso, creatividad y habilidades técnicas (ene. 2025).'
  }
]

const certifications = [
  {
    title: 'CCNA: Conmutación, Enrutamiento y Redes Inalámbricas',
    issuer: 'Cisco Networking Academy / UTPL',
    date: 'Feb. 2026',
    icon: '🛰️'
  },
  {
    title: 'CCNA: Introducción a las Redes',
    issuer: 'Cisco Networking Academy / UTPL',
    date: 'Jul. 2025',
    icon: '🌐'
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy + OpenEDG',
    date: 'May. 2023',
    icon: '🐍'
  },
  {
    title: 'Django — Desarrollo Web Backend (12,5 h)',
    issuer: 'Udemy',
    date: 'Ene. 2025',
    icon: '🎯'
  },
  {
    title: 'Maestro de Python (36,5 h)',
    issuer: 'Udemy',
    date: 'Mar. 2023',
    icon: '📘'
  },
  {
    title: 'Python para Data Science A-Z (10 h)',
    issuer: 'Udemy',
    date: '2023',
    icon: '📊'
  },
  {
    title: 'NumPy y Pandas para Data Science (5 h)',
    issuer: 'Udemy',
    date: '2023',
    icon: '🐼'
  },
  {
    title: 'Liderazgo y Gestión de Equipos (5 h)',
    issuer: 'Udemy',
    date: '2024',
    icon: '🧭'
  },
  {
    title: 'Certificado de Proficiencia en Inglés B1 (1 000 h)',
    issuer: 'Fine-Tuned English Language Institute (SETEC/CEFR)',
    date: '2020',
    icon: '🇬🇧'
  }
]

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'cdmejia4@utpl.edu.ec',
    href: 'mailto:cdmejia4@utpl.edu.ec'
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'carlos-mejia-1315571aa',
    href: 'https://www.linkedin.com/in/carlos-mejia-1315571aa'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/cdm18',
    href: 'https://github.com/cdm18'
  }
]
