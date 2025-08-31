import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { ArrowLeft, Play, Trophy, Clock, Eye, TrendingUp } from 'lucide-react'

const SportsSubcategory = () => {
  const { subcategory } = useParams()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  // Demo news data for each subcategory
  const subcategoryNews = {
    cricket: [
      {
        id: 1,
        title: isHindi ? 'भारत बनाम ऑस्ट्रेलिया: टी20 सीरीज में भारत की जीत' : 'India vs Australia: India Wins T20 Series',
        description: isHindi ? 'भारतीय क्रिकेट टीम ने ऑस्ट्रेलिया को 3-2 से हराकर T20 सीरीज जीत ली।' : 'Indian cricket team defeated Australia 3-2 to win the T20 series.',
        image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Cricket+News',
        category: 'Cricket',
        readTime: '6 min read',
        views: '45.2K',
        publishedAt: '1 hour ago',
        matchResult: 'India won by 6 wickets',
        venue: 'Melbourne Cricket Ground',
        tags: ['T20', 'International', 'Victory']
      },
      {
        id: 2,
        title: isHindi ? 'विराट कोहली ने बनाया 50वां अंतरराष्ट्रीय शतक' : 'Virat Kohli Hits 50th International Century',
        description: isHindi ? 'भारतीय बल्लेबाज ने अपना 50वां अंतरराष्ट्रीय शतक बनाया और नया रिकॉर्ड स्थापित किया।' : 'Indian batsman scored his 50th international century and set a new record.',
        image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Virat+Kohli',
        category: 'Cricket',
        readTime: '5 min read',
        views: '38.7K',
        publishedAt: '3 hours ago',
        matchResult: 'Century in 120 balls',
        venue: 'Lord\'s Cricket Ground',
        tags: ['Century', 'Record', 'Milestone']
      },
      {
        id: 3,
        title: isHindi ? 'रोहित शर्मा ने T20 में सबसे तेज शतक का रिकॉर्ड तोड़ा' : 'Rohit Sharma Breaks Fastest T20 Century Record',
        description: isHindi ? 'भारतीय कप्तान ने T20 में सबसे तेज शतक का नया विश्व रिकॉर्ड बनाया।' : 'Indian captain set a new world record for fastest T20 century.',
        image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Rohit+Sharma',
        category: 'Cricket',
        readTime: '4 min read',
        views: '42.1K',
        publishedAt: '5 hours ago',
        matchResult: 'Century in 35 balls',
        venue: 'Wankhede Stadium',
        tags: ['T20', 'Fastest Century', 'World Record']
      }
    ],
    ipl: [
      {
        id: 1,
        title: isHindi ? 'IPL 2024: मुंबई इंडियंस ने चेन्नई सुपर किंग्स को हराया' : 'IPL 2024: Mumbai Indians Defeats Chennai Super Kings',
        description: isHindi ? 'मुंबई इंडियंस ने चेन्नई सुपर किंग्स को 5 विकेट से हराकर महाराष्ट्र डर्बी जीत ली।' : 'Mumbai Indians defeated Chennai Super Kings by 5 wickets to win the Maharashtra derby.',
        image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=IPL+News',
        category: 'IPL',
        readTime: '5 min read',
        views: '52.8K',
        publishedAt: '2 hours ago',
        matchResult: 'MI won by 5 wickets',
        venue: 'Wankhede Stadium',
        tags: ['IPL 2024', 'Derby', 'Victory']
      },
      {
        id: 2,
        title: isHindi ? 'IPL 2024: नई टीम "अहमदाबाद टाइटंस" की घोषणा' : 'IPL 2024: New Team "Ahmedabad Titans" Announced',
        description: isHindi ? 'BCCI ने IPL 2024 के लिए नई टीम "अहमदाबाद टाइटंस" की घोषणा की।' : 'BCCI announced new team "Ahmedabad Titans" for IPL 2024.',
        image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Ahmedabad+Titans',
        category: 'IPL',
        readTime: '4 min read',
        views: '35.6K',
        publishedAt: '4 hours ago',
        matchResult: 'New Team Launch',
        venue: 'Narendra Modi Stadium',
        tags: ['New Team', 'Expansion', 'Gujarat']
      },
      {
        id: 3,
        title: isHindi ? 'IPL 2024: प्लेयर ऑक्शन में रिकॉर्ड बिड्स' : 'IPL 2024: Record Bids in Player Auction',
        description: isHindi ? 'IPL 2024 प्लेयर ऑक्शन में कई खिलाड़ियों को रिकॉर्ड कीमतों पर बेचा गया।' : 'Several players were sold at record prices in IPL 2024 player auction.',
        image: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=Player+Auction',
        category: 'IPL',
        readTime: '6 min read',
        views: '48.3K',
        publishedAt: '6 hours ago',
        matchResult: 'Auction Results',
        venue: 'Hotel Taj Palace',
        tags: ['Auction', 'Record Bids', 'Franchises']
      }
    ],
    football: [
      {
        id: 1,
        title: isHindi ? 'प्रीमियर लीग: मैनचेस्टर सिटी ने लिवरपूल को हराया' : 'Premier League: Manchester City Defeats Liverpool',
        description: isHindi ? 'मैनचेस्टर सिटी ने लिवरपूल को 2-1 से हराकर प्रीमियर लीग में बढ़त बना ली।' : 'Manchester City defeated Liverpool 2-1 to take lead in Premier League.',
        image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Premier+League',
        category: 'Football',
        readTime: '5 min read',
        views: '28.9K',
        publishedAt: '1 hour ago',
        matchResult: 'Man City 2-1 Liverpool',
        venue: 'Etihad Stadium',
        tags: ['Premier League', 'Top 4', 'Victory']
      },
      {
        id: 2,
        title: isHindi ? 'लै लीगा: रियल मैड्रिड ने बार्सिलोना को हराया' : 'La Liga: Real Madrid Defeats Barcelona',
        description: isHindi ? 'रियल मैड्रिड ने एल क्लासिको में बार्सिलोना को 3-1 से हराया।' : 'Real Madrid defeated Barcelona 3-1 in El Clasico.',
        image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=El+Clasico',
        category: 'Football',
        readTime: '6 min read',
        views: '32.4K',
        publishedAt: '3 hours ago',
        matchResult: 'Real Madrid 3-1 Barcelona',
        venue: 'Santiago Bernabeu',
        tags: ['La Liga', 'El Clasico', 'Victory']
      },
      {
        id: 3,
        title: isHindi ? 'चैंपियंस लीग: PSG ने बायर्न म्यूनिख को हराया' : 'Champions League: PSG Defeats Bayern Munich',
        description: isHindi ? 'PSG ने चैंपियंस लीग क्वार्टर फाइनल में बायर्न म्यूनिख को 2-0 से हराया।' : 'PSG defeated Bayern Munich 2-0 in Champions League quarter-final.',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Champions+League',
        category: 'Football',
        readTime: '5 min read',
        views: '25.7K',
        publishedAt: '5 hours ago',
        matchResult: 'PSG 2-0 Bayern Munich',
        venue: 'Parc des Princes',
        tags: ['Champions League', 'Quarter Final', 'Victory']
      }
    ],
    others: [
      {
        id: 1,
        title: isHindi ? 'टेनिस: नोवाक जोकोविच ने ऑस्ट्रेलियन ओपन जीता' : 'Tennis: Novak Djokovic Wins Australian Open',
        description: isHindi ? 'नोवाक जोकोविच ने ऑस्ट्रेलियन ओपन 2024 जीतकर अपना 25वां ग्रैंड स्लैम खिताब जीता।' : 'Novak Djokovic won Australian Open 2024 to claim his 25th Grand Slam title.',
        image: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=Australian+Open',
        category: 'Tennis',
        readTime: '6 min read',
        views: '22.3K',
        publishedAt: '2 hours ago',
        matchResult: 'Djokovic wins in 4 sets',
        venue: 'Melbourne Park',
        tags: ['Grand Slam', 'Tennis', 'Victory']
      },
      {
        id: 2,
        title: isHindi ? 'हॉकी: भारत ने एशिया कप में पाकिस्तान को हराया' : 'Hockey: India Defeats Pakistan in Asia Cup',
        description: isHindi ? 'भारतीय हॉकी टीम ने एशिया कप 2024 में पाकिस्तान को 3-1 से हराया।' : 'Indian hockey team defeated Pakistan 3-1 in Asia Cup 2024.',
        image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Asia+Cup',
        category: 'Hockey',
        readTime: '4 min read',
        views: '18.9K',
        publishedAt: '4 hours ago',
        matchResult: 'India 3-1 Pakistan',
        venue: 'Sultan Qaboos Stadium',
        tags: ['Asia Cup', 'Hockey', 'Victory']
      },
      {
        id: 3,
        title: isHindi ? 'बैडमिंटन: पीवी सिंधु ने मलेशिया ओपन जीता' : 'Badminton: PV Sindhu Wins Malaysia Open',
        description: isHindi ? 'पीवी सिंधु ने मलेशिया ओपन 2024 में महिला एकल का खिताब जीता।' : 'PV Sindhu won the women\'s singles title at Malaysia Open 2024.',
        image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Malaysia+Open',
        category: 'Badminton',
        readTime: '5 min read',
        views: '15.6K',
        publishedAt: '6 hours ago',
        matchResult: 'Sindhu wins in 3 sets',
        venue: 'Axiata Arena',
        tags: ['Super 1000', 'Badminton', 'Victory']
      }
    ]
  }

  const getSubcategoryData = () => {
    const data = subcategoryNews[subcategory] || []
    const titles = {
      cricket: isHindi ? 'क्रिकेट समाचार' : 'Cricket News',
      ipl: 'IPL News',
      football: isHindi ? 'फुटबॉल समाचार' : 'Football News',
      others: isHindi ? 'अन्य खेल समाचार' : 'Other Sports News'
    }
    return { news: data, title: titles[subcategory] || 'Sports News' }
  }

  const { news, title } = getSubcategoryData()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/sports" className="flex items-center text-white hover:text-green-200 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              {isHindi ? 'वापस' : 'Back'}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            {isHindi 
              ? 'क्रिकेट, फुटबॉल और अन्य खेलों से ताजा समाचार और अपडेट्स' 
              : 'Latest news and updates from Cricket, Football, and other sports'
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
                      
                      <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.keys(subcategoryNews).map((cat) => (
                    <Link
                      key={cat}
                      to={`/sports/${cat}`}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        cat === subcategory
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <h3 className="font-semibold text-gray-800 capitalize">
                        {cat === 'cricket' ? (isHindi ? 'क्रिकेट' : 'Cricket') :
                         cat === 'ipl' ? 'IPL' :
                         cat === 'football' ? (isHindi ? 'फुटबॉल' : 'Football') :
                         cat === 'others' ? (isHindi ? 'अन्य खेल' : 'Others') : cat}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {cat === 'cricket' ? (isHindi ? 'क्रिकेट समाचार' : 'Cricket News') :
                         cat === 'ipl' ? 'Indian Premier League' :
                         cat === 'football' ? (isHindi ? 'फुटबॉल समाचार' : 'Football News') :
                         cat === 'others' ? (isHindi ? 'अन्य खेल समाचार' : 'Other Sports News') : ''}
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
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
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
                  <Link to="/sports" className="block text-green-600 hover:text-green-700 font-medium">
                    ← {isHindi ? 'सभी खेल समाचार' : 'All Sports News'}
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

export default SportsSubcategory
