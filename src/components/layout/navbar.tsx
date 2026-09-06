"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/constants/site";

const navigation = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/#home" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image src="/logo.png" alt="48 Motion Pictures" width={52} height={52} className="h-12 w-12 object-contain" priority />
          <span className="hidden text-lg font-bold tracking-wide text-white sm:block">48 Motion Pictures</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <a href={whatsappLink("Hi 48 Motion Pictures, I'd like to start a project.")} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white hover:text-black sm:px-5">Start Project</a>
          <button type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-black md:hidden">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2">
              {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-black/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white">{item.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}