import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Fuel, MapPin, TrendingUp, TrendingDown, RefreshCw, Info } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const FuelPrices = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [selectedCity, setSelectedCity] = useState('bhopal')
  const [lastUpdated, setLastUpdated] = useState('2024-01-15')

  // Demo fuel price data
  const fuelData = {
    bhopal: {
      name: isHindi ? 'भोपाल' : 'Bhopal',
      petrol: 95.45,
      diesel: 88.32,
      petrolChange: 0.18,
      dieselChange: -0.05,
      lastUpdate: '2024-01-15'
    },
    indore: {
      name: isHindi ? 'इंदौर' : 'Indore',
      petrol: 96.12,
      diesel: 89.15,
      petrolChange: 0.22,
      dieselChange: -0.08,
      lastUpdate: '2024-01-15'
    },
    gwalior: {
      name: isHindi ? 'ग्वालियर' : 'Gwalior',
      petrol: 94.89,
      diesel: 87.95,
      petrolChange: 0.15,
      dieselChange: -0.12,
      lastUpdate: '2024-01-15'
    },
    jabalpur: {
      name: isHindi ? 'जबलपुर' : 'Jabalpur',
      petrol: 95.67,
      diesel: 88.78,
      petrolChange: 0.20,
      dieselChange: -0.06,
      lastUpdate: '2024-01-15'
    },
    delhi: {
      name: isHindi ? 'दिल्ली' : 'Delhi',
      petrol: 96.72,
      diesel: 89.62,
      petrolChange: 0.15,
      dieselChange: -0.08,
      lastUpdate: '2024-01-15'
    },
    mumbai: {
      name: isHindi ? 'मुंबई' : 'Mumbai',
      petrol: 106.31,
      diesel: 94.27,
      petrolChange: 0.22,
      dieselChange: -0.12,
      lastUpdate: '2024-01-15'
    },
    kolkata: {
      name: isHindi ? 'कोलकाता' : 'Kolkata',
      petrol: 106.03,
      diesel: 92.76,
      petrolChange: 0.18,
      dieselChange: -0.05,
      lastUpdate: '2024-01-15'
    },
    chennai: {
      name: isHindi ? 'चेन्नई' : 'Chennai',
      petrol: 102.63,
      diesel: 94.24,
      petrolChange: 0.20,
      dieselChange: -0.10,
      lastUpdate: '2024-01-15'
    },
    bangalore: {
      name: isHindi ? 'बेंगलुरु' : 'Bangalore',
      petrol: 101.94,
      diesel: 87.89,
      petrolChange: 0.25,
      dieselChange: -0.15,
      lastUpdate: '2024-01-15'
    },
    hyderabad: {
      name: isHindi ? 'हैदराबाद' : 'Hyderabad',
      petrol: 109.66,
      diesel: 97.82,
      petrolChange: 0.19,
      dieselChange: -0.08,
      lastUpdate: '2024-01-15'
    }
  }

  const currentCity = fuelData[selectedCity]

  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  const handleRefresh = () => {
    // Simulate refresh
    setLastUpdated(new Date().toISOString().split('T')[0])
  }

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`
  }

  const getChangeIcon = (change) => {
    if (change > 0) {
      return <TrendingUp size={16} className="text-red-600" />
    } else if (change < 0) {
      return <TrendingDown size={16} className="text-green-600" />
    }
    return null
  }

  const getChangeColor = (change) => {
    if (change > 0) return 'text-red-600'
    if (change < 0) return 'text-green-600'
    return 'text-gray-600'
  }

  const getChangeBgColor = (change) => {
    if (change > 0) return 'bg-red-50'
    if (change < 0) return 'bg-green-50'
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
              <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Fuel size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.fuelPrices}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'ताजा ईंधन की कीमतें' : 'Latest fuel prices'}
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
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-sm font-medium">{fuelData[city].name}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Other Cities Section */}
          <div>
            <h3 className="mobile-text-base sm:mobile-text-lg font-medium text-gray-700 mb-3 border-b border-gray-200 pb-2">
              {isHindi ? 'अन्य शहर' : 'Other Cities'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {Object.keys(fuelData).filter(city => !['bhopal', 'indore', 'gwalior', 'jabalpur'].includes(city)).map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className={`p-3 rounded-lg border transition-colors ${
                    selectedCity === city
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-sm font-medium">{fuelData[city].name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current City Fuel Prices */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800">
              {isHindi ? `${currentCity.name} में ईंधन की कीमतें` : `Fuel Prices in ${currentCity.name}`}
            </h2>
            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <RefreshCw size={16} />
              <span className="text-sm">{isHindi ? 'ताज़ा करें' : 'Refresh'}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Petrol */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <Fuel size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mobile-text-base">
                      {isHindi ? 'पेट्रोल' : 'Petrol'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isHindi ? 'प्रति लीटर' : 'per liter'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {formatPrice(currentCity.petrol)}
                  </div>
                  <div className={`text-sm ${getChangeColor(currentCity.petrolChange)}`}>
                    {currentCity.petrolChange > 0 ? '+' : ''}{currentCity.petrolChange.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <div className={`${getChangeBgColor(currentCity.petrolChange)} rounded-lg p-3 flex items-center justify-between`}>
                <span className="text-sm text-gray-600">
                  {isHindi ? 'आज का परिवर्तन' : "Today's Change"}
                </span>
                <div className="flex items-center space-x-1">
                  {getChangeIcon(currentCity.petrolChange)}
                  <span className={`text-sm font-medium ${getChangeColor(currentCity.petrolChange)}`}>
                    {currentCity.petrolChange > 0 ? '+' : ''}{currentCity.petrolChange.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Diesel */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <Fuel size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mobile-text-base">
                      {isHindi ? 'डीजल' : 'Diesel'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isHindi ? 'प्रति लीटर' : 'per liter'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {formatPrice(currentCity.diesel)}
                  </div>
                  <div className={`text-sm ${getChangeColor(currentCity.dieselChange)}`}>
                    {currentCity.dieselChange > 0 ? '+' : ''}{currentCity.dieselChange.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <div className={`${getChangeBgColor(currentCity.dieselChange)} rounded-lg p-3 flex items-center justify-between`}>
                <span className="text-sm text-gray-600">
                  {isHindi ? 'आज का परिवर्तन' : "Today's Change"}
                </span>
                <div className="flex items-center space-x-1">
                  {getChangeIcon(currentCity.dieselChange)}
                  <span className={`text-sm font-medium ${getChangeColor(currentCity.dieselChange)}`}>
                    {currentCity.dieselChange > 0 ? '+' : ''}{currentCity.dieselChange.toFixed(2)}
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
                {isHindi ? 'स्रोत: पेट्रोलियम मंत्रालय' : 'Source: Ministry of Petroleum'}
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
                    {isHindi ? 'पेट्रोल' : 'Petrol'}
                  </th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">
                    {isHindi ? 'डीजल' : 'Diesel'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(fuelData).map(([city, data]) => (
                  <tr 
                    key={city} 
                    className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                      selectedCity === city ? 'bg-orange-50' : ''
                    }`}
                    onClick={() => handleCityChange(city)}
                  >
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-800">{data.name}</span>
                        {selectedCity === city && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        )}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2">
                      <div className="font-medium text-gray-800">{formatPrice(data.petrol)}</div>
                      <div className={`text-xs ${getChangeColor(data.petrolChange)}`}>
                        {data.petrolChange > 0 ? '+' : ''}{data.petrolChange.toFixed(2)}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2">
                      <div className="font-medium text-gray-800">{formatPrice(data.diesel)}</div>
                      <div className={`text-xs ${getChangeColor(data.dieselChange)}`}>
                        {data.dieselChange > 0 ? '+' : ''}{data.dieselChange.toFixed(2)}
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
            {isHindi ? 'ईंधन की कीमतों के बारे में' : 'About Fuel Prices'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'भारत में ईंधन की कीमतें हर दिन अपडेट होती हैं और कच्चे तेल की कीमतों, करों और विनिमय दरों पर निर्भर करती हैं।'
                : 'Fuel prices in India are updated daily and depend on crude oil prices, taxes, and exchange rates.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह जानकारी पेट्रोलियम मंत्रालय और राज्य सरकारों से प्राप्त की जाती है।'
                : 'This information is sourced from the Ministry of Petroleum and state governments.'
              }
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex items-start space-x-2">
                <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {isHindi 
                    ? 'कीमतें दिन में एक बार अपडेट होती हैं। सटीक कीमतों के लिए अपने निकटतम पेट्रोल पंप से संपर्क करें।'
                    : 'Prices are updated once daily. Contact your nearest petrol pump for exact prices.'
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

export default FuelPrices
