import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { ArrowLeft, Play, Star, Clock, Eye } from 'lucide-react'

const EntertainmentSubcategory = () => {
  const { subcategory } = useParams()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  // Demo news data for each subcategory
  const subcategoryNews = {
    bollywood: [
      {
        id: 1,
        title: isHindi ? 'सलमान खान की नई फिल्म "टाइगर 4" की शूटिंग शुरू' : 'Salman Khan\'s New Film "Tiger 4" Shooting Begins',
        description: isHindi ? 'सलमान खान और कैटरीना कैफ की स्टंट एक्शन फिल्म की शूटिंग दुबई में शुरू हो गई है।' : 'Shooting for Salman Khan and Katrina Kaif\'s stunt action film has begun in Dubai.',
        image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Bollywood+News',
        category: 'Bollywood',
        readTime: '5 min read',
        views: '25.3K',
        publishedAt: '2 hours ago',
        rating: 4.5,
        tags: ['Action', 'Drama', 'Thriller']
      },
      {
        id: 2,
        title: isHindi ? 'आमिर खान की "लाल सिंह चड्ढा" को मिली मिश्रित प्रतिक्रिया' : 'Aamir Khan\'s "Laal Singh Chaddha" Gets Mixed Response',
        description: isHindi ? 'आमिर खान की नई फिल्म को आलोचकों से मिश्रित प्रतिक्रिया मिल रही है।' : 'Aamir Khan\'s new film is receiving mixed response from critics.',
        image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Aamir+Khan',
        category: 'Bollywood',
        readTime: '4 min read',
        views: '18.7K',
        publishedAt: '4 hours ago',
        rating: 3.8,
        tags: ['Drama', 'Comedy', 'Remake']
      },
      {
        id: 3,
        title: isHindi ? 'दीपिका पादुकोण की "पठान" बॉक्स ऑफिस पर धमाल' : 'Deepika Padukone\'s "Pathaan" Creates Box Office Sensation',
        description: isHindi ? 'शाहरुख खान और दीपिका की फिल्म ने बॉक्स ऑफिस पर नए रिकॉर्ड बनाए हैं।' : 'Shah Rukh Khan and Deepika\'s film has created new records at the box office.',
        image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Pathaan',
        category: 'Bollywood',
        readTime: '6 min read',
        views: '32.1K',
        publishedAt: '1 hour ago',
        rating: 4.7,
        tags: ['Action', 'Thriller', 'Spy']
      }
    ],
    ott: [
      {
        id: 1,
        title: isHindi ? 'नेटफ्लिक्स पर "सैक्स एजुकेशन" सीजन 4 की घोषणा' : 'Netflix Announces "Sex Education" Season 4',
        description: isHindi ? 'लोकप्रिय ब्रिटिश सीरीज का चौथा सीजन जल्द ही रिलीज होगा।' : 'The fourth season of the popular British series will be released soon.',
        image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Netflix',
        category: 'OTT',
        readTime: '3 min read',
        views: '15.6K',
        publishedAt: '3 hours ago',
        rating: 4.6,
        tags: ['Drama', 'Comedy', 'Teen']
      },
      {
        id: 2,
        title: isHindi ? 'अमेजन प्राइम पर "मिर्जापुर" सीजन 3 की शूटिंग' : 'Amazon Prime "Mirzapur" Season 3 Shooting',
        description: isHindi ? 'क्राइम थ्रिलर सीरीज का तीसरा सीजन जल्द ही आने वाला है।' : 'The third season of the crime thriller series is coming soon.',
        image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Mirzapur',
        category: 'OTT',
        readTime: '4 min read',
        views: '22.8K',
        publishedAt: '5 hours ago',
        rating: 4.4,
        tags: ['Crime', 'Thriller', 'Drama']
      },
      {
        id: 3,
        title: isHindi ? 'डिज्नी+ हॉटस्टार पर "स्पेशल ऑप्स" नई सीरीज' : 'Disney+ Hotstar "Special Ops" New Series',
        description: isHindi ? 'कायदे आजम मुखर्जी की नई सीरीज जल्द ही रिलीज होगी।' : 'Kay Kay Menon\'s new series will be released soon.',
        image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Special+Ops',
        category: 'OTT',
        readTime: '5 min read',
        views: '19.4K',
        publishedAt: '6 hours ago',
        rating: 4.2,
        tags: ['Action', 'Thriller', 'Spy']
      }
    ],
    tv: [
      {
        id: 1,
        title: isHindi ? 'कलर्स टीवी पर "बिग बॉस 17" का नया सीजन' : 'Colors TV "Big Boss 17" New Season',
        description: isHindi ? 'लोकप्रिय रियलिटी शो का नया सीजन जल्द ही शुरू होगा।' : 'The new season of the popular reality show will start soon.',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Big+Boss',
        category: 'TV',
        readTime: '4 min read',
        views: '28.9K',
        publishedAt: '2 hours ago',
        rating: 4.3,
        tags: ['Reality', 'Entertainment', 'Drama']
      },
      {
        id: 2,
        title: isHindi ? 'स्टार प्लस पर "ये रिश्ता क्या कहलाता है" का फाइनल' : 'Star Plus "Yeh Rishta Kya Kehlata Hai" Finale',
        description: isHindi ? 'लंबे समय से चल रहे शो का फाइनल एपिसोड आज रात।' : 'Finale episode of the long-running show tonight.',
        image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=YRKKH',
        category: 'TV',
        readTime: '3 min read',
        views: '35.2K',
        publishedAt: '1 hour ago',
        rating: 4.8,
        tags: ['Drama', 'Family', 'Romance']
      },
      {
        id: 3,
        title: isHindi ? 'ज़ी टीवी पर "कुमकुम भाग्य" नई कहानी' : 'Zee TV "Kumkum Bhagya" New Story',
        description: isHindi ? 'लोकप्रिय शो में नई कहानी और नए किरदारों का प्रवेश।' : 'New story and new characters enter the popular show.',
        image: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=Kumkum+Bhagya',
        category: 'TV',
        readTime: '4 min read',
        views: '21.7K',
        publishedAt: '4 hours ago',
        rating: 4.1,
        tags: ['Drama', 'Family', 'Romance']
      }
    ]
  }

  const getSubcategoryData = () => {
    const data = subcategoryNews[subcategory] || []
    const titles = {
      bollywood: isHindi ? 'बॉलीवुड समाचार' : 'Bollywood News',
      ott: isHindi ? 'OTT समाचार' : 'OTT News',
      tv: isHindi ? 'टीवी समाचार' : 'TV News'
    }
    return { news: data, title: titles[subcategory] || 'Entertainment News' }
  }

  const { news, title } = getSubcategoryData()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/entertainment" className="flex items-center text-white hover:text-purple-200 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              {isHindi ? 'वापस' : 'Back'}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            {isHindi 
              ? 'बॉलीवुड, OTT और टीवी से ताजा समाचार और अपडेट्स' 
              : 'Latest news and updates from Bollywood, OTT, and TV'
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
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {news.map((item) => (
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
                      
                      <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
                        <Play size={16} className="mr-2" />
                        {isHindi ? 'पढ़ें' : 'Read More'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'संबंधित श्रेणियां' : 'Related Categories'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.keys(subcategoryNews).map((cat) => (
                    <Link
                      key={cat}
                      to={`/entertainment/${cat}`}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        cat === subcategory
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-800 capitalize">
                        {cat === 'bollywood' ? (isHindi ? 'बॉलीवुड' : 'Bollywood') :
                         cat === 'ott' ? 'OTT' :
                         cat === 'tv' ? (isHindi ? 'टीवी' : 'TV') : cat}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {cat === 'bollywood' ? (isHindi ? 'फिल्म समाचार' : 'Movie News') :
                         cat === 'ott' ? (isHindi ? 'स्ट्रीमिंग समाचार' : 'Streaming News') :
                         cat === 'tv' ? (isHindi ? 'टीवी शो समाचार' : 'TV Show News') : ''}
                      </p>
                    </Link>
                  ))}
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
                  {news.slice(0, 3).map((item, index) => (
                    <div key={item.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
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
                  {isHindi ? 'श्रेणी नेविगेशन' : 'Category Navigation'}
                </h3>
                <div className="space-y-2">
                  <Link to="/entertainment" className="block text-purple-600 hover:text-purple-700 font-medium">
                    ← {isHindi ? 'सभी मनोरंजन समाचार' : 'All Entertainment News'}
                  </Link>
                  <Link to="/" className="block text-gray-600 hover:text-gray-800">
                    🏠 {isHindi ? 'होम' : 'Home'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EntertainmentSubcategory
