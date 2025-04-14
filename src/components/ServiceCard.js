export default function ServiceCard({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-secondary">{description}</p>
        <a href="/what-we-do" className="mt-4 inline-block text-accent hover:underline">
          Learn More
        </a>
      </div>
    );
  }