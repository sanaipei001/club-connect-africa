import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Club Connect Africa</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-primary md:bg-transparent p-4 md:p-0 z-40 flex flex-col md:flex-row items-center`}
        >
          <li className="my-2 md:my-0">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/about" className="hover:text-accent">
              About
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/what-we-do" className="hover:text-accent">
              What We Do
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/get-involved" className="hover:text-accent">
              Get Involved
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/directory" className="hover:text-accent">
              Directory
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}