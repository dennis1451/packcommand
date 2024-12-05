import React, { useState } from 'react';
import { Dog, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/training', label: 'Training' },
    { path: '/progress', label: 'Progress' }
  ];

  return (
    <header className="bg-amber-50 border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Dog className="h-8 w-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">PawPerfect Trainer</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-amber-900" />
            ) : (
              <Menu className="h-6 w-6 text-amber-900" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  isActive(path)
                    ? 'text-amber-600 font-semibold'
                    : 'text-amber-900 hover:text-amber-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 px-4 rounded-md transition-colors ${
                  isActive(path)
                    ? 'bg-amber-100 text-amber-600 font-semibold'
                    : 'text-amber-900 hover:bg-amber-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
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