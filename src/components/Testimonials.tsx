
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Noida",
      rating: 5,
      text: "Investing in Shri Hari Vatika was the best decision. The location near Jewar Airport is perfect, and the team at Harishyam Infra provided excellent support throughout the process. The returns have been incredible!",
      investment: "₹18 Lakhs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The transparency and professionalism of Harishyam Infra impressed me. All documents were clear, and the RERA approval gave me confidence in my investment. Highly recommend for anyone looking at Jewar plots!",
      investment: "₹25 Lakhs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amit Gupta",
      location: "Gurgaon",
      rating: 5,
      text: "Excellent location with great potential. The proximity to Jewar Airport and upcoming Film City makes this a smart long-term investment. The plot appreciation has exceeded my expectations.",
      investment: "₹32 Lakhs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sunita Yadav",
      location: "Greater Noida",
      rating: 5,
      text: "As a working professional, I was looking for a secure investment. Shri Hari Vatika offered exactly what I needed - location, legal clarity, and growth potential. Very satisfied with my purchase.",
      investment: "₹22 Lakhs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Vikash Singh",
      location: "Faridabad",
      rating: 5,
      text: "The entire process was smooth and transparent. The team guided me through every step, from documentation to possession. The infrastructure development around Jewar is impressive.",
      investment: "₹28 Lakhs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Neha Agarwal",
      location: "Ghaziabad",
      rating: 5,
      text: "Perfect investment for future security. The location advantage near Jewar Airport is unmatched. The EMI options made it very affordable for middle-class families like ours.",
      investment: "₹20 Lakhs",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Happy Investors</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied investors who have made smart investment decisions 
            with Harishyam Infra at Shri Hari Vatika.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>
              
              {/* Client Image */}
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div className="text-blue-600 font-semibold text-sm">Investment Amount</div>
                    <div className="text-gray-900 font-bold text-lg">{testimonial.investment}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-semibold text-sm">Status</div>
                    <div className="text-green-700 font-bold">✓ Verified</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-blue-100 mb-6">
              Over 500+ families have already invested in Shri Hari Vatika. 
              Don't miss out on this opportunity to secure your financial future.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-100 text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-blue-100 text-sm">Customer Rating</div>
              </div>
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-blue-100 text-sm">Recommend Us</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">₹50Cr+</div>
                <div className="text-blue-100 text-sm">Total Investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
