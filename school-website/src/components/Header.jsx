import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" rel="ugc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <path d="M14 22v-4a2 2 0 1 0-4 0v4"></path>
            <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
            <path d="M18 5v17"></path>
            <path d="m4 6 8-4 8 4"></path>
            <path d="M6 5v17"></path>
            <circle cx="12" cy="9" r="2"></circle>
          </svg>
          <span className="sr-only">Springdale Public School</span>
        </Link>
        <h1 className="text-2xl text-primary font-bold">Springdale Public School</h1>
      </div>
      <div className="md:hidden">
        <button
          className="p-2 rounded-md text-primary focus:outline-none focus:ring focus:ring-primary"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <nav className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden'} md:block`}>
        <Link className="hover:underline text-primary py-2" to="/about" rel="ugc">
          About
        </Link>
        <Link className="hover:underline text-primary py-2" to="/academics" rel="ugc">
          Academics
        </Link>
        <Link className="hover:underline text-primary py-2" to="/admissions" rel="ugc">
          Admissions
        </Link>
        <Link className="hover:underline text-primary py-2" to="/contact" rel="ugc">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
