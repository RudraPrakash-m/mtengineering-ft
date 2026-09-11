import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedWork from '../components/FeaturedWork';
import Capabilities from '../components/Capabilities';
import Craftsmanship from '../components/Craftsmanship';
import Process from '../components/Process';
import Statistics from '../components/Statistics';
import HomeCTA from '../components/HomeCTA';
import SEO from '../../../components/shared/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Bhubaneswar Civil & Scale Model Contractors"
        description="MT Engineering & Construction is Bhubaneswar's premier engineering contractor specializing in physical architectural scale models, structural steel fabrication, and RCC slab contracting."
        canonicalUrl="https://mtengineering.netlify.app/"
      />
      <Hero />
      <IntroSection />
      <FeaturedWork />
      <Capabilities />
      <Craftsmanship />
      <Process />
      <Statistics />
      <HomeCTA />
    </>
  );
}
