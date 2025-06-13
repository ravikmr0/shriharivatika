import React from "react";
import { CheckCircle, MapPin, Car, Zap, Droplets, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";

const Project = () => {
  const features = [
    {
      icon: Car,
      title: "Wide Roads",
      description: "24-foot wide roads for easy accessibility",
    },
    {
      icon: Zap,
      title: "Electricity",
      description: "24/7 power supply with underground cables",
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Borewell and municipal water connection",
    },
    {
      icon: Trees,
      title: "Green Parks",
      description: "Community parks and green landscapes",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Project: <span className="text-blue-600">Shri Hari Vatika</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A premium residential plot development strategically located near
            Jewar Airport, offering modern amenities and excellent connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Highlights
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Government Approved Project
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Clear Title and Documentation
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Gated Community Development
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Strategic Location Near Jewar Airport
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Easy EMI Options Available
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                Location Advantages
              </h4>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>5 KM from Jewar Airport</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>15 KM from Film City</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Direct connectivity to Yamuna Expressway</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Price & Payment Plans
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ₹15 Lakhs+
                </div>
                <div className="text-gray-600 mb-4">Starting Price</div>
                <div className="text-sm text-gray-500">
                  *Prices subject to plot size and location
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  Easy Payment Options
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 20% Down Payment</li>
                  <li>• Up to 60 months EMI</li>
                  <li>• No Hidden Charges</li>
                  <li>• Flexible Payment Schedule</li>
                </ul>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3"
            >
              Get Price Details
            </Button>
          </div>
        </div>

        {/* Plot Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Plot Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Residential Plot */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h4 className="text-xl font-bold text-green-800 mb-6 text-center">
                Residential Plot
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Plot Sizes
                  </h5>
                  <p className="text-gray-700">50 / 100 / 200 Sq. Yard</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Price</h5>
                  <p className="text-2xl font-bold text-green-600">
                    ₹16,000 /- Sq. Yard
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Plot Facing
                  </h5>
                  <p className="text-gray-700">East, West, North, South</p>
                </div>
              </div>
            </div>

            {/* Commercial Plot */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-6 text-center">
                Commercial / Corner Plot
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Plot Sizes
                  </h5>
                  <p className="text-gray-700">50 / 100 / 200 Sq. Yard</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Price</h5>
                  <p className="text-2xl font-bold text-blue-600">
                    ₹17,000 /- Sq. Yard
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Plot Facing
                  </h5>
                  <p className="text-gray-700">East, West, North, South</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() =>
                window.open(
                  "https://shrishyamdeveloper.com/properties/shree-hari-vatika-2/",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3"
            >
              View More Details
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Features & Amenities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
