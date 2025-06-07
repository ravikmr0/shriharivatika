import React from "react";
import { Users, Award, Building, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Harishyam Infra</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of expertise in real estate development, we are committed
            to creating premium residential communities that offer exceptional
            value and quality of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Dreams, Creating Futures
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Harishyam Infra has been at the forefront of real estate
              development, specializing in creating sustainable and profitable
              investment opportunities. Our flagship project, Shri Hari Vatika,
              represents our commitment to excellence and strategic location
              selection.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Located strategically near the upcoming Jewar Airport, our
              projects are designed to provide maximum returns on investment
              while ensuring all necessary approvals and legal compliances are
              in place.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h4>
                <p className="text-gray-600 text-sm">
                  Government approved projects with all legal documentation
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High ROI</h4>
                <p className="text-gray-600 text-sm">
                  Strategic locations ensuring maximum appreciation
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Customer-Centric Approach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dedicated support throughout your investment journey
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Proven Track Record
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Successfully delivered multiple projects on time
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Legal Compliance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    All projects are government approved and legally compliant
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  10+ Years
                </div>
                <div className="text-sm text-blue-800">
                  Experience in Real Estate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
