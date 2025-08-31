import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Calendar, Heart, TrendingUp, AlertTriangle, Info } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Horoscope = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [selectedSign, setSelectedSign] = useState('aries')
  const [selectedDate, setSelectedDate] = useState('today')

  // Demo horoscope data
  const horoscopeData = {
    aries: {
      name: isHindi ? 'मेष' : 'Aries',
      englishName: 'Aries',
      symbol: '♈',
      element: isHindi ? 'अग्नि' : 'Fire',
      dates: isHindi ? '21 मार्च - 19 अप्रैल' : 'March 21 - April 19',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'उत्साहित' : 'Excited',
        luckyNumber: 7,
        luckyColor: isHindi ? 'लाल' : 'Red',
        compatibility: isHindi ? 'सिंह' : 'Leo',
        general: isHindi ? 'आज आपका दिन बहुत अच्छा रहेगा। नई परियोजनाएं शुरू करने का समय है।' : 'Today will be a great day for you. It\'s time to start new projects.',
        love: isHindi ? 'प्यार में नई ऊर्जा आएगी। अपने साथी के साथ समय बिताएं।' : 'New energy will come in love. Spend time with your partner.',
        career: isHindi ? 'कार्यक्षेत्र में सफलता मिलेगी। टीम के साथ सहयोग करें।' : 'Success will be achieved in career. Collaborate with the team.',
        health: isHindi ? 'स्वास्थ्य अच्छा रहेगा। व्यायाम करें और पौष्टिक भोजन लें।' : 'Health will be good. Exercise and eat nutritious food.',
        travel: isHindi ? 'यात्रा के लिए अच्छा दिन है। नई जगहें देखने जाएं।' : 'Good day for travel. Go to see new places.'
      }
    },
    taurus: {
      name: isHindi ? 'वृषभ' : 'Taurus',
      englishName: 'Taurus',
      symbol: '♉',
      element: isHindi ? 'पृथ्वी' : 'Earth',
      dates: isHindi ? '20 अप्रैल - 20 मई' : 'April 20 - May 20',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'शांत' : 'Calm',
        luckyNumber: 4,
        luckyColor: isHindi ? 'हरा' : 'Green',
        compatibility: isHindi ? 'कन्या' : 'Virgo',
        general: isHindi ? 'आज आप धैर्यवान और दृढ़ रहेंगे। अपने लक्ष्यों पर ध्यान केंद्रित करें।' : 'Today you will be patient and determined. Focus on your goals.',
        love: isHindi ? 'रिश्ते में स्थिरता आएगी। विश्वास बनाए रखें।' : 'Stability will come in relationships. Maintain trust.',
        career: isHindi ? 'कार्य में सावधानी बरतें। नई जिम्मेदारियां मिल सकती हैं।' : 'Be careful at work. New responsibilities may come.',
        health: isHindi ? 'स्वास्थ्य के लिए योग करें। तनाव कम करें।' : 'Do yoga for health. Reduce stress.',
        travel: isHindi ? 'घर के पास की यात्रा करें। प्रकृति का आनंद लें।' : 'Travel near home. Enjoy nature.'
      }
    },
    gemini: {
      name: isHindi ? 'मिथुन' : 'Gemini',
      englishName: 'Gemini',
      symbol: '♊',
      element: isHindi ? 'वायु' : 'Air',
      dates: isHindi ? '21 मई - 20 जून' : 'May 21 - June 20',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'जिज्ञासु' : 'Curious',
        luckyNumber: 5,
        luckyColor: isHindi ? 'पीला' : 'Yellow',
        compatibility: isHindi ? 'तुला' : 'Libra',
        general: isHindi ? 'आज आपकी बुद्धि तेज होगी। नई जानकारी प्राप्त करें।' : 'Today your intelligence will be sharp. Gain new information.',
        love: isHindi ? 'संवाद में सुधार होगा। अपनी भावनाएं व्यक्त करें।' : 'Communication will improve. Express your feelings.',
        career: isHindi ? 'शिक्षा और प्रशिक्षण के अवसर मिलेंगे।' : 'Opportunities for education and training will come.',
        health: isHindi ? 'मानसिक स्वास्थ्य पर ध्यान दें। पढ़ाई करें।' : 'Pay attention to mental health. Study.',
        travel: isHindi ? 'शैक्षिक यात्रा के लिए अच्छा दिन है।' : 'Good day for educational travel.'
      }
    },
    cancer: {
      name: isHindi ? 'कर्क' : 'Cancer',
      englishName: 'Cancer',
      symbol: '♋',
      element: isHindi ? 'जल' : 'Water',
      dates: isHindi ? '21 जून - 22 जुलाई' : 'June 21 - July 22',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'संवेदनशील' : 'Sensitive',
        luckyNumber: 2,
        luckyColor: isHindi ? 'सफेद' : 'White',
        compatibility: isHindi ? 'वृश्चिक' : 'Scorpio',
        general: isHindi ? 'आज आपकी भावनाएं गहरी होंगी। परिवार के साथ समय बिताएं।' : 'Today your emotions will be deep. Spend time with family.',
        love: isHindi ? 'परिवार के साथ प्यार बढ़ेगा। घर में सुख-शांति रहेगी।' : 'Love will increase with family. There will be peace at home.',
        career: isHindi ? 'घर से काम करने के अवसर मिल सकते हैं।' : 'Opportunities to work from home may come.',
        health: isHindi ? 'पर्याप्त नींद लें। आराम करें।' : 'Get enough sleep. Rest.',
        travel: isHindi ? 'घर के पास की यात्रा करें।' : 'Travel near home.'
      }
    },
    leo: {
      name: isHindi ? 'सिंह' : 'Leo',
      englishName: 'Leo',
      symbol: '♌',
      element: isHindi ? 'अग्नि' : 'Fire',
      dates: isHindi ? '23 जुलाई - 22 अगस्त' : 'July 23 - August 22',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'आत्मविश्वासी' : 'Confident',
        luckyNumber: 1,
        luckyColor: isHindi ? 'सोना' : 'Gold',
        compatibility: isHindi ? 'मेष' : 'Aries',
        general: isHindi ? 'आज आपका नेतृत्व दिखेगा। दूसरों की मदद करें।' : 'Today your leadership will show. Help others.',
        love: isHindi ? 'रोमांस में नई चमक आएगी। अपने आकर्षण का प्रदर्शन करें।' : 'New spark will come in romance. Show your charm.',
        career: isHindi ? 'प्रमोशन के अवसर मिल सकते हैं। अपनी क्षमताओं का प्रदर्शन करें।' : 'Promotion opportunities may come. Show your abilities.',
        health: isHindi ? 'कार्डियो व्यायाम करें। ऊर्जा बढ़ाएं।' : 'Do cardio exercise. Increase energy.',
        travel: isHindi ? 'लक्जरी यात्रा के लिए अच्छा दिन है।' : 'Good day for luxury travel.'
      }
    },
    virgo: {
      name: isHindi ? 'कन्या' : 'Virgo',
      englishName: 'Virgo',
      symbol: '♍',
      element: isHindi ? 'पृथ्वी' : 'Earth',
      dates: isHindi ? '23 अगस्त - 22 सितंबर' : 'August 23 - September 22',
      today: {
        date: '2024-01-15',
        mood: isHindi ? 'व्यवस्थित' : 'Organized',
        luckyNumber: 6,
        luckyColor: isHindi ? 'नीला' : 'Blue',
        compatibility: isHindi ? 'वृषभ' : 'Taurus',
        general: isHindi ? 'आज आप विस्तार पर ध्यान देंगे। गुणवत्ता बनाए रखें।' : 'Today you will pay attention to detail. Maintain quality.',
        love: isHindi ? 'रिश्ते में स्पष्टता आएगी। ईमानदारी बनाए रखें।' : 'Clarity will come in relationships. Maintain honesty.',
        career: isHindi ? 'कार्य में सटीकता बढ़ेगी। नई प्रक्रियाएं सीखें।' : 'Accuracy will increase at work. Learn new processes.',
        health: isHindi ? 'पौष्टिक भोजन लें। नियमित व्यायाम करें।' : 'Eat nutritious food. Exercise regularly.',
        travel: isHindi ? 'व्यवस्थित यात्रा की योजना बनाएं।' : 'Plan organized travel.'
      }
    }
  }

  const currentSign = horoscopeData[selectedSign]

  const handleSignChange = (sign) => {
    setSelectedSign(sign)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const getMoodIcon = (mood) => {
    switch (mood.toLowerCase()) {
      case 'excited':
      case 'उत्साहित':
        return <TrendingUp size={20} className="text-green-600" />
      case 'calm':
      case 'शांत':
        return <Heart size={20} className="text-blue-600" />
      case 'curious':
      case 'जिज्ञासु':
        return <Star size={20} className="text-yellow-600" />
      case 'sensitive':
      case 'संवेदनशील':
        return <Heart size={20} className="text-pink-600" />
      case 'confident':
      case 'आत्मविश्वासी':
        return <TrendingUp size={20} className="text-orange-600" />
      case 'organized':
      case 'व्यवस्थित':
        return <Calendar size={20} className="text-purple-600" />
      default:
        return <Star size={20} className="text-gray-600" />
    }
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
              <div className="bg-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Star size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.horoscope}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'दैनिक राशिफल पढ़ना' : 'Daily horoscope readings'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Zodiac Sign Selection */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
            {isHindi ? 'अपनी राशि चुनें' : 'Select Your Zodiac Sign'}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {Object.keys(horoscopeData).map((sign) => (
              <button
                key={sign}
                onClick={() => handleSignChange(sign)}
                className={`p-3 rounded-lg border transition-colors ${
                  selectedSign === sign
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                <div className="text-2xl mb-1">{horoscopeData[sign].symbol}</div>
                <div className="text-sm font-medium">{horoscopeData[sign].name}</div>
                <div className="text-xs text-gray-500">{horoscopeData[sign].englishName}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Sign Horoscope */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800">
              {isHindi ? `${currentSign.name} राशिफल` : `${currentSign.englishName} Horoscope`}
            </h2>
            <div className="text-3xl">{currentSign.symbol}</div>
          </div>
          
          {/* Sign Info */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600 mb-1">
                  {isHindi ? 'तत्व' : 'Element'}
                </div>
                <div className="font-semibold text-indigo-700">{currentSign.element}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">
                  {isHindi ? 'तिथियां' : 'Dates'}
                </div>
                <div className="font-semibold text-indigo-700 text-sm">{currentSign.dates}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">
                  {isHindi ? 'अनुकूलता' : 'Compatibility'}
                </div>
                <div className="font-semibold text-indigo-700">{currentSign.today.compatibility}</div>
              </div>
            </div>
          </div>

          {/* Today's Horoscope */}
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Calendar size={20} className="text-indigo-600" />
                <h3 className="font-semibold text-gray-800 mobile-text-base">
                  {isHindi ? 'आज का राशिफल' : "Today's Horoscope"}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    {isHindi ? 'मूड' : 'Mood'}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {getMoodIcon(currentSign.today.mood)}
                    <span className="font-medium text-gray-800">{currentSign.today.mood}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    {isHindi ? 'शुभ संख्या' : 'Lucky Number'}
                  </div>
                  <div className="font-medium text-gray-800">{currentSign.today.luckyNumber}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    {isHindi ? 'शुभ रंग' : 'Lucky Color'}
                  </div>
                  <div className="font-medium text-gray-800">{currentSign.today.luckyColor}</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'सामान्य' : 'General'}
                  </h4>
                  <p className="text-sm text-gray-700">{currentSign.today.general}</p>
                </div>
                
                <div className="bg-pink-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'प्यार' : 'Love'}
                  </h4>
                  <p className="text-sm text-gray-700">{currentSign.today.love}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'करियर' : 'Career'}
                  </h4>
                  <p className="text-sm text-gray-700">{currentSign.today.career}</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'स्वास्थ्य' : 'Health'}
                  </h4>
                  <p className="text-sm text-gray-700">{currentSign.today.health}</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'यात्रा' : 'Travel'}
                  </h4>
                  <p className="text-sm text-gray-700">{currentSign.today.travel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {isHindi ? 'तिथि:' : 'Date:'} {currentSign.today.date}
              </span>
              <span>
                {isHindi ? 'स्रोत: ज्योतिष विज्ञान' : 'Source: Astrology Science'}
              </span>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'राशिफल के बारे में' : 'About Horoscope'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'राशिफल ज्योतिष विज्ञान पर आधारित है और ग्रहों की स्थिति के अनुसार दैनिक मार्गदर्शन प्रदान करता है।'
                : 'Horoscope is based on astrology science and provides daily guidance according to planetary positions.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह जानकारी मनोरंजन के उद्देश्य से है और जीवन के निर्णयों के लिए पूरी तरह से निर्भर नहीं होनी चाहिए।'
                : 'This information is for entertainment purposes and should not be completely relied upon for life decisions.'
              }
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex items-start space-x-2">
                <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {isHindi 
                    ? 'राशिफल हर दिन अपडेट होता है। सटीक जानकारी के लिए विशेषज्ञ ज्योतिषी से परामर्श करें।'
                    : 'Horoscope is updated daily. Consult expert astrologers for accurate information.'
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

export default Horoscope
