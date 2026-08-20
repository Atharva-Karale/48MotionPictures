import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          centered
        />

        <GlassCard className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-8 text-white/60">
            Client testimonials coming soon.
          </p>

          <p className="mt-4 text-sm text-white/40">
            We believe in letting the work speak for itself.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}