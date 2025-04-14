import Link from 'next/link'; // Import Link from next/link

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Club Connect Africa</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent">
              About
            </Link>
          </li>
          <li>
            <Link href="/what-we-do" className="hover:text-accent">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="/get-involved" className="hover:text-accent">
              Get Involved
            </Link>
          </li>
          <li>
            <Link href="/directory" className="hover:text-accent">
              Directory
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}