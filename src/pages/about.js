import Hero from '../components/Hero';
export default function About() {
    return (
      <div className="min-h-screen bg-neutral-light">
        <Hero
          title="About Us"
          subtitle="Empowering tech clubs to shape Africa’s future."
          cta="Join Us"
          backgroundImage="/images/about.jpg"
        />
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="prose prose-lg text-secondary">
            <p>
              Club Connect Africa began with a question: how can we bridge the gap between what IT students learn and what
              the tech industry needs? At the Technical University of Mombasa, we found that student tech clubs were the
              answer—but they lacked mentorship, funding, and structure. So, we created a platform to empower these clubs,
              helping them empower their students.
            </p>
          </div>
        </section>
  
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                <p className="text-secondary">
                  To empower campus tech clubs with the tools, mentorship, and networks they need to thrive.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                <p className="text-secondary">
                  A connected Africa where every tech club is a hub of innovation and opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Why Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary mb-2">Growing Tech Demand</h4>
              <p className="text-secondary">
                Africa’s tech ecosystem is booming, with a rising need for skilled talent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary mb-2">Youth Unemployment</h4>
              <p className="text-secondary">
                Skill-based solutions are critical to unlocking opportunities for students.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary mb-2">Overlooked Clubs</h4>
              <p className="text-secondary">
                Tech clubs are underfunded and disconnected, missing their potential.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export const metadata = {
    title: 'About Us - Club Connect Africa',
  };