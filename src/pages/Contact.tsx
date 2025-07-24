import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("phone", formData.phone);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      await fetch(
        'https://script.google.com/macros/s/AKfycbzAhBjFS0U-dzfwjE-V0ksK1evMInJtx6KrtiR4Ab--RC-UUEuqTtadkTpl-Ce8W8hi/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formBody,
        }
      );

      alert('✅ Thank you! Your message has been sent.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Submit error:', error);
      alert('❌ Network error. Please try again.');
    }
  };

    
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-emerald-100">Get in touch with our real estate experts</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 7678538328</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 7042077126</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@harishyaminfra.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Office Address</div>
                    <div className="text-gray-600">
                      Office No:410, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201305
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-emerald-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Working Hours</div>
                    <div className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8234567890123!2d77.3621!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cdf6b9!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Harishyam Infra Office Location"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.app.goo.gl/edVBrAy8UHSZpYf96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
