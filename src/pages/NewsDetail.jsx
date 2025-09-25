import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, User, MapPin, Tag, Share2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const NewsDetail = () => {
  React.useEffect(() => {
    // Prevent background scroll when NewsDetail is mounted
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const location = useLocation()
  const navigate = useNavigate()
  const { isHindi } = useLanguage()
  
  const newsItem = location.state

  // If no news data is passed, redirect back
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {isHindi ? 'कोई समाचार नहीं मिला' : 'No news found'}
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            {isHindi ? 'वापस जाएं' : 'Go Back'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            {isHindi ? 'वापस' : 'Back'}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Article Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {newsItem.headline || newsItem.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{isHindi ? 'टाइम्स नाउ इंडिया' : 'Times Now India'}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                {newsItem.location && (
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{newsItem.location}</span>
                  </div>
                )}
              </div>

              {newsItem.shortDescription && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {newsItem.shortDescription}
                </p>
              )}
            </div>

            {/* Article Image */}
            {newsItem.thumbnailUrl && (
              <div className="relative">
                <img
                  src={newsItem.thumbnailUrl}
                  alt={newsItem.headline || newsItem.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            {/* Article Body */}
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-800 leading-relaxed">
                  {/* Split content into paragraphs for better readability */}
                  {(newsItem.fullDescription || newsItem.content || '')
                    .split('\n\n')
                    .filter(paragraph => paragraph.trim())
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph.trim()}
                      </p>
                    ))
                  }
                </div>
              </div>

              {/* Video if available */}
              {newsItem.videoUrl && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {isHindi ? 'संबंधित वीडियो' : 'Related Video'}
                  </h3>
                  <div className="relative aspect-video">
                    <iframe
                      src={newsItem.videoUrl}
                      title="News Video"
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Share2 size={18} />
                    <span>{isHindi ? 'साझा करें' : 'Share'}</span>
                  </button>
                </div>
                
                <button
                  onClick={() => navigate('/india')}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  {isHindi ? 'और समाचार' : 'More News'}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
