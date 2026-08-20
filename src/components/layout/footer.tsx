import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/#home" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="48 Motion Pictures"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />

            <span className="text-2xl font-bold text-white">
              48 Motion Pictures
            </span>
          </Link>

          <p className="mt-4 text-sm leading-7 text-white/60">
            Premium video production for brands, businesses, and creators.
            We turn ideas into cinematic stories.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Company</h4>

          <div className="space-y-3 text-white/60">
            <Link
              href="/#home"
              className="block transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#services"
              className="block transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/#contact"
              className="block transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Services</h4>

          <div className="space-y-3 text-white/60">
            <p>Commercial Films</p>
            <p>Music Videos</p>
            <p>Social Media Content</p>
            <p>Photography</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>

          <div className="space-y-3 text-white/60">
            <p>Kolhapur, Maharashtra</p>

            <a
              href="mailto:hello@48motionpictures.com"
              className="block transition hover:text-white"
            >
              hello@48motionpictures.com
            </a>

            <a
              href="https://wa.me/918698337312"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              +91 86983 37312
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} 48 Motion Pictures. All rights reserved.
        {" | "}
        <a
          href="https://www.instagram.com/Atharva.Karale_14/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          Designed by Atharva Karale
        </a>
      </div>
    </footer>
  );
}