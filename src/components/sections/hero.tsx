"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl"
      />

      <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-red-500/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-500">
          Animation Studio
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Where imagination
          <br />
          comes to life.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
          We turn ideas into characters, worlds, and stories that live beyond the screen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/918698337312?text=Hi%2048%20Motion%20Pictures%2C%20I%27d%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3 font-medium text-black shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
          >
            Start Your Project
          </a>

          <a
            href="https://wa.me/918698337312?text=Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-white/10"
          >
            Explore Our Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}