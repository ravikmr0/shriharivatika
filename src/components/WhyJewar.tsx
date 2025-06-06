
import React from 'react';
import { Plane, Building2, TrendingUp, MapPin, Clock, Star } from 'lucide-react';

const WhyJewar = () => {
  const advantages = [
    {
      icon: Plane,
      title: "Largest Airport in India",
      description: "Jewar Airport will be India's largest airport, handling 70 million passengers annually"
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Massive infrastructure projects including Film City, Medical Devices Park, and IT hubs"
    },
    {
      icon: TrendingUp,
      title: "High Appreciation Potential",
      description: "Land values expected to appreciate 3-5x in the next 5 years due to airport proximity"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Direct connectivity to Delhi, Noida, and other NCR cities via expressways"
    }
  ];

  return (
    <section id="jewar-plots" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-medium">Investment Hotspot</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Invest in <span className="text-yellow-400">Jewar Airport Plots?</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Jewar Airport is set to transform the real estate landscape of the region. 
            Investing in plots near this mega infrastructure project ensures exceptional returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">The Jewar Airport Advantage</h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{advantage.title}</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Investment Timeline</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">2024-2025</div>
                  <div className="text-blue-100 text-sm">Airport construction in full swing</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">2025-2026</div>
                  <div className="text-blue-100 text-sm">Airport operational, land prices surge</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">2027-2030</div>
                  <div className="text-blue-100 text-sm">Peak appreciation period</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
              <h4 className="font-semibold text-yellow-300 mb-2">Expected ROI</h4>
              <div className="text-2xl font-bold text-yellow-400">300-500%</div>
              <div className="text-yellow-200 text-sm">Over 5-7 years</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't Miss This Opportunity!</h3>
            <p className="text-blue-100 mb-6">
              The Jewar Airport project is India's largest infrastructure development. Early investors 
              are already seeing significant appreciation. Book your plot today and secure your financial future.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">₹70,000 Cr</div>
                <div className="text-blue-200 text-sm">Total Project Investment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">70M</div>
                <div className="text-blue-200 text-sm">Annual Passengers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">5,000+</div>
                <div className="text-blue-200 text-sm">Acres Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJewar;
