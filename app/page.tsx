'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  Boxes,
  Briefcase,
  Building2,
  Code2,
  Container,
  Download,
  Gamepad2,
  Globe,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Network,
  ReceiptText,
  School,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trophy,
  Wallet,
  Workflow,
} from 'lucide-react'
import { CountUp, Parallax, Reveal, StaggerGroup, staggerItem } from './components/ui'
import { GithubIcon, LinkedinIcon } from './components/icons'

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="aurora" aria-hidden>
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="grid-lines" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Recognition />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

/* ----------------------------------------------------------------- Nav */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div
        className={`glass-pill rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]' : ''
        }`}
      >
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
          CDMF<span className="text-gradient">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-sm text-zinc-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/CV-Carlos-Mejia.pdf"
          download
          className="group flex items-center gap-1.5 text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
        >
          CV
          <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.nav>
  )
}

/* ----------------------------------------------------------------- Hero */
function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="inicio" className="relative min-h-screen flex items-center px-5 pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Text */}
        <div>
          <Reveal>
            <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              Loja, Ecuador
              <span className="w-1 h-1 rounded-full bg-zinc-500" />
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponible
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display font-bold leading-[0.92] mt-6 text-[clamp(2.8rem,8vw,6rem)]">
              Carlos Daniel
              <br />
              <span className="text-gradient">Mejía Febres</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-xl md:text-2xl text-zinc-300 max-w-xl leading-snug">
              Desarrollador <span className="font-serif-italic text-white">Full Stack</span> que
              construye productos <span className="font-serif-italic text-white">reales</span> — de la
              base de datos al despliegue.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-5 text-zinc-400 max-w-xl leading-relaxed">
              Ingeniería en Ciencias de la Computación en la UTPL (8.° ciclo de 9). Django · React ·
              PostgreSQL · Docker. Coautor de dos software registrados ante el SENADI.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="group flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors"
              >
                Ver proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/CV-Carlos-Mejia.pdf"
                download
                className="glass glass-hover flex items-center gap-2 font-medium px-6 py-3 rounded-full text-white"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
              <div className="flex items-center gap-2 ml-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="glass glass-hover w-11 h-11 rounded-full flex items-center justify-center text-zinc-200 hover:text-white"
                  >
                    <s.icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.32}>
            <div className="mt-12 grid grid-cols-3 gap-3 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <Parallax speed={reduce ? 0 : 40}>
            <div className="glass rounded-[2rem] p-3 accent-ring">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Carlos Daniel Mejía Febres"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </Parallax>

          {/* Floating glass chips */}
          <Parallax speed={reduce ? 0 : -30} className="absolute -left-4 top-10 hidden sm:block">
            <div className="glass rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/15 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-none">WeHome</div>
                <div className="text-[11px] text-zinc-400 mt-1">En producción</div>
              </div>
            </div>
          </Parallax>

          <Parallax speed={reduce ? 0 : 50} className="absolute -right-3 bottom-8 hidden sm:block">
            <div className="glass rounded-2xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-400/15 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-none">2 registros</div>
                <div className="text-[11px] text-zinc-400 mt-1">SENADI Ecuador</div>
              </div>
            </div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Marquee */
