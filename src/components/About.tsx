import { animate, motion, useInView, useMotionValue, Variants } from 'framer-motion';
import { Award, CheckCircle, Clock, Globe, Star, TrendingUp, Users } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

// 🔢 Counter Component with suffix support - Fixed version
const Counter = ({ value, className = "" }: { value: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(value);

  // Helper: split number and suffix
  const parseValue = (val: string) => {
    if (val.includes("–")) {
      // handle ranges like 2–7 days
      const [min, maxWithSuffix] = val.split("–");
      const match = maxWithSuffix.match(/(\d+)(.*)/);
      if (match) {
        return {
          isRange: true,
          min: parseInt(min),
          max: parseInt(match[1]),
          suffix: match[2] || "",
        };
      }
    }
    const match = val.match(/(\d+)(.*)/);
    return {
      isRange: false,
      min: parseInt(match?.[1] || "0"),
      max: parseInt(match?.[1] || "0"),
      suffix: match?.[2] || "",
    };
  };

  const { isRange, min, max, suffix } = parseValue(value);
  const count = useMotionValue(isRange ? min : 0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, max, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          const rounded = Math.round(latest);
          if (isRange) {
            setDisplay(`${min}–${rounded}${suffix}`);
          } else {
            setDisplay(`${rounded}${suffix}`);
          }
        }
      });
      
      return () => controls.stop();
    }
  }, [isInView, max, isRange, min, suffix, count]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {display}
    </motion.span>
  );
};

// Reusable component for each timeline item with animation
const JourneyItem = ({
  year,
  title,
  description,
  icon,
  isRight,
  delay = 0
}: {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isRight: boolean;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, x: isRight ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      } 
    },
  } as Variants;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative flex items-center w-full my-6 md:my-8 ${
        isRight ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`hidden md:block absolute top-1/2 w-1/2 h-0.5 bg-blue-200 transition-all duration-500 ${
        isRight ? "left-1/2" : "right-1/2"
        }`}
      ></div>

      <div
        className={`md:absolute top-1/2 -translate-y-1/2 w-full md:w-1/2 ${
        isRight ? "pr-8 md:pr-12 text-right" : "pl-8 md:pl-12 text-left"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{year}</h3>
        <div className="font-semibold text-gray-900 text-base md:text-lg">{title}</div>
        <p className="text-xs md:text-sm text-gray-600 mt-1">{description}</p>
      </div>

      <div className="z-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
    </motion.div>
  );
};

// FadeIn component for reusable animations
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New About Section Component
const AboutSection = () => {
  const stats = [
    {
      value: "5M+",
      label: "Happy sellers",
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      value: "180+",
      label: "Premium products",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-green-600" />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      value: "200+",
      label: "Countries served",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />,
      bg: "bg-gray-200",
      color: "text-gray-800",
    },
    {
      value: "24/7",
      label: "Customer support",
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 text-center bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn delay={0.1}>
          <span className="px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-semibold bg-blue-50 text-blue-600 rounded-full mb-4 md:mb-6 inline-block">
            About
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
            Empowering entrepreneurs <br />
            <span className="text-blue-600">since 2013</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            We're on a mission to help entrepreneurs turn their ideas into successful businesses.
            Our platform provides everything you need to create, customize, and sell products online.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.4 + index * 0.1}>
              <div className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-4 md:p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <div
                  className={`mb-3 md:mb-4 p-2 md:p-3 rounded-lg flex items-center justify-center ${stat.bg}`}
                >
                  {stat.icon}
                </div>
                <div className={`text-xl md:text-2xl lg:text-3xl font-extrabold ${stat.color}`}>
                  <Counter value={stat.value} />
                </div>
                <p className="text-gray-600 mt-1 md:mt-2 text-xs md:text-sm">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export function About() {
  const trustItems = [
    { title: "Quality Guarantee", description: "We stand behind every product with our satisfaction guarantee and premium materials." },
    { title: "Fast Fulfillment", description: "Orders printed and shipped within 2–7 business days from our global facilities." },
    { title: "Global Network", description: "Print facilities worldwide ensure fast shipping and lower costs for your customers." },
    { title: "Dedicated Support", description: "24/7 customer support team ready to help you succeed with your business." },
  ];

  const journeyItems = [
    { year: "2013", title: "Company Founded", description: "Started with a mission to democratize e-commerce through print on demand", icon: <Star size={20} className="md:size-6" /> },
    { year: "2016", title: "Global Expansion", description: "Opened fulfillment centers in Europe and expanded our product catalog", icon: <Globe size={20} className="md:size-6" /> },
    { year: "2019", title: "1M Sellers", description: "Reached the milestone of serving over 1 million sellers worldwide", icon: <Users size={20} className="md:size-6" /> },
    { year: "2024", title: "Industry Leader", description: "Now serving 5M+ sellers with 180+ products and global fulfillment", icon: <TrendingUp size={20} className="md:size-6" /> },
  ];

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.5 });

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 4, ease: "easeInOut" } },
  };

  const journeyVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 },
    }),
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <AboutSection />

      {/* Why Sellers Choose Us Section with Counters */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Why sellers choose us</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto">
              Join thousands of successful entrepreneurs who trust our platform to grow their businesses.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
            {[
              { value: "0%", color: "text-green-600", title: "No upfront costs", desc: "Start your business with zero inventory investment" },
              { value: "2–7days", color: "text-blue-600", title: "Fast fulfillment", desc: "Orders shipped within 2–7 business days worldwide" },
              { value: "100%", color: "text-gray-900", title: "Quality guarantee", desc: "Premium materials with satisfaction guarantee" },
              { value: "200+countries", color: "text-orange-600", title: "Global reach", desc: "Ship to customers in 200+ countries" },
            ].map((stat, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="h-full">
                <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 text-center hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-center">
                  <div className={`text-xl md:text-2xl lg:text-3xl font-extrabold mb-1 md:mb-2 ${stat.color}`}>
                    <Counter value={stat.value} />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1">{stat.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{stat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our journey</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-10 lg:mb-12">
              From startup to industry leader - here's how we've grown together with our sellers.
            </p>
          </FadeIn>

          <div ref={timelineRef} className="relative w-full max-w-3xl mx-auto">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-1/2 -ml-0.5 w-1 h-full bg-blue-300 hidden md:block"
            />
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={journeyVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative flex items-center w-full mb-8 md:mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`bg-white rounded-lg md:rounded-xl shadow-md p-4 md:p-6 max-w-xs md:max-w-sm ${
                    index % 2 === 0 ? "text-left mr-8 md:mr-12" : "text-left ml-8 md:ml-12 md:text-right"
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600">{item.year}</h3>
                  <div className="font-semibold text-gray-900 text-base md:text-lg">{item.title}</div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{item.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn delay={0.1}>
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Built on trust</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality and service has made us the preferred choice for entrepreneurs worldwide.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {trustItems.map((item, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1}>
                <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start mb-3 md:mb-4">
                    <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;