import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="Get Involved"
        subtitle="Join our mission to empower tech clubs across Africa."
        backgroundImage="/images/get-involved.png"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">How You Can Participate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">For Clubs</h3>
            <p className="text-secondary mb-4">
              Join our network to access resources, mentorship, and events.
            </p>
            <a href="#form" className="text-accent hover:underline">Apply Now</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">For Students</h3>
            <p className="text-secondary mb-4">
              Participate in events, upskill, or lead your club.
            </p>
            <a href="#form" className="text-accent hover:underline">Get Started</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">For Mentors</h3>
            <p className="text-secondary mb-4">
              Guide the next generation of tech talent.
            </p>
            <a href="#form" className="text-accent hover:underline">Sign Up</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">For Partners</h3>
            <p className="text-secondary mb-4">
              Collaborate to support Africa’s tech ecosystem.
            </p>
            <a href="#form" className="text-accent hover:underline">Connect</a>
          </div>
        </div>
      </section>

      <section id="form" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Reach Out</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Get Involved - Club Connect Africa',
};