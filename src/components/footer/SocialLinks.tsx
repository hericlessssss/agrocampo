import React from 'react';
import { MessageCircle, Instagram, Video } from 'lucide-react';

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
        <MessageCircle className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
      </a>
      <a
        href="https://www.tiktok.com/@agrocampocorrente0"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-footer-hover/10 p-2 rounded-full hover:bg-footer-hover/20 transition-colors group"
        aria-label="TikTok"
      >
        <Video className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
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