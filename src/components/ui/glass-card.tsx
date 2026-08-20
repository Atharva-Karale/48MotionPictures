"use client";

import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10 ${className}`}
    >
      {children}
    </div>
  );
}