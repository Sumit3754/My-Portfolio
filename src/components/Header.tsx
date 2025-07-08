import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import './Header.css';
const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('scroll', () => setIsScrolled(window.scrollY > 50));

    return () => {
      window.removeEventListener('scroll', () => setIsScrolled(window.scrollY > 50));
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="header-logo text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-down">
            DevPortfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="header-nav-item text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium animate-fade-in-down"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <a href="https://github.com/Sumit3754" className="header-social-link text-gray-600 hover:text-blue-600 transition-colors animate-fade-in-right">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="header-social-link text-gray-600 hover:text-blue-600 transition-colors animate-fade-in-right">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sumitchauhan373754@gmail.com" className="header-social-link text-gray-600 hover:text-blue-600 transition-colors animate-fade-in-right">
                <Mail size={20} />
              </a>
              <button 
                onClick={toggleTheme}
                className="header-theme-toggle text-gray-600 hover:text-blue-600 transition-colors animate-fade-in-right"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => {
                  navigate(item.href);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <a href="mailto:sumitchauhan373754@gmail.com" className="header-social-link text-gray-600 hover:text-blue-600">
                <Mail size={20} />
              </a>
              <button 
                onClick={toggleTheme}
                className="header-theme-toggle text-gray-600 hover:text-blue-600 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;