import React from 'react';
import { motion } from "framer-motion";
import { Factory, GitBranch, Clock } from "lucide-react";

const policies = [
  {
    id: 1,
    title: "Lean Cell Manufacturing",
    icon: Factory,
    image: "/assets/manufacturing/lean-cell.png",
    description: [
      "We've embraced lean cell manufacturing, organising workstations into self-contained units.",
      "This streamlines workflows, minimises unnecessary movement, and ensures faster production cycles."
    ]
  },
  {
    id: 2,
    title: "Visual Stream Mapping (VSM)",
    icon: GitBranch,
    image: "/assets/manufacturing/vsm.png",
    description: [
      "Visual Stream Mapping is at the core of our manufacturing strategy.",
      "By visually mapping the entire production process, we identify bottlenecks and continuously enhance efficiency."
    ]
  },
  {
    id: 3,
    title: "Just-In-Time (JIT) Principles",
    icon: Clock,
    image: "/assets/manufacturing/jit.png",
    description: [
      "JIT forms the foundation of our supply chain management.",
      "Synchronising production with customer demand minimises waste, reduces costs, and enables rapid responses to market changes"
    ]
  }
];

const PolicyCard = ({ policy, index }) => {
  const Icon = policy.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
    >
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-blue-50">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{policy.title}</h3>
        </div>

        {/* Image */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <img 
            src={policy.image} 
            alt={policy.title}
            className="object-cover w-full h-48"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Description */}
        <ul className="space-y-3">
          {policy.description.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
              <p className="text-gray-600">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ManufacturingPolicies = () => {
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
            <span className="text-gray-900">Our Standard </span>
            <span className="text-red-500">Policies</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our Approach to Manufacturing Policy
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => (
            <PolicyCard key={policy.id} policy={policy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPolicies;