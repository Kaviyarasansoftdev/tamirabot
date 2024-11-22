import React from 'react';
import { motion } from "framer-motion";
import { Award, Trophy ,Clock} from "lucide-react";

const achievements = [
  {
    id: 1,
    image: "/assets/certifications/recognition-certificate.jpg",
    title: "Certificate of Recognition",
    description: "Government recognized certification for excellence in engineering",
    icon: Clock
  },
  {
    id: 2,
    image: "/assets/certifications/startup-mania.jpg",
    title: "Startup Mania Winner",
    description: "Winner in 'Graduates & Startups' category at Erode Entrepreneurship Conclave",
    icon: Trophy
  },
  {
    id: 3,
    image: "/assets/certifications/award-ceremony.jpg",
    title: "Excellence Award",
    description: "Recognition for outstanding contribution in innovation",
    icon: Award
  }
];

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative overflow-hidden bg-white shadow-lg rounded-2xl group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="p-3 mb-4 bg-white rounded-full w-fit">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">
          {achievement.title}
        </h3>
        <p className="text-gray-200">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

const CertificateSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">
            <span className="text-gray-900">Certifications </span>
            <span className="text-red-500">and Achievements</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our commitment to excellence has been recognized through various certifications and awards
          </p>
        </motion.div>

        {/* Achievements Grid/Slider */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${dot}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;