import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleNavigation } from '../../utils/navigation';

const QuickLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Início', id: 'inicio' },
    { name: 'Quem Somos', id: 'quem-somos' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Serviços', id: 'nossos-servicos' },
    { name: 'Tele Entregas', id: 'tele-entregas' },
  ];

  return (
    <div>
      <h3 className="font-poppins text-lg font-semibold text-white mb-6">Links Rápidos</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleNavigation(link.id, navigate, location.pathname)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;