import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about 48 Motion Pictures, a Kolhapur animation studio creating characters, worlds, and stories through 3D artistry.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}