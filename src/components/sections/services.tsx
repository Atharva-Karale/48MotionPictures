"use client";

import { Camera, Clapperboard, Film, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

const services = [
  {
    icon: Camera,
    title: "Commercial Shoots",
    description:
      "Premium advertisements and brand campaigns with cinematic storytelling.",
  },
  {
    icon: Film,
    title: "Corporate Films",
    description:
      "Professional company profiles, documentaries and business films.",
  },
  {
    icon: Clapperboard,
    title: "Content Production",
    description:
      "High-quality reels, YouTube videos and social media content.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description:
      "Creative concepts that connect your audience with your brand.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What We Do"
          centered
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <GlassCard>
                  <motion.div
                    whileHover={{
                      rotate: -6,
                      scale: 1.1,
                      y: -2,
                    }}
                    transition={{ duration: 0.25 }}
                    className="mb-6 inline-block"
                  >
                    <Icon className="h-10 w-10 text-red-500 transition-colors duration-300" />
                  </motion.div>

                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-white/70">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}