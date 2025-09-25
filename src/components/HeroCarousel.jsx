import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:4000/api' 
  : 'https://api.timesnowindia24.live/api';

function HeroCarousel() {
  const { language, isHindi } = useLanguage();
  const t = translations[language] || translations['English'];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posters initially and refresh every 30 seconds
  useEffect(() => {
    fetchPosters();
    // Set up auto-refresh
    const refreshInterval = setInterval(fetchPosters, 30000);
    return () => clearInterval(refreshInterval);
  }, []);

  const fetchPosters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/posters`);
      if (!response.ok) throw new Error('Failed to fetch posters');
      const data = await response.json();
      
      // Ensure we have valid poster data
      if (!Array.isArray(data)) {
        throw new Error('Invalid poster data received');
      }

      // Filter out any invalid posters and ensure required fields
      const validPosters = data.filter(poster => poster && poster.id && (poster.title || poster.image));
      
      if (validPosters.length === 0) {
        throw new Error('No valid posters found');
      }

      console.log('Fetched posters:', validPosters);
      setPosters(validPosters);
      setError(null);
    } catch (err) {
      console.error('Error fetching posters:', err);
      setError('Failed to load hero posters');
      setPosters([]); // Reset posters on error
    } finally {
      setLoading(false);
    }
  };

  // Transform the posters into the required story format
  const heroStories = posters.map(poster => ({
    id: poster.id,
    title: poster.title || '',
    description: poster.description || '',
    category: poster.category || '',
    image: poster.image || 'https://via.placeholder.com/1200x500/cccccc/ffffff?text=No+Image',
    readTime: poster.readTime || '3 min read',
    youtubeUrl: poster.youtubeUrl || '#',
    link: poster.link || '',
    fullContent: poster.fullContent || poster.description || ''
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroStories.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories.length) % heroStories.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleReadMore = (story) => {
    setSelectedStory(story)
    setShowVideoModal(true)
  }

  const closeModal = () => {
    setShowVideoModal(false)
    setSelectedStory(null)
  }

  return (
    <>
      <div className="relative w-full mobile-hero overflow-hidden rounded-lg">
      {/* Main Carousel */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-gray-600">Loading...</div>
          </div>
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-red-600">{error}</div>
          </div>
        ) : (
          heroStories.map((story, index) => (
            <div
              key={story.id}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-contain"
              />
              {story.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                  <div className="max-w-7xl mx-auto">
                                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight line-clamp-3 sm:line-clamp-2">
                    {language === 'hi' && story.hindTitle ? story.hindTitle : story.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-3 sm:line-clamp-2 overflow-hidden">
                    {language === 'hi' && story.hindSummary ? story.hindSummary : story.summary}
                  </p>
                  </div>
                </div>
              )}
            </div>
          ))
        )}        {/* Navigation Arrows - Mobile Responsive */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicator - Mobile Responsive */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {heroStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal - Mobile Responsive */}
      {showVideoModal && selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
          <div className="bg-white rounded-lg w-full max-h-[90vh] overflow-y-auto mobile-modal">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800">
                  {selectedStory.title}
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl p-1"
                >
                  ×
                </button>
              </div>
              
              {/* 15-second video placeholder - Mobile Responsive */}
              <div className="mb-4 sm:mb-6">
                <div className="bg-gray-200 rounded-lg h-48 sm:h-56 md:h-64 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">🎥</div>
                    <p className="mobile-text-sm sm:mobile-text-base text-gray-600 mb-1 sm:mb-2">15-Second News Preview</p>
                    <p className="text-xs sm:text-sm text-gray-500">Video would play here for 15 seconds</p>
                  </div>
                </div>
              </div>
              
              {/* News Content - Mobile Responsive */}
              <div className="mb-4 sm:mb-6">
                <h3 className="mobile-text-base sm:mobile-text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {isHindi ? 'समाचार का सारांश' : 'News Summary'}
                </h3>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-700 leading-relaxed">
                  {selectedStory.fullContent}
                </p>
              </div>
              
              {/* YouTube Channel Link - Mobile Responsive */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                <h4 className="mobile-text-base sm:mobile-text-lg font-semibold text-yellow-800 mb-2">
                  {isHindi ? 'पूरा समाचार देखें' : 'Watch Full News'}
                </h4>
                <p className="mobile-text-sm sm:mobile-text-base text-yellow-700 mb-2 sm:mb-3">
                  {isHindi ? '15 सेकंड के बाद, हमारे YouTube चैनल पर जाकर पूरा समाचार देखें।' : 'After 15 seconds, visit our YouTube channel to watch the full news.'}
                </p>
                <a 
                  href={selectedStory.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {isHindi ? 'YouTube चैनल पर जाएं' : 'Visit YouTube Channel'}
                </a>
              </div>
            </div>
          </div>
      </div>
        )}
      </div>
    </>
  )
}

export default HeroCarousel
