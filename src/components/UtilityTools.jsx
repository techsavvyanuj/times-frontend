import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Calculator, MapPin, Activity, Fuel, Coins, Wind, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const UtilityTools = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const tools = [
    {
      icon: Calculator,
      title: t.loanEMICalculator,
      description: isHindi ? 'अपनी मासिक ईएमआई की गणना करें' : 'Calculate your monthly EMI',
      color: 'bg-blue-500',
      route: '/tools/emi-calculator'
    },
    {
      icon: MapPin,
      title: t.pinCodeFinder,
      description: isHindi ? 'पोस्टल कोड आसानी से खोजें' : 'Find postal codes easily',
      color: 'bg-green-500',
      route: '/tools/pin-finder'
    },
    {
      icon: Activity,
      title: t.bmiCalculator,
      description: isHindi ? 'अपना बॉडी मास इंडेक्स चेक करें' : 'Check your body mass index',
      color: 'bg-purple-500',
      route: '/tools/bmi-calculator'
    },
    {
      icon: Fuel,
      title: t.fuelPrices,
      description: isHindi ? 'ताजा ईंधन की कीमतें' : 'Latest fuel prices',
      color: 'bg-orange-500',
      route: '/tools/fuel-prices'
    },
    {
      icon: Coins,
      title: t.metalRates,
      description: isHindi ? 'वर्तमान कीमती धातु की दरें' : 'Current precious metal rates',
      color: 'bg-yellow-500',
      route: '/tools/metal-rates'
    },
    {
      icon: Wind,
      title: t.aqiChecker,
      description: isHindi ? 'वायु गुणवत्ता जानकारी' : 'Air quality information',
      color: 'bg-red-500',
      route: '/tools/aqi-checker'
    },
    {
      icon: Star,
      title: t.horoscope,
      description: isHindi ? 'दैनिक राशिफल पढ़ना' : 'Daily horoscope readings',
      color: 'bg-indigo-500',
      route: '/tools/horoscope'
    }
  ]

  const handleToolClick = (route) => {
    navigate(route)
  }

  return (
    <div className="py-4 sm:py-6 md:py-8 bg-gray-50">
      <div className="mobile-container">
        <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          {t.utilityTools}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              onClick={() => handleToolClick(tool.route)}
              className="bg-white rounded-lg p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-200 cursor-pointer group transform hover:scale-105"
            >
              <div className={`${tool.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <tool.icon size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 group-hover:text-gray-900 transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-500 text-xs group-hover:text-gray-600 transition-colors">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UtilityTools
