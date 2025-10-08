import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const NewsFeed = ({ title, articles, showViewAll = false }) => {
  const { language, isHindi } = useLanguage()
  const navigate = useNavigate()
  const t = translations[language] || translations['English']
  const [selectedNews, setSelectedNews] = useState(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const videoRef = useRef(null)
  const previewTimerRef = useRef(null)

  // Use provided articles or empty list — remove hardcoded dummy news
  const newsItems = Array.isArray(articles) ? articles : []

  const handleNewsClick = (newsItem) => {
    // For breaking news with video, show video modal
    if (newsItem.videoUrl || newsItem.youtubeUrl) {
      setSelectedNews(newsItem)
      setShowVideoModal(true)
    } else {
      // For regular news articles, navigate to news detail page
      const newsData = {
        headline: newsItem.title || newsItem.headline || '',
        title: newsItem.title || '',
        shortDescription: newsItem.summary || newsItem.description || '',
        fullDescription: newsItem.content || newsItem.fullContent || newsItem.summary || 'Full content not available.',
        content: newsItem.content || newsItem.summary || 'Content not available.',
        thumbnailUrl: newsItem.image || newsItem.thumbnail || '',
        location: newsItem.location || newsItem.city || '',
        category: newsItem.category || '',
        timestamp: newsItem.time || newsItem.timestamp || ''
      }
      navigate(`/news/${newsItem.id}`, { state: newsData })
    }
  }

  const handleShare = async (newsItem, platform) => {
    const articleUrl = `${window.location.origin}/news/${newsItem.id}`
    const shareData = {
      title: newsItem.title,
      text: newsItem.summary,
      url: articleUrl
    }

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}&quote=${encodeURIComponent(newsItem.title)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(newsItem.title)}&url=${encodeURIComponent(articleUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(newsItem.title + ' ' + articleUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(newsItem.title)}`
    }

    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  const closeModal = () => {
    setShowVideoModal(false)
    setSelectedNews(null)
    // stop and cleanup preview timer when modal closes
    if (videoRef.current) {
      try { videoRef.current.pause() } catch(e) {}
    }
    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current)
      previewTimerRef.current = null
    }
  }

  // When modal opens / selectedNews changes, play preview video for 15s if available
  useEffect(() => {
    // clear any previous timer
    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current)
      previewTimerRef.current = null
    }

    if (showVideoModal && selectedNews && selectedNews.videoUrl) {
      const videoEl = videoRef.current
      if (videoEl) {
        // attempt to play from start
        videoEl.currentTime = 0
        const playPromise = videoEl.play()
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {
            // autoplay might be blocked; ignore and rely on controls
          })
        }

        // Pause after 15 seconds
        previewTimerRef.current = setTimeout(() => {
          try { videoEl.pause() } catch(e) {}
          previewTimerRef.current = null
        }, 15000)
      }
    }

    return () => {
      if (previewTimerRef.current) {
        clearTimeout(previewTimerRef.current)
        previewTimerRef.current = null
      }
    }
  }, [showVideoModal, selectedNews])

  const handleViewMoreNews = () => {
    // Navigate to appropriate category page based on the title
    if (title?.includes('Breaking') || title?.includes('ताजा')) {
      navigate('/india')
    } else if (title?.includes('Featured') || title?.includes('विशेष')) {
      navigate('/entertainment')
    } else {
      navigate('/india')
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md mobile-p">
        <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          {title || (isHindi ? 'ताजा समाचार' : 'Latest News')}
        </h2>
        
        <div className="space-y-3 sm:space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              {/* Image - Mobile Responsive */}
              <div className="flex-shrink-0">
                <img 
                  src={item.image || item.thumbnail || 'https://via.placeholder.com/200x120/cccccc/ffffff?text=No+Image'} 
                  alt={item.title}
                  className="w-full h-32 sm:w-48 sm:h-28 md:w-56 md:h-32 rounded-md cursor-pointer object-contain bg-gray-100"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x120/cccccc/ffffff?text=No+Image'; }}
                  onClick={() => handleNewsClick(item)}
                />
              </div>
              
              {/* Content - Mobile Responsive */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">{item.time || item.timeAgo}</span>
                </div>
                
                <h3 
                  className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:text-blue-600"
                  onClick={() => handleNewsClick(item)}
                >
                  {item.title}
                </h3>
                
                <p className="mobile-text-xs sm:mobile-text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap mb-3">
                  {item.summary || item.description}
                </p>

                {/* Action Buttons - Mobile Responsive */}
                <div className="mobile-btn-stack sm:mobile-btn-row">
                  <button 
                    onClick={() => handleNewsClick(item)}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-timesnow-red text-white rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm font-medium"
                  >
                    {isHindi ? 'समाचार देखें' : 'View News'}
                  </button>
                  
                  <button 
                    onClick={() => handleNewsClick(item)}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium"
                  >
                    {isHindi ? 'पढ़ें' : 'Read More'}
                  </button>

                  {/* Share Dropdown - Mobile Responsive */}
                  <div className="relative group">
                    <button className="px-3 py-2 sm:px-4 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium">
                      {isHindi ? 'शेयर करें' : 'Share'}
                    </button>
                    <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[180px] sm:min-w-[200px]">
                      <div className="p-2">
                        <button 
                          onClick={() => handleShare(item, 'native')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          📱 {isHindi ? 'शेयर करें' : 'Share'}
                        </button>
                        <button 
                          onClick={() => handleShare(item, 'facebook')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          📘 Facebook
                        </button>
                        <button 
                          onClick={() => handleShare(item, 'twitter')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          🐦 Twitter
                        </button>
                        <button 
                          onClick={() => handleShare(item, 'whatsapp')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          💬 WhatsApp
                        </button>
                        <button 
                          onClick={() => handleShare(item, 'linkedin')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          💼 LinkedIn
                        </button>
                        <button 
                          onClick={() => handleShare(item, 'telegram')}
                          className="w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                        >
                          📬 Telegram
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-4 sm:mt-6 text-center">
            <button 
              onClick={handleViewMoreNews}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm sm:text-base"
            >
              {isHindi ? 'और समाचार देखें' : 'View More News'}
            </button>
          </div>
        )}
      </div>

      {/* Video Modal - Mobile Responsive */}
      {showVideoModal && selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
          <div className="bg-white rounded-lg w-full max-h-[90vh] overflow-y-auto mobile-modal">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800">
                  {selectedNews.title}
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
                {selectedNews?.videoUrl ? (
                  <div className="rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      src={selectedNews.videoUrl}
                      className="w-full h-64 sm:h-96 md:h-[520px] object-contain bg-black rounded-md"
                      controls
                      muted
                    />
                    <div className="text-xs text-gray-500 mt-2">15-second preview — full video available on YouTube</div>
                  </div>
                ) : (
                  <div className="bg-gray-200 rounded-lg h-48 sm:h-56 md:h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">🎥</div>
                      <p className="mobile-text-sm sm:mobile-text-base text-gray-600 mb-1 sm:mb-2">15-Second News Preview</p>
                      <p className="text-xs sm:text-sm text-gray-500">Video would play here for 15 seconds</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* News Content - Mobile Responsive */}
              <div className="mb-4 sm:mb-6">
                <h3 className="mobile-text-base sm:mobile-text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {isHindi ? 'समाचार का सारांश' : 'News Summary'}
                </h3>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-700 leading-relaxed">
                  {selectedNews.fullContent}
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
                  href={selectedNews?.youtubeUrl}
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
    </>
  )
}

export default NewsFeed
