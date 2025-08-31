import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Coins, TrendingUp, TrendingDown, RefreshCw, Info } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const MetalRates = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [selectedCity, setSelectedCity] = useState('bhopal')
  const [lastUpdated, setLastUpdated] = useState('2024-01-15')

  // Demo metal price data
  const metalData = {
    bhopal: {
      name: isHindi ? 'भोपाल' : 'Bhopal',
      gold24k: 6445,
      gold22k: 5908,
      silver: 78.35,
      gold24kChange: 28,
      gold22kChange: 26,
      silverChange: -0.60,
      lastUpdate: '2024-01-15'
    },
    indore: {
      name: isHindi ? 'इंदौर' : 'Indore',
      gold24k: 6452,
      gold22k: 5915,
      silver: 78.45,
      gold24kChange: 32,
      gold22kChange: 29,
      silverChange: -0.45,
      lastUpdate: '2024-01-15'
    },
    gwalior: {
      name: isHindi ? 'ग्वालियर' : 'Gwalior',
      gold24k: 6438,
      gold22k: 5902,
      silver: 78.20,
      gold24kChange: 25,
      gold22kChange: 23,
      silverChange: -0.80,
      lastUpdate: '2024-01-15'
    },
    jabalpur: {
      name: isHindi ? 'जबलपुर' : 'Jabalpur',
      gold24k: 6448,
      gold22k: 5910,
      silver: 78.30,
      gold24kChange: 27,
      gold22kChange: 25,
      silverChange: -0.65,
      lastUpdate: '2024-01-15'
    },
    delhi: {
      name: isHindi ? 'दिल्ली' : 'Delhi',
      gold24k: 6450,
      gold22k: 5912,
      silver: 78.50,
      gold24kChange: 25,
      gold22kChange: 23,
      silverChange: -0.75,
      lastUpdate: '2024-01-15'
    },
    mumbai: {
      name: isHindi ? 'मुंबई' : 'Mumbai',
      gold24k: 6450,
      gold22k: 5912,
      silver: 78.50,
      gold24kChange: 30,
      gold22kChange: 27,
      silverChange: -0.50,
      lastUpdate: '2024-01-15'
    },
    kolkata: {
      name: isHindi ? 'कोलकाता' : 'Kolkata',
      gold24k: 6440,
      gold22k: 5905,
      silver: 78.25,
      gold24kChange: 20,
      gold22kChange: 18,
      silverChange: -1.00,
      lastUpdate: '2024-01-15'
    },
    chennai: {
      name: isHindi ? 'चेन्नई' : 'Chennai',
      gold24k: 6460,
      gold22k: 5920,
      silver: 78.75,
      gold24kChange: 28,
      gold22kChange: 25,
      silverChange: -0.25,
      lastUpdate: '2024-01-15'
    }
  }

  const currentCity = metalData[selectedCity]

  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  const handleRefresh = () => {
    setLastUpdated(new Date().toISOString().split('T')[0])
  }

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`
  }

  const getChangeIcon = (change) => {
    if (change > 0) {
      return <TrendingUp size={16} className="text-green-600" />
    } else if (change < 0) {
      return <TrendingDown size={16} className="text-red-600" />
    }
    return null
  }

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  const getChangeBgColor = (change) => {
    if (change > 0) return 'bg-green-50'
    if (change < 0) return 'bg-red-50'
    return 'bg-gray-50'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="mobile-container max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Coins size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.metalRates}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'वर्तमान कीमती धातु की दरें' : 'Current precious metal rates'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* City Selection */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
            {isHindi ? 'शहर चुनें' : 'Select City'}
          </h2>
          
          {/* Madhya Pradesh Cities Section */}
          <div className="mb-4">
            <h3 className="mobile-text-base sm:mobile-text-lg font-medium text-gray-700 mb-3 border-b border-gray-200 pb-2">
              {isHindi ? 'मध्य प्रदेश के शहर' : 'Madhya Pradesh Cities'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {['bhopal', 'indore', 'gwalior', 'jabalpur'].map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className={`p-3 rounded-lg border transition-colors ${
                    selectedCity === city
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                  }`}
                >
                  <div className="text-sm font-medium">{metalData[city].name}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Other Cities Section */}
          <div>
            <h3 className="mobile-text-base sm:mobile-text-lg font-medium text-gray-700 mb-3 border-b border-gray-200 pb-2">
              {isHindi ? 'अन्य शहर' : 'Other Cities'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.keys(metalData).filter(city => !['bhopal', 'indore', 'gwalior', 'jabalpur'].includes(city)).map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className={`p-3 rounded-lg border transition-colors ${
                    selectedCity === city
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                  }`}
                >
                  <div className="text-sm font-medium">{metalData[city].name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current City Metal Prices */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800">
              {isHindi ? `${currentCity.name} में धातु की दरें` : `Metal Rates in ${currentCity.name}`}
            </h2>
            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors"
            >
              <RefreshCw size={16} />
              <span className="text-sm">{isHindi ? 'ताज़ा करें' : 'Refresh'}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gold 24K */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
                    <Coins size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mobile-text-base">
                      {isHindi ? 'सोना 24K' : 'Gold 24K'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isHindi ? 'प्रति ग्राम' : 'per gram'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {formatPrice(currentCity.gold24k)}
                  </div>
                  <div className={`text-sm ${getChangeColor(currentCity.gold24kChange)}`}>
                    {currentCity.gold24kChange > 0 ? '+' : ''}{currentCity.gold24kChange}
                  </div>
                </div>
              </div>
              
              <div className={`${getChangeBgColor(currentCity.gold24kChange)} rounded-lg p-3 flex items-center justify-between`}>
                <span className="text-sm text-gray-600">
                  {isHindi ? 'आज का परिवर्तन' : "Today's Change"}
                </span>
                <div className="flex items-center space-x-1">
                  {getChangeIcon(currentCity.gold24kChange)}
                  <span className={`text-sm font-medium ${getChangeColor(currentCity.gold24kChange)}`}>
                    {currentCity.gold24kChange > 0 ? '+' : ''}{currentCity.gold24kChange}
                  </span>
                </div>
              </div>
            </div>

            {/* Gold 22K */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
                    <Coins size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mobile-text-base">
                      {isHindi ? 'सोना 22K' : 'Gold 22K'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isHindi ? 'प्रति ग्राम' : 'per gram'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {formatPrice(currentCity.gold22k)}
                  </div>
                  <div className={`text-sm ${getChangeColor(currentCity.gold22kChange)}`}>
                    {currentCity.gold22kChange > 0 ? '+' : ''}{currentCity.gold22kChange}
                  </div>
                </div>
              </div>
              
              <div className={`${getChangeBgColor(currentCity.gold22kChange)} rounded-lg p-3 flex items-center justify-between`}>
                <span className="text-sm text-gray-600">
                  {isHindi ? 'आज का परिवर्तन' : "Today's Change"}
                </span>
                <div className="flex items-center space-x-1">
                  {getChangeIcon(currentCity.gold22kChange)}
                  <span className={`text-sm font-medium ${getChangeColor(currentCity.gold22kChange)}`}>
                    {currentCity.gold22kChange > 0 ? '+' : ''}{currentCity.gold22kChange}
                  </span>
                </div>
              </div>
            </div>

            {/* Silver */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-100 text-gray-600 p-2 rounded-lg">
                    <Coins size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mobile-text-base">
                      {isHindi ? 'चांदी' : 'Silver'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isHindi ? 'प्रति किलो' : 'per kg'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {formatPrice(currentCity.silver * 1000)}
                  </div>
                  <div className={`text-sm ${getChangeColor(currentCity.silverChange)}`}>
                    {currentCity.silverChange > 0 ? '+' : ''}{currentCity.silverChange}
                  </div>
                </div>
              </div>
              
              <div className={`${getChangeBgColor(currentCity.silverChange)} rounded-lg p-3 flex items-center justify-between`}>
                <span className="text-sm text-gray-600">
                  {isHindi ? 'आज का परिवर्तन' : "Today's Change"}
                </span>
                <div className="flex items-center space-x-1">
                  {getChangeIcon(currentCity.silverChange)}
                  <span className={`text-sm font-medium ${getChangeColor(currentCity.silverChange)}`}>
                    {currentCity.silverChange > 0 ? '+' : ''}{currentCity.silverChange}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {isHindi ? 'अंतिम अपडेट:' : 'Last Updated:'} {currentCity.lastUpdate}
              </span>
              <span>
                {isHindi ? 'स्रोत: भारतीय रिजर्व बैंक' : 'Source: Reserve Bank of India'}
              </span>
            </div>
          </div>
        </div>

        {/* All Cities Comparison */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-4">
            {isHindi ? 'सभी शहरों की तुलना' : 'All Cities Comparison'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">
                    {isHindi ? 'शहर' : 'City'}
                  </th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">
                    {isHindi ? 'सोना 24K' : 'Gold 24K'}
                  </th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">
                    {isHindi ? 'सोना 22K' : 'Gold 22K'}
                  </th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">
                    {isHindi ? 'चांदी' : 'Silver'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(metalData).map(([city, data]) => (
                  <tr 
                    key={city} 
                    className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedCity === city ? 'bg-yellow-50' : ''
                    }`}
                    onClick={() => handleCityChange(city)}
                  >
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-800">{data.name}</span>
                        {selectedCity === city && (
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        )}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2">
                      <div className="font-medium text-gray-800">{formatPrice(data.gold24k)}</div>
                      <div className={`text-xs ${getChangeColor(data.gold24kChange)}`}>
                        {data.gold24kChange > 0 ? '+' : ''}{data.gold24kChange}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2">
                      <div className="font-medium text-gray-800">{formatPrice(data.gold22k)}</div>
                      <div className={`text-xs ${getChangeColor(data.gold22kChange)}`}>
                        {data.gold22kChange > 0 ? '+' : ''}{data.gold22kChange}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2">
                      <div className="font-medium text-gray-800">{formatPrice(data.silver * 1000)}</div>
                      <div className={`text-xs ${getChangeColor(data.silverChange)}`}>
                        {data.silverChange > 0 ? '+' : ''}{data.silverChange}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'धातु की दरों के बारे में' : 'About Metal Rates'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'सोने और चांदी की कीमतें अंतरराष्ट्रीय बाजार, डॉलर-रुपया विनिमय दर और घरेलू मांग-आपूर्ति पर निर्भर करती हैं।'
                : 'Gold and silver prices depend on international markets, dollar-rupee exchange rates, and domestic demand-supply.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह जानकारी भारतीय रिजर्व बैंक और बाजार स्रोतों से प्राप्त की जाती है।'
                : 'This information is sourced from the Reserve Bank of India and market sources.'
              }
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex items-start space-x-2">
                <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {isHindi 
                    ? 'कीमतें दिन में कई बार अपडेट होती हैं। सटीक कीमतों के लिए अपने निकटतम ज्वैलर्स से संपर्क करें।'
                    : 'Prices are updated multiple times daily. Contact your nearest jeweler for exact prices.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetalRates
