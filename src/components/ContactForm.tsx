import React, { useState } from "react";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleWhatsAppRedirect = () => {
  const { name, company, email, phone, subject, message } = formData;
  const phoneNumber = "918264100981"; // Do not include '+' or spaces

  const defaultMessage = `Hello Bihar Media Advertisement Team, 

My name is ${name} from ${company}. I came across your services and I am very interested in exploring how we can collaborate. 

Here are my details for your reference:
📧 Email: ${email}
📞 Phone: ${phone}
📝 Subject: ${subject}

Message:
${message}

Looking forward to discussing this further and working together.`;

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
};


  return (
    <section className="w-full bg-white py-12 px-6 md:px-20 flex justify-center relative">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Column: Get in Touch */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Get in <span className="text-blue-600">touch</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
Your ideas, our expertise—together we make it happen.          </p>
          
          <ul className="space-y-6 mb-8">
            {/* Head Office */}
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Head Office</h4>
                <p className="text-sm text-gray-600">Ambedkar Chok, Jehanabad</p>
              </div>
            </li>
            
            {/* Email Us */}
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Email Us</h4>
                <a href="mailto:Arihantprakash95@gmail.com" className="text-sm text-blue-600 hover:underline">Arihantprakash95@gmail.com</a>
                <p className="text-xs text-gray-500">For general inquiries</p>
              </div>
            </li>
            
            {/* Call Us */}
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Call Us</h4>
                <a href="tel:+918264100981" className="text-sm text-blue-600 hover:underline">+91 8264100981</a>
                <p className="text-xs text-gray-500">Call during business hours</p>
              </div>
            </li>
          </ul>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Follow our social media</h4>
            <div className="flex space-x-4 text-blue-600">
              <a href="#" aria-label="Facebook"><Facebook size={24} className="hover:text-blue-800 transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter size={24} className="hover:text-blue-800 transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram size={24} className="hover:text-blue-800 transition-colors" /></a>
              <a href="#" aria-label="YouTube"><Youtube size={24} className="hover:text-blue-800 transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={24} className="hover:text-blue-800 transition-colors" /></a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send us a <span className="text-blue-600">message</span>
          </h2>

          <form className="space-y-6">
            {/* Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                required
              />
            </div>

            {/* Submit Button now redirects to WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}