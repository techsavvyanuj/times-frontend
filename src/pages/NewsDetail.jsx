import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, User, MapPin, Tag, Share2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useMetaTags } from '../hooks/useMetaTags'

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:4000/api' 
  : 'https://api.timesnowindia24.live/api';

const NewsDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { isHindi } = useLanguage()
  const [newsItem, setNewsItem] = useState(location.state)
  const [loading, setLoading] = useState(!location.state)
  const [error, setError] = useState(null)
  
  React.useEffect(() => {
    // Store original styles
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow
    
    // Apply styles to prevent background scrolling only
    document.body.classList.add('news-detail-open')
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    // Prevent scroll events only on body and document, but allow within news container
    const preventBackgroundScroll = (e) => {
      // Allow scrolling within the news content container
      const newsContainer = document.querySelector('.news-content-container')
      if (newsContainer && (newsContainer.contains(e.target) || newsContainer === e.target)) {
        return true // Allow scrolling
      }
      
      // Prevent scrolling on body/document
      if (e.target === document.body || e.target === document.documentElement) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
    
    const preventTouchMove = (e) => {
      // Allow scrolling within the news content container
      const newsContainer = document.querySelector('.news-content-container')
      if (newsContainer && (newsContainer.contains(e.target) || newsContainer === e.target)) {
        return true // Allow scrolling
      }
      e.preventDefault()
      e.stopPropagation()
      return false
    }
    
    // Add event listeners only for background scroll prevention
    document.body.addEventListener('wheel', preventBackgroundScroll, { passive: false })
    document.body.addEventListener('touchmove', preventTouchMove, { passive: false })
    document.addEventListener('touchmove', preventTouchMove, { passive: false })
    
    return () => {
      // Remove event listeners
      document.body.removeEventListener('wheel', preventBackgroundScroll)
      document.body.removeEventListener('touchmove', preventTouchMove)
      document.removeEventListener('touchmove', preventTouchMove)
      
      // Restore original styles
      document.body.classList.remove('news-detail-open')
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
    }
  }, [])

  // Fetch news data if not provided via navigation state (direct link access)
  useEffect(() => {
    if (!newsItem && id) {
      const fetchNewsData = async () => {
        try {
          setLoading(true)
          setError(null)
          
          // Try to fetch from your API - you may need to adjust this endpoint
          const response = await fetch(`${API_URL}/news/${id}`)
          
          if (!response.ok) {
            throw new Error('News article not found')
          }
          
          const data = await response.json()
          
          // Format the data to match expected structure
          const formattedNews = {
            headline: data.title || data.headline || '',
            title: data.title || '',
            shortDescription: data.summary || data.description || '',
            fullDescription: data.content || data.fullContent || data.summary || 'Full content not available.',
            content: data.content || data.summary || 'Content not available.',
            thumbnailUrl: data.image || data.thumbnail || '',
            location: data.location || data.city || '',
            category: data.category || '',
            timestamp: data.time || data.timestamp || data.createdAt || ''
          }
          
          setNewsItem(formattedNews)
        } catch (err) {
          console.error('Error fetching news:', err)
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }

      fetchNewsData()
    }
  }, [id, newsItem])

  // Set up meta tags for social sharing
  useMetaTags({
    title: newsItem ? `${newsItem.headline || newsItem.title} - Times Now India 24/7` : 'Times Now India 24/7',
    description: newsItem ? (newsItem.shortDescription || newsItem.summary || (newsItem.content && newsItem.content.substring(0, 160))) : 'Latest breaking news and current affairs',
    
    // Open Graph Tags for Facebook/WhatsApp
    'og:title': newsItem ? (newsItem.headline || newsItem.title) : 'Times Now India 24/7',
    'og:description': newsItem ? (newsItem.shortDescription || newsItem.summary || (newsItem.content && newsItem.content.substring(0, 160))) : 'Latest breaking news and current affairs',
    'og:image': newsItem ? (newsItem.thumbnailUrl || newsItem.image || 'https://timesnowindia24.live/default-news-image.jpg') : 'https://timesnowindia24.live/og-image.jpg',
    'og:url': typeof window !== 'undefined' ? window.location.href : '',
    'og:type': 'article',
    'og:site_name': 'Times Now India 24/7',
    'article:published_time': newsItem ? (newsItem.timestamp || new Date().toISOString()) : '',
    'article:author': 'Times Now India',
    'article:section': newsItem ? (newsItem.category || 'News') : 'News',
    
    // Twitter Card Tags
    'twitter:card': 'summary_large_image',
    'twitter:title': newsItem ? (newsItem.headline || newsItem.title) : 'Times Now India 24/7',
    'twitter:description': newsItem ? (newsItem.shortDescription || newsItem.summary || (newsItem.content && newsItem.content.substring(0, 160))) : 'Latest breaking news and current affairs',
    'twitter:image': newsItem ? (newsItem.thumbnailUrl || newsItem.image || 'https://timesnowindia24.live/default-news-image.jpg') : 'https://timesnowindia24.live/og-image.jpg',
    'twitter:site': '@TimesNowIndia',
    
    // Additional Meta Tags
    author: 'Times Now India',
    news_keywords: newsItem ? (newsItem.category || 'breaking news, india news, latest news') : 'breaking news, india news, latest news'
  })

  // Show loading state while fetching data
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
        <div className="text-center p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {isHindi ? 'लोड हो रहा है...' : 'Loading...'}
          </h2>
        </div>
      </div>
    )
  }

  // Show error state if failed to load
  if (error || !newsItem) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
        <div className="text-center p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            {isHindi ? 'कोई समाचार नहीं मिला' : 'No news found'}
          </h2>
          <p className="text-gray-600 mb-4">
            {error || (isHindi ? 'इस समाचार को लोड नहीं किया जा सका।' : 'Unable to load this news article.')}
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            {isHindi ? 'होम पेज पर जाएं' : 'Go to Homepage'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm flex-shrink-0">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            {isHindi ? 'वापस' : 'Back'}
          </button>
        </div>
      </div>

      {/* Article Content - Scrollable Container */}
      <div className="news-content-container flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Article Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
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
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
              <div className="p-4 sm:p-6">
                <div className="prose prose-sm sm:prose-lg max-w-none">
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
    </div>
  )
}

export default NewsDetail