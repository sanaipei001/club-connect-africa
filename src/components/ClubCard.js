export default function ClubCard({ name, university, focus, link }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-secondary"><strong>University:</strong> {university}</p>
        <p className="text-secondary"><strong>Focus:</strong> {focus}</p>
        <a
          href={link}
          className="mt-4 inline-block text-accent hover:underline"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice for external links
        >
          Visit Club
        </a>
      </div>
    );
  }