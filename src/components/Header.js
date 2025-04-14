export default function Header() {
    return (
      <header className="bg-primary text-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Club Connect Africa</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/what-we-do" className="hover:text-accent">What We Do</a></li>
            <li><a href="/get-involved" className="hover:text-accent">Get Involved</a></li>
            <li><a href="/directory" className="hover:text-accent">Directory</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            <li><a href="/blog" className="hover:text-accent">Blog</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  