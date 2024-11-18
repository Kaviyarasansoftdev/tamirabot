import React from "react";
import { BatteryCharging, Truck, PlugZap, Leaf } from "lucide-react"; 

const featuresData = [
  {
    id: 1,
    icon: <BatteryCharging className="w-10 h-10 text-secondary" />, 
    title: "High Quality Charger",
    description: "We offer smart, safe and innovative charging solutions",
  },
  {
    id: 2,
    icon: <Truck className="w-10 h-10 text-secondary" />, 
    title: "Quick Installations",
    description: "Improving accessibility to the future of mobility!",
  },
  {
    id: 3,
    icon: <PlugZap className="w-10 h-10 text-secondary" />, 
    title: "Accessories Store",
    description: "We're raising the bar of the EV charging ecosystem",
  },
  {
    id: 4,
    icon: <Leaf className="w-10 h-10 text-secondary" />,
    title: "Renewable Energy",
    description: "Developing next-generation electric vehicle chargers",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-tertiary text-tertiary">
      <div className="container px-6 py-12 mx-auto lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center px-6 py-8 text-center shadow-md bg-secondary rounded-xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
