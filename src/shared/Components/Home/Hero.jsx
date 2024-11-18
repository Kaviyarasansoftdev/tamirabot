
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion";
import { Zap, ChevronRight, Battery, Timer } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Smart EV Charging Solutions",
    subtitle: "Experience the next generation of EV charging technology",
    description: "Supercharge your future with our advanced home and business charging solutions.",
    icon: Zap,
    stats: { power: "350kW DC", time: "15min", range: "200mi" },
    image: "/assets/hero/slider1.jpg",
    accent: "from-blue-600 to-cyan-400",
  },
  {
    id: 2,
    title: "Intelligent Power Management",
    subtitle: "Optimize your charging efficiency",
    description: "Smart load balancing and real-time monitoring for optimal charging performance.",
    icon: Battery,
    stats: { efficiency: "99%", savings: "40%", uptime: "24/7" },
    image: "/assets/hero/slider2.jpg",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    id: 3,
    title: "Future-Ready Infrastructure",
    subtitle: "Built for tomorrow's demands",
    description: "Scalable solutions that grow with your charging needs.",
    icon: Timer,
    stats: { warranty: "5 Years", support: "24/7", network: "Global" },
    image: "/assets/hero/slider3.jpg",
    accent: "from-purple-600 to-blue-400",
  },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !w-3 !h-3 !bg-white/50 hover:!bg-white"></span>`;
          },
        }}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => {
          const Icon = slide.icon;
          return (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-60`} />

                {/* Content */}
                <div className="relative flex items-center h-full">
                  <div className="container px-6 mx-auto lg:px-8">
                    <div className="max-w-4xl">
                      {/* Brand & Icon */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-8"
                      >
                        <Icon className="w-16 h-16 text-white" />
                        <span className="text-3xl font-bold text-white">Tamirabot</span>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-4 text-5xl font-bold text-white lg:text-7xl"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-6 text-2xl lg:text-3xl text-white/90"
                      >
                        {slide.subtitle}
                      </motion.h2>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-2xl mb-8 text-xl text-white/80"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-12"
                      >
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full group bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-900"
                        >
                          Get Started
                          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </motion.div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid max-w-3xl grid-cols-3 gap-8"
                      >
                        {Object.entries(slide.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="p-4 text-center rounded-lg bg-white/10 backdrop-blur-sm"
                          >
                            <div className="mb-1 text-3xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-sm capitalize text-white/70">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;