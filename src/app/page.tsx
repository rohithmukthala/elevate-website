import { Navbar, Hero, Services, Process, Work, FAQ, CTA, Footer } from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
      
      <Hero />
      <Services />
      <Process />
      <Work />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
