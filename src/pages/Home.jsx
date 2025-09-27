import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import AboutUsSection from '../components/AboutUsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientsSection from '../components/ClientsSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUsSection />
            <ServicesSection />
            <IndustriesSection />
            <ProjectsSection />
            <WhyChooseUs />
            <StatsSection />
            <ClientsSection />
            <CTASection />
        </div>
    )
}

export default Home