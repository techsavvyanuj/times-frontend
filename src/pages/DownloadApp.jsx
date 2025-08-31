import React from 'react'
import { Download, Smartphone, Globe, Shield, Zap, Users, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const DownloadApp = () => {
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const features = [
    {
      icon: Zap,
      title: isHindi ? 'तुरंत अपडेट्स' : 'Instant Updates',
      description: isHindi ? 'ब्रेकिंग न्यूज के लिए पुश नोटिफिकेशन प्राप्त करें' : 'Get push notifications for breaking news'
    },
    {
      icon: Shield,
      title: isHindi ? 'सुरक्षित और विश्वसनीय' : 'Secure & Reliable',
      description: isHindi ? 'आपकी जानकारी सुरक्षित रखें' : 'Keep your information secure'
    },
    {
      icon: Globe,
      title: isHindi ? '24x7 समाचार' : '24x7 News',
      description: isHindi ? 'दिन-रात किसी भी समय समाचार देखें' : 'Watch news anytime, day or night'
    },
    {
      icon: Users,
      title: isHindi ? 'व्यक्तिगत अनुभव' : 'Personalized Experience',
      description: isHindi ? 'आपकी रुचि के अनुसार समाचार' : 'News according to your interests'
    }
  ]

  const appStores = [
    {
      name: 'Google Play Store',
      icon: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
      link: 'https://play.google.com/store/apps/details?id=com.timesnowindia.app',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Apple App Store',
      icon: 'https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg',
      link: 'https://apps.apple.com/app/timesnow-india/id1234567890',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ]

  const handleDownload = (store) => {
    window.open(store.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-timesnow-red to-red-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Smartphone size={80} className="mx-auto mb-6 text-white" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                {isHindi ? 'Times Now India ऐप डाउनलोड करें' : 'Download Times Now India App'}
              </h1>
              <p className="text-xl sm:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
                {isHindi 
                  ? 'भारत का सबसे विश्वसनीय न्यूज़ ऐप - तुरंत अपडेट्स, लाइव न्यूज़ और ब्रेकिंग न्यूज़ के लिए' 
                  : 'India\'s most trusted news app - for instant updates, live news, and breaking news'
                }
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {appStores.map((store) => (
                <button
                  key={store.name}
                  onClick={() => handleDownload(store)}
                  className={`${store.color} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3`}
                >
                  <Download size={24} />
                  <span>{store.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isHindi ? 'ऐप की विशेषताएं' : 'App Features'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isHindi 
                ? 'Times Now India ऐप के साथ अपने समाचार अनुभव को बेहतर बनाएं' 
                : 'Enhance your news experience with the Times Now India app'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-timesnow-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isHindi ? 'ऐप का प्रीव्यू' : 'App Preview'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isHindi 
                ? 'ऐप के इंटरफेस और फीचर्स का एक झलक देखें' 
                : 'Take a glimpse of the app interface and features'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((screenshot) => (
              <div key={screenshot} className="text-center">
                <div className="bg-gray-200 rounded-xl p-4 shadow-lg">
                  <div className="bg-gray-300 w-full h-64 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      {isHindi ? 'स्क्रीनशॉट' : 'Screenshot'} {screenshot}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isHindi 
                      ? screenshot === 1 ? 'होम स्क्रीन' : screenshot === 2 ? 'न्यूज़ फीड' : 'लाइव टीवी'
                      : screenshot === 1 ? 'Home Screen' : screenshot === 2 ? 'News Feed' : 'Live TV'
                    }
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 sm:py-20 bg-timesnow-red">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {isHindi ? 'अभी डाउनलोड करें' : 'Download Now'}
            </h2>
            <p className="text-xl text-red-100 mb-8">
              {isHindi 
                ? 'अपने स्मार्टफोन पर Times Now India ऐप प्राप्त करें और कभी भी समाचार से जुड़े रहें' 
                : 'Get the Times Now India app on your smartphone and stay connected to news anytime'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {appStores.map((store) => (
                <button
                  key={store.name}
                  onClick={() => handleDownload(store)}
                  className="bg-white text-timesnow-red px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3"
                >
                  <Download size={24} />
                  <span>{store.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isHindi ? 'सिस्टम आवश्यकताएं' : 'System Requirements'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isHindi 
                ? 'ऐप चलाने के लिए आवश्यक न्यूनतम आवश्यकताएं' 
                : 'Minimum requirements to run the app'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isHindi ? 'Android' : 'Android'}
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Android 6.0 या उससे ऊपर</li>
                <li>2GB RAM</li>
                <li>100MB स्टोरेज</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🍎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isHindi ? 'iOS' : 'iOS'}
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>iOS 12.0 या उससे ऊपर</li>
                <li>iPhone 6s या उससे ऊपर</li>
                <li>100MB स्टोरेज</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isHindi ? 'वेब' : 'Web'}
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>सभी आधुनिक ब्राउज़र</li>
                <li>इंटरनेट कनेक्शन</li>
                <li>कोई डाउनलोड नहीं</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadApp
