"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Raw Data",
    description: "Ingest",
    detail: "APIs · files · databases",
  },
  {
    number: "02",
    title: "Transform",
    description: "Process",
    detail: "PySpark · SQL · business rules",
  },
  {
    number: "03",
    title: "Model",
    description: "Structure",
    detail: "Delta · warehouse · marts",
  },
  {
    number: "04",
    title: "Insight",
    description: "Deliver",
    detail: "BI · analytics · decisions",
  },
];

export default function PipelineInteractive() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#637187]">
            Data System
          </p>
          <p className="mt-2 text-sm text-[#8d9aae]">
            From raw information to usable insight.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[#637187]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a9bed5]" />
          SYSTEM ONLINE
        </div>
      </div>

      <div className="pipeline relative">
        <div className="pipeline-line" />

        <motion.div
          className="pipeline-signal"
          animate={{
            y: active * 82,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="space-y-3">
          {stages.map((stage, index) => {
            const isActive = active === index;

            return (
              <motion.button
                key={stage.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`group relative flex w-full items-center gap-5 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#53657d]/60 bg-[#111a28]"
                    : "border-transparent bg-transparent hover:border-[#202a3a] hover:bg-[#0d131f]"
                }`}
              >
                <div
                  className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] transition-all duration-300 ${
                    isActive
                      ? "border-[#8da7c4]/60 bg-[#182435] text-[#d9e3ef]"
                      : "border-[#354257] bg-[#0d131f] text-[#637187]"
                  }`}
                >
                  {stage.number}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={`font-display text-base font-medium transition-colors duration-300 ${
                        isActive ? "text-[#e8edf5]" : "text-[#8d9aae]"
                      }`}
                    >
                      {stage.title}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#637187]">
                      {stage.description}
                    </span>
                  </div>

                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.55,
                      x: isActive ? 0 : -3,
                    }}
                    className="mt-1 text-xs text-[#637187]"
                  >
                    {stage.detail}
                  </motion.p>
                </div>

                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -5,
                  }}
                  className="font-mono text-xs text-[#a9bed5]"
                >
                  →
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-[#202a3a] pt-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#637187]">
          Active layer
        </span>

        <motion.span
          key={stages[active].title}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[10px] text-[#a9bed5]"
        >
          {stages[active].title.toUpperCase()}
        </motion.span>
      </div>
    </div>
  );
}