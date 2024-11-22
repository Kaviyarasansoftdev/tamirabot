import React from 'react';
import { motion } from "framer-motion";
import { Star, Quote, Building2, User } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "Chief Technology Officer",
    rating: 5,
    text: "The engineering solutions provided exceeded our expectations. Their attention to detail and innovative approach helped us streamline our manufacturing process significantly.",
    avatar: "/assets/reviews/avatar1.jpg",
    companyLogo: "/assets/reviews/company1.png"
  },
  {
    id: 2,
    author: "Michael Chen",
    company: "InnovateX Manufacturing",
    role: "Operations Director",
    rating: 5,
    text: "Outstanding service and technical expertise. The team's commitment to quality and efficiency has made a remarkable impact on our production capabilities.",
    avatar: "/assets/reviews/avatar2.jpg",
    companyLogo: "/assets/reviews/company2.png"
  },
  {
    id: 3,
    author: "Emma Davis",
    company: "Global Industries Ltd",
    role: "Production Manager",
    rating: 5,
    text: "Their manufacturing solutions are top-notch. We've seen a 40% increase in efficiency since implementing their systems. Highly recommended for any industry needs.",
    avatar: "/assets/reviews/avatar3.jpg",
    companyLogo: "/assets/reviews/company3.png"
  }
];

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
    >
      {/* Quote Icon */}
      <div className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -top-4 -right-4">
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Review Text */}
      <p className="mb-6 leading-relaxed text-gray-600">
        "{review.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
              <img
                src={review.avatar}
                alt={review.author}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md -bottom-1 -right-1">
              <img
                src={review.companyLogo}
                alt={review.company}
                className="object-contain w-4 h-4"
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{review.author}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Building2 className="w-3 h-3" />
              <span>{review.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User className="w-3 h-3" />
              <span>{review.role}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">
            <span className="text-gray-900">Client </span>
            <span className="text-red-500">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 mb-16 md:grid-cols-4"
        >
          {[
            { label: "Happy Clients", value: "200+" },
            { label: "Success Rate", value: "98%" },
            { label: "Years Experience", value: "15+" },
            { label: "Active Projects", value: "50+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="mb-2 text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
            See More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;