function Marquee() {
  const items = [
    'Python', 'Django', 'React.js', 'TypeScript', 'PostgreSQL', 'Docker',
    'CI/CD', 'REST APIs', 'Cisco CCNA', 'SCRUM', 'Tableau', 'Unity',
  ]
  const row = [...items, ...items]
  return (
    <div className="relative py-8 border-y border-white/5 overflow-hidden">
      <div className="marquee-track gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl md:text-3xl font-display font-medium text-zinc-600">
            {item}
            <span className="text-cyan-400/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- Section shell */
function Section({
  id,
  eyebrow,
  title,
  accent,
  intro,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  accent?: string
  intro?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="relative px-5 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-14 md:mb-16 max-w-2xl">
          <span className="text-sm font-medium tracking-widest uppercase text-cyan-300/80">
            {eyebrow}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-3 leading-[1]">
            {title} {accent && <span className="text-gradient">{accent}</span>}
          </h2>
          {intro && <p className="mt-5 text-lg text-zinc-400 leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- About */
function About() {
  return (
    <section id="sobre-mi" className="relative px-5 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="text-sm font-medium tracking-widest uppercase text-cyan-300/80">
            Sobre mí
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display font-medium text-3xl md:text-5xl leading-[1.15] mt-6 tracking-tight">
            He llevado productos <span className="text-gradient">a producción</span>, no solo a un
            repositorio. Desde el modelado de datos y las APIs hasta{' '}
            <span className="font-serif-italic font-normal text-white">
              Docker y la integración continua
            </span>
            , disfruto construir software que la gente <span className="text-gradient">usa de verdad</span>.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-4 mt-14">
          {aboutCards.map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <div className="glass glass-hover rounded-3xl p-7 h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Skills */
function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Herramientas de"
      accent="trabajo"
      intro="Tecnologías, metodologías y áreas con las que construyo, agrupadas por dominio."
    >
      <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={staggerItem}>
            <div className="glass glass-hover rounded-3xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <group.icon className="w-[18px] h-[18px] text-cyan-300" />
                </div>
                <h3 className="font-display font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  )
}

/* ----------------------------------------------------------------- Experience */
function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trayectoria"
      title="Experiencia"
      accent="profesional"
      intro="Roles de desarrollo, liderazgo e innovación entre 2023 y hoy."
    >
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}`} delay={i * 0.03}>
              <div className="relative pl-14">
                <div className="absolute left-[11px] top-7 w-4 h-4 rounded-full bg-cyan-400 accent-ring z-10" />
                <div className="glass glass-hover rounded-3xl p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="min-w-0">
                      <span className="glass-pill inline-block rounded-full px-2.5 py-0.5 text-xs text-zinc-300 mb-2">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-xl font-semibold leading-snug">{exp.role}</h3>
                      <p className="text-cyan-300/90 text-sm font-medium mt-1">{exp.company}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((r, j) => (
                          <li key={j} className="flex gap-2.5 text-[15px] text-zinc-400 leading-relaxed">
                            <ArrowUpRight className="w-4 h-4 text-cyan-400/70 shrink-0 mt-1" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ----------------------------------------------------------------- Education */
function Education() {
  return (
    <Section id="educacion" eyebrow="Formación" title="Educación" accent="académica">
      <StaggerGroup className="grid md:grid-cols-2 gap-4">
        {education.map((edu) => (
          <motion.div key={edu.institution} variants={staggerItem}>
            <div className="glass glass-hover rounded-3xl p-7 h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <edu.icon className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{edu.degree}</h3>
                  <p className="text-cyan-300/90 text-sm font-medium mt-1">{edu.institution}</p>
                  <p className="text-zinc-500 text-sm mt-1">{edu.period}</p>
                  <p className="text-zinc-400 text-[15px] leading-relaxed mt-4">{edu.detail}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  )
}

/* ----------------------------------------------------------------- Projects */
function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Trabajo seleccionado"
      title="Proyectos"
      accent="destacados"
      intro="Productos reales — algunos en producción, otros con registro de propiedad intelectual."
    >
      <StaggerGroup className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <motion.div key={p.title} variants={staggerItem}>
            <div className="glass glass-hover rounded-[1.75rem] p-8 h-full flex flex-col group">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 border border-white/10 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-cyan-200" />
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-pill flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
                  >
                    {p.link.replace('https://', '')}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold mt-6">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed mt-3 text-[15px]">{p.description}</p>

              {p.achievements && (
                <ul className="mt-5 space-y-2">
                  {p.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-zinc-400">
                      <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  )
}

/* ----------------------------------------------------------------- Recognition */
function Recognition() {
  return (
    <Section
      id="reconocimientos"
      eyebrow="Propiedad intelectual"
      title="Registros &"
      accent="reconocimientos"
      intro="Software registrado ante el SENADI Ecuador y logros destacados."
    >
      <StaggerGroup className="grid md:grid-cols-2 gap-4">
        {recognitions.map((r) => (
          <motion.div key={r.title} variants={staggerItem}>
            <div className="glass glass-hover rounded-3xl p-6 h-full flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">{r.title}</h3>
                <p className="text-cyan-300/90 text-sm font-medium mt-1">{r.issuer}</p>
                <p className="text-zinc-400 text-[15px] leading-relaxed mt-2">{r.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  )
}

/* ----------------------------------------------------------------- Certifications */
function Certifications() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Formación continua"
      title="Certificaciones"
      accent="& cursos"
    >
      <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <motion.div key={c.title} variants={staggerItem}>
            <div className="glass glass-hover rounded-2xl p-5 h-full flex items-start gap-3.5">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <c.icon className="w-[18px] h-[18px] text-cyan-300" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium leading-snug text-[15px]">{c.title}</h3>
                <p className="text-cyan-300/80 text-xs font-medium mt-1.5">{c.issuer}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{c.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  )
}

/* ----------------------------------------------------------------- Contact */
function Contact() {
  return (
    <section id="contacto" className="relative px-5 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="glass rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <span className="text-sm font-medium tracking-widest uppercase text-cyan-300/80">
              Contacto
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl mt-4 leading-[1]">
              ¿Construimos algo <span className="text-gradient">juntos?</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-5 max-w-xl mx-auto">
              Disponible para prácticas, colaboraciones y oportunidades laborales. Respondo rápido.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mt-10 max-w-2xl mx-auto">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass glass-hover rounded-2xl p-5 flex flex-col items-center gap-2 group"
                >
                  <m.icon className="w-6 h-6 text-cyan-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm mt-1">{m.label}</span>
                  <span className="text-zinc-500 text-xs break-all">{m.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Footer */
function Footer() {
  return (
    <footer className="relative px-5 pb-12 pt-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-lg">Carlos Daniel Mejía Febres</p>
          <p className="text-zinc-500 text-sm flex items-center gap-1.5 justify-center md:justify-start mt-1">
            <MapPin className="w-3.5 h-3.5" /> Loja, Ecuador · © 2026
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass glass-hover w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white"
            >
              <s.icon className="w-[17px] h-[17px]" />
            </a>
          ))}
          <a
            href="#inicio"
            className="glass-pill rounded-full px-4 py-2.5 text-sm text-zinc-300 hover:text-white transition-colors ml-1"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================= Data */

const navItems = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Reconocimientos', href: '#reconocimientos' },
  { label: 'Contacto', href: '#contacto' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/cdm18', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/carlos-mejia-1315571aa', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:cdmejia4@utpl.edu.ec', label: 'Email' },
]

const stats = [
  { value: 8, suffix: '.°', label: 'Ciclo de 9 · UTPL' },
  { value: 2, suffix: '', label: 'Registros SENADI' },
  { value: 6, suffix: '+', label: 'Proyectos' },
]

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'Formación sólida',
    description:
      'Ingeniería en Ciencias de la Computación en la UTPL, 8.° ciclo de 9, con titulación prevista para febrero de 2027.',
  },
  {
    icon: Sparkles,
    title: 'Productos en producción',
    description:
      'Diseñé y desplegué WeHome (wehome.com.ec), un e-commerce completo para la cadena de suministro de la construcción.',
  },
  {
    icon: ShieldCheck,
    title: 'Propiedad intelectual',
    description:
      'Coautor y cotitular de dos software registrados ante el SENADI: PyWallet y la Bolsa de Empleos Digital.',
  },
]

const skillGroups = [
  { title: 'Backend', icon: Server, items: ['Python', 'Django', 'Django REST', 'REST APIs', 'PostgreSQL'] },
  { title: 'Frontend', icon: Code2, items: ['React.js', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { title: 'DevOps & Tools', icon: Container, items: ['Docker', 'Git & GitHub', 'CI/CD'] },
  { title: 'Datos', icon: BarChart3, items: ['NumPy', 'Pandas', 'Tableau'] },
  { title: 'Redes', icon: Network, items: ['Cisco CCNA', 'Enrutamiento', 'Conmutación'] },
  { title: 'Métodos & Arquitectura', icon: Workflow, items: ['SCRUM', 'DevOps', 'UML', 'Enterprise Architect'] },
  { title: 'Otros', icon: Gamepad2, items: ['C#', 'Unity'] },
]

const experience = [
  {
    icon: ShoppingBag,
    role: 'Desarrollador Full Stack — Proyecto WeHome',
    company: 'Cliente privado · Sector construcción',
    period: '2024 – Presente',
    responsibilities: [
      'Diseñé y desplegué una plataforma e-commerce de extremo a extremo, hoy en producción en wehome.com.ec.',
      'Modelé la base de datos relacional, autenticación JWT y gestión de inventario con Django REST + React.js + PostgreSQL.',
      'Desplegué en contenedores Docker con integración continua vía GitHub.',
    ],
  },
  {
    icon: Briefcase,
    role: 'Desarrollador de Software — Equipo de Innovación',
    company: 'UTPL · Parque Científico y Tecnológico',
    period: 'Oct. 2024 – May. 2026',
    responsibilities: [
      'Desarrollé la plataforma Bolsa de Empleos Digital gestionando ciclos completos de DevOps.',
      'Apliqué la metodología ágil SCRUM para coordinar sprints y entregas incrementales.',
      'Participé en el registro de propiedad intelectual ante el SENADI (Reg. QUI-072056).',
    ],
  },
  {
    icon: ReceiptText,
    role: 'Desarrollador Backend — Facturación Electrónica',
    company: 'Proyecto personal',
    period: '2024 – 2025',
    responsibilities: [
      'Construí un sistema completo de facturación en Python/Django: comprobantes, clientes y reportes.',
      'Diseñé módulos de reportería para trazabilidad de costos operativos en entornos corporativos.',
    ],
  },
  {
    icon: Building2,
    role: 'Pasante de Sistemas',
    company: 'UTPL · Dirección de TIC y Transformación Digital',
    period: 'Abr. 2025 – Jul. 2025',
    responsibilities: [
      'Contribuí en proyectos de transformación digital institucional (96 horas).',
      'Desarrollé y mantuve soluciones de software en un entorno universitario TI real.',
    ],
  },
  {
    icon: Globe,
    role: 'Desarrollador Web — Reto Empresarial',
    company: 'Cámara de Comercio de Loja · Semestre Ascendere',
    period: 'Abr. 2025 – Jul. 2025',
    responsibilities: [
      'Diseñé y lancé un portal web funcional para un reto real del sector empresarial.',
      'Proyecto evaluado y certificado por la Cámara de Comercio de Loja.',
    ],
  },
  {
    icon: Boxes,
    role: 'Participante — Proyecto "Vulcano"',
    company: 'UTPL · Academia Ascendere (LiiD, XRLAB)',
    period: 'Abr. 2023 – Feb. 2024',
    responsibilities: [
      'Proyecto de innovación educativa de 192 horas integrando realidad extendida (XRLAB).',
      'Investigación aplicada en tecnología educativa.',
    ],
  },
]

const education = [
  {
    icon: GraduationCap,
    degree: 'Ingeniería en Ciencias de la Computación',
    institution: 'Universidad Técnica Particular de Loja (UTPL)',
    period: '2022 – Feb. 2027 (prevista) · 8.° ciclo de 9',
    detail:
      'Redes y Comunicaciones, Bases de Datos, Desarrollo de Software, Estructuras de Datos, Sistemas Operativos, Ingeniería de Software, Ingeniería en Datos y Visualización con Tableau. Prácticas en la Dirección de TIC (96 h) y el Parque Científico y Tecnológico (96 h).',
  },
  {
    icon: School,
    degree: 'Bachillerato en Ciencias',
    institution: 'Unidad Educativa Fiscomisional Calasanz',
    period: 'Graduado en junio 2022',
    detail: 'Formación secundaria con especialización en ciencias. Loja, Ecuador.',
  },
]

const projects = [
  {
    icon: ShoppingBag,
    title: 'WeHome',
    link: 'https://wehome.com.ec',
    description:
      'Plataforma e-commerce de extremo a extremo para la cadena de suministro de materiales de construcción, actualmente en producción. Autenticación JWT y gestión de inventario en tiempo real.',
    technologies: ['Django REST', 'React.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    achievements: ['En producción en wehome.com.ec', 'Despliegue en contenedores Docker', 'Integración continua vía GitHub'],
  },
  {
    icon: Briefcase,
    title: 'Bolsa de Empleos Digital',
    description:
      'Plataforma de bolsa de empleo digital desarrollada en la UTPL con un equipo multidisciplinario, gestionando ciclos completos de DevOps bajo metodología SCRUM.',
    technologies: ['Django', 'SCRUM', 'DevOps', 'Git'],
    achievements: ['Registrada ante el SENADI (QUI-072056)', 'Coautor y cotitular del software', 'Ciclos completos de DevOps'],
  },
  {
    icon: Wallet,
    title: 'PyWallet — Billetera Virtual',
    description:
      'Aplicación de billetera digital desarrollada en la UTPL. Registrada como obra de software ante el SENADI bajo el COESCCI.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    achievements: ['Registrada ante el SENADI (QUI-071386)', 'Coautor y cotitular del software', 'Reconocida en PuntoPymes (BillWallet)'],
  },
  {
    icon: ReceiptText,
    title: 'Sistema de Facturación Electrónica',
    description:
      'Sistema completo de facturación en Python/Django: generación de comprobantes, gestión de clientes y exportación de reportes para entornos corporativos.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    achievements: ['Generación de comprobantes y gestión de clientes', 'Módulos de reportería y trazabilidad', 'Exportación de reportes operativos'],
  },
]

const recognitions = [
  {
    icon: ShieldCheck,
    title: 'PyWallet — Billetera Virtual',
    issuer: 'SENADI Ecuador · Reg. QUI-071386',
    detail: 'Coautor y cotitular de software registrado bajo el COESCCI (abr. 2026).',
  },
  {
    icon: ShieldCheck,
    title: 'Bolsa de Empleos Digital',
    issuer: 'SENADI Ecuador · Reg. QUI-072056',
    detail: 'Coautor y cotitular de software registrado (may. 2026).',
  },
  {
    icon: Trophy,
    title: '3.er lugar — Categoría Junior de Programación',
    issuer: 'ProgrOlimpiadas UTPL · FEUTPL',
    detail: 'Tercer puesto en la olimpiada universitaria de programación (jun. 2024).',
  },
  {
    icon: Award,
    title: 'Reconocimiento — Desarrollo de BillWallet',
    issuer: 'PuntoPymes Software Development Center',
    detail: 'Distinción por compromiso, creatividad y habilidades técnicas (ene. 2025).',
  },
]

const certifications = [
  { icon: Network, title: 'CCNA: Conmutación, Enrutamiento y Redes Inalámbricas', issuer: 'Cisco Networking Academy / UTPL', date: 'Feb. 2026' },
  { icon: Network, title: 'CCNA: Introducción a las Redes', issuer: 'Cisco Networking Academy / UTPL', date: 'Jul. 2025' },
  { icon: Code2, title: 'Python Essentials 1', issuer: 'Cisco Networking Academy + OpenEDG', date: 'May. 2023' },
  { icon: Server, title: 'Django — Desarrollo Web Backend (12,5 h)', issuer: 'Udemy', date: 'Ene. 2025' },
  { icon: Code2, title: 'Maestro de Python (36,5 h)', issuer: 'Udemy', date: 'Mar. 2023' },
  { icon: BarChart3, title: 'Python para Data Science A-Z (10 h)', issuer: 'Udemy', date: '2023' },
  { icon: BarChart3, title: 'NumPy y Pandas para Data Science (5 h)', issuer: 'Udemy', date: '2023' },
  { icon: Workflow, title: 'Liderazgo y Gestión de Equipos (5 h)', issuer: 'Udemy', date: '2024' },
  { icon: Languages, title: 'Proficiencia en Inglés B1 (1 000 h)', issuer: 'Fine-Tuned English (SETEC/CEFR)', date: '2020' },
]

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'cdmejia4@utpl.edu.ec', href: 'mailto:cdmejia4@utpl.edu.ec' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'carlos-mejia-1315571aa', href: 'https://www.linkedin.com/in/carlos-mejia-1315571aa' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/cdm18', href: 'https://github.com/cdm18' },
]