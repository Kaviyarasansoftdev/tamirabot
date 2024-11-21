import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Globe, Shield, ChevronLeft, Check, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

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
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 py-12 mx-auto">

        {/* Top Section */}
        <div className="px-6 py-12 mb-12 bg-gray-100 rounded-lg shadow-md">
          <h1 className="mb-4 text-4xl font-bold text-center text-gray-900">
            {product.topSection.title}
          </h1>
          <p className="mb-2 text-lg text-center text-gray-600">
            {product.topSection.subtitle}
          </p>
          <p className="mb-6 text-sm text-center text-gray-500">
            {product.topSection.tagline}
          </p>
          <div className="flex justify-center gap-4">
            {product.topSection.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-lg"
              >
                <p className="text-sm font-bold text-gray-900">
                  {feature.label}
                </p>
                {feature.value && (
                  <p className="text-sm text-gray-600">{feature.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>


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
{/* Key Features Section */}
<div className="mt-12 space-y-12">
  {/* Connectivity Specifications */}
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
      Connectivity Specifications & Parameters
    </h2>
    <p className="mb-8 text-sm text-center text-gray-500">
      A Closer Look at Our Connector Specifications.
    </p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {product.keyFeatures.connectivity.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white border rounded-lg shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {item.modelNumber}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Rated Current:</strong> {item.ratedCurrent}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Cable Specifications:</strong> {item.cableSpecs}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Additional Specifications */}
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
      Specifications
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {product.keyFeatures.specifications.map((spec, index) => (
        <div
          key={index}
          className="flex flex-col p-4 bg-white border rounded-lg shadow-md hover:shadow-lg"
        >
          <h4 className="text-sm font-bold text-gray-900">
            {spec.label}
          </h4>
          <p className="mt-1 text-sm text-gray-600">{spec.value}</p>
        </div>
      ))}
    </div>
  </div>
</div>


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;