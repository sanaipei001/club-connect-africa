import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'Club Incubation',
      description: 'Build sustainable clubs with structure, goals, and leadership training.',
    },
    {
      title: 'Tech Empowerment Tracks',
      description: 'Upskill in web development, AI, cybersecurity, and more.',
    },
    {
      title: 'Industry Mentorship',
      description: 'Connect clubs with professionals for guidance and projects.',
    },
    {
      title: 'Resources & Funding',
      description: 'Support clubs in securing grants, sponsors, and partnerships.',
    },
    {
      title: 'Tech Community Events',
      description: 'Host hackathons, tech fairs, and networking sessions.',
    },
    {
      title: 'Visibility & Branding',
      description: 'Boost club presence with social media and a digital directory.',
    },
    {
      title: 'Club-to-Company Pipeline',
      description: 'Link members to internships and job opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="Empowering Africa’s Tech Future"
        subtitle="We strengthen student tech clubs to bridge classroom learning with industry success."
        cta="Join Us"
        backgroundImage="/images/hero.jpg"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">What We Do</h2>
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
  title: 'Club Connect Africa',
  description: 'Empowering student tech clubs to bridge the gap between classroom and industry.',
};