import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Play, Star, Clock, Eye, TrendingUp, Circle, Square, Triangle } from 'lucide-react'

const Entertainment = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const entertainmentNews = [
    {
      id: 1,
      title: "Bollywood: New Blockbuster Movie Breaks Box Office Records",
      description: "Latest Bollywood release sets new records with unprecedented opening day collections and audience response.",
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Bollywood+News",
      category: "Bollywood",
      readTime: "5 min read",
      views: "22.5K views",
      publishedAt: "2 hours ago",
      rating: 4.8,
      tags: ['Action', 'Drama', 'Box Office']
    },
    {
      id: 2,
      title: "OTT: New Web Series Takes Streaming World by Storm",
      description: "Critically acclaimed web series becomes the most-watched show on streaming platforms this month.",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=OTT+News",
      category: "OTT",
      readTime: "4 min read",
      views: "18.7K views",
      publishedAt: "3 hours ago",
      rating: 4.6,
      tags: ['Drama', 'Thriller', 'Streaming']
    },
    {
      id: 3,
      title: "TV: Reality Show Contestant Makes Shocking Revelation",
      description: "Popular reality show contestant reveals unexpected details about their personal life on live television.",
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=TV+News",
      category: "TV",
      readTime: "6 min read",
      views: "15.3K views",
      publishedAt: "4 hours ago",
      rating: 4.3,
      tags: ['Reality', 'Entertainment', 'Live TV']
    },
    {
      id: 4,
      title: "Hollywood: Major Studio Announces New Franchise",
      description: "Hollywood studio reveals plans for a new multi-billion dollar franchise with A-list actors.",
      image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Hollywood+News",
      category: "Hollywood",
      readTime: "7 min read",
      views: "12.8K views",
      publishedAt: "5 hours ago",
      rating: 4.5,
      tags: ['Franchise', 'Action', 'Hollywood']
    },
    {
      id: 5,
      title: "Music: Chart-Topping Artist Announces World Tour",
      description: "International music sensation announces massive world tour with dates across multiple continents.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Music+News",
      category: "Music",
      readTime: "5 min read",
      views: "9.6K views",
      publishedAt: "6 hours ago",
      rating: 4.7,
      tags: ['Music', 'World Tour', 'International']
    },
    {
      id: 6,
      title: "Fashion: Designer Collection Showcases at Paris Fashion Week",
      description: "Renowned fashion designer presents stunning new collection at the prestigious Paris Fashion Week.",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fashion+News",
      category: "Fashion",
      readTime: "6 min read",
      views: "8.2K views",
      publishedAt: "7 hours ago",
      rating: 4.4,
      tags: ['Fashion', 'Design', 'Paris']
    }
  ]

  const filteredNews = activeTab === 'all' 
    ? entertainmentNews 
    : entertainmentNews.filter(item => item.category.toLowerCase() === activeTab)

  const tabs = [
    { id: 'all', label: isHindi ? 'सभी' : 'All', icon: TrendingUp },
    { id: 'bollywood', label: isHindi ? 'बॉलीवुड' : 'Bollywood', icon: Circle },
    { id: 'ott', label: 'OTT', icon: Square },
    { id: 'tv', label: isHindi ? 'टीवी' : 'TV', icon: Triangle }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entertainment</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'बॉलीवुड, OTT और टीवी से ताजा समाचार, सेलिब्रिटी अपडेट्स, मूवी रिव्यू और अधिक' 
              : 'Latest entertainment news, celebrity updates, movie reviews, TV shows, music, and fashion from Bollywood, Hollywood, and beyond.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Tabs */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'श्रेणी के अनुसार फ़िल्टर करें' : 'Filter by Category'}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                        }`}
                      >
                        <IconComponent size={18} />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredNews.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {item.category}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-sm font-medium flex items-center">
                        <Star size={14} className="mr-1" />
                        {item.rating}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {item.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {item.views}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
                          <Play size={16} className="mr-2" />
                          {isHindi ? 'पढ़ें' : 'Read More'}
                        </button>
                        <Link
                          to={`/entertainment/${item.category.toLowerCase()}`}
                          className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
                        >
                          {isHindi ? 'श्रेणी' : 'Category'}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Entertainment Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'मनोरंजन श्रेणियां' : 'Entertainment Categories'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    to="/entertainment/bollywood"
                    className="text-center p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors duration-200 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎬</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Bollywood</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {isHindi 
                        ? 'ताजा बॉलीवुड फिल्में, सेलिब्रिटी समाचार, बॉक्स ऑफिस अपडेट्स और उद्योग की अंतर्दृष्टि।' 
                        : 'Latest Bollywood movies, celebrity news, box office updates, and industry insights.'
                      }
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                  
                  <Link
                    to="/entertainment/ott"
                    className="text-center p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors duration-200 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📺</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">OTT</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {isHindi 
                        ? 'नेटफ्लिक्स, अमेजन प्राइम, डिज्नी+ हॉटस्टार और अन्य प्लेटफॉर्म्स से ताजा समाचार।' 
                        : 'Latest news from Netflix, Amazon Prime, Disney+ Hotstar, and other platforms.'
                      }
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                  
                  <Link
                    to="/entertainment/tv"
                    className="text-center p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors duration-200 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📡</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">TV</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {isHindi 
                        ? 'टीवी शो, रियलिटी प्रोग्राम, सोप ओपेरा और टेलीविजन उद्योग से ताजा अपडेट्स।' 
                        : 'Latest updates from TV shows, reality programs, soap operas, and television industry.'
                      }
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Entertainment
