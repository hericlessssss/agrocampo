import React from 'react';
import { Star, User } from 'lucide-react';

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const TestimonialCard = ({ name, rating, comment, date }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
          <User className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-gray-800 group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-accent text-accent group-hover:fill-secondary group-hover:text-secondary transition-colors" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors">{comment}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default TestimonialCard;