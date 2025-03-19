import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import WhyKenya from '../components/sections/WhyKenya';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <WhyKenya />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;