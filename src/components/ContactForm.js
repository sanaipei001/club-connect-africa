export default function ContactForm() {
    return (
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full p-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your name"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full p-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your email"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 w-full p-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your message"
            required
            aria-required="true"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-white px-4 py-2 rounded-md hover:bg-amber-600 transition"
        >
          Send Message
        </button>
      </form>
    );
  }