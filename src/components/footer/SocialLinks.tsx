import React from 'react';
import { Instagram } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://wa.me/5589999731221"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-footer-hover/10 p-2 rounded-full hover:bg-footer-hover/20 transition-colors group"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
      </a>
      <a
        href="https://www.tiktok.com/@agrocampocorrente0"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-footer-hover/10 p-2 rounded-full hover:bg-footer-hover/20 transition-colors group"
        aria-label="TikTok"
      >
        <FaTiktok className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
      </a>
      <a
        href="https://www.instagram.com/agrocampocorrente/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-footer-hover/10 p-2 rounded-full hover:bg-footer-hover/20 transition-colors group"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
      </a>
    </div>
  );
};

export default SocialLinks;