import Hero from '../components/Hero';
export default function Blog() {
  const posts = [
    {
      title: 'How TUM Code Club Hosted Their First Hackathon',
      excerpt: 'A look at how one club brought students together for innovation.',
      category: 'Club Spotlights',
      link: '#',
    },
    {
      title: 'Top 5 Skills for IT Students in 2025',
      excerpt: 'Stay ahead with these in-demand tech skills.',
      category: 'Tech Skills',
      link: '#',
    },
    {
      title: 'Building a Tech Community',
      excerpt: 'Tips for growing your club’s impact.',
      category: 'Community',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="Blog"
        subtitle="Stories, tips, and updates from Club Connect Africa."
        cta="Join Us"
        backgroundImage="/images/blogg.jpg"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <span className="text-sm text-accent">{post.category}</span>
              <h3 className="text-xl font-bold text-primary mt-2">{post.title}</h3>
              <p className="text-secondary mt-2">{post.excerpt}</p>
              <a href={post.link} className="text-accent hover:underline mt-4 inline-block">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Blog - Club Connect Africa',
};