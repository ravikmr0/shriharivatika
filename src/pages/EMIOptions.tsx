
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { CreditCard, Calculator, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EMIOptions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-900 to-yellow-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Easy EMI Options</h1>
            <p className="text-xl text-yellow-100">Flexible Payment Plans to Make Your Investment Affordable</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Payment Plans</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-yellow-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Low Down Payment</h3>
                    <p className="text-gray-600">Start with just 20% down payment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Extended EMI Terms</h3>
                    <p className="text-gray-600">Up to 60 months EMI options available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
                    <p className="text-gray-600">Transparent pricing with no hidden costs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Plot Price</div>
                  <div className="text-2xl font-bold text-emerald-600">₹25,00,000</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Down Payment (20%)</div>
                  <div className="text-xl font-semibold text-gray-900">₹5,00,000</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600">EMI for 60 months</div>
                  <div className="text-xl font-semibold text-green-600">₹38,333/month</div>
                </div>
              </div>
              <Button className="w-full mt-6">Get Detailed EMI Plan</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default EMIOptions;
