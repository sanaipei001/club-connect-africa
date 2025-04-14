import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
export default function Contact() {
  const faqs = [
    {
      question: 'How can my club join Club Connect Africa?',
      answer: 'Fill out the form below, and we’ll guide you through the application process.',
    },
    {
      question: 'What kind of mentorship do you offer?',
      answer: 'We match clubs with industry professionals for project guidance and career advice.',
    },
    {
      question: 'How can I sponsor an event?',
      answer: 'Contact us below to discuss partnership opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero
        title="Contact Us"
        subtitle="Let’s build Africa’s tech future together."
        cta="Join Us"
        backgroundImage="/images/directory.png"
      />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                  <p className="text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us - Club Connect Africa',
};