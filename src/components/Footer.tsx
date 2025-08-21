import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    // Basic regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      // In a real application, you might use a custom modal or message
      // instead of an alert. For this example, alert is used for simplicity.
      alert("Please enter a valid email address to subscribe.");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello Bihar Media, I want to subscribe to your advertising insights. My email is: ${email}`
    );
    const whatsappUrl = `https://wa.me/918264100981?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-8">
      {/* Newsletter Section - More Compact */}
      <div className="text-center px-4 mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          Stay ahead with Bihar's advertising insights 🚀
        </h3>
        <p className="text-gray-400 mb-3 max-w-2xl mx-auto text-sm">
          Get exclusive updates on Bihar market trends and advertising opportunities.
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-full bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none text-sm"
            required
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-2 rounded-r-full text-white font-medium hover:opacity-90 transition text-sm flex items-center justify-center"
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Join 1000+ marketing professionals
        </p>
      </div>

      {/* Middle Footer Content */}
      <div className="border-t border-gray-700 py-6 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">B</span>
              Bihar Media
            </h4>
            <p className="text-gray-400 mb-3 text-xs">
              Bihar's premier advertising agency with 15+ years of experience.
            </p>
            <ul className="text-xs space-y-1">
              <li className="flex items-center gap-1">
                <MapPin size={12} /> Ambedkar Chok, Jehanabad
              </li>
              <li className="flex items-center gap-1">
                <Phone size={12} /> +91 8264100981
              </li>
            </ul>
            <div className="flex gap-2 mt-3">
              <a href="#" className="hover:text-white transition-transform duration-200 hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-white transition-transform duration-200 hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-white transition-transform duration-200 hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-white transition-transform duration-200 hover:scale-110">
                <Youtube size={16} />
              </a>
              <a href="#" className="hover:text-white transition-transform duration-200 hover:scale-110">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">Our Services</h5>
            <ul className="space-y-1 text-xs">
              <li>OOH Advertising</li>
              <li>Digital Marketing</li>
              <li>Mall Branding</li>
              <li>Print Media</li>
              <li>Creative Design</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">Service Areas</h5>
            <ul className="space-y-1 text-xs">
              <li>Patna</li>
              <li>Gaya</li>
              <li>Muzaffarpur</li>
              <li>Darbhanga</li>
              <li>Bhagalpur</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">Company</h5>
            <ul className="space-y-1 text-xs">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm">Resources</h5>
            <ul className="space-y-1 text-xs">
              <li>Brand Guidelines</li>
              <li>Marketing Calendar</li>
              <li>Industry Reports</li>
              <li>Support Center</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call-to-Action Bar */}
      <div className="px-4 md:px-8 pb-6">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-lg p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">
            Ready to dominate Bihar's market? 🚀
          </h3>
          <p className="mb-4 opacity-90 text-sm">
            Let's create campaigns that make your brand the talk of Bihar.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-200 text-sm hover:scale-105 inline-block"
          >
            Get Free Consultation →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Bihar Media Advertisement. All rights reserved. Powered by Arihant Associates.
        </p>
        <div className="mt-1 flex justify-center gap-3">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
