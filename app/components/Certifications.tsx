"use client";

import { Icon } from "@iconify/react";

const certifications = [
  {
    number: "01",
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    type: "Certification",
    icon: "logos:microsoft-azure",
    link: "https://learn.microsoft.com/en-gb/users/vaibhavkulkarni-5363/credentials/96a8b63c9cc9e2d2",
  },
  {
    number: "02",
    title: "SAP Certified - SAP Generative AI Developer",
    issuer: "SAP",
    type: "Certification",
    icon: "logos:sap",
    link: "https://www.credly.com/badges/0f8bba62-73b2-4332-ae8d-9565c7477a62/linked_in_profile",
  },
  {
    number: "03",
    title: "SAP Certified - SAP Business Data Cloud",
    issuer: "SAP",
    type: "Certification",
    icon: "logos:sap",
    link: "https://www.credly.com/badges/0d5f5976-571e-4260-899d-23ac0777868e/linked_in_profile",
  },
  {
    number: "04",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    type: "Course",
    icon: "logos:coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/4LEYFQ5U7ECR",
  },
  {
    number: "05",
    title: "Machine Learning",
    issuer: "Stanford University · Coursera",
    type: "Course",
    icon: "logos:coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/DTZZR6D2SJ9L",
  },
];

export default function Certifications() {
  return (
    <div className="mt-12">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-[#202a3a] pb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#536276]">
          Credential Archive
        </span>

        <span className="font-mono text-[9px] text-[#536276]">
          05 CREDENTIALS
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <a
            key={cert.number}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-[#202a3a] bg-[#0d131f] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#536276] hover:bg-[#101925] hover:shadow-xl hover:shadow-black/20"
          >
            {/* Subtle hover sweep */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.025] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative">
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#536276]">
                    {cert.number}
                  </span>

                  <span className="h-px w-8 bg-[#2a374a]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#637187]">
                    {cert.type}
                  </span>
                </div>

                <span className="translate-x-1 font-mono text-xs text-[#536276] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#a9bed5] group-hover:opacity-100">
                  ↗
                </span>
              </div>

              {/* Logo + content */}
              <div className="mt-7 flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2a374a] bg-[#080c14] transition-all duration-300 group-hover:border-[#536276] group-hover:bg-[#111a28]">
                  <Icon
                    icon={cert.icon}
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-base font-medium leading-6 text-[#dfe6ef] transition-colors duration-300 group-hover:text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#637187] transition-colors duration-300 group-hover:text-[#8d9aae]">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between border-t border-[#202a3a] pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#536276]">
                  Verify credential
                </span>

                <span className="font-mono text-[9px] text-[#536276] transition-colors group-hover:text-[#8da7c4]">
                  OPEN ↗
                </span>
              </div>
            </div>

            {/* Bottom hover line */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8da7c4]/70 transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Learning note */}
      <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl border border-[#202a3a] bg-[#0b1019]/60 px-5 py-4 sm:flex-row sm:items-center md:px-6">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8da7c4]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#637187]">
            Continuous Learning
          </span>
        </div>

        <span className="font-mono text-[9px] text-[#536276]">
          learn → build → repeat_
        </span>
      </div>
    </div>
  );
}