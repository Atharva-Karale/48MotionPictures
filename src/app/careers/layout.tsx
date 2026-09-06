import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore creative opportunities with 48 Motion Pictures for 3D artists, animators, storytellers, and technical artists.",
  alternates: { canonical: "/careers" },
};

export default function CareersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}