import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div>
          <Link href="/#home" className="inline-flex items-center gap-3">
            <Image src="/logo.png" alt={SITE.name} width={64} height={64} className="h-16 w-16 object-contain" />
            <span className="text-2xl font-bold text-white">{SITE.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/60">A studio creating characters, worlds, and stories that bring imagination to life.</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Company</h4>
          <div className="space-y-3 text-white/60">
            <Link href="/#home" className="block transition hover:text-white">Home</Link>
            <Link href="/about" className="block transition hover:text-white">About</Link>
            <Link href="/#services" className="block transition hover:text-white">Services</Link>
            <Link href="/careers" className="block transition hover:text-white">Careers</Link>
            <Link href="/#contact" className="block transition hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <div className="space-y-3 text-white/60">
            <p className="leading-7">{SITE.contact.address.map((line) => <span key={line}>{line}<br /></span>)}</p>
            <a href={`mailto:${SITE.contact.email}`} className="block transition hover:text-white">{SITE.contact.email}</a>
            <a href={`https://wa.me/${SITE.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block transition hover:text-white">{SITE.contact.phone}</a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Connect</h4>
          <div className="flex gap-3">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white">Instagram</a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white">YouTube</a>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">Follow our work, characters, and worlds as they come to life.</p>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 px-6 pt-8 text-center text-sm leading-6 text-white/40">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" | "}Designed &amp; Developed by{" "}
        <a href="https://www.instagram.com/Atharva.Karale_14/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Atharva Karale</a>
      </div>
    </footer>
  );
}