
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Noida",
      rating: 5,
      text: "Investing in Shri Hari Vatika was the best decision. The location near Jewar Airport is perfect, and the team at Harishyam Infra provided excellent support throughout the process.",
      investment: "₹18 Lakhs"
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The transparency and professionalism of Harishyam Infra impressed me. All documents were clear, and the RERA approval gave me confidence in my investment.",
      investment: "₹25 Lakhs"
    },
    {
      name: "Amit Gupta",
      location: "Gurgaon",
      rating: 5,
      text: "Excellent location with great potential. The proximity to Jewar Airport and upcoming Film City makes this a smart long-term investment. Highly recommended!",
      investment: "₹32 Lakhs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Investors Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied investors who have made smart investment decisions 
            with Harishyam Infra at Shri Hari Vatika.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-semibold text-sm">Investment</div>
                    <div className="text-gray-900 font-bold">{testimonial.investment}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Join Our Happy Investors</h3>
            <p className="text-blue-800 mb-6">
              Over 100+ families have already invested in Shri Hari Vatika. 
              Don't miss out on this opportunity to secure your financial future.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-blue-800 text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                <div className="text-blue-800 text-sm">Customer Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-blue-800 text-sm">Recommend Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
