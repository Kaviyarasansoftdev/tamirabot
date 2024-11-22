import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Shield, FileText, Cpu, Award } from "lucide-react";

const pillars = [
  {
    id: 1,
    title: "Rigorously Tested",
    icon: ClipboardCheck,
    image: "/assets/products/charger1.png" // Update with your product images
  },
  {
    id: 2,
    title: "Quality Assurance",
    icon: Shield,
    image: "/assets/products/charger2.png"
  },
  {
    id: 3,
    title: "Patent Technology",
    icon: FileText,
    image: "/assets/products/charger3.png"
  },
  {
    id: 4,
    title: "Tech Powered Precision",
    icon: Cpu,
    image: "/assets/products/connector.png"
  },
  {
    id: 5,
    title: "International Safety Accreditation",
    icon: Award,
    image: "/assets/products/connector2.png"
  }
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-grid-white/10" />
        <div className="absolute w-full h-full opacity-40 bg-gradient-to-b from-transparent to-purple-900/80" />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Tamirabot's Pillars of Excellence in Electric Mobility
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Container */}
                  <div className="p-4 mb-6 transition-all duration-300 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-6 text-xl font-semibold text-center text-white">
                    {pillar.title}
                  </h3>

                  {/* Product Image Container */}
                  <div className="relative w-full aspect-square">
                    {/* Glowing Platform Effect */}
                    <div className="absolute bottom-0 w-3/4 h-4 -translate-x-1/2 rounded-full left-1/2 bg-blue-500/30 blur-xl" />

                    {/* Product Image */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-full h-full"
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
