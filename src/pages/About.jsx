import React from 'react';
import SEO from '../components/SEO';
import AboutSections from '../components/AboutSections';
import TeamShowcase from '../components/TeamShowcase';
import StartProjectSection from '../components/StartProjectSection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Mavros Tech"
        description="A technology studio from Bengaluru, building at the intersection of intelligence, design and business."
      />
      <AboutSections>
        <TeamShowcase />
      </AboutSections>
      <StartProjectSection />
    </>
  );
}
