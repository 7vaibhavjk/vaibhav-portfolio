"use client";

import Reveal from "./Reveal";

const experience = [
  {
    type: "Experience",
    period: "Oct 2021 — Feb 2024",
    role: "Systems Engineer · Data Engineering",
    company: "Tata Consultancy Services",
    location: "Bengaluru, India",
    description:
      "Built and supported cloud-based data engineering solutions, working across data pipelines, transformation, modelling, orchestration, and data quality.",
    technologies: [
      "Azure Databricks",
      "PySpark",
      "SQL",
      "Azure Data Factory",
      "ADLS Gen2",
    ],
  },
];

const education = [
  {
    type: "Education",
    period: "Feb 2024 — Dec 2025",
    role: "Master of Data Science",
    company: "Monash University",
    location: "Melbourne, Australia",
    description:
      "Advanced study across data science, machine learning, analytics, and modern data platforms, complemented by practical data engineering projects.",
    technologies: [
      "Statistical Data Modelling",
      "Natural Language Processing",
      "Data Wrangling",
      "Data Exploration and Visualization",
    ],
  },
];

export default function ExperienceEducation() {
  return (
    <div className="mt-14 space-y-16">
      {/* Experience */}
      <Reveal>
        <div>
          <div className="mb-7 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Experience
            </p>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>

          <div className="relative border-l border-zinc-800 pl-8 md:pl-10">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-black bg-zinc-500" />

            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="font-mono text-xs text-zinc-600">
                  {experience[0].period}
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  {experience[0].location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {experience[0].type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {experience[0].role}
                </h3>

                <p className="mt-2 text-base text-zinc-400">
                  {experience[0].company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                  {experience[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-500 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal delay={0.1}>
        <div>
          <div className="mb-7 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Education
            </p>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>

          <div className="relative border-l border-zinc-800 pl-8 md:pl-10">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-black bg-zinc-500" />

            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="font-mono text-xs text-zinc-600">
                  {education[0].period}
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  {education[0].location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {education[0].type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {education[0].role}
                </h3>

                <p className="mt-2 text-base text-zinc-400">
                  {education[0].company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                  {education[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {education[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-500 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}