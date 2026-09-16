"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "top",
      "about",
      "experience",
      "projects",
      "skills",
      "certifications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = "top";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] border-b border-[#202a3a]/80 bg-[#080c14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMobileMenu}
            className="font-display text-xl font-semibold tracking-tight text-[#e8edf5] transition-colors duration-300 hover:text-white"
          >
            VAIBHAV
            <span className="text-[#718096]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, href]) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={href}
                  href={href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#111a28] text-[#e8edf5]"
                      : "text-[#637187] hover:bg-[#0d131f] hover:text-[#b7c3d3]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#a9bed5] opacity-100"
                          : "bg-transparent opacity-0"
                      }`}
                    />

                    {label}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-[#8da7c4]/70" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#2a374a] bg-[#0d131f] transition-colors hover:border-[#536276] md:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-px w-full bg-[#a9bed5] transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-[7.5px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-px w-full bg-[#a9bed5] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-[#a9bed5] transition-all duration-300 ${
                  mobileOpen
                    ? "-translate-y-[7.5px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-[#202a3a]/80 bg-[#080c14]/98 transition-all duration-300 md:hidden ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="space-y-1">
              {navItems.map(([label, href], index) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 ${
                      isActive
                        ? "bg-[#111a28] text-[#e8edf5]"
                        : "text-[#718096] hover:bg-[#0d131f] hover:text-[#d5deea]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-[#536276]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-sm">
                        {label}
                      </span>
                    </span>

                    <span
                      className={`font-mono text-xs transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#a9bed5] opacity-100"
                          : "-translate-x-1 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 border-t border-[#202a3a] pt-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#536276]">
                Data Engineer · Melbourne
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}