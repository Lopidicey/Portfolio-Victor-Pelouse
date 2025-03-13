import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/competences', label: 'Compétences' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-900' : 'bg-emerald-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">Victor Pelouse</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`${
                    location.pathname === link.href
                      ? 'bg-emerald-700 text-white'
                      : 'text-gray-300 hover:bg-emerald-800 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="text-gray-300 hover:text-white p-2 rounded-md"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white p-2 rounded-md mr-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? 'bg-emerald-700 text-white'
                    : 'text-gray-300 hover:bg-emerald-800 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}