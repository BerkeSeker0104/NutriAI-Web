import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import HowItWorks from '../components/HowItWorks';
import Experts from '../components/Experts';
import CtaForm from '../components/CtaForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Trust />
      <HowItWorks />
      <Experts />
      <CtaForm />
    </>
  );
};

export default HomePage;