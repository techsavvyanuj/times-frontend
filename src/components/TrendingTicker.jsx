import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const TrendingTicker = () => {
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const trendingNews = [
    isHindi ? "तोड़ने वाला: आज पीएम मोदी से बड़ी घोषणा की उम्मीद" : "Breaking: Major announcement expected from PM Modi today",
    isHindi ? "क्रिकेट: भारत टॉस जीतता है, बल्लेबाजी चुनता है" : "Cricket: India wins the toss, chooses to bat first",
    isHindi ? "शेयर बाजार: सेंसेक्स पहली बार 75,000 के निशान को पार करता है" : "Stock Market: Sensex crosses 75,000 mark for the first time",
    isHindi ? "मौसम: इस सप्ताह के अंत में मुंबई में भारी बारिश की उम्मीद" : "Weather: Heavy rainfall expected in Mumbai this weekend",
    isHindi ? "तकनीक: क्रांतिकारी सुविधाओं के साथ नया स्मार्टफोन लॉन्च" : "Technology: New smartphone launch with revolutionary features",
    isHindi ? "मनोरंजन: बॉलीवुड स्टार नई परियोजना की घोषणा करता है" : "Entertainment: Bollywood star announces new project",
    isHindi ? "खेल: नई दिल्ली में ओलंपिक क्वालिफायर शुरू" : "Sports: Olympic qualifiers begin in New Delhi",
    isHindi ? "व्यापार: दूरसंचार क्षेत्र में बड़ा विलय घोषित" : "Business: Major merger announced in telecom sector"
  ]

  return (
    <div className="bg-timesnow-red text-white py-2 sm:py-3 overflow-hidden">
      <div className="mobile-container">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex-shrink-0 bg-white text-timesnow-red px-2 py-1 sm:px-3 sm:py-1 rounded-md font-bold text-xs sm:text-sm">
            🔥 {t.trending}
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <span className="inline-block text-xs sm:text-sm">
                {trendingNews.join(' • ')}
              </span>
              <span className="inline-block ml-4 sm:ml-8 text-xs sm:text-sm">
                {trendingNews.join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingTicker
