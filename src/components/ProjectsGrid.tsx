import React from 'react';
import { MapPin, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Shri Hari Vatika Phase-1",
      subtitle: " Plots Near Jewar Airport",
      location: "Yamuna Expressway",
      image: "/images/plots/vatika_phase.jpg",
      price: "15 Lac",
      area: "1000-2000 Sq.Ft",
      size: "50-200 Sq.Yard",
      type: "Residential Plots",
      status: "Available",
      featured: true,
      highlights: ["Near Jewar Airport", " Approved", "Gated Community"]
    },
    {
      id: 2,
      title: "Shri Hari Vatika Phase-2",
      subtitle: "Approved Plots",
      location: "Yamuna Expressway",
      image: "/images/plots/vatika.jpg",
      price: "25 Lac",
      area: "on Request",
      size: "on Request",
      type: "Authority Plots",
      status: "Available",
      featured: true,
      highlights: ["Government Approved", "Prime Location", "High ROI"]
    },
    {
      id: 3,
      title: "Shri Hari Vatika Farm House",
      subtitle: "Farm House in Jewar",
      location: "Jewar, Greater Noida",
      image: "/images/plots/vatika_home.jpg",
      price: "18 Lac",
      area: "on Request",
      size: "on Request",
      type: "Farm House",
      status: "Available",
      featured: true,
      highlights: ["Farm House", "Natural Environment", "Investment Opportunity"]
    },
   /* {
      id: 4,
      title: "ROF Galleria 93",
      subtitle: "Premium Residential Complex",
      location: "Sector-93, Gurugram",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      price: "1.38 Cr",
      area: "on Request",
      size: "on Request",
      type: "Residential",
      status: "Available",
      featured: false,
      highlights: ["Premium Location", "Modern Amenities", "Ready to Move"]
    },
    {
      id: 5,
      title: "Tare Kailash",
      subtitle: "Luxury Residential Project",
      location: "Noida Extension",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "45 Lac",
      area: "1200-1800 Sq.Ft",
      size: "2-3 BHK",
      type: "Apartments",
      status: "Under Construction",
      featured: false,
      highlights: ["Luxury Living", "Modern Design", "Great Connectivity"]
    },
    {
      id: 6,
      title: "Sobha City",
      subtitle: "Integrated Township",
      location: "Sector-108, Gurugram",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "85 Lac",
      area: "1500-2500 Sq.Ft",
      size: "3-4 BHK",
      type: "Township",
      status: "Available",
      featured: false,
      highlights: ["Integrated Township", "World-class Amenities", "Premium Location"]
    } */
  ];

  return (
    <section className="py-7 bg-gradient-to-br from-gray-60 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Our Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-emerald-600">Premium Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated portfolio of residential and commercial projects 
            designed to provide exceptional value and modern living experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-emerald-500 lg:scale-105' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-1 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              {/* Status Badge */}
              <div className={`absolute top-4 right-2 z-10 px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'Available' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm">{project.subtitle}</p>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-2 h-2 mr-2 text-emerald-500" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Area:</span>
                    <div className="font-semibold text-gray-900">{project.area}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <div className="font-semibold text-gray-900">{project.size}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-emerald-50 text-emerald-700 px-1 py-1 rounded-md text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                  <div>
                    <div className="text-1xl font-bold text-emerald-600">₹ {project.price}</div>
                    <div className="text-xs text-gray-500">{project.type}</div>
                  </div>
                  <Link to={`/project-details/${project.id}`}>
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                      View Details
                      <ArrowRight className="w-1 h-1 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link to="/all-projects">
            <Button 
              variant="outline" 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View All Projects
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;