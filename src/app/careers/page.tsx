"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GlassCard from "@/components/ui/glass-card";
import { SITE } from "@/constants/site";

const roles = [
  "3D Artists",
  "3D Animators",
  "Character Artists",
  "Environment Artists",
  "Storytellers",
  "Rigging & Technical Artists",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-20 text-white">
        {/* Hero */}
        <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden px-6">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-500">
              Careers
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Create worlds
              <br />
              <span className="text-white/60">
                that haven&apos;t been imagined yet.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
              We&apos;re looking for artists, animators, storytellers, and creative
              minds who want to bring characters and worlds to life.
            </p>
          </motion.div>
        </section>

        {/* Opportunities */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
                Opportunities
              </p>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Who we&apos;re looking for
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold text-white">
                      {role}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      We&apos;re interested in creative people who care about
                      craft, storytelling, and bringing ideas to life.
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <GlassCard className="text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
                Join Us
              </p>

              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Think you belong here?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Send us your portfolio, showreel, or a little about yourself. <br />
                We&apos;d love to see what you can create.
              </p>

              <a
                href={`mailto:${SITE.contact.email}?subject=Career%20Application%20-%2048%20Motion%20Pictures`}
                className="mt-10 inline-flex rounded-full bg-white px-8 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Send Your Portfolio
              </a>
            </GlassCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}