import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import SolutionSection from '@/components/solution-section'
import TechnologySection from '@/components/technology-section'
import ResultsSection from '@/components/results-section'
import ManagementSection from '@/components/management-section'
import ProcessSection from '@/components/process-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionSection />
      <TechnologySection />
      <ResultsSection />
      <ManagementSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}