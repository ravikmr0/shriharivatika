import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Star, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Note: YouTube iframe API would be needed for actual control
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const stats = [
    { icon: Star, label: "Premium Projects", value: "3+", color: "text-yellow-500" },
    { icon: Award, label: "Government Approved", value: "100%", color: "text-emerald-500" },
    { icon: TrendingUp, label: "Expected ROI", value: "300-500%", color: "text-blue-500" }
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 font-medium text-sm">Video Overview</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            All Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Overview</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our premium real estate projects through an immersive video experience. 
            See the strategic locations, modern amenities, and investment potential firsthand.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Video Section */}
          <div className="lg:col-span-8">
            <div 
              ref={containerRef}
              className="relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Video Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black">
                {/* Decorative Frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/20 rounded-2xl md:rounded-3xl"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-black/50 to-transparent rounded-xl md:rounded-2xl"></div>
                
                {/* Video Iframe */}
                <div className="relative aspect-video">
                  <iframe
                    ref={videoRef}
                    src="https://www.youtube.com/embed/s0w7XiQ74_U?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&showinfo=0&enablejsapi=1"
                    title="All Project Overview - Harishyam Infra"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl"
                    frameBorder={0}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  ></iframe>
                </div>

                {/* Custom Overlay Controls */}
                <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'} rounded-2xl md:rounded-3xl`}>
                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">LIVE OVERVIEW</span>
                    </div>
                    <Button
                      onClick={handleFullscreen}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      onClick={togglePlay}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      ) : (
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Button
                        onClick={toggleMute}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </Button>
                      <span className="text-white text-sm">HD Quality</span>
                    </div>
                    <div className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                      Project Showcase
                    </div>
                  </div>
                </div>

                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-2xl md:rounded-3xl">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-white">Loading Project Overview...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Stats Overlay - Hidden on Mobile */}
              <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index} className="group">
                        <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                        <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs md:text-sm text-slate-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="space-y-6 md:space-y-8">
              {/* Key Highlights */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Video Highlights</h3>
                <div className="space-y-4">
                  {[
                    "Aerial view of Jewar Airport proximity",
                    "Complete infrastructure walkthrough", 
                    "Customer testimonials & success stories",
                    "Future development plans & ROI analysis"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Site Visit
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-2 border-white/30 text-white hover:bg-white/10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                  onClick={() => window.location.href = '/all-projects'}
                >
                  View All Projects
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-500/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Need More Information?</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Our real estate experts are ready to answer your questions and provide detailed project insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+917678538328"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/917678538328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Invest in Your Future?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of India's largest airport development project. 
              Early investors are already seeing significant returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Book Now
              </Button>
              <Button 
                variant="outline"
                className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 py-3 px-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => window.location.href = '/premium-plots'}
              >
                View Plots
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;