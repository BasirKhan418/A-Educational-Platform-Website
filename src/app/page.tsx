/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Hero from "@/utils/Hero";
import About from "@/components/about";
export default function LandingPage() {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
    </div>
  );
}
