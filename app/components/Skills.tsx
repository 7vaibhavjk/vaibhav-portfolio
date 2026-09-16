"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const skillCategories = [
  {
    number: "01",
    name: "Languages",
    description: "Programming and query languages",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "R", icon: "logos:r-lang" },
      { name: "JavaScript", icon: "logos:javascript", level: "Basic" },
    ],
  },

  {
    number: "02",
    name: "Cloud Platforms",
    description: "Cloud platforms and services",
    skills: [
      { name: "Azure", icon: "logos:microsoft-azure" },
      { name: "AWS", icon: "logos:aws" },
      { name: "GCP", icon: "logos:google-cloud", level: "Basic" },
    ],
  },

  {
    number: "03",
    name: "Data Platforms & Warehouses",
    description: "Modern data platforms and cloud warehouses",
    skills: [
      { name: "Databricks", icon: "simple-icons:databricks" },
      { name: "Snowflake", icon: "logos:snowflake-icon" },
      { name: "Synapse Analytics", icon: "logos:azure" },
      { name: "Microsoft Fabric", icon: "logos:azure" },
      { name: "SAP BDC", icon: "logos:sap" },
    ],
  },

  {
    number: "04",
    name: "Transformation & Data Modelling",
    description: "Data transformation and modelling",
    skills: [
      { name: "PySpark", icon: "simple-icons:apachespark" },
      { name: "dbt", icon: "logos:dbt-icon" },
    ],
  },

  {
    number: "05",
    name: "Orchestration",
    description: "Pipeline orchestration and workflow automation",
    skills: [
      { name: "Azure Data Factory", icon: "logos:azure" },
      { name: "Apache Airflow", icon: "logos:airflow" },
      { name: "AWS Glue", icon: "logos:aws-glue", level: "Basic" },
    ],
  },

  {
    number: "06",
    name: "Storage & Data Lakes",
    description: "Cloud storage and data lake technologies",
    skills: [
      { name: "ADLS Gen2", icon: "logos:azure" },
      { name: "AWS S3", icon: "logos:aws-s3" },
    ],
  },

  {
    number: "07",
    name: "DevOps",
    description: "Development, version control and containerisation",
    skills: [
      { name: "Azure DevOps", icon: "logos:azure" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },

  {
    number: "08",
    name: "Visualization",
    description: "Business intelligence and data visualization",
    skills: [
      { name: "Power BI", icon: "logos:microsoft-power-bi" },
      { name: "Tableau", icon: "logos:tableau-icon" },
    ],
  },
];

function SkillIcon({ icon }: { icon: string }) {
  return (
    <Icon
      icon={icon}
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
      aria-hidden="true"
    />
  );
}

export default function Skills() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["Languages"]),
  );

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((previous) => {
      const next = new Set(previous);

      if (next.has(categoryName)) {
        next.delete(categoryName);
      } else {
        next.add(categoryName);
      }

      return next;
    });
  };

  return (
    <div className="mt-12">
      {/* Technical inventory header */}
      <div className="mb-6 flex items-center justify-between border-b border-[#202a3a] pb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
          Technical Inventory
        </span>

        <span className="font-mono text-[9px] text-[#536276]">
          {skillCategories.length.toString().padStart(2, "0")} CATEGORIES
        </span>
      </div>

      <div className="space-y-3">
        {skillCategories.map((category) => {
          const isOpen = openCategories.has(category.name);

          return (
            <div
              key={category.name}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#354257] bg-[#0d131f]"
                  : "border-[#202a3a] bg-[#0b1019]/70 hover:border-[#354257] hover:bg-[#0d131f]"
              }`}
            >
              {/* Category header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.name)}
                className="group flex w-full items-center gap-5 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-mono text-[9px] transition-all duration-300 ${
                    isOpen
                      ? "border-[#536276] bg-[#182231] text-[#a9bed5]"
                      : "border-[#2a374a] bg-[#080c14] text-[#536276] group-hover:border-[#536276] group-hover:text-[#8da7c4]"
                  }`}
                >
                  {category.number}
                </span>

                {/* Name + description */}
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-display text-base font-medium transition-colors duration-300 ${
                      isOpen
                        ? "text-[#e8edf5]"
                        : "text-[#b0bdcf] group-hover:text-[#e8edf5]"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#637187]">
                    {category.description}
                  </p>
                </div>

                {/* Skill count */}
                <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-[#536276] sm:block">
                  {category.skills.length.toString().padStart(2, "0")} skills
                </span>

                {/* Expand icon */}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2a374a] text-sm text-[#637187] transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-[#536276] text-[#a9bed5]"
                      : "group-hover:border-[#536276] group-hover:text-[#a9bed5]"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expanded content */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-[#202a3a] px-5 py-5 md:px-6">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group flex items-center gap-3 rounded-xl border border-[#202a3a] bg-[#080c14] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#536276] hover:bg-[#111a28]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#202a3a] bg-[#0d131f]">
                            <SkillIcon icon={skill.icon} />
                          </span>

                          <span className="min-w-0 flex-1 text-sm text-[#aebbd0] transition-colors duration-300 group-hover:text-[#e1e7ef]">
                            {skill.name}
                          </span>

                          {skill.level && (
                            <span className="rounded-full border border-[#2a374a] bg-[#111a28] px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-[#637187]">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small data nerd footer */}
      <div className="mt-8 flex flex-col justify-between gap-3 rounded-2xl border border-[#202a3a] bg-[#0b1019]/60 px-5 py-4 sm:flex-row sm:items-center md:px-6">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8da7c4]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#637187]">
            Stack Status
          </span>
        </div>

        <span className="font-mono text-[9px] text-[#536276]">
          collecting tools since day one_
        </span>
      </div>
    </div>
  );
}