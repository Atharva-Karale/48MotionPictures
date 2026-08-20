"use client";

import FadeUp from "@/components/animations/fade-up";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <FadeUp>
      <div className={centered ? "mb-16 text-center" : "mb-16"}>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {eyebrow}
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  );
}