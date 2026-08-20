"use client";

import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "End-to-end video production",
  "Creative storytelling with cinematic visuals",
  "Fast turnaround without compromising quality",
  "Dedicated team for every project",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="We create videos that people remember."
          description="From strategy and scripting to production and post-production, we build content that strengthens brands and drives results."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <GlassCard key={reason}>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-red-500" />
                <span className="text-white">{reason}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}