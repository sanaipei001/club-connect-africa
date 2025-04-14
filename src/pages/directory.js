import ClubCard from '../components/ClubCard';
import Hero from '../components/Hero';
export default function Directory() {
  const clubs = [
    {
      name: 'TUM Code Club',
      university: 'Technical University of Mombasa',
      focus: 'Web Development',
      link: '#',
    },
    {
      name: 'AI Innovators',
      university: 'Technical University of Mombasa',
      focus: 'Artificial Intelligence',
      link: '#',
    },
    {
      name: 'CyberSec Squad',
      university: 'Technical University of Mombasa',
      focus: 'Cybersecurity',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="Tech Club Directory"
        subtitle="Discover and connect with student tech clubs."
        cta="Join Us"
        backgroundImage="/images/directory.png"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full max-w-md p-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Search clubs"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <ClubCard
              key={index}
              name={club.name}
              university={club.university}
              focus={club.focus}
              link={club.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Directory - Club Connect Africa',
};