
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const handleCall = () => {
    window.open('tel:+917678538328', '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in Shri Hari Vatika plots near Jewar Airport. Please share more details.";
    const whatsappUrl = `https://wa.me/917678538328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-green-500 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-blue-600 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
