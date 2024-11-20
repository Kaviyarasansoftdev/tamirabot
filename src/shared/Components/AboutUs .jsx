
import React, { useState, useEffect } from 'react';
import {
  Lightbulb,
  Handshake,
  HelpingHand,
  Award,
  ShieldCheck,
  User,
  Zap
} from "lucide-react";
const AboutUsPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const colors = {
    primary: '#EF4A50',
    secondary: '#2E1F60',
    tertiary: '#F0F0F0'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const accordionData = [
    {
      title: "Our Startup Journey: A Proud Participant",
      content: "Recognized under the esteemed Start-up India initiative, we stand proud as contributors to entrepreneurship, job creation, and economic growth in our nation. Aligned with the Make in India policy, we prioritize domestic manufacturing, adding strength to the vision of a self-reliant and globally competitive Indian manufacturing sector."
    },
    {
      title: "Expert Engineering for Superior Connectors: IEC62196 Compliant",
      content: "At Tamirabot, our team of industry experts, armed with advanced engineering capabilities, passionately crafts superior electric vehicle connectors. Engineered to meet and surpass international standards, such as IEC62196, our connectors guarantee seamless compatibility, reliable performance, and optimal safety."
    },
    {
      title: "Rigorous Testing and Innovation: A Commitment to Excellence",
      content: "Focused on performance, reliability, and safety, our connectors undergo stringent testing and quality assurance processes. Leveraging cutting-edge technologies and proudly manufactured in India, these connectors ensure not just optimal charging experiences but also exhibit long-lasting durability."
    },
    {
      title: "Customer-Centric Approach: Tailored Solutions for Every Need",
      content: "Understanding the unique requirements of electric vehicle manufacturers, charging  station providers, and end-users is our forte. Our customer-centric approach propels us to deliver personalized support, exceptional service, and tailor-made solutions that adapt to the evolving demands of the electric vehicle ecosystem."
    },
    {
      title: "More Than Connectors: Catalysts of Change",
      content: "Understanding the unique requirements of electric vehicle manufacturers, charging  station providers, and end-users is our forte. Our customer-centric approach propels us to deliver personalized support, exceptional service, and tailor-made solutions that adapt to the evolving demands of the electric vehicle ecosystem."
    },
    {
      title: "Innovation and Testing",
      content: "Experience the dynamism of innovation with Tamirabot. Together, let's steer towards a greener and brighter future, supported by the pillars of Start-up India and Make in India."
    }
  ];

  const benefits = [
    "Reduced Contact Resistance",
    "Charging Efficiency",
    "Uniform Thermal Distribution",
    "Increased Bulk Resistance"
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      content: "Pioneering new technologies to deliver advanced EV charging solutions.",
    },
    {
      icon: HelpingHand,
      title: "Sustainability",
      content: "Prioritizing eco-friendly solutions to reduce carbon footprints.",
    },
    {
      icon: Handshake,
      title: "Quality",
      content: "Ensuring reliability and excellence in every product and service.",
    },
  ];

  const timelineEvents = [
    {
      year: "2020",
      title: "Company Founding",
      description: "Established with a vision to revolutionize EV charging technology",
      icon: Zap
    },
    {
      year: "2021",
      title: "First Prototype",
      description: "Developed our first high-efficiency EV connector",
      icon: Lightbulb
    },
    {
      year: "2022",
      title: "Market Expansion",
      description: "Secured key partnerships in the EV ecosystem",
      icon: Handshake
    }
  ];

  const founder = {
    name: "Velayutham S",
    title: "Founder & Director",
    description:
      "With 14 years of expertise as an expatriate in the SEA region, Velayutham leads Tamirabot with a rich background in Industrial Automation, Robotics, Product Design & Manufacturing, End-of-Line Testing, and Safety Systems Design.",
    image: "/assets/founderanddirector/Founder-Director-tamirabot.jpg",
  };

  const director = {
    name: "Valliammal P",
    title: "Director",
    description:
      "Bringing 35 years of experience in Human Resources Management and Operations, Valliammal plays a crucial role in shaping Tamirabot's organizational structure, contributing valuable insights and leadership to the team.",
    image: "/assets/founderanddirector/Director-tamirabot.jpg", 
  };

  return (
    <div className="min-h-screen" style={{ background: colors.tertiary }}>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 transform -skew-y-6" 
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
            zIndex: 0
          }}
        />
        <div className="container relative z-10 px-6 py-32 mx-auto text-center">
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-white">
            About Us
          </h1>
          <h2 className="max-w-3xl mx-auto mb-8 text-3xl font-light text-white">
            Revolutionizing EV Mobility with High-Efficiency Connectors!
          </h2>
          <p className="mb-12 text-xl text-white/80">
            Forget boring connectors, we're sparking a charging revolution!
          </p>
          <button 
            className="px-8 py-3 text-lg font-semibold transition-all transform rounded-full hover:scale-105"
            style={{ 
              background: colors.primary,
              color: 'white',
              boxShadow: '0 4px 20px rgba(239, 74, 80, 0.3)'
            }}
          >
            Discover More
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 -mt-20">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4" id="benefits" data-animate>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible['benefits'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
                  style={{ borderTop: `4px solid ${index % 2 === 0 ? colors.secondary : colors.primary}` }}
                >
                  <h3 
                    className="text-lg font-bold"
                    style={{ color: colors.secondary }}
                  >
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-white" id="accordion" data-animate>
        <div className="container px-6 mx-auto">
          <h2 
            className="mb-12 text-4xl font-bold text-center"
            style={{ color: colors.secondary }}
          >
            Why <span className='text-primary'>Choose Us?</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {accordionData.map((item, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible['accordion'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                  <button
                    className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors"
                    style={{ 
                      background: activeAccordion === index ? colors.secondary : 'white',
                      color: activeAccordion === index ? 'white' : colors.secondary
                    }}
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className="text-2xl transition-transform duration-200 transform" style={{
                      transform: activeAccordion === index ? 'rotate(45deg)' : 'rotate(0)'
                    }}>+</span>
                  </button>
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: activeAccordion === index ? '200px' : '0',
                    }}
                  >
                    <div className="p-6" style={{ background: colors.tertiary }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-tertiary" id="values" data-animate>
        <div className="container px-6 mx-auto">
          <h2
            className="mb-12 text-4xl font-bold text-center text-secondary"
          >
            Our <span className="text-primary">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible["values"]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8 transition-all duration-300 bg-white border-l-4 shadow-lg rounded-xl group hover:transform hover:scale-105 hover:shadow-xl border-primary">
                  <div className="flex items-center mb-4">
                    <value.icon className="mr-2 text-2xl text-primary" />
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: colors.secondary }}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{value.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* Mission and Vision Section */}
<section className="py-20 bg-white" id="mission" data-animate>
  <div className="container px-6 mx-auto">
    <h2 className="mb-12 text-4xl font-bold text-center" style={{ color: colors.secondary }}>
      Our <span style={{ color: colors.primary }}>Mission & Vision</span>
    </h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <div className={`transform transition-all duration-700 ${isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h3 className="text-2xl font-semibold" style={{ color: colors.secondary }}>Mission</h3>
        <p className="mt-4 text-gray-600">
        Serving as a catalyst for sustainability.​ Driving impactful change for a better and sustainable future.
        </p>
      </div>
      <div className={`transform transition-all duration-700 ${isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h3 className="text-2xl font-semibold" style={{ color: colors.secondary }}>Vision</h3>
        <p className="mt-4 text-gray-600">
        Empowering positive change through sustainable mobility.​ Enabling a future of empowerment and environmental consciousness.
        </p>
      </div>
    </div>
  </div>
</section>

  {/* Founder and Director Section */}
  <section className="py-20 bg-tertiary" id="leadership" data-animate>
        <div className="container px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-secondary">
            Meet Our <span className="text-primary">Visionaries</span>
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Founder Card */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible["leadership"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center p-8 transition-transform transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 mb-4 rounded-full"
                />
                <h3 className="text-2xl font-semibold text-secondary">
                  {founder.title}
                </h3>
                <p className="mb-4 text-lg text-primary">{founder.name}</p>
                <p className="text-center text-gray-600">{founder.description}</p>
              </div>
            </div>

            {/* Director Card */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible["leadership"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center p-8 transition-transform transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-32 h-32 mb-4 rounded-full"
                />
                <h3 className="text-2xl font-semibold text-secondary">
                  {director.title}
                </h3>
                <p className="mb-4 text-lg text-primary">{director.name}</p>
                <p className="text-center text-gray-600">{director.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Timeline Section */}
       <section 
        className="py-20"
        style={{ backgroundColor: colors.secondary }}
      >
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-white">
            Our <span style={{ color: colors.primary }}>Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 w-1 transform -translate-x-1/2 left-1/2 bg-white/30"></div>
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`mb-8 flex items-center w-full 
                  ${index % 2 === 0 ? 'flex-row-reverse' : ''}
                `}
              >
                <div 
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'mr-auto pl-8' : 'ml-auto pr-8'
                  }`}
                >
                  <div className="p-6 bg-white shadow-lg rounded-xl">
                    <h3 
                      className="mb-2 text-2xl font-semibold"
                      style={{ color: colors.primary }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/12">
                  <div 
                    className="z-10 flex items-center justify-center w-16 h-16 rounded-full"
                    style={{ 
                      backgroundColor: colors.primary, 
                      color: 'white' 
                    }}
                  >
                    <event.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-5/12">
                  <div 
                    className="text-2xl font-bold text-white text-opacity-50"
                    style={{ 
                      textAlign: index % 2 === 0 ? 'left' : 'right' 
                    }}
                  >
                    {event.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;