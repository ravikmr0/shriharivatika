import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import {
  MapPin,
  TrendingUp,
  Shield,
  Award,
  Plane,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumPlots = () => {
  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Plots Near Jewar Airport
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Secure Your Future with Strategic Investment Opportunities
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg"
            >
              View Available Plots
            </Button>
          </div>
        </div>
      </section>

      {/* Why Premium Plots */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Premium Plots?
            </h2>
            <p className="text-lg text-gray-600">
              Strategic advantages that make these plots exceptional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Plane className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Airport Proximity</h3>
              <p className="text-gray-600">
                Located just 10 KM from Jewar Airport, ensuring excellent
                connectivity and future appreciation
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">High ROI Potential</h3>
              <p className="text-gray-600">
                Expected 300-400% appreciation over the next 5-7 years with
                infrastructure development
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Government Approved
              </h3>
              <p className="text-gray-600">
                Officially approved project with all legal clearances and
                transparent documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Plot Categories
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of premium plot sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <img
                  src="/images/plots/vatika.jpg"
                  alt="Standard Plot"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  Standard Plot
                </h3>
                <div className="text-3xl font-bold text-emerald-600 mt-2">
                  ₹15-20 Lakhs
                </div>
                <div className="text-gray-600">1000-1200 sq ft</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Corner & Regular plots available
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  30 feet road frontage
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  All amenities included
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full">
                Enquire Now
              </Button>
            </div>

            <div className="bg-emerald-600 text-white p-8 rounded-2xl shadow-lg transform scale-105">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Premium Plot"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold">Premium Plot</h3>
                <div className="text-3xl font-bold mt-2">₹20-25 Lakhs</div>
                <div className="text-emerald-100">1500-1800 sq ft</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Prime location plots
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  40 feet road frontage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Park & commercial facing
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-white text-emerald-600 bg-white hover:bg-gray-100"
              >
                Enquire Now
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <img
                  src="/images/plots/vatika_twon.jpg"
                  alt="Luxury Plot"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  Luxury Plot
                </h3>
                <div className="text-3xl font-bold text-emerald-600 mt-2">
                  ₹30-40 Lakhs
                </div>
                <div className="text-gray-600">2000-2500 sq ft</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Premium corner locations
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  60 feet main road facing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Premium amenities access
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investment Benefits
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Prime Location Advantage
                    </h3>
                    <p className="text-gray-600">
                      Strategic location near Jewar Airport, Film City, and
                      Yamuna Expressway
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Infrastructure Development
                    </h3>
                    <p className="text-gray-600">
                      Rapid infrastructure development in the region with
                      government support
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Appreciation Potential
                    </h3>
                    <p className="text-gray-600">
                      Historical data shows 25-30% annual appreciation in
                      similar airport projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/plots/varti.jpg"
                alt="Investment Growth Chart"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PremiumPlots;
