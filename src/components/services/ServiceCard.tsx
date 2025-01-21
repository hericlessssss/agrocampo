import React, { memo } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = memo(({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
        </div>
        <h3 className="font-poppins font-semibold text-gray-800 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
        {description}
      </p>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;