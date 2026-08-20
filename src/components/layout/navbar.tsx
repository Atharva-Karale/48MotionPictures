"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Brand */}
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="48 Motion Pictures"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />

          <span className="hidden text-lg font-bold tracking-wide text-white sm:block">
            48 Motion Pictures
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link
            href="/#home"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/918698337312?text=Hi%2048%20Motion%20Pictures%2C%20I%27d%20like%20to%20start%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          Start Project
        </a>
      </nav>
    </header>
  );
}