import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-48 md:h-56 bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <div className="text-sm text-gray-600">
            ⭐ {property.rating.toFixed(2)}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {property.category.slice(0, 2).join(" • ")}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${property.price}</div>
            {property.discount && (
              <div className="text-xs text-red-500">
                {property.discount}% off
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
