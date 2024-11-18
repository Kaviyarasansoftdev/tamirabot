import React from "react";
import { PlugZap, Building, Store, Truck } from "lucide-react"; // Import Lucide icons

const servicesData = [
  {
    id: 1,
    category: "Charging",
    title: "Home Charging",
    description: "Home is the most popular location to charge an EV, with more than 64%...",
    icon: <PlugZap className="w-10 h-10 text-secondary" />, // Icon
  },
  {
    id: 2,
    category: "Corporate",
    title: "Residential Premises",
    description: "Connect your residential charging station to 100% renewable energy...",
    icon: <Building className="w-10 h-10 text-secondary" />, // Icon
  },
  {
    id: 3,
    category: "Eco Fuel",
    title: "Retail & Hospitality",
    description: "Retailers and hotels are expanding their EV infrastructure to meet...",
    icon: <Store className="w-10 h-10 text-secondary" />, // Icon
  },
  {
    id: 4,
    category: "Electric",
    title: "Commercial Area",
    description: "Future of electric commercial vehicles to be a clean alternative...",
    icon: <Truck className="w-10 h-10 text-secondary" />, // Icon
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-lg font-semibold text-green-600">What We Do</h2>
          <h3 className="text-3xl font-bold text-black">We are always open for your EV services</h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-lg shadow-lg"
            >
              <div>
                {/* Category */}
                <span className="text-sm font-medium text-green-600">{service.category}</span>
                {/* Title */}
                <h4 className="mt-2 mb-4 text-xl font-semibold text-black">{service.title}</h4>
                {/* Description */}
                <p className="text-gray-500">{service.description}</p>
              </div>
              {/* Icon */}
              <div className="flex items-center justify-between mt-4">
                {service.icon}
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 text-green-600 bg-green-100 rounded-full hover:bg-green-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
