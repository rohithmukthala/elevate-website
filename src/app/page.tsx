import { Navbar, Hero, Problem, Services, Process, Work, Guarantee, FAQ, CTA, Footer } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
      
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Work />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
