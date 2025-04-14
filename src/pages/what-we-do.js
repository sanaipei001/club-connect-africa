import ServiceCard from '../components/ServiceCard';
import Hero from '../components/Hero';
export default function WhatWeDo() {
  const services = [
    {
      title: 'Club Incubation',
      description: 'We help clubs form structure, set goals, and train leaders for sustainable impact.',
    },
    {
      title: 'Tech Empowerment Tracks',
      description: 'Upskilling programs in web development, data science, AI, and cybersecurity.',
    },
    {
      title: 'Industry Mentorship',
      description: 'Matching clubs with tech professionals for guidance and real-world projects.',
    },
    {
      title: 'Resources & Funding Access',
      description: 'Support for grant writing, sponsorships, and partnerships.',
    },
    {
      title: 'Tech Community Events',
      description: 'Hackathons, tech fairs, and inter-campus challenges to build connections.',
    },
    {
      title: 'Visibility & Branding',
      description: 'Boosting club presence through social media and a digital directory.',
    },
    {
      title: 'Club-to-Company Pipeline',
      description: 'Connecting standout members to internships and job opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="What We Do"
        subtitle="Empowering tech clubs with the tools to succeed."
        cta="Join Us"
        backgroundImage="/images/what-we-do.png"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'What We Do - Club Connect Africa',
};