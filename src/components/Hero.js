import Link from 'next/link';

export default function Hero({ title, subtitle, cta, backgroundImage, imageSrc }) {
  return (
    <section
      className="text-white py-10 sm:py-20 text-center bg-cover bg-center bg-neutral-dark"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 py-8 sm:py-10 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 rounded-lg"
          />
        )}
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">{subtitle}</p>
        <Link
          href="/get-involved"
          className="inline-block bg-accent text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-amber-600 transition text-sm sm:text-base"
          aria-label={cta}
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}