import React from 'react';
import { MessageCircle, Instagram, Video } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://wa.me/5589999731221"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-primary" />
      </a>
      <a
        href="https://www.tiktok.com/@agrocampocorrente0"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
        aria-label="TikTok"
      >
        <Video className="w-5 h-5 text-primary" />
      </a>
      <a
        href="https://www.instagram.com/agrocampocorrente/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 text-primary" />
      </a>
    </div>
  );
};

export default SocialLinks;