import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <div>
            <Hero />
            <StatsSection />
            <ServicesSection />
            <IndustriesSection />
            <ProjectsSection />
            <CTASection />
        </div>
    )
}

export default Home