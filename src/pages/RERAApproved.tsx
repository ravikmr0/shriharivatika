
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Shield, CheckCircle, FileText, Award } from 'lucide-react';

const RERAApproved = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RERA Approved</h1>
            <p className="text-xl text-green-100">Government Approved with Complete Legal Transparency</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why RERA Approval Matters?</h2>
            <p className="text-lg text-gray-600">RERA ensures your investment is safe and legally compliant</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Protection</h3>
              <p className="text-gray-600">Complete legal protection for your investment</p>
            </div>
            <div className="text-center p-6">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Documentation</h3>
              <p className="text-gray-600">All documents are verified and transparent</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Government Approval</h3>
              <p className="text-gray-600">Approved by government authorities</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Ensures project quality and delivery</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default RERAApproved;
