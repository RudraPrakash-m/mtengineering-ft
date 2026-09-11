import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedWork from '../components/FeaturedWork';
import Capabilities from '../components/Capabilities';
import Craftsmanship from '../components/Craftsmanship';
import Process from '../components/Process';
import Statistics from '../components/Statistics';
import HomeCTA from '../components/HomeCTA';

export default function Home() {
  return (
    <>
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
