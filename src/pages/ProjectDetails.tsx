import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { 
  MapPin, 
  ArrowLeft, 
  Star, 
  CheckCircle, 
  Car, 
  Shield, 
  Trees, 
  Building, 
  Plane,
  TrendingUp,
  Phone,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetails = () => {
  const { id } = useParams();

  // Project data (in a real app, this would come from an API)
  const projects = {
    1: {
      title: "Shri Hari Vatika",
      subtitle: "Premium Plots Near Jewar Airport",
      location: "Yamuna Expressway",
      images: [
        "/images/plots/vatika_phase.jpg",
        "/images/plots/vatika.jpg",
      "/images/plots/vatika_twon.jpg"
      ],
      price: "15 Lac",
      priceRange: "₹15 - ₹60 Lakhs",
      area: "1000-2000 Sq.Ft",
      size: "50-200 Sq.Yard",
      type: "Residential Plots",
      status: "Available",
      description: "Shri Hari Vatika offers premium residential plots strategically located near the upcoming Jewar Airport. This government-approved project provides an excellent investment opportunity with modern amenities and infrastructure.",
      highlights: [
        "Just 10 KM from Jewar Airport",
        " Approved Project", 
        "Gated Community with 24/7 Security",
        "Wide Roads (30-40 feet)",
        "Underground Electricity & Water",
        "Green Landscapes & Parks",
        "Easy EMI Options Available",
        "High ROI Potential (300-500%)"
      ],
      amenities: [
        { icon: Shield, name: "24/7 Security", description: "Round-the-clock security with CCTV surveillance" },
        { icon: Car, name: "Wide Roads", description: "30-40 feet wide roads for easy connectivity" },
        { icon: Trees, name: "Green Spaces", description: "Landscaped parks and green areas" },
        { icon: Building, name: "Modern Infrastructure", description: "Underground utilities and modern amenities" },
        { icon: Plane, name: "Airport Proximity", description: "Just 10 KM from Jewar International Airport" }
      ],
      specifications: {
        "Plot Sizes": "50, 100, 200 Sq. Yards",
        "Road Width": "30-40 feet",
        "Electricity": "Underground cables",
        "Water Supply": "Borewell + Municipal",
        "Approval": " Approved",
        "Possession": "Immediate"
      },
      locationAdvantages: [
        "10 KM from Jewar Airport",
        "15 KM from Film City",
        "Direct connectivity to Yamuna Expressway",
        "Close to educational institutions",
        "Near healthcare facilities",
        "Shopping centers nearby"
      ]
    },
    2: {
      title: "ShriHari Vatika Plots",
      subtitle: " Approved Plots",
      location: "Yamuna Expressway",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=2000&q=80",
        "/images/plots/vatika_phase.jpg",
        "/images/plots/varti.jpg"
      ],
      price: "25 Lac",
      priceRange: "₹25 - ₹80 Lakhs",
      area: "On Request",
      size: "On Request",
      type: "Commercial Plots",
      status: "Available",
      description: "Premium Commercial Plots approved by Yamuna Expressway Industrial Development Authority, offering excellent investment opportunities with guaranteed returns.",
      highlights: [
        "Yamuna Expressway Plots",
        "Prime Location on Expressway",
        "High Appreciation Potential",
        "Clear Title Documents",
        "Flexible Payment Plans",
        "Strategic Investment Location"
      ],
      amenities: [
        { icon: Shield, name: "Shri Hari Vatika Approved", description: "Officially approved " },
        { icon: TrendingUp, name: "High ROI", description: "Excellent appreciation potential" },
        { icon: Building, name: "Prime Location", description: "Strategic location on Yamuna Expressway" }
      ],
      specifications: {
        "Authority": " Approved",
        "Location": "Yamuna Expressway",
        "Plot Type": "Residential/Commercial",
        "Documentation": "Clear & Complete",
        "Payment": "Flexible Plans Available"
      },
      locationAdvantages: [
        "On Yamuna Expressway",
        "Near Jewar Airport",
        "Excellent connectivity to Delhi/NCR",
        "Upcoming infrastructure projects",
        "Industrial development nearby"
      ]
    }
    // Add more projects as needed
  };

  const project = projects[id as unknown as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-emerald-200 hover:text-white transition-colors mr-4">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="text-emerald-200 text-sm">
              <Link to="/" className="hover:text-white">Home</Link> / Project Details
            </div>
          </div>
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-emerald-100 mb-4">{project.subtitle}</p>
            <div className="flex items-center text-emerald-200">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              {project.images.slice(1, 3).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${project.title} ${index + 2}`}
                  className="w-full h-44 object-cover rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <amenity.icon className="w-8 h-8 text-emerald-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{amenity.name}</h4>
                        <p className="text-gray-600 text-sm">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  {Object.entries(project.specifications).map(([key, value], index) => (
                    <div key={index} className={`flex justify-between p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Advantages */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Advantages</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.locationAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Price Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{project.priceRange}</div>
                    <div className="text-gray-600">{project.type}</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Size:</span>
                      <span className="font-semibold">{project.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-semibold ${project.status === 'Available' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                   <a href="tel:+917678538328" className="w-full block">
                   <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center">
                     <Phone className="w-4 h-4 mr-2" />
                     Call Now
                   </Button>
                  </a>

                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-4">Get Expert Advice</h4>
                  <p className="text-emerald-100 mb-4">
                    Speak with our real estate experts to get personalized guidance for your investment.
                  </p>
                  <Button variant="outline" className="w-full border-white text-emerald-600 bg-white hover:bg-gray-100">
                    Contact Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ProjectDetails;