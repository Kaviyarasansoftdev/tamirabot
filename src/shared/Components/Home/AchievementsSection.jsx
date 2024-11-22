import React from 'react';
import { motion } from "framer-motion";
import { Award, Star, Shield } from "lucide-react";

const achievements = {
  title: "Triumphs and Validations",
  description: "Recognized and validated by India's premier startup ecosystem enablers",
  badges: [
    {
      id: 1,
      title: "Innovative Ideas Champion",
      icon: Star,
      logo: "/assets/startupindia-logo.png", // You'll need to add these images to your project
      alt: "Startup India Logo"
    },
    {
      id: 2,
      title: "Acknowledgement of Excellence",
      icon: Award,
      logo: "/assets/msme-logo.png",
      alt: "MSME Logo"
    },
    {
      id: 3,
      title: "Recognized Startup Credential",
      icon: Shield,
      logo: "/assets/dst-nidhi-logo.png",
      alt: "DST NIDHI Logo"
    }
  ]
};

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{achievements.title}</h2>
          <p className="text-lg text-gray-600">{achievements.description}</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {achievements.badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-6 transition-all duration-300 bg-white rounded-xl hover:shadow-xl group"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="p-3 mb-4 text-orange-500 rounded-full bg-orange-50">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-semibold text-center text-gray-900">
                    {badge.title}
                  </h3>

                  {/* Logo */}
                  <div className="flex items-center justify-center w-full p-4 mt-4 transition-transform duration-300 rounded-lg bg-gray-50 h-28 group-hover:scale-105">
                    <img
                      src={badge.logo}
                      alt={badge.alt}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;