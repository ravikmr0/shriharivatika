
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sandeep Verma",
      location: "Noida",
      rating: 5,
      text: "Investing in Shri Hari Vatika was the best decision.",
      investment: "₹18 Lakhs",
      image: "/images/testimonial/sandeep-verma.jpg"
    },
    {
      name: "Rahul Sharma",
      location: "Delhi",
      rating: 5,
      text: "The transparency and professionalism of Harishyam Infra impressed me.",
      investment: "₹25 Lakhs",
      image: "/images/testimonial/rahul.jpeg"
    },
    {
      name: "Amit Gupta",
      location: "Gurgaon",
      rating: 5,
      text: "Excellent location with great potential.",
      investment: "₹32 Lakhs",
      image: "/images/testimonial/amit.jpeg"
    }
   /* {
      name: "Sunita Yadav",
      location: "Greater Noida",
      rating: 5,
      text: "As a working professional, I was looking for a secure investment.",
      investment: "₹22 Lakhs",
      image: "/images/sunita.jpg"
    },
    {
      name: "Vikash Singh",
      location: "Faridabad",
      rating: 5,
      text: "The team at Harishyam Infra made the entire process seamless.",
      investment: "₹28 Lakhs",
      image: "/images/vikash.jpg"
    },
    {
      name: "Neha Agarwal",
      location: "Ghaziabad",
      rating: 5,
      text: "Perfect investment for future security.",
      investment: "₹20 Lakhs",
      image: "/images/neha.jpg"
    } */
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-emerald-600">Happy Investors</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-emerald-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100 mr-4"
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
                    <div className="text-emerald-600 font-semibold text-sm">Investment Amount</div>
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
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-emerald-100 mb-6">
              Over 500+ families have already invested in Shri Hari Vatika. 
              Don't miss out on this opportunity to secure your financial future.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-emerald-100 text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-emerald-100 text-sm">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-emerald-100 text-sm">Recommend Us</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">₹50Cr+</div>
                <div className="text-emerald-100 text-sm">Total Investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
