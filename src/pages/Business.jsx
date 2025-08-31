import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { TrendingUp, Building2, DollarSign, BarChart3, Globe, Factory, Car, Home, ShoppingBag, Plane, Clock } from 'lucide-react'

const Business = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const businessNews = [
    {
      id: 1,
      title: isHindi ? 'शेयर बाजार: सेंसेक्स 75,000 के निशान को पार करता है' : 'Stock Market: Sensex Crosses 75,000 Mark',
      description: isHindi ? 'भारतीय शेयर बाजार में सेंसेक्स ने पहली बार 75,000 का निशान पार किया है।' : 'Indian stock market Sensex crossed the 75,000 mark for the first time.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Stock+Market',
      category: 'Stock Market',
      readTime: '5 min read',
      views: '32.5K',
      publishedAt: '2 hours ago',
      trend: 'Bullish',
      change: '+2.5%',
      tags: ['Sensex', 'Nifty', 'Bull Market']
    },
    {
      id: 2,
      title: isHindi ? 'स्टार्टअप: नई तकनीक कंपनी को 100 करोड़ का फंडिंग' : 'Startup: New Tech Company Gets ₹100 Crore Funding',
      description: isHindi ? 'एक भारतीय स्टार्टअप को वेंचर कैपिटल फर्म से 100 करोड़ रुपये का फंडिंग मिला।' : 'An Indian startup received ₹100 crore funding from a venture capital firm.',
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Startup+News',
      category: 'Startup',
      readTime: '4 min read',
      views: '28.7K',
      publishedAt: '4 hours ago',
      trend: 'Positive',
      change: 'New Funding',
      tags: ['Funding', 'Venture Capital', 'Tech']
    },
    {
      id: 3,
      title: isHindi ? 'बैंकिंग: RBI ने नई डिजिटल बैंकिंग नीति की घोषणा' : 'Banking: RBI Announces New Digital Banking Policy',
      description: isHindi ? 'भारतीय रिजर्व बैंक ने डिजिटल बैंकिंग को बढ़ावा देने के लिए नई नीति की घोषणा की।' : 'Reserve Bank of India announced new policy to promote digital banking.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Banking+News',
      category: 'Banking',
      readTime: '6 min read',
      views: '25.3K',
      publishedAt: '6 hours ago',
      trend: 'Regulatory',
      change: 'New Policy',
      tags: ['RBI', 'Digital Banking', 'Policy']
    },
    {
      id: 4,
      title: isHindi ? 'रियल एस्टेट: मुंबई में प्रॉपर्टी की कीमतों में वृद्धि' : 'Real Estate: Property Prices Rise in Mumbai',
      description: isHindi ? 'मुंबई में रियल एस्टेट की कीमतों में पिछले तीन महीनों में 15% की वृद्धि हुई है।' : 'Real estate prices in Mumbai increased by 15% in the last three months.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Real+Estate',
      category: 'Real Estate',
      readTime: '5 min read',
      views: '22.8K',
      publishedAt: '8 hours ago',
      trend: 'Rising',
      change: '+15%',
      tags: ['Property', 'Mumbai', 'Price Rise']
    },
    {
      id: 5,
      title: isHindi ? 'ऑटोमोबाइल: इलेक्ट्रिक कार बिक्री में रिकॉर्ड वृद्धि' : 'Automobile: Record Growth in Electric Car Sales',
      description: isHindi ? 'भारत में इलेक्ट्रिक कार की बिक्री में पिछले वर्ष की तुलना में 200% की वृद्धि हुई।' : 'Electric car sales in India increased by 200% compared to last year.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Auto+News',
      category: 'Automobile',
      readTime: '4 min read',
      views: '19.6K',
      publishedAt: '10 hours ago',
      trend: 'Growing',
      change: '+200%',
      tags: ['Electric Cars', 'EV', 'Growth']
    },
    {
      id: 6,
      title: isHindi ? 'ई-कॉमर्स: फ्लिपकार्ट ने नई डिलीवरी सेवा लॉन्च की' : 'E-Commerce: Flipkart Launches New Delivery Service',
      description: isHindi ? 'फ्लिपकार्ट ने 10 मिनट में डिलीवरी की नई सेवा लॉन्च की है।' : 'Flipkart launched new delivery service with 10-minute delivery.',
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=E-Commerce',
      category: 'E-Commerce',
      readTime: '3 min read',
      views: '18.2K',
      publishedAt: '12 hours ago',
      trend: 'Innovation',
      change: 'New Service',
      tags: ['Flipkart', 'Delivery', 'Innovation']
    }
  ]

  const filteredNews = activeTab === 'all' 
    ? businessNews 
    : businessNews.filter(item => item.category.toLowerCase().replace(' ', '') === activeTab)

  const tabs = [
    { id: 'all', label: isHindi ? 'सभी' : 'All', icon: TrendingUp },
    { id: 'stockmarket', label: isHindi ? 'शेयर बाजार' : 'Stock Market', icon: BarChart3 },
    { id: 'startup', label: isHindi ? 'स्टार्टअप' : 'Startup', icon: Building2 },
    { id: 'banking', label: isHindi ? 'बैंकिंग' : 'Banking', icon: DollarSign },
    { id: 'realestate', label: isHindi ? 'रियल एस्टेट' : 'Real Estate', icon: Home },
    { id: 'automobile', label: isHindi ? 'ऑटोमोबाइल' : 'Automobile', icon: Car },
    { id: 'ecommerce', label: isHindi ? 'ई-कॉमर्स' : 'E-Commerce', icon: ShoppingBag }
  ]

  const businessCategories = [
    {
      icon: BarChart3,
      title: isHindi ? 'शेयर बाजार' : 'Stock Market',
      description: isHindi ? 'सेंसेक्स, निफ्टी और शेयर बाजार अपडेट्स' : 'Sensex, Nifty and stock market updates',
      color: 'bg-green-500',
      count: '45+ articles'
    },
    {
      icon: Building2,
      title: isHindi ? 'स्टार्टअप' : 'Startup',
      description: isHindi ? 'नई कंपनियां, फंडिंग और नवाचार' : 'New companies, funding and innovation',
      color: 'bg-blue-500',
      count: '32+ articles'
    },
    {
      icon: DollarSign,
      title: isHindi ? 'बैंकिंग' : 'Banking',
      description: isHindi ? 'बैंकिंग नीतियां और वित्तीय अपडेट्स' : 'Banking policies and financial updates',
      color: 'bg-purple-500',
      count: '28+ articles'
    },
    {
      icon: Home,
      title: isHindi ? 'रियल एस्टेट' : 'Real Estate',
      description: isHindi ? 'प्रॉपर्टी की कीमतें और बाजार रुझान' : 'Property prices and market trends',
      color: 'bg-yellow-500',
      count: '25+ articles'
    },
    {
      icon: Car,
      title: isHindi ? 'ऑटोमोबाइल' : 'Automobile',
      description: isHindi ? 'कार कंपनियां और उद्योग अपडेट्स' : 'Car companies and industry updates',
      color: 'bg-red-500',
      count: '22+ articles'
    },
    {
      icon: ShoppingBag,
      title: isHindi ? 'ई-कॉमर्स' : 'E-Commerce',
      description: isHindi ? 'ऑनलाइन शॉपिंग और डिजिटल बिक्री' : 'Online shopping and digital sales',
      color: 'bg-pink-500',
      count: '20+ articles'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'व्यापार समाचार' : 'Business News'}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'शेयर बाजार, स्टार्टअप, बैंकिंग और अन्य व्यापार क्षेत्रों से ताजा समाचार और विश्लेषण' 
              : 'Latest business news, market updates, startup stories, and financial insights from various business sectors.'
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
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
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
                      <div className={`absolute bottom-2 left-2 px-2 py-1 rounded text-sm font-medium flex items-center ${
                        item.trend === 'Bullish' || item.trend === 'Positive' || item.trend === 'Growing'
                          ? 'bg-green-500 text-white'
                          : item.trend === 'Rising'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-blue-500 text-white'
                      }`}>
                        <TrendingUp size={14} className="mr-1" />
                        {item.change}
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
                          <TrendingUp size={14} className="mr-1" />
                          {item.views}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded mb-3">
                        <div className="text-sm text-gray-600 mb-1">
                          <strong>{isHindi ? 'ट्रेंड:' : 'Trend:'}</strong> {item.trend}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>{isHindi ? 'परिवर्तन:' : 'Change:'}</strong> {item.change}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                        <TrendingUp size={16} className="mr-2" />
                        {isHindi ? 'पढ़ें' : 'Read More'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'व्यापार श्रेणियां' : 'Business Categories'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {businessCategories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <div key={index} className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors duration-200 group">
                        <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {category.description}
                        </p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Market Summary */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  {isHindi ? 'बाजार सारांश' : 'Market Summary'}
                </h3>
                <p className="text-green-100 mb-4">
                  {isHindi 
                    ? 'आज के शेयर बाजार के प्रमुख अपडेट्स और बाजार के रुझान' 
                    : 'Today\'s key stock market updates and market trends'
                  }
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="text-sm text-green-100">Sensex</div>
                    <div className="text-xl font-bold">75,124.28</div>
                    <div className="text-sm text-green-200">+2.5%</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="text-sm text-green-100">Nifty</div>
                    <div className="text-xl font-bold">22,821.40</div>
                    <div className="text-sm text-green-200">+2.3%</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-3 rounded">
                    <div className="text-sm text-green-100">Bank Nifty</div>
                    <div className="text-xl font-bold">48,567.89</div>
                    <div className="text-sm text-green-200">+1.8%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {isHindi ? 'ट्रेंडिंग' : 'Trending'}
                </h3>
                <div className="space-y-3">
                  {businessNews.slice(0, 5).map((item, index) => (
                    <div key={item.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{item.views} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {isHindi ? 'बाजार घंटे' : 'Market Hours'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium text-gray-700">NSE</span>
                    <span className="text-sm text-green-600">Open</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm font-medium text-gray-700">BSE</span>
                    <span className="text-sm text-red-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium text-gray-700">MCX</span>
                    <span className="text-sm text-gray-600">Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Business
