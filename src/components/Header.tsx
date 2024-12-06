import React, { useState, useEffect } from 'react';
import { Dog, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
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
    <header className="bg-sand-50 border-b border-sand-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Dog className="h-8 w-8 text-forest-600" />
            <h1 className="text-2xl font-bold text-pine-800">Pack Command</h1>
          </Link>

          <button
            className="md:hidden p-2 rounded-md hover:bg-sand-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-pine-800" />
            ) : (
              <Menu className="h-6 w-6 text-pine-800" />
            )}
          </button>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  isActive(path)
                    ? 'text-forest-600 font-semibold'
                    : 'text-stone-700 hover:text-forest-500'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="mt-4 space-y-2 pb-2">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    isActive(path)
                      ? 'bg-forest-50 text-forest-600 font-semibold'
                      : 'text-stone-700 hover:bg-sand-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}