
import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jewar International Airport"
    },
    {
      url: "https://content3.jdmagicbox.com/v2/comp/delhi/r4/011pxx11.xx11.120605145321.j8r4/catalogue/noida-international-university-yamuna-expressway-noida-computer-training-institutes-bbvtaqq7ul.jpg",
      title: "International University Near Jewar Airport"
    },
    {
      url: "https://sportsdigest.in/wp-content/uploads/2023/06/F1-at-Buddh-International-Circuit.jpeg",
      title: "Buddh International Circuit"
    },
    {
      url: "https://images.indianexpress.com/2020/09/Film-city-1.jpg",
      title: "Film City Near Jewar Airport"
    },
    {
      url: "https://images.unsplash.com/photo-1461175827210-5ceac3e39dd2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shri Hari Vatika Plots"
    },
    {
      url: "https://images.unsplash.com/photo-1705955463252-e3f670e4041b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "2030 Development Progress for Shri Hari Vatika"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the beauty and potential of Shri Hari Vatika through our collection 
            of images showcasing the location, development, and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want to See More?</h3>
            <p className="text-gray-600 mb-6">
              Schedule a site visit to experience the location firsthand and see the development progress.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
