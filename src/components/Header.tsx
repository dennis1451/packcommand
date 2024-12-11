import React, { useState, useEffect } from 'react';
import { Dog, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/training', label: 'Training' },
    { path: '/progress', label: 'Progress' },
    { path: '/profile', label: 'Profile' }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-primary-500" />
            <h1 className="text-xl font-bold text-navy-900">Pack Command</h1>
          </Link>

          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy-900" />
            ) : (
              <Menu className="h-6 w-6 text-navy-900" />
            )}
          </button>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(path)
                    ? 'text-primary-500'
                    : 'text-navy-600 hover:text-primary-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-3 space-y-1 border-t border-neutral-200 pt-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 px-4 rounded-lg ${
                  isActive(path)
                    ? 'bg-primary-50 text-primary-500 font-semibold'
                    : 'text-navy-600 hover:bg-neutral-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}