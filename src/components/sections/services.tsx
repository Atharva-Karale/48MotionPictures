"use client";

import {
  Box,
  Clapperboard,
  Sparkles,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const services = [
  {
    icon: Sparkles,
    title: "3D Animation",
    description:
      "Bringing ideas to life through expressive 3D animation, movement, lighting, and cinematic visuals.",
  },
  {
    icon: UserRound,
    title: "Character Animation",
    description:
      "Creating memorable characters with personality, emotion, and movement that makes them feel alive.",
  },
  {
    icon: Clapperboard,
    title: "Animated Films & Series",
    description:
      "Developing animated stories from concept and visual direction to scenes, sequences, and final production.",
  },
  {
    icon: Box,
    title: "3D Art & World Building",
    description:
      "Designing characters, environments, props, and immersive worlds that give every story its own visual identity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Create"
          title="Animation Without Limits"
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
                className="group rounded-3xl"
              >
                <motion.div
                  whileHover={{
                    rotate: -6,
                    scale: 1.1,
                    y: -2,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mb-6 inline-block"
                >
                  <Icon className="h-10 w-10 text-red-500 transition-colors duration-300 group-hover:text-red-400" />
                </motion.div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-white/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}