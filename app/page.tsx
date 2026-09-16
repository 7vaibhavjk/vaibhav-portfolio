import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Reveal from "./components/Reveal";
import ExperienceEducation from "./components/ExperienceEducation";
import Navbar from "./components/Navbar";
import PipelineInteractive from "./components/PipelineInteractive";
import { Icon } from "@iconify/react";

export default function Home() {
  const dataFlow = [
    "Stock API",
    "Kafka",
    "MinIO",
    "Snowflake",
    "dbt",
    "Airflow",
    "Power BI",
  ];

  const architecture = [
    ["01", "Live Stock API", "Data ingestion"],
    ["02", "Apache Kafka", "Real-time streaming"],
    ["03", "MinIO", "Raw data lake"],
    ["04", "Snowflake + dbt", "Transformation"],
    ["05", "Airflow", "Orchestration"],
    ["06", "Power BI", "Analytics"],
  ];

  const projects = [
    {
      number: "02",
      title: "Modern ELT Pipeline",
      description:
        "End-to-end ELT pipeline using Snowflake, dbt, Apache Airflow, Astronomer, and Cosmos with layered data modelling and automated data quality tests.",
      technologies: ["Snowflake", "dbt", "Airflow", "Python", "SQL"],
      github:
        "https://github.com/7vaibhavjk/elt-pipeline-snowflake-dbt-airflow",
    },
    {
      number: "03",
      title: "SQL Data Warehouse",
      description:
        "Medallion-style data warehouse built with SQL Server, covering ETL, dimensional modelling, fact and dimension tables, and analytics-ready datasets.",
      technologies: ["SQL Server", "SQL", "ETL", "Data Modelling"],
      github: "https://github.com/7vaibhavjk/sql-data-warehouse",
    },
    {
      number: "04",
      title: "Protegrad",
      description:
        "AI-powered platform for detecting fraudulent job postings, combining a web application, machine learning, AI support, browser extension, and cloud deployment.",
      technologies: ["React", "Go", "Python", "Gemini API", "AWS"],
      github: "https://github.com/7vaibhavjk/job-scams-web",
      live: "https://www.protegrad.app",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip pt-[72px] text-[#e8edf5]">
      <Navbar />

      <div className="site-atmosphere" aria-hidden="true" />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="top"
        className="relative z-10 overflow-hidden border-b border-[#202a3a]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Hero copy */}
            <Reveal>
              <div>
                <div className="mt-8">
                  <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.045em] text-[#e8edf5] sm:text-6xl">
                    Hello, I&apos;m
                    <br />
                    <span className="text-[#8da7c4]">Vaibhav Kulkarni.</span>
                    <span className="ml-2 inline-block">👋</span>
                  </h2>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#637187]">
                    DATA ENGINEER · ANALYTICS
                  </p>
                </div>

                <h1 className="mt-7 font-display text-6xl font-medium leading-[0.92] tracking-[-0.045em] text-[#e8edf5] md:text-7xl lg:text-[5.5rem]">
                  I turn data into
                  <br />
                  <span className="text-[#718096]">
                    systems that move.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#8d9aae] md:text-lg">
                  I build cloud data pipelines and analytics systems that turn
                  raw information into reliable, decision-ready insights.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="group rounded-full bg-[#e8edf5] px-6 py-3 text-sm font-medium text-[#080c14] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                  >
                    View my work
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:7vaibhavjk@gmail.com"
                      aria-label="Email Vaibhav"
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#354257] bg-[#0d131f]/60 text-[#8d9aae] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637187] hover:bg-[#111a28] hover:text-white"
                    >
                      <Icon
                        icon="mdi:email-outline"
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vaibhav-kulkarni-5698ba1a7"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Vaibhav on LinkedIn"
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#354257] bg-[#0d131f]/60 text-[#8d9aae] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637187] hover:bg-[#111a28] hover:text-white"
                    >
                      <Icon
                        icon="simple-icons:linkedin"
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    <a
                      href="https://github.com/7vaibhavjk"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Vaibhav on GitHub"
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#354257] bg-[#0d131f]/60 text-[#8d9aae] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637187] hover:bg-[#111a28] hover:text-white"
                    >
                      <Icon
                        icon="simple-icons:github"
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                   </div>
                  </div>

                <div className="mt-7 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8da7c4]/40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a9bed5]" />
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#637187]">
                    Open to data engineering roles
                  </span>

                  <span className="h-3 w-px bg-[#354257]" />

                  <span className="font-mono text-[9px] text-[#536276]">
                    Melbourne · Australia
                  </span>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#637187]">
                  <span>Azure</span>
                  <span className="text-[#354257]">/</span>
                  <span>Databricks</span>
                  <span className="text-[#354257]">/</span>
                  <span>Snowflake</span>
                  <span className="text-[#354257]">/</span>
                  <span>PySpark</span>
                  <span className="text-[#354257]">/</span>
                  <span>SQL</span>
                </div>
              </div>
            </Reveal>

            {/* Hero visual */}
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[#202a3a] bg-[#0d131f] shadow-2xl shadow-black/30">
                  <div className="relative aspect-[720/982] overflow-hidden">
                    <img
                      src="/images/graduation.jpeg"
                      alt="Graduation day at Monash University"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>

                  <div className="border-t border-[#202a3a] px-6 py-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                          2025 · Monash University
                        </p>

                        <p className="mt-2 font-display text-sm text-[#b7c3d3]">
                          Master of Data Science
                        </p>
                      </div>

                      <span className="rounded-full border border-[#354257] bg-[#101925] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#637187]">
                        Graduated
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#202a3a] pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#536276]">
                    Based in
                  </span>

                  <span className="text-sm text-[#8d9aae]">
                    Melbourne, Australia
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#536276]">
            <span>Scroll to explore</span>
            <span className="h-px w-16 bg-[#202a3a]" />
            <span>00 / 06</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="section-surface scroll-mt-28 border-b border-[#202a3a]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
          <Reveal>
            <div className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                01 / About
              </p>
            </div>

            <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
              {/* About copy */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#637187]">
                  ABOUT
                </p>

                <h2 className="mt-5 font-display max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-[#e8edf5] md:text-5xl">
                  I like figuring out what happens between{" "}
                  <span className="text-[#718096]">“we have data”</span> and{" "}
                  <span className="text-[#718096]">“we can actually use it.”</span>
                </h2>

                <div className="mt-7 max-w-3xl space-y-4 text-base leading-7 text-[#8d9aae]">
                  <p>
                    I started my career at TCS working on software systems,
                    then moved deeper into the data behind those systems.
                    That led me to a Master of Data Science at Monash University
                    and a focus on building cloud data pipelines, platforms,
                    and analytics workflows.
                  </p>

                  <p>
                    Today I work primarily with Azure, Databricks, PySpark, and
                    SQL — building systems that turn messy information into
                    something people can actually rely on.
                  </p>

                  <p className="font-display text-lg text-[#cbd5e3]">
                    The goal is simple: build data systems that people can rely on.
                  </p>
                </div>

                {/* Data Nerd Moment */}
                <div className="mt-8 max-w-xl rounded-2xl border border-[#202a3a] bg-[#0d131f]/70 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#637187]">
                      Data Nerd Moment
                    </span>

                    <span className="font-mono text-[9px] text-[#53657d]">
                      200 OK
                    </span>
                  </div>

                  <p className="font-display text-lg text-[#cbd5e3]">
                    I take data seriously.
                    <br />
                    <span className="text-[#718096]">
                      Just not always myself.
                    </span>
                  </p>

                  <p className="mt-3 font-mono text-[10px] text-[#637187]">
                    // pipeline_status: surprisingly_stable
                  </p>
                </div>

                {/* GIF */}
                <div className="mt-4 flex max-w-xl items-center justify-between gap-6 rounded-2xl border border-[#202a3a] bg-[#0d131f]/70 p-5">
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#637187]">
                      RESEARCH MODE
                    </p>

                    <p className="mt-5 text-sm text-[#8d9aae]">
                      Sometimes the best solution starts with staring at the problem.
                    </p>
                  </div>

                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzZqcjQ1eTdnb3l5bWM2cWRpbzdwZHZjczEyMDczOWw3dGpwNGg2NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NEvPzZ8bd1V4Y/giphy.gif"
                    alt="Thinking"
                    loading="lazy"
                    className="h-28 w-28 shrink-0 rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* About side */}
              <div className="lg:pt-2">
                {/* Data System */}
                <div className="system-panel rounded-3xl p-6 shadow-2xl shadow-black/20 md:p-7">
                  <div className="relative z-10">
                    <PipelineInteractive />

                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#202a3a] pt-6">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                          Focus
                        </p>

                        <p className="mt-2 text-sm text-[#aebbd0]">
                          Data Engineering
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                          Stack
                        </p>

                        <p className="mt-2 text-sm text-[#aebbd0]">
                          Azure · Databricks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Based in */}
                <div className="mt-8 border-t border-[#202a3a] pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#536276]">
                    Based in
                  </p>

                  <p className="mt-3 text-sm text-[#b7c3d3]">
                    Melbourne, Australia
                  </p>
                </div>

                {/* Focus */}
                <div className="mt-8 border-t border-[#202a3a] pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#536276]">
                    Focus
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-[#8d9aae]">
                    <p>Data Engineering</p>
                    <p>Analytics &amp; BI</p>
                    <p>Cloud Data Platforms</p>
                  </div>
                </div>

                {/* Current Stack */}
                <div className="mt-8 border-t border-[#202a3a] pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#536276]">
                    Current Stack
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[#8d9aae]">
                    <span>Azure</span>
                    <span>Databricks</span>
                    <span>Snowflake</span>
                    <span>dbt</span>
                    <span>SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE & EDUCATION
      ========================================================= */}
      <section
        id="experience"
        className="section-surface scroll-mt-28 border-b border-[#202a3a]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                02 / Journey
              </p>

              <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.035em] text-[#e8edf5] md:text-5xl">
                Experience &amp; Education
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8d9aae]">
                The path from software systems to data engineering and modern
                data platforms.
              </p>
            </div>
          </Reveal>

          <ExperienceEducation />
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section
        id="projects"
        className="section-surface scroll-mt-28 border-b border-[#202a3a]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                  03 / Selected Work
                </p>

                <h2 className="font-display mt-5 max-w-2xl text-4xl font-medium tracking-[-0.035em] text-[#e8edf5] md:text-5xl">
                  Projects that show how I build.
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-[#7e8ca1]">
                End-to-end systems built around streaming, transformation,
                orchestration, warehousing, and analytics.
              </p>
            </div>
          </Reveal>

          {/* Featured Case Study */}
          <Reveal delay={0.1}>
            <article className="group relative mt-16 overflow-hidden rounded-3xl border border-[#2a374a] bg-[#0d131f] shadow-2xl shadow-black/30">
              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#202a3a] px-7 py-5 md:px-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-[#354257] bg-[#101925] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8da7c4]">
                    Featured Case Study
                  </span>

                  <span className="font-mono text-[10px] text-[#536276]">
                    01 / 04
                  </span>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#536276]">
                  Real-time data engineering
                </span>
              </div>

              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Case study copy */}
                <div className="p-7 md:p-10 lg:p-12">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#536276]">
                    The Project
                  </p>

                  <h3 className="font-display mt-5 text-3xl font-medium tracking-[-0.04em] text-[#e8edf5] md:text-4xl">
                    Real-Time Stock Market Pipeline
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-[#8d9aae]">
                    A real-time data platform that takes live stock market
                    events from an external API and turns them into
                    analytics-ready data for Power BI.
                  </p>

                  {/* Problem / Approach */}
                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                        Problem
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#7e8ca1]">
                        Live market data needs to be captured continuously,
                        stored reliably, transformed into useful datasets, and
                        made available for analysis.
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                        Approach
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#7e8ca1]">
                        Kafka handles streaming, MinIO provides raw object
                        storage, Snowflake handles analytical storage, dbt
                        transforms the data, and Airflow orchestrates the
                        workflow.
                      </p>
                    </div>
                  </div>

                  {/* Animated data flow */}
                  <div className="mt-10 rounded-2xl border border-[#202a3a] bg-[#080c14] p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                        Data Flow
                      </p>

                      <span className="font-mono text-[9px] text-[#637187]">
                        STREAMING
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {dataFlow.map((item, index) => (
                        <div
                          key={item}
                          className="group/flow flex items-center gap-2"
                        >
                          <div className="relative overflow-hidden rounded-lg border border-[#2a374a] bg-[#0d131f] px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#637187] hover:bg-[#111a28]">
                            <span className="relative z-10 text-xs text-[#aebbd0]">
                              {item}
                            </span>

                            <span className="absolute inset-y-0 -left-10 w-8 -skew-x-12 bg-white/[0.04] transition-transform duration-700 group-hover/flow:translate-x-[160px]" />
                          </div>

                          {index < dataFlow.length - 1 && (
                            <span className="font-mono text-xs text-[#354257]">
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology stack */}
                  <div className="mt-8">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
                      Built With
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Kafka",
                        "MinIO",
                        "Snowflake",
                        "dbt",
                        "Airflow",
                        "Power BI",
                        "Docker",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#111a28] px-3 py-1.5 text-xs text-[#718096] transition-colors duration-300 hover:text-[#c5d0de]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <a
                      href="https://github.com/7vaibhavjk/real-time-stock-pipeline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium text-[#d9e1ec]"
                    >
                      Explore the repository
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                {/* Architecture visual */}
                <div className="relative border-t border-[#202a3a] bg-[#080c14] p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <div className="flex h-full min-h-[560px] flex-col justify-center">
                    <div className="mb-7 flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#536276]">
                          System Architecture
                        </p>

                        <p className="mt-2 text-sm text-[#8d9aae]">
                          Event → storage → transformation → insight
                        </p>
                      </div>

                      <span className="font-mono text-[9px] text-[#536276]">
                        v1.0
                      </span>
                    </div>

                    <div className="relative">
                      {/* Architecture connector */}
                      <div className="absolute bottom-8 left-[22px] top-8 w-px bg-gradient-to-b from-[#354257] via-[#637187] to-[#354257]" />

                      <div className="space-y-3">
                        {architecture.map(
                          ([number, title, description], index) => (
                            <Reveal
                              key={number}
                              delay={0.12 + index * 0.06}
                            >
                              <div className="group relative flex items-center gap-5 rounded-2xl border border-[#202a3a] bg-[#0d131f] p-4 transition-all duration-300 hover:translate-x-1 hover:border-[#536276] hover:bg-[#111a28]">
                                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#354257] bg-[#080c14] transition-all duration-300 group-hover:border-[#708197]">
                                  <span className="font-mono text-[9px] text-[#8da7c4]">
                                    {number}
                                  </span>
                                </div>

                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-[#cbd5e3]">
                                    {title}
                                  </p>

                                  <p className="mt-1 text-xs text-[#637187]">
                                    {description}
                                  </p>
                                </div>

                                <span className="font-mono text-xs text-[#354257] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8da7c4]">
                                  →
                                </span>
                              </div>
                            </Reveal>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Result */}
                    <div className="mt-8 rounded-2xl border border-[#354257]/70 bg-[#101925] p-5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#a9bed5]" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#637187]">
                          Result
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#aebbd0]">
                        A continuously updated analytical pipeline with
                        structured datasets ready for dashboarding and
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Other Projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={0.08 * index}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#202a3a] bg-[#0d131f] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#4b5b71] hover:bg-[#101925]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#536276]">
                      {project.number}
                    </span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#536276] transition-colors hover:text-[#d9e1ec]"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      ↗
                    </a>
                  </div>

                  <h3 className="font-display mt-8 text-xl font-medium text-[#dfe6ef]">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#7e8ca1]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#111a28] px-2.5 py-1 text-[11px] text-[#718096]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-sm text-[#aebbd0] transition-colors hover:text-white"
                    >
                      GitHub
                      <span className="ml-1 transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#aebbd0] transition-colors hover:text-white"
                      >
                        Live site ↗
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section
        id="skills"
        className="section-surface scroll-mt-28 border-b border-[#202a3a]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
          <Reveal>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                04 / Toolbox
              </p>

              <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.035em] text-[#e8edf5] md:text-5xl">
                Skills &amp; Technologies
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8d9aae]">
                Technologies I&apos;ve worked with across data engineering,
                analytics, cloud platforms, and software development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Skills />
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATIONS
      ========================================================= */}
      <section
        id="certifications"
        className="section-surface scroll-mt-28 border-b border-[#202a3a]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
          <Reveal>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                05 / Credentials
              </p>

              <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.035em] text-[#e8edf5] md:text-5xl">
                Certifications &amp; Learning
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8d9aae]">
                Professional certifications and additional learning across
                cloud, data engineering, AI, and machine learning.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Certifications />
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-28 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
          <Reveal>
            <div className="max-w-4xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#637187]">
                06 / Let&apos;s Talk
              </p>

              <h2 className="font-display mt-5 text-5xl font-medium leading-[1] tracking-[-0.05em] text-[#e8edf5] md:text-7xl">
                Let&apos;s build something
                <br />
                <span className="text-[#708197]">useful.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#8d9aae]">
                I&apos;m open to data engineering, analytics, and data-focused
                opportunities in Australia.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:7vaibhavjk@gmail.com"
                  className="group rounded-full bg-[#e8edf5] px-6 py-3 text-sm font-medium text-[#080c14] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Email me
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vaibhav-kulkarni-5698ba1a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#354257] px-6 py-3 text-sm font-medium text-[#c3cedd] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#708197] hover:bg-[#0d131f]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/7vaibhavjk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#354257] px-6 py-3 text-sm font-medium text-[#c3cedd] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#708197] hover:bg-[#0d131f]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-[#202a3a]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.12em] text-[#536276] sm:flex-row">
          <span>© 2026 Vaibhav Kulkarni</span>
          <span>Next.js · TypeScript · Tailwind</span>
        </div>
      </footer>
    </main>
  );
}