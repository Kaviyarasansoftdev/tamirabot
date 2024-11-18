import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Globe, Shield, ChevronLeft, Check, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    
    const products = {
      'charging-plug': {
        name: "EV Charging Plug Connector",
        description: "Advanced Type 2 CCS charging connector designed for rapid charging with enhanced safety features and smart connectivity.",
        image: "/assets/Products/CCS-2-Charging-Plug-Connector-1.png",
        specs: [
          { icon: <Zap />, label: "Charging Speed", value: "Up to 350kW" },
          { icon: <Shield />, label: "Safety Rating", value: "IP67 Protected" },
          { icon: <Battery />, label: "Compatibility", value: "Type 2 CCS" },
          { icon: <Globe />, label: "Certification", value: "IEC 62196" }
        ],
        features: [
          "Temperature monitoring system",
          "LED status indicators",
          "Enhanced grip design",
          "Auto-locking mechanism",
          "Weather-resistant construction",
          "Smart communication protocol"
        ]
      },
      'charging-socket': {
        name: "EV Charging Socket",
        description: "High-performance charging socket with intelligent power management and weatherproof design for reliable charging in all conditions.",
        image: "/assets/Products/CCS-2-Charging-Socket-3-768x512.png",
        specs: [
          { icon: <Zap />, label: "Power Output", value: "22kW - 350kW" },
          { icon: <Shield />, label: "Protection", value: "IP67 Rated" },
          { icon: <Battery />, label: "Protocol", value: "Smart Charging" },
          { icon: <Globe />, label: "Standard", value: "IEC Certified" }
        ],
        features: [
          "Integrated safety shutters",
          "Status indication system",
          "Protected terminals",
          "Smart grid ready",
          "Thermal management",
          "Dust and water resistant"
        ]
      }
    };
  
    const product = products[productId];
  
    if (!product) {
      navigate('/products');
      return null;
    }
  
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 py-12 mx-auto">
          {/* Back Navigation */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#EF4A50] mb-8"
            whileHover={{ x: -4 }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </motion.button>
  
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative overflow-hidden bg-white shadow-xl rounded-2xl"
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-[500px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
  
            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.description}
                </p>
              </div>
  
              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 space-x-3 bg-white shadow-md rounded-xl"
                  >
                    <div className="p-2 rounded-lg bg-[#EF4A50]/10">
                      <div className="w-5 h-5 text-[#EF4A50]">
                        {spec.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {spec.label}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {spec.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* Features */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                      whileHover={{ x: 4 }}
                    >
                      <Check className="w-5 h-5 text-[#EF4A50]" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
  
              {/* Action Buttons */}
              <div className="flex pt-6 space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-[#EF4A50] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#d43f44] transition-colors shadow-lg shadow-red-500/20"
                >
                  Request Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-200 rounded-xl font-medium hover:border-[#EF4A50] hover:text-[#EF4A50] transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Specs</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;