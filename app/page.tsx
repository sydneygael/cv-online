"use client";

import { useState, useEffect, useRef } from "react";

type Lang = "fr" | "en";
type BiText = { fr: string; en: string };

/* ─── Translations ─────────────────────────────────────────────────────── */

const ui = {
  fr: {
    role: "Ingénieur Logiciel",
    tagline: "~10 ans d'expérience · Java · Cloud-Native · Systèmes distribués",
    description:
      "Spécialisé dans les architectures distribuées, les systèmes d'intégration et les plateformes cloud-native. Secteurs : transport, médias, conformité bancaire, énergie.",
    aiLine: "Orientation actuelle : développement d'agents IA.",
    downloadCv: "Télécharger le CV",
    present: "En cours",
    nav: {
      profile: "Profil",
      skills: "Compétences",
      experience: "Expériences",
      education: "Formation",
    },
    sections: {
      skills: "Compétences",
      skillsSub: "Technologies et outils maîtrisés",
      experience: "Expériences",
      experienceSub: "Parcours professionnel",
      education: "Formation",
      educationSub: "Parcours académique",
    },
  },
  en: {
    role: "Software Engineer",
    tagline:
      "~10 years of experience · Java · Cloud-Native · Distributed Systems",
    description:
      "Specialized in distributed architectures, integration systems and cloud-native platforms. Sectors: transportation, media, banking compliance, energy.",
    aiLine: "Currently moving towards AI agent development.",
    downloadCv: "Download Resume",
    present: "Present",
    nav: {
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
    },
    sections: {
      skills: "Skills",
      skillsSub: "Technologies and tools",
      experience: "Experience",
      experienceSub: "Professional background",
      education: "Education",
      educationSub: "Academic background",
    },
  },
};

/* ─── Skills ────────────────────────────────────────────────────────────── */

const skillGroups: { fr: string; en: string; items: string[] }[] = [
  {
    fr: "Langages",
    en: "Languages",
    items: ["Java 17/21/25", "TypeScript", "SQL", "Python"],
  },
  {
    fr: "Frameworks",
    en: "Frameworks",
    items: [
      "Spring Boot",
      "Spring Integration",
      "Spring Security",
      "Spring JDBC",
      "Hibernate",
      "Angular",
      "Spring AI",
      "Apache Camel",
    ],
  },
  {
    fr: "Infra / Cloud",
    en: "Infra / Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS EKS",
      "AWS SQS",
      "AWS EC2",
      "Azure AKS",
      "Azure ACR",
    ],
  },
  {
    fr: "CI/CD",
    en: "CI/CD",
    items: ["Git", "GitLab", "Jenkins", "ArgoCD", "Terraform"],
  },
  {
    fr: "Tests",
    en: "Testing",
    items: ["JUnit", "Mockito", "Cucumber", "TestContainers", "AssertJ"],
  },
  {
    fr: "SGBD",
    en: "Databases",
    items: ["PostgreSQL", "Oracle", "InfluxDB"],
  },
  {
    fr: "Pratiques",
    en: "Practices",
    items: [
      "Hexagonal Arch.",
      "Event Driven",
      "PubSub",
      "Design Patterns",
      "Multithreading",
    ],
  },
  {
    fr: "Outils",
    en: "Tools",
    items: ["Kafka", "IBM MQ", "Dapr", "Gradle", "Maven", "Postman"],
  },
];

/* ─── Experience ─────────────────────────────────────────────────────────── */

type Experience = {
  role: BiText;
  company: string;
  start: string;
  end?: string;
  description: BiText;
  bullets: BiText[];
  env: string[];
};

