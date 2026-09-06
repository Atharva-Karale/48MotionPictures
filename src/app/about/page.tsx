"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

const founders = [
  {
    name: "Srujann Burse",
    role: "Founder",
    image: "/founders/Srujann.png",
    position: "50% 50%",
  },
  {
    name: "Atharva Karale",
    role: "Executive Producer",
    image: "/founders/Atharva.png",
    position: "50% 50%",
  },
  {
    name: "Aditya Waghmare",
    role: "3D Artist",
    image: "/founders/Aditya.png",
    position: "50% 5%",
  },
  {
    name: "Prathamesh Jagtap",
    role: "Visual Media Executive",
    image: "/founders/Prathamesh.png",
    position: "50% 50%",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-20 text-white">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-500">
              Animation Studio
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Where imagination
              <br />
              <span className="text-white/60">comes to life.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
              48 Motion Pictures is an animation studio creating characters,
              worlds, and stories through 3D artistry and visual storytelling.
            </p>
          </motion.div>
        </section>

        {/* Who We Are */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Who We Are"
              title="Built for imagination."
              description="We believe animation is more than movement. It is a way to create worlds, give characters a personality, and tell stories that can exist beyond the limits of reality."
              centered
            />

            <div className="grid items-stretch gap-6 md:grid-cols-3">
              <GlassCard className="h-full">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Characters
                </h3>

                <p className="leading-7 text-white/60">
                  From concept to movement, we create characters with
                  personality, emotion, and a visual identity of their own.
                </p>
              </GlassCard>

              <GlassCard className="h-full">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Worlds
                </h3>

                <p className="leading-7 text-white/60">
                  We build immersive environments, props, and visual worlds
                  that give every story a place to exist.
                </p>
              </GlassCard>

              <GlassCard className="h-full">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Stories
                </h3>

                <p className="leading-7 text-white/60">
                  We bring characters and worlds together through storytelling
                  that is designed to entertain, connect, and be remembered.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Founding Members */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The Team"
              title="Founding Members"
              description="The people behind 48 Motion Pictures."
              centered
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      style={{
                        objectPosition: founder.position,
                      }}
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl font-semibold text-white">
                      {founder.name}
                    </h3>

                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-red-500">
                      {founder.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <GlassCard className="text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
                Let&apos;s Create
              </p>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Have a world waiting to be created?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                Let&apos;s turn your idea, character, or story into something real.
              </p>

              <a
                href="https://wa.me/918698337312?text=Start%20a%20Project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Start Your Project
              </a>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}