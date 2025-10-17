import {
  Footer,
  HeroSection,
  HowItWorksSection,
  ProblemSection,
  UniqueSection,
} from '@/components';
import { ReactLenis } from 'lenis/react';

export default function Home() {
  return (
    <main className="bg-[radial-gradient(60.65%_35.22%_at_59.2%_46.44%,#0B085D_0%,#030411_100%)] min-h-screen text-white overflow-x-hidden">
      <ReactLenis root />
      <HeroSection />
      <ProblemSection />
      <UniqueSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
