import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import HeroCarousel from '../components/HeroCarousel'
import QuickAccessWidgets from '../components/QuickAccessWidgets'
import NewsFeed from '../components/NewsFeed'
import UtilityTools from '../components/UtilityTools'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const { language, isHindi } = useLanguage()
  const navigate = useNavigate()
  
  // Add fallback to prevent crashes
  const t = translations[language] || translations['English']

  // Fetch breaking news from backend (admin panel)
  const [breakingNews, setBreakingNews] = useState([])
  const [bnLoading, setBnLoading] = useState(true)
  const [bnError, setBnError] = useState(null)

  // Fetch featured stories from backend
  const [featuredStories, setFeaturedStories] = useState([])
  const [fsLoading, setFsLoading] = useState(true)
  const [fsError, setFsError] = useState(null)

  useEffect(() => {
    let mounted = true
    const API_BASE = window.location.hostname === 'localhost' 
      ? 'http://localhost:4000/api' 
      : 'https://api.timesnowindia24.live/api'

    const fetchBreaking = async () => {
      try {
        setBnLoading(true)
        const res = await fetch(`${API_BASE}/breaking-news`)
        if (!res.ok) throw new Error('Failed to fetch breaking news')
        const data = await res.json()
        if (!Array.isArray(data)) throw new Error('Invalid breaking news data')

        const mapped = data.map(item => ({
          id: item.id,
          title: item.headline || '',
          description: item.shortDescription || '',
          summary: item.shortDescription || item.fullDescription || '',
          category: item.state || (isHindi ? 'ताज़ा' : 'Breaking'),
          image: item.thumbnail || item.videoUrl || 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Breaking+News',
          views: item.views || '',
          time: item.timestamp ? new Date(item.timestamp).toLocaleString() : '',
          // videoUrl: link to small preview uploaded to Cloudinary (used for 15s preview)
          videoUrl: item.videoUrl || '',
          // youtubeUrl: full video on YouTube (used by "Visit YouTube Channel" button)
          youtubeUrl: item.youtubeUrl || '',
          fullContent: item.fullDescription || ''
        }))

        if (mounted) {
          setBreakingNews(mapped)
          setBnError(null)
        }
      } catch (err) {
        console.error('Error fetching breaking news:', err)
        if (mounted) setBnError('Failed to load breaking news')
      } finally {
        if (mounted) setBnLoading(false)
      }
    }

    fetchBreaking()
    const interval = setInterval(fetchBreaking, 30000)
    return () => { mounted = false; clearInterval(interval) }
  }, [isHindi])

  // Fetch featured stories from backend
  useEffect(() => {
    let mounted = true
    
    const fetchFeaturedStories = async () => {
      try {
        setFsLoading(true)
        const API_BASE = window.location.hostname === 'localhost' 
          ? 'http://localhost:4000/api' 
          : 'https://api.timesnowindia24.live/api'
          
        const response = await fetch(`${API_BASE}/featured-stories`)
        if (!response.ok) throw new Error('Failed to fetch featured stories')
        
        const data = await response.json()
        if (mounted) {
          // Sort by priority and limit to top 3
          const sortedStories = Array.isArray(data) 
            ? data.sort((a, b) => (a.priority || 1) - (b.priority || 1)).slice(0, 3)
            : []
          setFeaturedStories(sortedStories)
          setFsError(null)
        }
      } catch (error) {
        console.error('Error fetching featured stories:', error)
        if (mounted) {
          setFsError(error.message)
          setFeaturedStories([]) // Fallback to empty array
        }
      } finally {
        if (mounted) setFsLoading(false)
      }
    }

    fetchFeaturedStories()
    const interval = setInterval(fetchFeaturedStories, 60000) // Refresh every minute
    return () => { mounted = false; clearInterval(interval) }
  }, [isHindi])

  // Helper function to get time ago
  const getTimeAgo = (timestamp) => {
    if (!timestamp) return ''
    const now = new Date()
    const past = new Date(timestamp)
    const diffInMinutes = Math.floor((now - past) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  }

  // Format featured stories for display
  const formattedFeaturedStories = featuredStories.map(story => ({
    id: story.id,
    title: story.title,
    description: story.description,
    summary: story.description,
    content: story.content,
    fullContent: story.content,
    category: story.category,
    image: story.imageUrl || 'https://via.placeholder.com/300x200/1f2937/ffffff?text=Story',
    views: story.views || '0',
    timeAgo: getTimeAgo(story.timestamp)
  }))

  // Dummy data with fallbacks (commented out - now using API)
  // const featuredStories = [...]

  const handleViewMoreNews = (category) => {
    // Navigate to appropriate category page based on the news type
    switch (category) {
      case 'Breaking News':
      case 'ताजा समाचार':
        navigate('/india')
        break
      case 'Featured Stories':
      case 'विशेष कहानियां':
        navigate('/entertainment')
        break
      default:
        navigate('/india')
    }
  }



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Main Content - Mobile Responsive */}
      <div className="mobile-container py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Breaking News */}
            <NewsFeed 
              title={t?.breakingNews || 'Breaking News'}
              articles={breakingNews}
              showViewAll={true}
            />
            
            {/* Quick Access Widgets */}
            <QuickAccessWidgets />

            {/* Featured Stories */}
            <NewsFeed 
              title={t?.featuredStories || 'Featured Stories'}
              articles={formattedFeaturedStories}
              showViewAll={true}
            />

            {/* Utility Tools */}
            <UtilityTools />
          </div>
          
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
