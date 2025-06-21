import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { MapPin, ArrowRight, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Shri Hari Vatika",
      subtitle: "Residential Plots",
      location: "Jewar Airport, Yamuna Expressway",
      image: "/images/plots/vatika.jpg",
      price: "16 Lac",
      area: "1000-2000 Sq.Ft",
      size: "50-200 Sq.Yard",
      type: "Residential Plots",
      status: "Available",
      featured: true,
      category: "Plots"
    },
    {
      id: 2,
      title: "Shri Hari Vatika Phase-2",
      subtitle: "Corner Plot",
      location: "Jewar Airport, Yamuna Expressway",
      image: "/images/plots/vatika_phase.jpg",
      price: " 17 Lac",
      area: "100 Gaj",
      size: "on Request",
      type: "society Plots",
      status: "Available",
      featured: false,
      category: "Plots"
    },
    {
      id: 3,
      title: "Shri Hari Vatika Farm House",
      subtitle: "Commercial Plots",
      location: "Jewar, Greater Noida",
      image: "/images/plots/vatika_home.jpg",
      price: "18 Lac",
      area: "100 Gaj",
      size: "on Request",
      type: "Farm Commercial",
      status: "Available",
      featured: false,
      category: "Farm Commercial"
    },
   {
      id: 4,
      title: "Residential Plots",
      subtitle: "Premium Commercial Plots",
      location: "Jewar, Greater Noida",
      image: "/images/plots/vatika_home.jpg",
      price: "16-20 Lac",
      area: "100 Gaj",
      size: "100 gaj",
      type: "Residential",
      status: "Available",
      featured: true,
      category: "Residential"
    },
    {
      id: 5,
      title: "Shri Hari Vatika Luxury",
      subtitle: "Luxury Residential Plots",
      location: "Noida Extension",
      image: "/images/plots/vatika.jpg",
      price: "18-20 Lac",
      area: "1200-1800 Sq.Ft",
      size: "2-3 BHK",
      type: "Apartments",
      status: "Under Construction",
      featured: false,
      category: "Residential"
    },
    {
      id: 6,
      title: "shri Hari Vatika Township",
      subtitle: "Integrated Township",
      location: "Jewar, Greater Noida",
      image: "/images/plots/vatika_twon.jpg",
      price: "20-25 Lac",
      area: "1500-2500 Sq.Ft",
      size: "3-4 BHK",
      type: "Township",
      status: "Available",
      featured: false,
      category: "Township"
    } 
  ];

  const categories = ['All', 'Plots', 'Residential', 'Farm House', 'Township'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All Projects</h1>
            <p className="text-xl text-emerald-100">Explore our complete portfolio of premium real estate projects</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  onClick={() => setSelectedFilter(category)}
                  className={`${
                    selectedFilter === category 
                      ? 'bg-emerald-600 text-white' 
                      : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  project.featured ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-sm font-semibold ${
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
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-emerald-600 font-medium text-sm">{project.subtitle}</p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
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

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">₹ {project.price}</div>
                      <div className="text-xs text-gray-500">{project.type}</div>
                    </div>
                    <Link to={`/project-details/${project.id}`}>
                      <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No projects found matching your criteria.</div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AllProjects;