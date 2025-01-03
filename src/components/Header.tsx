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
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="https://i.imgur.com/gfAW2Vk.png" 
              alt="AGROCAMPO Logo" 
              className="h-16 md:h-20 w-auto transform transition-transform group-hover:scale-105"
            />
            <h1 className="font-['Impact'] text-2xl md:text-4xl font-bold italic text-black h-20 flex items-center group-hover:text-primary transition-colors ml-4">
              AgroCampo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
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
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
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