"use client";

import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  Users,
  Clock,
  BarChart3,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Marketing Director",
      company: "P&M Patna Mall - Patna, Bihar",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      testimonial:
        "Bihar Media Advertisement transformed our mall's visibility with their innovative branding strategies. Our footfall increased by 40% within 3 months of their campaign launch. Their understanding of the local market is exceptional!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sunita Devi",
      position: "Operations Head",
      company: "P&M Shopping Complex",
      testimonial:
        "Their mall branding strategies helped us engage customers better. Excellent local expertise!",
      rating: 5,
    },
    {
      id: 3,
      name: "Vikash Gupta",
      position: "Brand Manager",
      company: "Retail Chain",
      testimonial:
        "Professional team with creative strategies. Their outdoor visibility campaigns worked wonders.",
      rating: 5,
    },
    {
      id: 4,
      name: "Anita Kumari",
      position: "Owner",
      company: "Local Boutique",
      testimonial:
        "Bihar Media Advertisement made our small business stand out. Our visibility increased drastically!",
      rating: 5,
    },
    {
      id: 5,
      name: "Ravi Prakash",
      position: "Founder",
      company: "Startup Bihar",
      testimonial:
        "Reliable partner for all our advertising needs. Their campaigns always deliver great results.",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-green-100 text-green-700">
            Client Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by brands
            <span className="block text-blue-600">across Bihar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how we’ve helped local businesses and national brands achieve
            remarkable growth and establish strong presence in the Bihar market.
          </p>
        </div>

        {/* Carousel Testimonial */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="bg-white shadow-lg rounded-2xl p-8 relative transition-all duration-500">
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
            <p className="text-gray-700 text-lg italic leading-relaxed mb-6 text-center">
              "{testimonials[activeIndex].testimonial}"
            </p>
            <div className="flex items-center justify-center gap-4">
              {testimonials[activeIndex].image && (
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="rounded-full"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/F59E0B/FFFFFF?text=User' }}
                />
              )}
              <div className="text-left">
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
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
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
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Small Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(1, 4).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400"
                    style={{ fill: "#F59E0B" }}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic flex-grow">"{t.testimonial}"</p>
              <div className="mt-4">
                <h6 className="font-bold text-gray-900">{t.name}</h6>
                <small className="text-gray-500">{t.position}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="rounded-2xl shadow-lg text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">
            Our track record speaks for itself
          </h3>
          <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
            15+ years of successful advertising campaigns across Bihar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Users size={36} className="mx-auto mb-2" />
              <div className="text-4xl font-bold">500+</div>
              <p className="opacity-90">Happy Clients</p>
            </div>
            <div>
              <Clock size={36} className="mx-auto mb-2" />
              <div className="text-4xl font-bold">15+</div>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div>
              <BarChart3 size={36} className="mx-auto mb-2" />
              <div className="text-4xl font-bold">100+</div>
              <p className="opacity-90">Campaigns Executed</p>
            </div>
            <div>
              <RefreshCcw size={36} className="mx-auto mb-2" />
              <div className="text-4xl font-bold">98%</div>
              <p className="opacity-90">Client Retention</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="mt-8 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-gray-100">
              Lets's Connect
            </button>
          </Link>
        </div>

        {/* Brand Logos / Names Section */}
        <div className="text-center">
          <h4 className="text-lg text-gray-600 mb-8">
            Trusted by leading brands across Bihar
          </h4>
          <div className="relative w-full overflow-hidden whitespace-nowrap py-2 md:py-4 lg:py-6">
            <div className="inline-block animate-scroll-rtl">
              <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
                {[
                  { name: "PatnaPlaza Mall", type: "Retail" },
                  { name: "Bihar Tourism", type: "Government" },
                  { name: "Sunrise Electronics", type: "Electronics" },
                  { name: "MithilaFoods", type: "FMCG" },
                  { name: "GangaBank", type: "Banking" },
                  { name: "TechStart Solutions", type: "Technology" },
                ].map((brand, i) => (
                  <div
                    key={i}
                    className="transition transform hover:scale-110 hover:text-black text-gray-500 inline-block mx-4"
                  >
                    <h5 className="font-semibold">{brand.name}</h5>
                    <p className="text-sm">{brand.type}</p>
                  </div>
                ))}
                {/* Duplicate the list for continuous scroll effect */}
                {[
                  { name: "PatnaPlaza Mall", type: "Retail" },
                  { name: "Bihar Tourism", type: "Government" },
                  { name: "Sunrise Electronics", type: "Electronics" },
                  { name: "MithilaFoods", type: "FMCG" },
                  { name: "GangaBank", type: "Banking" },
                  { name: "TechStart Solutions", type: "Technology" },
                ].map((brand, i) => (
                  <div
                    key={i + '-duplicate'}
                    className="transition transform hover:scale-110 hover:text-black text-gray-500 inline-block mx-4"
                  >
                    <h5 className="font-semibold">{brand.name}</h5>
                    <p className="text-sm">{brand.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
