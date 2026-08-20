import Image from "next/image";
import clients from "@/data/clients";

export default function ClientLogos() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.4em] text-white/50">
          Trusted By
        </p>

        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
          <div className="group flex w-max animate-marquee gap-16 whitespace-nowrap hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
  <div
  key={`${client.name}-${index}`}
  className="flex h-20 w-52 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
>
    <Image
      src={client.logo}
      alt={client.name}
      width={140}
      height={40}
      className="h-10 w-auto object-contain"
    />
  </div>
))}
          </div>
        </div>
      </div>
    </section>
  );
}