import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleNavigation } from '../utils/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Quem Somos', id: 'quem-somos' },
    { label: 'Nossos Serviços', id: 'nossos-servicos' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Tele Entregas', id: 'tele-entregas' },
    { label: 'Contato', id: 'contato' }
  ];

  const handleNavClick = (id: string) => {
    handleNavigation(id, navigate, location.pathname);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <div 
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="https://i.imgur.com/PUkCRKA.png" 
              alt="AGROCAMPO Logo" 
              className="h-20 md:h-24 w-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-300 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300 delay-150" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300 delay-150" />
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;