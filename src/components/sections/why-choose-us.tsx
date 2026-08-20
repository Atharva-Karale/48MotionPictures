"use client";

import FadeUp from "@/components/animations/fade-up";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Character-driven storytelling",
  "3D animation and visual development",
  "Creative world-building and environments",
  "From imagination to final frame",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp delay={0.2}>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
              Why 48 Motion Pictures
            </p>

            <h2 className="text-4xl font-bold text-white">
              We bring imagination to life.
            </h2>

            <p className="mt-6 text-lg text-white/60">
              From characters and environments to complete animated worlds, we
              combine creativity, storytelling, and 3D artistry to turn ideas
              into experiences people remember.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-red-500" />

                <span className="text-white">{reason}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}