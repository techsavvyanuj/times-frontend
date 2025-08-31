import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { ArrowLeft, MapPin, Clock, Eye, TrendingUp, Building, Car, Leaf, GraduationCap, Heart, Globe, Users, Calendar, Star } from 'lucide-react'

const IndiaState = () => {
  const { state } = useParams()
  const [activeCategory, setActiveCategory] = useState('all')
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const states = {
    'madhya-pradesh': {
      name: isHindi ? 'मध्य प्रदेश' : 'Madhya Pradesh',
      shortName: 'MP',
      capital: isHindi ? 'भोपाल' : 'Bhopal',
      region: isHindi ? 'मध्य भारत' : 'Central India',
      color: 'bg-orange-500',
      icon: Building,
      population: '8.5 Crore',
      area: '308,245 km²',
      languages: ['Hindi', 'Marathi', 'Gujarati'],
      majorCities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
      description: isHindi 
        ? 'मध्य प्रदेश भारत का हृदय है, जो अपनी समृद्ध संस्कृति, ऐतिहासिक स्थलों और प्राकृतिक सौंदर्य के लिए जाना जाता है।' 
        : 'Madhya Pradesh is the heart of India, known for its rich culture, historical sites, and natural beauty.',
      highlights: ['Khajuraho Temples', 'Sanchi Stupa', 'Gwalior Fort', 'Bhopal Lakes', 'Pachmarhi Hills']
    },
    'rajasthan': {
      name: isHindi ? 'राजस्थान' : 'Rajasthan',
      shortName: 'RJ',
      capital: isHindi ? 'जयपुर' : 'Jaipur',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-pink-500',
      icon: Globe,
      population: '7.5 Crore',
      area: '342,239 km²',
      languages: ['Hindi', 'Rajasthani', 'English'],
      majorCities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Bikaner'],
      description: isHindi 
        ? 'राजस्थान राजाओं की भूमि है, जो अपने महलों, किलों और रेगिस्तान के लिए प्रसिद्ध है।' 
        : 'Rajasthan is the land of kings, famous for its palaces, forts, and desert landscapes.',
      highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Thar Desert', 'Pushkar Lake']
    },
    'maharashtra': {
      name: isHindi ? 'महाराष्ट्र' : 'Maharashtra',
      shortName: 'MH',
      capital: isHindi ? 'मुंबई' : 'Mumbai',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-blue-500',
      icon: Building,
      population: '12.5 Crore',
      area: '307,713 km²',
      languages: ['Marathi', 'Hindi', 'English'],
      majorCities: ['Mumbai', 'Pune', 'Nagpur', 'Aurangabad', 'Nashik'],
      description: isHindi 
        ? 'महाराष्ट्र भारत का सबसे अधिक आबादी वाला राज्य है, जो अपने आर्थिक और सांस्कृतिक योगदान के लिए जाना जाता है।' 
        : 'Maharashtra is India\'s most populous state, known for its economic and cultural contributions.',
      highlights: ['Gateway of India', 'Ajanta Caves', 'Ellora Caves', 'Mahabaleshwar', 'Lonavala']
    },
    'karnataka': {
      name: isHindi ? 'कर्नाटक' : 'Karnataka',
      shortName: 'KA',
      capital: isHindi ? 'बेंगलुरु' : 'Bangalore',
      region: isHindi ? 'दक्षिण भारत' : 'South India',
      color: 'bg-green-500',
      icon: Leaf,
      population: '6.8 Crore',
      area: '191,791 km²',
      languages: ['Kannada', 'English', 'Hindi'],
      majorCities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
      description: isHindi 
        ? 'कर्नाटक भारत का सिलिकॉन वैली है, जो तकनीकी नवाचार और सांस्कृतिक विरासत का केंद्र है।' 
        : 'Karnataka is India\'s Silicon Valley, a hub of technological innovation and cultural heritage.',
      highlights: ['Mysore Palace', 'Hampi Ruins', 'Coorg Coffee', 'Jog Falls', 'Gokarna Beaches']
    },
    'tamil-nadu': {
      name: isHindi ? 'तमिलनाडु' : 'Tamil Nadu',
      shortName: 'TN',
      capital: isHindi ? 'चेन्नई' : 'Chennai',
      region: isHindi ? 'दक्षिण भारत' : 'South India',
      color: 'bg-purple-500',
      icon: GraduationCap,
      population: '7.7 Crore',
      area: '130,058 km²',
      languages: ['Tamil', 'English', 'Hindi'],
      majorCities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
      description: isHindi 
        ? 'तमिलनाडु अपनी समृद्ध सांस्कृतिक विरासत, मंदिरों और शैक्षिक संस्थानों के लिए प्रसिद्ध है।' 
        : 'Tamil Nadu is famous for its rich cultural heritage, temples, and educational institutions.',
      highlights: ['Meenakshi Temple', 'Marina Beach', 'Ooty Hills', 'Kanyakumari', 'Mahabalipuram']
    },
    'uttar-pradesh': {
      name: isHindi ? 'उत्तर प्रदेश' : 'Uttar Pradesh',
      shortName: 'UP',
      capital: isHindi ? 'लखनऊ' : 'Lucknow',
      region: isHindi ? 'उत्तरी भारत' : 'North India',
      color: 'bg-red-500',
      icon: Heart,
      population: '23.5 Crore',
      area: '243,286 km²',
      languages: ['Hindi', 'Urdu', 'English'],
      majorCities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj'],
      description: isHindi 
        ? 'उत्तर प्रदेश भारत का सबसे अधिक आबादी वाला राज्य है, जो अपने धार्मिक और ऐतिहासिक महत्व के लिए जाना जाता है।' 
        : 'Uttar Pradesh is India\'s most populous state, known for its religious and historical significance.',
      highlights: ['Taj Mahal', 'Varanasi Ghats', 'Agra Fort', 'Fatehpur Sikri', 'Sarnath']
    },
    'gujarat': {
      name: isHindi ? 'गुजरात' : 'Gujarat',
      shortName: 'GJ',
      capital: isHindi ? 'गांधीनगर' : 'Gandhinagar',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-yellow-500',
      icon: Car,
      population: '6.3 Crore',
      area: '196,024 km²',
      languages: ['Gujarati', 'Hindi', 'English'],
      majorCities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
      description: isHindi 
        ? 'गुजरात अपने औद्योगिक विकास, व्यापार और सांस्कृतिक विरासत के लिए जाना जाता है।' 
        : 'Gujarat is known for its industrial development, business, and cultural heritage.',
      highlights: ['Sabarmati Ashram', 'Rann of Kutch', 'Gir Forest', 'Dwarka Temple', 'Somnath Temple']
    },
    'west-bengal': {
      name: isHindi ? 'पश्चिम बंगाल' : 'West Bengal',
      shortName: 'WB',
      capital: isHindi ? 'कोलकाता' : 'Kolkata',
      region: isHindi ? 'पूर्वी भारत' : 'Eastern India',
      color: 'bg-indigo-500',
      icon: Globe,
      population: '9.7 Crore',
      area: '88,752 km²',
      languages: ['Bengali', 'Hindi', 'English'],
      majorCities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'],
      description: isHindi 
        ? 'पश्चिम बंगाल अपनी साहित्यिक और सांस्कृतिक विरासत के लिए प्रसिद्ध है।' 
        : 'West Bengal is famous for its literary and cultural heritage.',
      highlights: ['Victoria Memorial', 'Howrah Bridge', 'Darjeeling Hills', 'Sundarbans', 'Dakshineswar Temple']
    }
  }

  const currentState = states[state]
  
  if (!currentState) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">State Not Found</h1>
          <Link to="/india" className="text-blue-600 hover:underline">Back to India</Link>
        </div>
      </div>
    )
  }

  const stateNews = {
    'madhya-pradesh': [
      {
        id: 1,
        title: isHindi ? 'भोपाल में नई शैक्षिक नीति' : 'New Education Policy in Bhopal',
        summary: isHindi ? 'मध्य प्रदेश सरकार ने राज्य में नई शैक्षिक नीति लागू की, जिससे छात्रों को बेहतर शिक्षा मिलेगी।' : 'MP government implements new education policy in the state, providing better education to students.',
        category: isHindi ? 'शिक्षा' : 'Education',
        time: '3 hours ago',
        views: '8.5K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Education',
        city: 'Bhopal',
        author: 'राज्य समाचार',
        highlights: ['New Policy', 'State Education', 'Bhopal']
      },
      {
        id: 2,
        title: isHindi ? 'इंदौर में औद्योगिक विकास' : 'Industrial Development in Indore',
        summary: isHindi ? 'इंदौर में नए औद्योगिक क्षेत्र का विकास और रोजगार के अवसर बढ़ रहे हैं।' : 'Development of new industrial zones in Indore and increasing employment opportunities.',
        category: isHindi ? 'व्यापार' : 'Business',
        time: '5 hours ago',
        views: '6.2K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Industry',
        city: 'Indore',
        author: 'व्यापार समाचार',
        highlights: ['Industrial Zone', 'Employment', 'Indore']
      },
      {
        id: 3,
        title: isHindi ? 'ग्वालियर में पर्यटन विकास' : 'Tourism Development in Gwalior',
        summary: isHindi ? 'ग्वालियर किले के आसपास नए पर्यटन स्थलों का विकास और पर्यटकों की संख्या में वृद्धि।' : 'Development of new tourist attractions around Gwalior Fort and increase in tourist numbers.',
        category: isHindi ? 'पर्यटन' : 'Tourism',
        time: '7 hours ago',
        views: '4.8K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Tourism',
        city: 'Gwalior',
        author: 'पर्यटन समाचार',
        highlights: ['Tourism', 'Gwalior Fort', 'Heritage']
      }
    ],
    'rajasthan': [
      {
        id: 1,
        title: isHindi ? 'जयपुर में हस्तकला मेला' : 'Handicraft Fair in Jaipur',
        summary: isHindi ? 'जयपुर में राजस्थानी हस्तकला और कला का प्रदर्शन, कारीगरों को मिल रहा है बेहतर मंच।' : 'Exhibition of Rajasthani handicrafts and art in Jaipur, providing better platform for artisans.',
        category: isHindi ? 'संस्कृति' : 'Culture',
        time: '2 hours ago',
        views: '9.1K',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=RJ+Culture',
        city: 'Jaipur',
        author: 'संस्कृति समाचार',
        highlights: ['Handicrafts', 'Art', 'Jaipur']
      },
      {
        id: 2,
        title: isHindi ? 'जोधपुर में सौर ऊर्जा परियोजना' : 'Solar Energy Project in Jodhpur',
        summary: isHindi ? 'जोधपुर में नई सौर ऊर्जा परियोजना का शुभारंभ, जिससे राज्य में स्वच्छ ऊर्जा का विकास होगा।' : 'Launch of new solar energy project in Jodhpur, promoting clean energy development in the state.',
        category: isHindi ? 'ऊर्जा' : 'Energy',
        time: '4 hours ago',
        views: '7.3K',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=RJ+Energy',
        city: 'Jodhpur',
        author: 'ऊर्जा समाचार',
        highlights: ['Solar Energy', 'Renewable', 'Jodhpur']
      }
    ]
  }

  const news = stateNews[state] || []
  const filteredNews = activeCategory === 'all' 
    ? news 
    : news.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase())

  const categories = ['all', 'education', 'business', 'tourism', 'culture', 'energy', 'politics']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/india" className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors">
              <ArrowLeft size={20} />
              <span>{isHindi ? 'भारत वापस' : 'Back to India'}</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`w-20 h-20 rounded-full ${currentState.color} flex items-center justify-center text-white text-3xl font-bold`}>
              {currentState.shortName}
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{currentState.name}</h1>
              <p className="text-xl text-orange-100">
                {isHindi ? 'राजधानी:' : 'Capital:'} {currentState.capital} • {currentState.region}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* State Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* State Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {isHindi ? 'राज्य का विवरण' : 'State Overview'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {currentState.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-orange-500" />
                      <span className="text-gray-700">
                        <strong>{isHindi ? 'जनसंख्या:' : 'Population:'}</strong> {currentState.population}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-orange-500" />
                      <span className="text-gray-700">
                        <strong>{isHindi ? 'क्षेत्रफल:' : 'Area:'}</strong> {currentState.area}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star size={20} className="text-orange-500" />
                      <span className="text-gray-700">
                        <strong>{isHindi ? 'भाषाएं:' : 'Languages:'}</strong> {currentState.languages.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    {isHindi ? 'प्रमुख शहर' : 'Major Cities'}
                  </h3>
                  <div className="space-y-2">
                    {currentState.majorCities.map((city, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{city}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-3 mt-4">
                    {isHindi ? 'मुख्य आकर्षण' : 'Main Attractions'}
                  </h3>
                  <div className="space-y-2">
                    {currentState.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {isHindi ? 'श्रेणी के अनुसार समाचार' : 'News by Category'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      activeCategory === category
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    <span className="font-medium capitalize">
                      {category === 'all' ? (isHindi ? 'सभी' : 'All') : category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {isHindi ? `${currentState.name} समाचार` : `${currentState.name} News`}
              </h2>
              
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {isHindi ? 'इस श्रेणी के लिए कोई समाचार नहीं मिला' : 'No news found for this category'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNews.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                          {item.category}
                        </div>
                        <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
                          <MapPin size={12} className="mr-1" />
                          {item.city}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {item.summary}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center">
                            <Eye size={14} className="mr-1" />
                            {item.views}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-3">
                          <strong>{isHindi ? 'लेखक:' : 'Author:'}</strong> {item.author}
                        </div>
                        
                        {item.highlights && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.highlights.map((highlight, index) => (
                              <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <button className="block w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors text-center">
                          {isHindi ? 'समाचार देखें' : 'View News'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'राज्य जानकारी' : 'State Information'}
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'राजधानी' : 'Capital'}</div>
                  <div className="font-semibold text-gray-800">{currentState.capital}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'क्षेत्र' : 'Region'}</div>
                  <div className="font-semibold text-gray-800">{currentState.region}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'जनसंख्या' : 'Population'}</div>
                  <div className="font-semibold text-gray-800">{currentState.population}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'क्षेत्रफल' : 'Area'}</div>
                  <div className="font-semibold text-gray-800">{currentState.area}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'अन्य राज्य' : 'Other States'}
              </h3>
              <div className="space-y-3">
                {Object.entries(states).filter(([key]) => key !== state).slice(0, 5).map(([key, stateInfo]) => (
                  <Link
                    key={key}
                    to={`/india/${key}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${stateInfo.color} flex items-center justify-center text-white text-sm font-bold`}>
                        {stateInfo.shortName}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{stateInfo.name}</h4>
                        <p className="text-sm text-gray-600">{stateInfo.capital}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndiaState
