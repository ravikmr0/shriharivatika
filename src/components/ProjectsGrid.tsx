import React from 'react';
import { MapPin, ArrowRight, Star, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Shri Hari Vatika Phase-1",
      subtitle: "Residential Plots",
      location: "Yamuna Expressway",
      image: "/images/plots/vatika_phase.jpg",
      price: "16 Lac",
      area: "1000-2000 Sq.Ft",
      size: "50-200 Sq.Yard",
      type: "Residential Plots",
      status: "Available",
      featured: true,
      highlights: ["Near Jewar Airport", "Government Approved", "Gated Community"]
    },
    {
      id: 2,
      title: "Shri Hari Vatika Phase-2",
      subtitle: "Two-Side-Open Plots",
      location: "Yamuna Expressway",
      image: "/images/plots/vatika_phase1.jpg",
      price: "17 Lac",
      area: "on Request",
      size: "on Request",
      type: "Society Plots",
      status: "Available",
      featured: true,
      highlights: ["Government Approved", "Prime Location", "High ROI"]
    },
    {
      id: 3,
      title: "Shri Hari Vatika Farm House",
      subtitle: "Commercial Plots",
      location: "Jewar, Greater Noida",
      image: "/images/plots/vatika_home.png",
      price: "18 Lac",
      area: "on Request",
      size: "on Request",
      type: "Farm House",
      status: "Available",
      featured: true,
      highlights: ["Farm House", "Natural Environment", "Investment Opportunity"]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-full px-6 py-3 mb-4 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-600 mr-2 animate-pulse" />
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Featured Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Premium Projects
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated portfolio of residential and commercial projects 
            designed to provide exceptional value and modern living experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 ${
                project.featured ? 'ring-2 ring-emerald-400 ring-offset-4' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  Featured
                </div>
              )}

              {/* Status Badge */}
              <div className={`absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm ${
                project.status === 'Available' 
                  ? 'bg-green-500/90 text-white' 
                  : 'bg-yellow-500/90 text-white'
              }`}>
                {project.status}
              </div>

              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Floating Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-xs text-gray-500 font-medium">Starting from</div>
                  <div className="text-2xl font-bold text-emerald-600">₹ {project.price}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm">{project.subtitle}</p>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Area</span>
                    <div className="font-bold text-gray-900 mt-1">{project.area}</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Size</span>
                    <div className="font-bold text-gray-900 mt-1">{project.size}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to={`/project-details/${project.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                    View Full Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link to="/all-projects">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              View All Projects
              <TrendingUp className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;