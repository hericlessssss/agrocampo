import { NavigateFunction } from 'react-router-dom';

export const scrollToSection = (sectionId: string) => {
  if (sectionId === 'inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleNavigation = (
  sectionId: string, 
  navigate: NavigateFunction, 
  currentPath: string
) => {
  if (currentPath === '/') {
    scrollToSection(sectionId);
  } else {
    navigate('/', { 
      state: { scrollTo: sectionId },
      replace: true
    });
  }
};