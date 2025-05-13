'use client';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ';
import Logos from '@/components/Logos';
import Benefits from '@/components/Benefits/Benefits';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';

import FlowingMenu from '@/components/FlowingMenu';
import { flowingmenuitems } from '@/data/flowingmenu';
import InfiniteMenu from '../components/InfiniteMenu';
import { testimonials } from '@/data/testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <div style={{ height: '450px', position: 'relative', paddingBottom: '50px' }}>
        <FlowingMenu items={flowingmenuitems} />
      </div>

      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section id="testimonials" title="Testimonials" description="What out clients say.">
          <div
            className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            style={{ height: '600px' }}
          >
            <InfiniteMenu items={testimonials} />
          </div>
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
