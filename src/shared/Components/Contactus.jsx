



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeSection, setActiveSection] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Give us a call',
      details: '+91 96296 44781',
      subtext: 'Mon-Fri 9am-6pm',
      gradient: 'from-rose-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'Send us an email',
      details: 'sales@tamirabot.com',
      subtext: '24/7 Support',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit our office',
      details: '4/321-5, Ramaiyan Kadu Main Rd',
      subtext: 'Seelanaickenpatti, Salem, Tamil Nadu 636201, India.',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-secondary">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 20}px`,
                height: `${Math.random() * 50 + 20}px`,
                borderRadius: '50%',
                background: '#EF4A50'
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-6 font-bold text-white text-7xl">
              Let's Connect
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/80">
            Got a question about our connectors? Share Your Deets and Dial Us Up!​.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="px-4 mx-auto -mt-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative overflow-hidden"
            >
              <div className="relative h-full p-8 transition-transform transform bg-white rounded-3xl hover:-translate-y-2">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 transition-opacity duration-300`}
                  animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">{info.title}</h3>
                  <p className="mb-2 text-lg text-gray-700">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.subtext}</p>
                  
                  <motion.button
                    className="flex items-center mt-6 font-semibold text-primary group"
                    whileHover={{ x: 5 }}
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="px-4 py-24 mx-auto max-w-7xl">
        <div className="overflow-hidden bg-white shadow-xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-lg"
              >
                <h2 className="mb-8 text-4xl font-bold text-gray-800">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-6 py-4 transition-all border-2 border-transparent bg-gray-50 rounded-xl focus:border-primary focus:outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    
                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-6 py-4 transition-all border-2 border-transparent bg-gray-50 rounded-xl focus:border-primary focus:outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="relative group">
                      <input
                        type="text"
                        placeholder="Mobilenumber"
                        className="w-full px-6 py-4 transition-all border-2 border-transparent bg-gray-50 rounded-xl focus:border-primary focus:outline-none"
                        value={formData.mobilenumber}
                        onChange={(e) => setFormData({ ...formData, mobilenumber: e.target.value })}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-6 py-4 transition-all border-2 border-transparent bg-gray-50 rounded-xl focus:border-primary focus:outline-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  <div className="relative group">
                    <textarea
                      placeholder="Your message"
                      rows="6"
                      className="w-full px-6 py-4 transition-all border-2 border-transparent resize-none bg-gray-50 rounded-xl focus:border-primary focus:outline-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center w-full py-4 space-x-2 text-lg font-semibold text-white bg-gradient-to-r from-primary to-rose-600 rounded-xl group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center p-4 mt-6 space-x-2 text-green-600 bg-green-50 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d500225.9109556475!2d78.140712!3d11.622286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef5db55bd685%3A0x806487d02377cd55!2sTamiraBot%20Advanced%20Engineering!5e0!3m2!1sen!2sus!4v1731925139683!5m2!1sen!2sus"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;