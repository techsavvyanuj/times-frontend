import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Play, Trophy, Clock, Eye, TrendingUp, Circle, Square, Star } from 'lucide-react'

const Sports = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const sportsNews = [
    {
      id: 1,
      title: "Cricket: India vs Australia - Thrilling Final Over Victory",
      description: "India clinches victory in the final over thriller against Australia in the T20 series decider.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Cricket+News",
      category: "Cricket",
      readTime: "4 min read",
      views: "28.5K views",
      publishedAt: "1 hour ago",
      matchResult: "India won by 6 wickets",
      venue: "Melbourne Cricket Ground",
      tags: ['T20', 'International', 'Victory']
    },
    {
      id: 2,
      title: "IPL 2024: New Team Announcement and Player Auctions",
      description: "IPL announces new franchise and reveals details about upcoming mega player auction.",
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=IPL+News",
      category: "IPL",
      readTime: "6 min read",
      views: "22.3K views",
      publishedAt: "2 hours ago",
      matchResult: "New Team Launch",
      venue: "BCCI Headquarters",
      tags: ['IPL 2024', 'New Team', 'Auction']
    },
    {
      id: 3,
      title: "Football: Premier League Title Race Heats Up",
      description: "Intense competition in Premier League as top teams battle for the championship title.",
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Football+News",
      category: "Football",
      readTime: "5 min read",
      views: "18.7K views",
      publishedAt: "3 hours ago",
      matchResult: "Man City 2-1 Liverpool",
      venue: "Etihad Stadium",
      tags: ['Premier League', 'Title Race', 'Victory']
    },
    {
      id: 4,
      title: "Olympics: Indian Athletes Prepare for Paris 2024",
      description: "Indian Olympic contingent gears up for Paris 2024 with intensive training and preparation.",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Olympics+News",
      category: "Others",
      readTime: "7 min read",
      views: "15.2K views",
      publishedAt: "4 hours ago",
      matchResult: "Training Camp",
      venue: "National Sports Complex",
      tags: ['Olympics', 'Training', 'Preparation']
    },
    {
      id: 5,
      title: "Tennis: Grand Slam Tournament Updates",
      description: "Latest updates from major tennis tournaments including player rankings and match results.",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Tennis+News",
      category: "Others",
      readTime: "6 min read",
      views: "12.8K views",
      publishedAt: "5 hours ago",
      matchResult: "Quarter Finals",
      venue: "Various Venues",
      tags: ['Tennis', 'Grand Slam', 'Rankings']
    },
    {
      id: 6,
      title: "Hockey: National Team Performance Analysis",
      description: "Comprehensive analysis of Indian hockey team's recent performances and future prospects.",
      image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Hockey+News",
      category: "Others",
      readTime: "5 min read",
      views: "9.6K views",
      publishedAt: "6 hours ago",
      matchResult: "Performance Review",
      venue: "National Stadium",
      tags: ['Hockey', 'Analysis', 'Prospects']
    }
  ]

  const filteredNews = activeTab === 'all' 
    ? sportsNews 
    : sportsNews.filter(item => item.category.toLowerCase() === activeTab)

  const tabs = [
    { id: 'all', label: isHindi ? 'सभी' : 'All', icon: TrendingUp },
    { id: 'cricket', label: isHindi ? 'क्रिकेट' : 'Cricket', icon: Circle },
    { id: 'ipl', label: 'IPL', icon: Trophy },
    { id: 'football', label: isHindi ? 'फुटबॉल' : 'Football', icon: Square },
    { id: 'others', label: isHindi ? 'अन्य' : 'Others', icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'क्रिकेट, फुटबॉल और अन्य खेलों से ताजा समाचार, लाइव अपडेट्स, मैच परिणाम और विश्लेषण' 
              : 'Latest sports news, live updates, match results, player interviews, and comprehensive coverage of all major sporting events.'
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
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
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
                      <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
                        <Trophy size={14} className="mr-1" />
                        {item.matchResult}
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
                      
                      <div className="bg-gray-50 p-3 rounded mb-3">
                        <div className="text-sm text-gray-600 mb-1">
                          <strong>{isHindi ? 'मैच परिणाम:' : 'Match Result:'}</strong> {item.matchResult}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>{isHindi ? 'स्थान:' : 'Venue:'}</strong> {item.venue}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                          <Play size={16} className="mr-2" />
                          {isHindi ? 'पढ़ें' : 'Read More'}
                        </button>
                        <Link
                          to={`/sports/${item.category.toLowerCase()}`}
                          className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
                        >
                          {isHindi ? 'श्रेणी' : 'Category'}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sports Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'खेल श्रेणियां' : 'Sports Categories'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link
                    to="/sports/cricket"
                    className="text-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors duration-200 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏏</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {isHindi ? 'क्रिकेट' : 'Cricket'}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3">
                      {isHindi 
                        ? 'अंतरराष्ट्रीय और घरेलू क्रिकेट समाचार' 
                        : 'International and domestic cricket news'
                      }
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                  
                  <Link
                    to="/sports/ipl"
                    className="text-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors duration-200 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">IPL</h3>
                    <p className="text-gray-600 text-xs mb-3">
                      {isHindi 
                        ? 'IPL 2024 के सभी अपडेट्स' 
                        : 'All updates from IPL 2024'
                      }
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                  
                  <Link
                    to="/sports/football"
                    className="text-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors duration-200 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">⚽</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {isHindi ? 'फुटबॉल' : 'Football'}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3">
                      {isHindi 
                        ? 'प्रीमियर लीग और अन्य फुटबॉल समाचार' 
                        : 'Premier League and other football news'
                      }
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
                      {isHindi ? 'देखें' : 'View'}
                    </button>
                  </Link>
                  
                  <Link
                    to="/sports/others"
                    className="text-center p-4 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors duration-200 group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏅</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {isHindi ? 'अन्य खेल' : 'Other Sports'}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3">
                      {isHindi 
                        ? 'टेनिस, हॉकी, बैडमिंटन और अन्य खेल' 
                        : 'Tennis, Hockey, Badminton and more'
                      }
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
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

export default Sports
