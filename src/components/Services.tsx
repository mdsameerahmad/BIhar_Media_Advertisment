import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brush,
  Camera,
  Globe,
  Megaphone,
  Monitor,
  ShoppingBag,
  Target,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import { FaChartBar, FaMapMarkerAlt, FaPalette, FaThLarge } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ImageWithFallback } from "../figma/ImageWithFallback";
import React, { useState, useEffect } from "react";

// 🎨 Reusable Gradient Button Component
function GradientButton({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const colorMap: Record<string, { end: string; text: string }> = {
    blue: { end: "#2563EB", text: "#1E40AF" },
    green: { end: "#059669", text: "#047857" },
    orange: { end: "#EA580C", text: "#C2410C" },
    purple: { end: "#7C3AED", text: "#5B21B6" },
    red: { end: "#DC2626", text: "#B91C1C" },
  };

  const { end, text } = colorMap[color] || colorMap.blue;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full font-semibold py-1.5 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
      style={{
        background: `linear-gradient(to right, white, ${end})`,
        color: text,
      }}
    >
      {children} <ArrowRight size={14} className="sm:size-4" />
    </motion.button>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      position: "Marketing Head",
      company: "Patna Builders Ltd.",
      rating: 5,
      testimonial: "Our billboard campaign with Bihar Media was a game-changer. The strategic placements and stunning design led to a significant increase in property inquiries. Their local expertise is unmatched.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Founder & CEO",
      company: "Global Edutech",
      rating: 5,
      testimonial: "The digital marketing services provided by the team have transformed our student enrollment. The targeted ads and engaging content helped us reach a wider audience across tier-2 cities in Bihar. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Amit Singh",
      position: "Brand Manager",
      company: "Agro Harvest Co.",
      rating: 5,
      testimonial: "We launched a new product line, and the brand activation events executed by Bihar Media were flawless. They created an unforgettable experience that resonated with our target audience and boosted brand loyalty.",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Creative Director",
      company: "Fashion Fusion",
      rating: 5,
      testimonial: "The creative design team is simply amazing. They understood our vision and translated it into a beautiful brand identity that has received immense positive feedback. A truly collaborative and talented team.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const services = [
    {
      id: 1,
      name: "OOH Advertising",
      icon: Target,
      description: "Billboards, hoardings, and outdoor campaigns across Bihar",
      detailedDescription: "Maximize your brand visibility across Bihar with our strategic outdoor advertising solutions. We offer premium locations on highways, city centers, and transit points to ensure your message reaches the right audience. Our data-driven approach helps identify high-traffic areas for maximum impact. With 15+ years of experience, we understand the Bihar market dynamics better than anyone.",
      features: [
        "Highway Billboards",
        "City Center Displays",
        "Bus Stop Ads",
        "Metro Stations",
      ],
      image:
        "assets/ooh.png",
      color: "blue",
      stats: { value: "200+", label: "Billboard Locations" },
    },
    {
      id: 2,
      name: "Digital Marketing",
      icon: Monitor,
      description: "Complete digital presence and online campaign management",
      detailedDescription: "Transform your online presence with our comprehensive digital marketing services. From social media management to targeted Google Ads campaigns, we help you connect with your audience in the digital space. Our team specializes in creating engaging content that drives conversions and builds brand loyalty. We provide detailed analytics to measure ROI and optimize your digital strategy continuously.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Content Creation",
        "SEO Services",
      ],
      image:
        "assets/digital.png",
      color: "green",
      stats: { value: "500K+", label: "Digital Reach Monthly" },
    },
    {
      id: 3,
      name: "Mall Branding",
      icon: ShoppingBag,
      description: "Retail space branding and mall advertising solutions",
      detailedDescription: "Capture the attention of shoppers with our innovative mall branding solutions. We offer strategic placements in high-footfall areas within shopping centers, including kiosks, pillar branding, and interactive displays. Our retail-focused approach ensures your brand stands out in competitive environments. We partner with major malls across Bihar to provide exclusive advertising opportunities that drive foot traffic and sales.",
      features: [
        "Mall Kiosks",
        "Store Branding",
        "Event Sponsorship",
        "Retail Displays",
      ],
      image:
        "assets/mall.png",
      color: "purple",
      stats: { value: "50+", label: "Mall Partnerships" },
    },
    {
      id: 4,
      name: "Print Media",
      icon: Brush,
      description: "High-quality printing and design for all marketing materials",
      detailedDescription: "Make a lasting impression with our premium print media services. We combine creative design with high-quality printing to produce brochures, flyers, banners, and business cards that effectively communicate your brand message. Our attention to detail ensures every piece reflects your brand's quality and values. From concept to distribution, we handle the entire process to deliver print materials that get results.",
      features: [
        "Brochures & Flyers",
        "Business Cards",
        "Banners",
        "Promotional Materials",
      ],
      image:
        "assets/print.png",
      color: "orange",
      stats: { value: "10K+", label: "Materials Printed Monthly" },
    },
    {
      id: 5,
      name: "Brand Activation",
      icon: Megaphone,
      description: "Event marketing and brand experience campaigns",
      detailedDescription: "Create memorable brand experiences with our activation services. We specialize in designing and executing events that forge emotional connections with your audience. From product launches to experiential marketing campaigns, we turn passive observers into active participants. Our team handles everything from concept development to on-ground execution, ensuring seamless brand experiences that drive engagement and loyalty.",
      features: [
        "Product Launches",
        "Promotional Events",
        "Roadshows",
        "Experiential Marketing",
      ],
      image:
        "assets/brand.png",
      color: "red",
      stats: { value: "100+", label: "Events Executed" },
    },
    {
      id: 6,
      name: "Creative Design",
      icon: Camera,
      description: "Professional creative design and brand identity services",
      detailedDescription: "Elevate your brand with our comprehensive creative design services. Our talented team of designers develops compelling visual identities that communicate your brand's essence. From logo design to complete brand guidelines, we ensure consistency across all touchpoints. We combine strategic thinking with artistic excellence to create designs that not only look beautiful but also drive business objectives and resonate with your target audience.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Creative Campaigns",
        "Photography",
      ],
      image:
        "assets/design.png",
      color: "blue",
      stats: { value: "300+", label: "Brands Designed" },
    },
  ];

  return (
    <section id="services" className="py-10 md:py-14 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm bg-blue-100 rounded-full text-blue-700 font-semibold shadow-sm">
            <BarChart3 size={14} className="md:size-4 lg:size-5" />
            Our Services
          </span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Complete advertising{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
              solutions for Bihar
            </span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mx-auto max-w-2xl leading-relaxed">
            From traditional outdoor advertising to cutting-edge digital
            campaigns, we offer comprehensive marketing solutions tailored for
            the Bihar market.
          </p>
        </motion.div>

        {/* Services Grid with Alternating Layout */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20 mb-12 md:mb-14 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-10 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-md bg-white hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative overflow-hidden rounded-xl md:rounded-2xl">
                {/* Stat Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 bg-white shadow-md px-2 py-1 md:px-3 md:py-1.5 text-xs rounded-full font-semibold flex items-center gap-1 text-gray-700">
                  <Globe size={10} className="md:size-3" /> {service.stats.value} {service.stats.label}
                </div>
                
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-4 md:p-5 lg:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div
                    className="flex items-center justify-center rounded-lg p-2 md:p-3"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color})`,
                    }}
                  >
                    <service.icon size={18} className="md:size-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl text-gray-900">
                    {service.name}
                  </h4>
                </div>

                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{service.description}</p>
                
                {/* Detailed Description */}
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.detailedDescription}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-4 md:mb-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-xs md:text-sm text-gray-600 gap-1.5 md:gap-2"
                    >
                      <span
                        className="inline-block rounded-full flex-shrink-0"
                        style={{
                          width: "5px",
                          height: "5px",
                          background: service.color,
                        }}
                      ></span>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Gradient Button with Link */}
                <Link to="/about">
                  <GradientButton color={service.color}>Learn More</GradientButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

       

        {/* 4-Step Process Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-fade-in" style={{ animationDelay: '2.8s' }}>
              From vision to impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">4 strategic steps</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '3s' }}>
              Our proven methodology transforms your advertising goals into measurable growth across Bihar's dynamic media landscape.
            </p>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '3.2s' }}>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4">
                  1
                  <Megaphone className="w-4 h-4 md:w-5 md:h-5 absolute -top-1 -right-1 bg-white text-blue-600 rounded-full p-0.5 md:p-1" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Strategy Development</h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                We analyze your target audience and market position to create data-driven advertising strategies that deliver maximum ROI. Our team conducts thorough market research to understand consumer behavior patterns specific to Bihar. We identify the most effective channels and messaging approaches to ensure your campaign resonates with the local audience.
              </p>
              <Link to="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center text-sm md:text-base">
                Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <ImageWithFallback
                              src="assets/strategy.png"
                              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl shadow-lg" alt={"Strategy Development"}              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '3.4s' }}>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4">
                  2
                  <Target className="w-4 h-4 md:w-5 md:h-5 absolute -top-1 -right-1 bg-white text-orange-500 rounded-full p-0.5 md:p-1" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Campaign Creation</h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                Our creative team designs compelling campaigns tailored for billboards, mall branding, digital platforms, and traditional media. We blend artistic excellence with strategic messaging to create advertisements that capture attention and drive action. Every element is carefully crafted to align with your brand identity while maximizing impact across different media formats and audience segments.
              </p>
              <Link to="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center text-sm md:text-base">
                Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <ImageWithFallback
                              src="assets/camp.png"
                              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl shadow-lg" alt={""}              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '3.6s' }}>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4">
                  3
                  <Award className="w-4 h-4 md:w-5 md:h-5 absolute -top-1 -right-1 bg-white text-green-500 rounded-full p-0.5 md:p-1" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Media Placement</h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                We secure premium advertising spaces across Bihar's highest-traffic locations, ensuring maximum visibility for your brand. Our extensive network includes prime billboard locations, mall advertising spaces, digital screens, and print media partnerships. We negotiate the best rates and positions to ensure your campaign receives optimal exposure to your target demographic throughout the state.
              </p>
              <Link to="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center text-sm md:text-base">
                Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <ImageWithFallback
                              src="assets/mediapla.png"
                              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl shadow-lg" alt={""}              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '3.8s' }}>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4">
                  4
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 absolute -top-1 -right-1 bg-white text-purple-600 rounded-full p-0.5 md:p-1" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Performance Analytics</h3>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                We provide detailed reports and insights on campaign performance, audience engagement, and return on advertising investment. Our analytics team tracks key performance indicators across all channels, providing you with clear metrics on reach, engagement, and conversion rates. We use this data to optimize ongoing campaigns and inform future strategies, ensuring continuous improvement and maximum ROI for your advertising spend.
              </p>
              <Link to="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center text-sm md:text-base">
                Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <ImageWithFallback
                              src="assets/statics.png"
                              className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl shadow-lg" alt={""}              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-inner"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-black">
            Why choose Bihar Media Advertisement?
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-8 md:mb-10">
            With 15+ years of experience in the Bihar market, we combine local
            insights with global best practices to deliver exceptional results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 text-center">
            {/* Local Expertise */}
            <motion.div
              className="group transition-transform duration-300 hover:scale-105 p-4 md:p-5"
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-white shadow-lg">
                <FaMapMarkerAlt className="text-pink-500 text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Local Expertise
              </h4>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Deep understanding of Bihar market and consumer behavior with insights gathered over 15+ years of serving local businesses.
              </p>
            </motion.div>

            {/* End-to-End Solutions */}
            <motion.div
              className="group transition-transform duration-300 hover:scale-105 p-4 md:p-5"
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-white shadow-lg">
                <FaThLarge className="text-blue-500 text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                End-to-End Solutions
              </h4>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Complete advertising solutions from strategy to execution, including creative design, media placement, and performance tracking.
              </p>
            </motion.div>

            {/* Creative Excellence */}
            <motion.div
              className="group transition-transform duration-300 hover:scale-105 p-4 md:p-5"
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-white shadow-lg">
                <FaPalette className="text-purple-500 text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Creative Excellence
              </h4>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Award-winning creative team with proven track record of designing campaigns that resonate with Bihar's diverse audience.
              </p>
            </motion.div>

            {/* Measurable Results */}
            <motion.div
              className="group transition-transform duration-300 hover:scale-105 p-4 md:p-5"
              whileInView={{ opacity: [0, 1], y: [40, 0] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-white shadow-lg">
                <FaChartBar className="text-green-500 text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Measurable Results
              </h4>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Data-driven approach with clear ROI metrics and detailed reporting to track campaign performance and optimize results.
              </p>
            </motion.div>
          </div>
        </motion.div>
         {/* Client Success Stories Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-green-100 text-green-700">
              Client Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Trusted by brands
              <span className="block text-blue-600">across Bihar</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See how we’ve helped local businesses and national brands achieve
              remarkable growth and establish strong presence in the Bihar market.
            </p>
          </motion.div>

          {/* Carousel Testimonial */}
          <motion.div
            className="max-w-4xl mx-auto mb-16 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden transition-all duration-500">
              <Quote
                size={40}
                className="absolute top-6 left-6 text-blue-600 opacity-20"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400"
                    style={{ fill: "#F59E0B" }}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed mb-6 text-center">
                "{testimonials[activeIndex].testimonial}"
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {testimonials[activeIndex].image && (
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="rounded-full w-14 h-14 object-cover"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/F59E0B/FFFFFF?text=User' }}
                  />
                )}
                <div className="text-center sm:text-left">
                  <h6 className="font-bold text-gray-900 mb-0">
                    {testimonials[activeIndex].name}
                  </h6>
                  <small className="text-gray-500">
                    {testimonials[activeIndex].position}
                  </small>
                  <div>
                    <small className="text-blue-600 font-medium">
                      {testimonials[activeIndex].company}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center mt-6 gap-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                    i === activeIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;