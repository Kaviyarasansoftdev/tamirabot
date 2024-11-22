
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Globe, Shield, ChevronRight, PlayCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeSpec, setActiveSpec] = useState(null);

  
  const products = {
    'charging-plug': {
      name: "CCS 2 Charging Plug Connector",
      description: "Advanced Type 2 CCS charging connector designed for rapid charging with enhanced safety features and smart connectivity.",
      image: "/assets/Products/CCS-2-Charging-Plug-Connector-1.png",
      specs: [
        { icon: <Zap />, label: "Charging Speed", value: "Up to 350kW" },
        { icon: <Shield />, label: "Safety Rating", value: "IP67 Protected" },
        { icon: <Battery />, label: "Compatibility", value: "Type 2 CCS" },
        { icon: <Globe />, label: "Certification", value: "IEC 62196" }
      ],
      keyFeatures: {
        connectivity: [
          {
            modelNumber: "TBPC – 1KD – 200AC2",
            ratedCurrent: "200A (1000V DC)",
            cableSpecs: "2 X 70mm² + 1 X 25mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – 1KD – 150AC2",
            ratedCurrent: "150A (1000V DC)",
            cableSpecs: "2 X 50mm² + 1 X 25mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – 1KD – 125AC2",
            ratedCurrent: "125A (1000V DC)",
            cableSpecs: "2 X 35mm² + 1 X 25mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – 1KD – 80AC2",
            ratedCurrent: "80A (1000V DC)",
            cableSpecs: "2 X 16mm² + 1 X 16mm² + 6 X 0.75mm²"
          }
        ],
        specifications: [
          { label: "Rated Current", value: "80A / 125A / 150A / 200A" },
          { label: "Rated Voltage", value: "1000V DC" },
          { label: "Standards", value: "IEC 62196 - 2" },
          { label: "Casing Material", value: "Thermoplastic" },
          { label: "Terminal Material", value: "Copper Alloy, Silver" },
          { label: "Life Span", value: ">12500 Cycles" }
        ]
      },
      topSection: {
        title: "CCS 2 Charging Plug Connector",
        subtitle: "Supercharge Your Adventures For Rapid DC Power",
        tagline: "Feel the rush, not the wait: CCS 2 gets you back on the road faster",
        features: [
          { label: "Ergonomic Design", value: "" },
          { label: "Rated Current", value: "80A/125A/150A/200A" },
          { label: "Operating Voltage", value: "250A/480V AC" },
          { label: "Terminal Temperature Rise", value: "< 38°C" }
        ]
      }
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
      keyFeatures: {
        connectivity: [
          {
            modelNumber: "TBCS – 200A32C2",
            ratedCurrent: "200A (1000V DC)\n32A (250V AC)",
            cableSpecs: "2 X 70mm² + 1 X 25mm² + 4 X 6mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBCS – 150A32C2",
            ratedCurrent: "150A (1000V DC)\n32A (250V AC)",
            cableSpecs: "2 X 50mm² + 1 X 25mm² + 4 X 6mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBCS – 125A32C2",
            ratedCurrent: "125A (1000V DC)\n32A (250V AC)",
            cableSpecs: "2 X 35mm² + 1 X 25mm² + 4 X 6mm² + 6 X 0.75mm²"
          },
          {
            modelNumber: "TBCS – 80A32C2",
            ratedCurrent: "80A (1000V DC)\n32A (250V AC)",
            cableSpecs: "2 X 16mm² + 1 X 25mm² + 4 X 6mm² + 6 X 0.75mm²"
          }
        ],
        specifications: [
          { label: "Rated Current", value: "80A / 125A / 150A / 200A\nAC 16A / 32A" },
          { label: "Rated Voltage", value: "1000V DC\n250V / 480V AC" },
          { label: "Standards", value: "IEC 62196 –3" },
          { label: "Casing Material", value: "Thermoplastic" },
          { label: "Terminal Material", value: "Copper Alloy, Silver" },
          { label: "Life Span", value: ">10000 Cycles" }
        ]
      },
      topSection: {
        title: "CCS 2 Charging Socket",
        subtitle: "Your EV's Perfect Partner: Powerful Connection​",
        tagline: "CCS 2 Charging Socket​ embrace effortless refueling & makes every stop a breeze",
        features: [
          { label: "Ergonomic Design", value: "" },
          { label: "Rated Current", value: "80A/125A/150A/200A" },
          { label: "Operating Voltage", value: "250A/480V AC" },
          { label: "Terminal Temperature Rise", value: "< 38°C" }
        ]
      }
    },
    'type-2-charging-plug-connector': {
      name: "EV Charging Plug Connector type-2",
      description: "High-performance charging socket with intelligent power management and weatherproof design for reliable charging in all conditions.",
      image: "/assets/Products/Type-2-Charging-Plug-Connector-1.png",
      specs: [
        { icon: <Zap />, label: "Power Output", value: "22kW - 350kW" },
        { icon: <Shield />, label: "Protection", value: "IP67 Rated" },
        { icon: <Battery />, label: "Protocol", value: "Smart Charging" },
        { icon: <Globe />, label: "Standard", value: "IEC Certified" }
      ],
      keyFeatures: {
        connectivity: [
          {
            modelNumber: "TBPC – SPAC – 32AT2",
            ratedCurrent: "32A (single phase)",
            cableSpecs: "3 X 6.0mm² + 1 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – TPAC – 32AT2",
            ratedCurrent: "32A (Three phase)",
            cableSpecs: "5 X 6.0mm² + 1 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – SPAC – 16AT2",
            ratedCurrent: "16A (single phase)",
            cableSpecs: "3 X 2.5mm² + 1 X 0.75mm²"
          },
          {
            modelNumber: "TBPC – TPAC – 16AT2",
            ratedCurrent: "16A (Three phase)",
            cableSpecs: "5 X 2.5mm² + 1 X 0.75mm²"
          }
        ],
        specifications: [
          { label: "Rated Current", value: "16A / 32 A" },
          { label: "Rated Voltage", value: "250V / 480V AC" },
          { label: "Standards", value: "IEC 62196 -2" },
          { label: "Charging Mode", value: "Mode 3, Case C" },
          { label: "Resistor Coding", value: "680Ω / 2200Ω" },
          { label: "Casing Material", value: "Thermoplastic" },
          { label: "Terminal Material", value: "Copper alloy, silver" },
          { label: "Life Span", value: ">12500" },
          { label: "Conformity", value: "CE" },
          { label: "Ambient Temperature", value: "-30°C to 50°C" }
        ]
      },
      topSection: {
        title: "Type 2 Charging Plug Connector",
        subtitle: "Plug Into Effortless AC Charging: Fuel Your EV with Ease​",
        tagline: "Smooth, seamless, and reliable, this connector is your gateway to effortless AC charging at home or on the go.",
        features: [
          { label: "Ergonomic Design", value: "" },
          { label: "Rated Current", value: "80A/125A/150A/200A" },
          { label: "Operating Voltage", value: "250A/480V AC" },
          { label: "Terminal Temperature Rise", value: "< 38°C" }
        ]
      }
    }

  };

  const product = products[productId];

  if (!product) {
    navigate('/products');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-12 overflow-hidden bg-gradient-to-br from-red-50 to-white">
        <motion.div 
          className="container flex flex-col items-center gap-12 px-6 py-16 mx-auto lg:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="mb-4 text-5xl font-bold text-gray-900">
                {product.topSection.title}
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                {product.topSection.subtitle}
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-8 py-3 text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600">
                  Get Started <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-8 py-3 text-red-500 transition-colors border border-red-200 rounded-lg hover:bg-red-50">
                  Watch Demo <PlayCircle className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-transparent blur-3xl" />
              <img 
                src={product.image} 
                alt={product.name}
                className="relative z-10 w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Advanced Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Experience the next generation of EV charging technology with our advanced features and specifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {product.specs.map((spec, index) => (
              <motion.div
                key={index}
                className="relative p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-100 group rounded-xl hover:border-red-200"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-red-50 to-transparent group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-red-500/10">
                    <div className="w-6 h-6 text-red-500">
                      {spec.icon}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{spec.label}</h3>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-24 bg-gray-50">
        <div className="container px-6 mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Technical Specifications</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Detailed technical specifications and connectivity options for maximum compatibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Specifications */}
            <div className="space-y-6">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">Product Specifications</h3>
              <div className="grid gap-4">
                {product.keyFeatures.specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="p-4 transition-colors bg-white border border-gray-100 rounded-lg hover:border-red-200"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-sm font-medium text-gray-900">{spec.label}</h4>
                    <p className="mt-1 text-gray-600">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div className="space-y-6">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">Connectivity Options</h3>
              <div className="grid gap-4">
                {product.keyFeatures.connectivity.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 transition-colors bg-white border border-gray-100 rounded-lg hover:border-red-200"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="mb-4 text-lg font-medium text-gray-900">{item.modelNumber}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Rated Current</p>
                        <p className="text-gray-900">{item.ratedCurrent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Cable Specifications</p>
                        <p className="text-gray-900">{item.cableSpecs}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;