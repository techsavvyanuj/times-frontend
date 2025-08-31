import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Wind, MapPin, RefreshCw, Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const AQIChecker = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [selectedCity, setSelectedCity] = useState('delhi')
  const [lastUpdated, setLastUpdated] = useState('2024-01-15')

  // Demo AQI data
  const aqiData = {
    delhi: {
      name: isHindi ? 'दिल्ली' : 'Delhi',
      aqi: 156,
      category: 'Unhealthy',
      categoryHindi: 'अस्वस्थ',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: isHindi ? 'कुछ लोगों के लिए स्वास्थ्य प्रभाव संभव' : 'Some health effects possible',
      recommendation: isHindi ? 'संवेदनशील समूह बाहरी गतिविधियों को सीमित करें' : 'Sensitive groups limit outdoor activities',
      lastUpdate: '2024-01-15',
      pollutants: {
        pm25: 65.2,
        pm10: 142.8,
        no2: 45.3,
        so2: 12.7,
        co: 1.8,
        o3: 28.9
      }
    },
    mumbai: {
      name: isHindi ? 'मुंबई' : 'Mumbai',
      aqi: 89,
      category: 'Moderate',
      categoryHindi: 'मध्यम',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      description: isHindi ? 'सामान्य जनसंख्या के लिए स्वीकार्य' : 'Acceptable for general population',
      recommendation: isHindi ? 'संवेदनशील लोग लंबे समय तक बाहर रहने से बचें' : 'Sensitive people avoid long outdoor exposure',
      lastUpdate: '2024-01-15',
      pollutants: {
        pm25: 32.1,
        pm10: 78.5,
        no2: 28.9,
        so2: 8.3,
        co: 0.9,
        o3: 45.2
      }
    },
    kolkata: {
      name: isHindi ? 'कोलकाता' : 'Kolkata',
      aqi: 203,
      category: 'Very Unhealthy',
      categoryHindi: 'बहुत अस्वस्थ',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: isHindi ? 'सभी के लिए स्वास्थ्य प्रभाव संभव' : 'Health effects possible for everyone',
      recommendation: isHindi ? 'बाहरी गतिविधियों से बचें, घर के अंदर रहें' : 'Avoid outdoor activities, stay indoors',
      lastUpdate: '2024-01-15',
      pollutants: {
        pm25: 95.8,
        pm10: 187.3,
        no2: 67.4,
        so2: 18.9,
        co: 2.4,
        o3: 35.7
      }
    },
    chennai: {
      name: isHindi ? 'चेन्नई' : 'Chennai',
      aqi: 67,
      category: 'Moderate',
      categoryHindi: 'मध्यम',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      description: isHindi ? 'सामान्य जनसंख्या के लिए स्वीकार्य' : 'Acceptable for general population',
      recommendation: isHindi ? 'संवेदनशील लोग लंबे समय तक बाहर रहने से बचें' : 'Sensitive people avoid long outdoor exposure',
      lastUpdate: '2024-01-15',
      pollutants: {
        pm25: 25.8,
        pm10: 62.1,
        no2: 22.4,
        so2: 6.8,
        co: 0.7,
        o3: 38.5
      }
    }
  }

  const currentCity = aqiData[selectedCity]

  const getAQICategory = (aqi) => {
    if (aqi <= 50) return {
      category: isHindi ? 'अच्छा' : 'Good',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: <CheckCircle size={20} className="text-green-600" />
    }
    else if (aqi <= 100) return {
      category: isHindi ? 'मध्यम' : 'Moderate',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: <AlertTriangle size={20} className="text-yellow-600" />
    }
    else if (aqi <= 150) return {
      category: isHindi ? 'अस्वस्थ' : 'Unhealthy for Sensitive Groups',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: <AlertTriangle size={20} className="text-orange-600" />
    }
    else if (aqi <= 200) return {
      category: isHindi ? 'अस्वस्थ' : 'Unhealthy',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: <XCircle size={20} className="text-red-600" />
    }
    else if (aqi <= 300) return {
      category: isHindi ? 'बहुत अस्वस्थ' : 'Very Unhealthy',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: <XCircle size={20} className="text-purple-600" />
    }
    else return {
      category: isHindi ? 'खतरनाक' : 'Hazardous',
      color: 'text-red-800',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-300',
      icon: <XCircle size={20} className="text-red-800" />
    }
  }

  const aqiCategory = getAQICategory(currentCity.aqi)

  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  const handleRefresh = () => {
    setLastUpdated(new Date().toISOString().split('T')[0])
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
              <div className="bg-red-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Wind size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.aqiChecker}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'वायु गुणवत्ता जानकारी' : 'Air quality information'}
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
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.keys(aqiData).map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={`p-3 rounded-lg border transition-colors ${
                  selectedCity === city
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                }`}
              >
                <div className="text-sm font-medium">{aqiData[city].name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current City AQI */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800">
              {isHindi ? `${currentCity.name} में वायु गुणवत्ता` : `Air Quality in ${currentCity.name}`}
            </h2>
            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <RefreshCw size={16} />
              <span className="text-sm">{isHindi ? 'ताज़ा करें' : 'Refresh'}</span>
            </button>
          </div>
          
          {/* AQI Display */}
          <div className={`${aqiCategory.bgColor} ${aqiCategory.borderColor} border rounded-lg p-6 text-center mb-6`}>
            <div className="flex items-center justify-center space-x-3 mb-3">
              {aqiCategory.icon}
              <h3 className={`text-2xl sm:text-3xl font-bold ${aqiCategory.color}`}>
                {currentCity.aqi}
              </h3>
            </div>
            <div className={`text-xl font-semibold ${aqiCategory.color} mb-2`}>
              {aqiCategory.category}
            </div>
            <div className="text-sm text-gray-600">
              {isHindi ? 'वायु गुणवत्ता सूचकांक' : 'Air Quality Index'}
            </div>
          </div>

          {/* AQI Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                {isHindi ? 'विवरण' : 'Description'}
              </h4>
              <p className="text-sm text-gray-700">
                {currentCity.description}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                {isHindi ? 'सिफारिश' : 'Recommendation'}
              </h4>
              <p className="text-sm text-gray-700">
                {currentCity.recommendation}
              </p>
            </div>
          </div>

          {/* Pollutants */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">
              {isHindi ? 'प्रदूषक स्तर' : 'Pollutant Levels'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">PM2.5</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.pm25} µg/m³</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">PM10</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.pm10} µg/m³</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">NO₂</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.no2} µg/m³</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">SO₂</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.so2} µg/m³</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">CO</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.co} mg/m³</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">O₃</div>
                <div className="text-sm text-gray-600">{currentCity.pollutants.o3} µg/m³</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {isHindi ? 'अंतिम अपडेट:' : 'Last Updated:'} {currentCity.lastUpdate}
              </span>
              <span>
                {isHindi ? 'स्रोत: CPCB' : 'Source: CPCB'}
              </span>
            </div>
          </div>
        </div>

        {/* AQI Scale */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-4">
            {isHindi ? 'AQI स्केल' : 'AQI Scale'}
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">0-50: {isHindi ? 'अच्छा' : 'Good'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'वायु गुणवत्ता संतोषजनक' : 'Air quality satisfactory'}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">51-100: {isHindi ? 'मध्यम' : 'Moderate'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'कुछ प्रदूषण मौजूद' : 'Some pollution present'}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">101-150: {isHindi ? 'अस्वस्थ' : 'Unhealthy for Sensitive Groups'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'संवेदनशील लोगों के लिए अस्वस्थ' : 'Unhealthy for sensitive people'}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">151-200: {isHindi ? 'अस्वस्थ' : 'Unhealthy'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'सभी के लिए अस्वस्थ' : 'Unhealthy for everyone'}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">201-300: {isHindi ? 'बहुत अस्वस्थ' : 'Very Unhealthy'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'गंभीर स्वास्थ्य प्रभाव' : 'Serious health effects'}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-red-100 rounded-lg">
              <div className="w-4 h-4 bg-red-800 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">300+: {isHindi ? 'खतरनाक' : 'Hazardous'}</div>
                <div className="text-sm text-gray-600">{isHindi ? 'आपातकालीन स्थिति' : 'Emergency conditions'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'वायु गुणवत्ता के बारे में' : 'About Air Quality'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'वायु गुणवत्ता सूचकांक (AQI) वायु प्रदूषण के स्तर को मापने का एक तरीका है।'
                : 'Air Quality Index (AQI) is a way to measure air pollution levels.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह जानकारी केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB) से प्राप्त की जाती है।'
                : 'This information is sourced from the Central Pollution Control Board (CPCB).'
              }
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex items-start space-x-2">
                <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {isHindi 
                    ? 'AQI हर घंटे अपडेट होता है। सटीक जानकारी के लिए CPCB की आधिकारिक वेबसाइट देखें।'
                    : 'AQI is updated every hour. Check CPCB official website for accurate information.'
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

export default AQIChecker
