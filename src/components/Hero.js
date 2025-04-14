export default function Hero({ title, subtitle, cta, backgroundImage }) {
    return (
      <section
        className="text-white py-20 text-center bg-cover bg-center bg-neutral-dark" // Added fallback background
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 py-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          <a
            href="/get-involved"
            className="inline-block bg-accent text-white px-6 py-3 rounded-md hover:bg-amber-600 transition"
            aria-label={cta}
          >
            {cta}
          </a>
        </div>
      </section>
    );
  }