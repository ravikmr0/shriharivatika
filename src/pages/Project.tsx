import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import { MapPin, Car, Plane, Building, Trees, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Project = () => {
  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shri Hari Vatika
            </h1>
            <p className="text-xl text-blue-100">
              Premium Plots Near Jewar Airport
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shri Hari Vatika Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Shri Hari Vatika is strategically located just 5 KM from the
                upcoming Jewar Airport, offering premium residential plots with
                world-class amenities and infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Prime location near Jewar Airport</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Approved Project</span>
                </div>
                <div className="flex items-center">
                  <Trees className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Green & Sustainable Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Features
            </h2>
            <p className="text-lg text-gray-600">
              Modern amenities for a comfortable lifestyle
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Roads</h3>
              <p className="text-gray-600">
                30-40 feet wide roads for easy connectivity
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gated Community</h3>
              <p className="text-gray-600">
                Secure gated community with 24/7 security
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Modern Infrastructure
              </h3>
              <p className="text-gray-600">
                Underground electricity and water supply
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Plot Information
            </h2>
            <p className="text-lg text-gray-600">
              Detailed plot specifications and pricing
            </p>
            <div className="mt-8 mb-12 max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                      alt="Residential Plots Layout"
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                      alt="Plot Development Plan"
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                      alt="Modern Infrastructure"
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Residential Plot */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                Residential Plot
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Plot Sizes
                  </h4>
                  <p className="text-gray-700">50 / 100 / 200 Sq. Yard</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Price</h4>
                  <p className="text-2xl font-bold text-green-600">
                    ₹16,000 /- Sq. Yard
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Plot Facing
                  </h4>
                  <p className="text-gray-700">East, West, North, South</p>
                </div>
              </div>
            </div>

            {/* Commercial Plot */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Commercial / Corner Plot
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Plot Sizes
                  </h4>
                  <p className="text-gray-700">50 / 100 / 200 Sq. Yard</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Price</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    ₹17,000 /- Sq. Yard
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Plot Facing
                  </h4>
                  <p className="text-gray-700">East, West, North, South</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() =>
                window.open(
                  "https://shrishyamdeveloper.com/properties/shree-hari-vatika-2/",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 mr-4"
            >
              View More Details
            </Button>
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sample Pricing Plans
            </h2>
            <p className="text-lg text-gray-600">
              Affordable plots with flexible payment options
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                50 Sq. Yard
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹8 Lakhs
              </div>
              <div className="text-gray-600 mb-6">Residential Plot</div>
              <Button onClick={scrollToContact} className="w-full">
                Book Now
              </Button>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-2xl text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">100 Sq. Yard</h3>
              <div className="text-3xl font-bold mb-2">₹16 Lakhs</div>
              <div className="text-blue-100 mb-6">Residential Plot</div>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-white text-blue-600 bg-white hover:bg-gray-100"
              >
                Book Now
              </Button>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                200 Sq. Yard
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹32 Lakhs
              </div>
              <div className="text-gray-600 mb-6">Residential Plot</div>
              <Button onClick={scrollToContact} className="w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Project;
