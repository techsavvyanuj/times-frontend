import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, Clock, MapPin, Thermometer, Droplets, Wind, Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Sidebar = () => {
  const { language, isHindi } = useLanguage()
  const navigate = useNavigate()
  const t = translations[language] || translations['English']
  const [selectedStory, setSelectedStory] = useState(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Bhopal')

  // Madhya Pradesh cities with weather data
  const mpCities = [
    { name: 'Bhopal', nameHindi: 'भोपाल', temp: 32, condition: 'sunny', humidity: 65, wind: 12 },
    { name: 'Indore', nameHindi: 'इंदौर', temp: 35, condition: 'partly-cloudy', humidity: 58, wind: 15 },
    { name: 'Jabalpur', nameHindi: 'जबलपुर', temp: 33, condition: 'cloudy', humidity: 72, wind: 8 },
    { name: 'Gwalior', nameHindi: 'ग्वालियर', temp: 38, condition: 'sunny', humidity: 45, wind: 18 },
    { name: 'Ujjain', nameHindi: 'उज्जैन', temp: 34, condition: 'partly-cloudy', humidity: 62, wind: 14 },
    { name: 'Sagar', nameHindi: 'सागर', temp: 31, condition: 'cloudy', humidity: 68, wind: 10 },
    { name: 'Dewas', nameHindi: 'देवास', temp: 33, condition: 'sunny', humidity: 60, wind: 16 },
    { name: 'Ratlam', nameHindi: 'रतलाम', temp: 32, condition: 'partly-cloudy', humidity: 64, wind: 13 },
    { name: 'Khandwa', nameHindi: 'खंडवा', temp: 36, condition: 'sunny', humidity: 55, wind: 17 },
    { name: 'Burhanpur', nameHindi: 'बुरहानपुर', temp: 37, condition: 'sunny', humidity: 52, wind: 19 }
  ]

  // 5-day forecast data for selected city
  const getForecastData = (cityName) => {
    const forecasts = {
      'Bhopal': [
        { day: 'Today', temp: 32, condition: 'sunny', tempHindi: 'आज' },
        { day: 'Tomorrow', temp: 34, condition: 'partly-cloudy', tempHindi: 'कल' },
        { day: 'Wed', temp: 33, condition: 'cloudy', tempHindi: 'बुध' },
        { day: 'Thu', temp: 31, condition: 'rainy', tempHindi: 'गुरु' },
        { day: 'Fri', temp: 35, condition: 'sunny', tempHindi: 'शुक्र' }
      ],
      'Indore': [
        { day: 'Today', temp: 35, condition: 'partly-cloudy', tempHindi: 'आज' },
        { day: 'Tomorrow', temp: 37, condition: 'sunny', tempHindi: 'कल' },
        { day: 'Wed', temp: 36, condition: 'sunny', tempHindi: 'बुध' },
        { day: 'Thu', temp: 34, condition: 'partly-cloudy', tempHindi: 'गुरु' },
        { day: 'Fri', temp: 38, condition: 'sunny', tempHindi: 'शुक्र' }
      ],
      'Jabalpur': [
        { day: 'Today', temp: 33, condition: 'cloudy', tempHindi: 'आज' },
        { day: 'Tomorrow', temp: 32, condition: 'rainy', tempHindi: 'कल' },
        { day: 'Wed', temp: 30, condition: 'rainy', tempHindi: 'बुध' },
        { day: 'Thu', temp: 31, condition: 'cloudy', tempHindi: 'गुरु' },
        { day: 'Fri', temp: 34, condition: 'partly-cloudy', tempHindi: 'शुक्र' }
      ],
      'Gwalior': [
        { day: 'Today', temp: 38, condition: 'sunny', tempHindi: 'आज' },
        { day: 'Tomorrow', temp: 39, condition: 'sunny', tempHindi: 'कल' },
        { day: 'Wed', temp: 37, condition: 'partly-cloudy', tempHindi: 'बुध' },
        { day: 'Thu', temp: 36, condition: 'cloudy', tempHindi: 'गुरु' },
        { day: 'Fri', temp: 40, condition: 'sunny', tempHindi: 'शुक्र' }
      ],
      'Ujjain': [
        { day: 'Today', temp: 34, condition: 'partly-cloudy', tempHindi: 'आज' },
        { day: 'Tomorrow', temp: 36, condition: 'sunny', tempHindi: 'कल' },
        { day: 'Wed', temp: 35, condition: 'sunny', tempHindi: 'बुध' },
        { day: 'Thu', temp: 33, condition: 'partly-cloudy', tempHindi: 'गुरु' },
        { day: 'Fri', temp: 37, condition: 'sunny', tempHindi: 'शुक्र' }
      ]
    }
    return forecasts[cityName] || forecasts['Bhopal']
  }

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny':
        return <Sun size={20} className="text-yellow-500" />
      case 'partly-cloudy':
        return <Cloud size={20} className="text-gray-400" />
      case 'cloudy':
        return <Cloud size={20} className="text-gray-500" />
      case 'rainy':
        return <CloudRain size={20} className="text-blue-500" />
      case 'stormy':
        return <CloudLightning size={20} className="text-purple-500" />
      default:
        return <Sun size={20} className="text-yellow-500" />
    }
  }

  const getWeatherConditionText = (condition) => {
    const conditions = {
      sunny: isHindi ? 'धूप' : 'Sunny',
      'partly-cloudy': isHindi ? 'आंशिक बादल' : 'Partly Cloudy',
      cloudy: isHindi ? 'बादल' : 'Cloudy',
      rainy: isHindi ? 'बारिश' : 'Rainy',
      stormy: isHindi ? 'तूफान' : 'Stormy'
    }
    return conditions[condition] || conditions.sunny
  }

  const selectedCityData = mpCities.find(city => city.name === selectedCity) || mpCities[0]
  const forecastData = getForecastData(selectedCity)

  const trendingStories = [
    {
      id: 1,
      title: isHindi ? "तोड़ने वाला: पीएम मोदी से बड़ी घोषणा" : "Breaking: Major announcement from PM Modi",
      category: isHindi ? "भारत" : "India",
      views: "15.2K",
      time: isHindi ? "1 घंटा पहले" : "1 hour ago",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fullContent: isHindi ? 'पीएम मोदी ने आज एक बड़ी घोषणा की है जो देश के विकास के लिए महत्वपूर्ण है।' : 'PM Modi today made a major announcement that is important for the development of the country.'
    },
    {
      id: 2,
      title: isHindi ? "क्रिकेट: भारत टॉस जीतता है, बल्लेबाजी चुनता है" : "Cricket: India wins the toss, chooses to bat",
      category: isHindi ? "खेल" : "Sports",
      views: "12.8K",
      time: isHindi ? "2 घंटे पहले" : "2 hours ago",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fullContent: isHindi ? 'भारतीय क्रिकेट टीम ने टॉस जीता है और बल्लेबाजी का फैसला किया है।' : 'The Indian cricket team has won the toss and decided to bat.'
    },
    {
      id: 3,
      title: isHindi ? "शेयर बाजार: सेंसेक्स 75,000 के निशान को पार करता है" : "Stock Market: Sensex crosses 75,000 mark",
      category: isHindi ? "व्यापार" : "Business",
      views: "9.5K",
      time: isHindi ? "3 घंटे पहले" : "3 hours ago",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fullContent: isHindi ? 'शेयर बाजार में सेंसेक्स ने 75,000 का नया रिकॉर्ड बनाया है।' : 'In the stock market, Sensex has created a new record of 75,000.'
    },
    {
      id: 4,
      title: isHindi ? "तकनीक: आज नया स्मार्टफोन लॉन्च" : "Technology: New smartphone launch today",
      category: isHindi ? "तकनीक" : "Technology",
      views: "8.7K",
      time: isHindi ? "4 घंटे पहले" : "4 hours ago",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fullContent: isHindi ? 'आज तकनीकी कंपनी ने नया स्मार्टफोन लॉन्च किया है।' : 'Today the technology company has launched a new smartphone.'
    },
    {
      id: 5,
      title: isHindi ? "मनोरंजन: बॉलीवुड स्टार की नई परियोजना" : "Entertainment: Bollywood star's new project",
      category: isHindi ? "मनोरंजन" : "Entertainment",
      views: "7.3K",
      time: isHindi ? "5 घंटे पहले" : "5 hours ago",
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fullContent: isHindi ? 'एक प्रमुख बॉलीवुड स्टार ने अपनी नई परियोजना की घोषणा की है।' : 'A major Bollywood star has announced their new project.'
    }
  ]

  const handleStoryClick = (story) => {
    setSelectedStory(story)
    setShowVideoModal(true)
  }

  const closeModal = () => {
    setShowVideoModal(false)
    setSelectedStory(null)
  }

  const handleViewAllTrending = () => {
    navigate('/india')
  }

  const handleQuickLinkClick = (linkType) => {
    switch (linkType) {
      case 'downloadMobileApp':
        // Handle mobile app download
        window.open('https://play.google.com/store', '_blank')
        break
      case 'subscribeNewsletter':
        navigate('/contact-us')
        break
      case 'contactUs':
        navigate('/contact-us')
        break
      case 'advertiseWithUs':
        navigate('/advertise-with-us')
        break
      default:
        break
    }
  }

  return (
    <>
      <div className="space-y-4 sm:space-y-6">
        {/* Weather Section - Madhya Pradesh Cities */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <MapPin size={18} className="text-timesnow-red" />
              <span>{t.mpWeather}</span>
            </h3>
            <button 
              onClick={() => window.location.reload()}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title={t.refresh}
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          
          {/* City Selector */}
          <div className="mb-3 sm:mb-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-timesnow-red focus:border-transparent"
            >
              {mpCities.map((city) => (
                <option key={city.name} value={city.name}>
                  {isHindi ? city.nameHindi : city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Current Weather Display */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-gray-800">
                  {isHindi ? selectedCityData.nameHindi : selectedCityData.name}
                </span>
                {getWeatherIcon(selectedCityData.condition)}
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {selectedCityData.temp}°C
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {getWeatherConditionText(selectedCityData.condition)}
                </div>
              </div>
            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Droplets size={16} className="text-blue-500" />
                <span>{selectedCityData.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Wind size={16} className="text-gray-500" />
                <span>{selectedCityData.wind} km/h</span>
              </div>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="mt-3 sm:mt-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
              {t.fiveDayForecast}
            </h4>
            <div className="grid grid-cols-5 gap-2 sm:gap-3 text-xs sm:text-sm">
              {forecastData.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {day.day}
                  </span>
                  <div className="flex items-center space-x-1">
                    {getWeatherIcon(day.condition)}
                    <span className="text-xs sm:text-sm font-semibold">
                      {day.temp}°C
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Cities Quick View */}
          <div className="mt-3 sm:mt-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
              {t.otherCities}
            </h4>
            <div className="space-y-2">
              {mpCities.slice(0, 5).map((city) => (
                <div 
                  key={city.name}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedCity === city.name 
                      ? 'bg-timesnow-red text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCity(city.name)}
                >
                  <div className="flex items-center space-x-2">
                    {getWeatherIcon(city.condition)}
                    <span className="text-xs sm:text-sm font-medium">
                      {isHindi ? city.nameHindi : city.name}
                    </span>
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold ${
                    selectedCity === city.name ? 'text-white' : 'text-gray-800'
                  }`}>
                    {city.temp}°C
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-3 sm:mt-4 pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{t.lastUpdated}</span>
              <span>{new Date().toLocaleTimeString('en-IN', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              })}</span>
            </div>
          </div>
        </div>

        {/* Trending Stories - Mobile Responsive */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <TrendingUp className="text-timesnow-red sm:w-5 sm:h-5" size={18} />
            <h3 className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold text-gray-800">
              {t.trendingStories}
            </h3>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {trendingStories.map((story, index) => (
              <div 
                key={story.id} 
                className="group cursor-pointer"
                onClick={() => handleStoryClick(story)}
              >
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="mobile-text-xs sm:mobile-text-sm font-medium text-gray-800 group-hover:text-timesnow-red transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap">
                      {story.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 sm:mt-2 text-xs text-gray-500">
                      <span className="bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs">
                        {story.category}
                      </span>
                      <span className="text-xs">{story.views} {t.views}</span>
                      <div className="flex items-center space-x-1">
                        <Clock size={10} className="sm:w-3 sm:h-3" />
                        <span className="text-xs">{story.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleViewAllTrending}
            className="w-full mt-3 sm:mt-4 text-timesnow-red hover:text-red-700 font-medium text-xs sm:text-sm cursor-pointer"
          >
            {t.viewAllTrending} →
          </button>
        </div>

        {/* Advertisement Placeholder - Mobile Responsive */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mobile-p text-white text-center">
          <h3 className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold mb-2">
            {t.advertisement}
          </h3>
          <p className="mobile-text-xs sm:mobile-text-sm text-blue-100 mb-3 sm:mb-4">
            {t.yourAdCouldBeHere}
          </p>
          <div className="w-full h-20 sm:h-24 md:h-32 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white/70 text-xs sm:text-sm">{t.adSpace}</span>
          </div>
        </div>

        {/* Quick Links - Mobile Responsive */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <h3 className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
            {t.quickLinks}
          </h3>
          <div className="space-y-2">
            <button 
              onClick={() => handleQuickLinkClick('downloadMobileApp')}
              className="block text-gray-600 hover:text-timesnow-red transition-colors duration-200 cursor-pointer text-left w-full text-xs sm:text-sm"
            >
              {t.downloadMobileApp}
            </button>
            <button 
              onClick={() => handleQuickLinkClick('subscribeNewsletter')}
              className="block text-gray-600 hover:text-timesnow-red transition-colors duration-200 cursor-pointer text-left w-full text-xs sm:text-sm"
            >
              {t.subscribeNewsletter}
            </button>
            <button 
              onClick={() => handleQuickLinkClick('contactUs')}
              className="block text-gray-600 hover:text-timesnow-red transition-colors duration-200 cursor-pointer text-left w-full text-xs sm:text-sm"
            >
              {t.contactUs}
            </button>
            <button 
              onClick={() => handleQuickLinkClick('advertiseWithUs')}
              className="block text-gray-600 hover:text-timesnow-red transition-colors duration-200 cursor-pointer text-left w-full text-xs sm:text-sm"
            >
              {t.advertiseWithUs}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal - Mobile Responsive */}
      {showVideoModal && selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6">
          <div className="bg-white rounded-lg w-full max-h-[90vh] overflow-y-auto mobile-modal">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800">
                  {selectedStory.title}
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
                <div className="bg-gray-200 rounded-lg h-48 sm:h-56 md:h-64 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">🎥</div>
                    <p className="mobile-text-sm sm:mobile-text-base text-gray-600 mb-1 sm:mb-2">15-Second News Preview</p>
                    <p className="text-xs sm:text-sm text-gray-500">Video would play here for 15 seconds</p>
                  </div>
                </div>
              </div>
              
              {/* News Content - Mobile Responsive */}
              <div className="mb-4 sm:mb-6">
                <h3 className="mobile-text-base sm:mobile-text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {isHindi ? 'समाचार का सारांश' : 'News Summary'}
                </h3>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-700 leading-relaxed">
                  {selectedStory.fullContent}
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
                  href={selectedStory.youtubeUrl}
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

export default Sidebar