const experiences: Experience[] = [
  {
    role: { fr: "Ingénieur Logiciel", en: "Software Engineer" },
    company: "Agregio Solutions",
    start: "Sep. 2024",
    description: {
      fr: "Équipe FROST – Prévisions pour la production d'énergie renouvelable et la consommation. Premier développeur Java de l'équipe.",
      en: "FROST team – Forecasts for renewable energy production and consumption. First Java developer on the team.",
    },
    bullets: [
      {
        fr: "Migration PostgreSQL → InfluxDB V1 & V3 pour améliorer les performances de stockage et d'analyse",
        en: "PostgreSQL → InfluxDB V1 & V3 migration to improve storage and analytics performance",
      },
      {
        fr: "Service de consommation de messages asynchrone avec scalabilité horizontale sur Kubernetes",
        en: "Asynchronous message consumption service with horizontal scalability on Kubernetes",
      },
      {
        fr: "Conception de l'API de consultation des séries temporelles avec authentification M2M via Auth0",
        en: "Time-series query API design with M2M authentication via Auth0",
      },
      {
        fr: "Industrialisation des services via Kubernetes, ArgoCD et Terraform",
        en: "Service industrialization via Kubernetes, ArgoCD and Terraform",
      },
    ],
    env: [
      "Java 21",
      "Java 25",
      "Spring Boot 4",
      "InfluxDB",
      "PostgreSQL",
      "Python",
      "Terraform",
      "ArgoCD",
      "GitLab",
    ],
  },
  {
    role: { fr: "Développeur Backend", en: "Backend Developer" },
    company: "Fircosoft",
    start: "Feb. 2022",
    end: "Feb. 2024",
    description: {
      fr: "Firco Continuity – Solution de filtrage de transactions en temps réel, migration vers le Cloud.",
      en: "Firco Continuity – Real-time transaction filtering solution, cloud migration.",
    },
    bullets: [
      {
        fr: "Migration Spring Boot (2.7→3.1), Spring Integration (5→6), Java (11→17)",
        en: "Spring Boot (2.7→3.1), Spring Integration (5→6), Java (11→17) migration",
      },
      {
        fr: "Benchmarks JMH pour valider les seuils de performance",
        en: "JMH benchmarks to validate performance thresholds",
      },
      {
        fr: "Extensions Gradle pour le packaging automatisé en monorepo",
        en: "Gradle extensions for automated packaging in a monorepo",
      },
      {
        fr: "Packaging cloud avec Helm, déploiement sur Docker / Kubernetes",
        en: "Cloud packaging with Helm, deployment on Docker / Kubernetes",
      },
    ],
    env: [
      "Java 17",
      "Spring Boot 3.1",
      "Spring Integration 6",
      "Kafka",
      "IBM MQ",
      "Kubernetes",
      "Helm",
      "Docker",
      "Gradle",
    ],
  },
  {
    role: { fr: "Développeur Backend", en: "Backend Developer" },
    company: "CANAL+",
    start: "Sep. 2020",
    end: "Dec. 2021",
    description: {
      fr: "Gestion des souscriptions clients via technologies ESB.",
      en: "Customer subscription management via ESB technologies.",
    },
    bullets: [
      {
        fr: "Migration de flows MULE ESB vers Apache Camel",
        en: "MULE ESB flows migration to Apache Camel",
      },
      {
        fr: "Métrologie et collecte de métriques via AOP et Grafana",
        en: "Metrics collection via AOP and Grafana",
      },
      {
        fr: "Dockerisation de composants et maintenance des pipelines CI/CD AWS",
        en: "Component dockerization and CI/CD pipeline maintenance on AWS",
      },
    ],
    env: [
      "Java 8",
      "Spring Boot",
      "Apache Camel",
      "AWS EC2",
      "AWS Beanstalk",
      "Docker",
      "Jenkins",
    ],
  },
  {
    role: { fr: "Développeur", en: "Developer" },
    company: "Oui SNCF",
    start: "Oct. 2019",
    end: "Aug. 2020",
    description: {
      fr: "Sortie du legacy Oui SNCF – Application after-sale VSA & chatbot TGV INOUI.",
      en: "SNCF legacy migration – VSA after-sales app & TGV INOUI chatbot.",
    },
    bullets: [
      {
        fr: "Développement des interactions fonctionnelles pour le chatbot TGV INOUI (Tock)",
        en: "Functional interactions for the TGV INOUI chatbot (Tock)",
      },
      {
        fr: "Refactorisation vers une architecture hexagonale (ports et adapters)",
        en: "Refactoring towards hexagonal architecture (ports and adapters)",
      },
      {
        fr: "Maintenance CI/CD sur AWS (CodePipeline)",
        en: "CI/CD maintenance on AWS (CodePipeline)",
      },
    ],
    env: [
      "Java 11",
      "Kotlin",
      "Spring Boot",
      "Tock",
      "React",
      "AWS",
      "Docker",
      "GitLab",
    ],
  },
  {
    role: { fr: "Développeur Fullstack", en: "Fullstack Developer" },
    company: "Carrefour",
    start: "Feb. 2017",
    end: "Oct. 2019",
    description: {
      fr: "Maintenance et évolution d'applications internes, réalisation de POC.",
      en: "Maintenance and evolution of internal applications, POC development.",
    },
    bullets: [
      {
        fr: "Application de sondages : Angular 4, API REST, SSO, déploiement Linux",
        en: "Survey app: Angular 4, REST API, SSO, Linux deployment",
      },
      {
        fr: "Suivi des demandes de flux : Spring JDBC / MVC, déploiements JBOSS",
        en: "Flow request tracking: Spring JDBC / MVC, JBOSS deployments",
      },
      {
        fr: "Refonte de la gestion des prix inconnus : ExtJS → Angular 5",
        en: "Unknown pricing management rewrite: ExtJS → Angular 5",
      },
    ],
    env: [
      "Java 7/8",
      "Spring",
      "Angular 4/5",
      "ExtJS",
      "PostgreSQL",
      "JBOSS",
      "Docker",
    ],
  },
];

/* ─── Education ──────────────────────────────────────────────────────────── */

const education = [
  {
    degree: { fr: "Génie Informatique", en: "Computer Engineering" },
    school: "Polytech Lyon",
    period: "2013 – 2017",
  },
  {
    degree: { fr: "DUT Informatique", en: "DUT Computer Science" },
    school: "Université de Valenciennes",
    period: "2011 – 2013",
  },
];

/* ─── Hooks ──────────────────────────────────────────────────────────────── */

function useScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll(".anim");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
}

function useTyping(text: string, speed = 38) {
  const [displayed, setDisplayed] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDisplayed("");
    let i = 0;
    timerRef.current = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, speed);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed]);

  return displayed;
}

/* ─── Terminal decoration ────────────────────────────────────────────────── */

function Terminal() {
  const lines = [
    { delay: "0ms", content: <><span className="text-[#58a6ff]">$</span> <span className="text-[#c9d1d9]">whoami</span></> },
    { delay: "400ms", content: <span className="text-[#3fb950]">Sydney Adjou-Moumouni</span> },
    { delay: "900ms", content: <><span className="text-[#58a6ff]">$</span> <span className="text-[#c9d1d9]">cat skills.json</span></> },
    { delay: "1300ms", content: <span className="text-[#8b949e]">{"{"}</span> },
    { delay: "1500ms", content: <><span className="text-[#c9d1d9]">&nbsp;&nbsp;</span><span className="text-[#79c0ff]">&quot;stack&quot;</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">&quot;Java · Spring · K8s&quot;</span><span className="text-[#8b949e]">,</span></> },
    { delay: "1700ms", content: <><span className="text-[#c9d1d9]">&nbsp;&nbsp;</span><span className="text-[#79c0ff]">&quot;xp&quot;</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">&quot;~10 years&quot;</span><span className="text-[#8b949e]">,</span></> },
    { delay: "1900ms", content: <><span className="text-[#c9d1d9]">&nbsp;&nbsp;</span><span className="text-[#79c0ff]">&quot;focus&quot;</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">&quot;AI Agents&quot;</span></> },
    { delay: "2100ms", content: <span className="text-[#8b949e]">{"}"}</span> },
  ];

  return (
    <div className="bg-[#0d1117] rounded-xl border border-[#30363d] font-mono text-sm overflow-hidden shadow-2xl w-full max-w-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[#8b949e] text-xs">~/portfolio</span>
      </div>
      {/* Lines */}
      <div className="p-4 space-y-1.5 text-[#c9d1d9]">
        {lines.map((l, i) => (
          <p
            key={i}
            className="term-line opacity-0"
            style={{ animationDelay: l.delay, animationFillMode: "forwards" }}
          >
            {l.content}
          </p>
        ))}
        {/* Prompt + cursor */}
        <p
          className="term-line opacity-0 flex items-center gap-1"
          style={{ animationDelay: "2400ms", animationFillMode: "forwards" }}
        >
          <span className="text-[#58a6ff]">$</span>
          <span className="inline-block w-[7px] h-[14px] bg-[#58a6ff] blink" />
        </p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("fr");
  const typedRole = useTyping(ui[lang].role);
  useScrollAnimations();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const l = ui[lang];

  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono font-bold text-blue-900 text-sm tracking-tight">
            &lt;AM /&gt;
          </span>
          <div className="flex items-center gap-5 text-sm">
            <div className="hidden sm:flex items-center gap-5 font-medium text-slate-600">
              {(
                [
                  ["#profil", l.nav.profile],
                  ["#competences", l.nav.skills],
                  ["#experiences", l.nav.experience],
                  ["#formation", l.nav.education],
                ] as [string, string][]
              ).map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="relative hover:text-blue-700 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              ))}
              <a
                href="CV_ADJOU_MOUMOUNI_SYDNEY.pdf"
                download
                className="px-3 py-1.5 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-xs font-semibold font-mono"
              >
                {lang === "fr" ? "CV" : "Resume"}
              </a>
            </div>
            {/* Lang toggle */}
            <div className="flex items-center gap-0 text-xs border border-slate-200 rounded-md overflow-hidden font-mono">
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 transition-colors ${
                    lang === l
                      ? "bg-blue-700 text-white font-semibold"
                      : "hover:bg-slate-100 text-slate-500"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="profil" className="bg-white dot-grid relative overflow-hidden">
        {/* Fade overlay on grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            {/* Left */}
            <div className="flex-1">
              <p className="font-mono text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
                // {l.role}
              </p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 leading-tight mb-2">
                Sydney
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-1 flex items-baseline gap-1">
                Adjou-Moumouni
                <span className="inline-block w-0.5 h-8 bg-blue-700 ml-1 blink" />
              </h2>
              <p className="font-mono text-slate-500 text-sm mt-4 mb-3 min-h-[1.25rem]">
                {typedRole}
                <span className="blink">_</span>
              </p>
              <p className="text-slate-600 leading-relaxed max-w-md mb-2">
                {l.description}
              </p>
              <p className="font-mono text-blue-600 text-sm mb-8">
                <span className="text-slate-400">// </span>
                {l.aiLine}
              </p>
              <a
                href="CV_ADJOU_MOUMOUNI_SYDNEY.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 active:scale-95 transition-all text-sm shadow-lg shadow-blue-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {l.downloadCv}
              </a>
            </div>
            {/* Right – Terminal */}
            <div className="lg:flex-shrink-0 flex justify-center lg:justify-end">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="competences" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="anim mb-8">
            <p className="font-mono text-xs text-blue-500 mb-1">// 01</p>
            <h2 className="text-2xl font-bold text-blue-900 mb-1">
              {l.sections.skills}
            </h2>
            <p className="text-slate-500 text-sm">{l.sections.skillsSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group, gi) => (
              <div
                key={group.en}
                className="anim bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ "--delay": `${gi * 50}ms` } as React.CSSProperties}
              >
                <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                  {group[lang]}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[#0d1117] text-[#79c0ff] font-mono text-xs rounded border border-[#30363d] hover:bg-[#161b22] hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experiences" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="anim mb-8">
            <p className="font-mono text-xs text-blue-500 mb-1">// 02</p>
            <h2 className="text-2xl font-bold text-blue-900 mb-1">
              {l.sections.experience}
            </h2>
            <p className="text-slate-500 text-sm">
              {l.sections.experienceSub}
            </p>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, ei) => {
              const isCurrent = !exp.end;
              return (
                <div
                  key={`${exp.company}-${exp.start}`}
                  className={`anim border rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    isCurrent
                      ? "border-blue-200 bg-blue-50/30"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                  style={{
                    "--delay": `${ei * 60}ms`,
                    borderLeftWidth: "3px",
                    borderLeftColor: isCurrent ? "#2563eb" : "#cbd5e1",
                  } as React.CSSProperties}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      <span className="font-semibold text-slate-900">
                        {exp.role[lang]}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-blue-700 font-semibold">
                        {exp.company}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {l.present}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400 shrink-0 bg-slate-100 px-2 py-1 rounded">
                      {exp.start}
                      {exp.end ? ` → ${exp.end}` : ` → ${l.present}`}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-3 italic">
                    {exp.description[lang]}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-2.5 text-sm text-slate-600"
                      >
                        <span className="font-mono text-blue-500 mt-0.5 shrink-0">
                          ›
                        </span>
                        <span>{bullet[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {exp.env.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#0d1117] text-[#8b949e] font-mono text-xs rounded border border-[#21262d] hover:text-[#c9d1d9] transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="formation" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="anim mb-8">
            <p className="font-mono text-xs text-blue-500 mb-1">// 03</p>
            <h2 className="text-2xl font-bold text-blue-900 mb-1">
              {l.sections.education}
            </h2>
            <p className="text-slate-500 text-sm">{l.sections.educationSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, ei) => (
              <div
                key={edu.school}
                className="anim bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ "--delay": `${ei * 80}ms` } as React.CSSProperties}
              >
                <p className="font-mono text-xs text-slate-400 mb-2">
                  {edu.period}
                </p>
                <p className="font-bold text-slate-900 text-lg mb-1">
                  {edu.degree[lang]}
                </p>
                <p className="text-blue-700 text-sm font-medium">
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0d1117] text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center font-mono">
          <p className="text-[#58a6ff] text-lg font-bold mb-1">
            Sydney Adjou-Moumouni
          </p>
          <p className="text-[#8b949e] text-xs mb-6">
            <span className="text-[#3fb950]">●</span> Software Engineer
          </p>
          <div className="flex justify-center gap-6 text-sm text-[#8b949e]">
            {(
              [
                ["#profil", l.nav.profile],
                ["#competences", l.nav.skills],
                ["#experiences", l.nav.experience],
                ["#formation", l.nav.education],
              ] as [string, string][]
            ).map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-[#58a6ff] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
