import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Shield, Eye, Lock, Database, Globe, User, Bell, Settings, Mail, Phone, MapPin } from 'lucide-react'

const PrivacyPolicy = () => {
  const { isHindi } = useLanguage()
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपकी जानकारी को कैसे संरक्षित और उपयोग करते हैं।'
              : 'Your privacy is important to us. Learn how we protect and use your information.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800 text-center">
              <strong>{isHindi ? 'अंतिम अपडेट:' : 'Last Updated:'}</strong> {isHindi ? '15 जनवरी 2024' : 'January 15, 2024'}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {isHindi ? 'परिचय' : 'Introduction'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                        ? 'Times Now India 24/7 ("हम," "हमारा," या "हमें") आपकी गोपनीयता का सम्मान करता है। यह गोपनीयता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और संरक्षित करते हैं।'
        : 'Times Now India 24/7 ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.'
              }
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isHindi 
                ? 'इस वेबसाइट का उपयोग करके, आप इस गोपनीयता नीति के अनुसार अपनी जानकारी के संग्रह और उपयोग के लिए सहमत होते हैं।'
                : 'By using this website, you agree to the collection and use of your information in accordance with this Privacy Policy.'
              }
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Database size={28} className="text-indigo-600" />
              {isHindi ? 'हम कौन सी जानकारी एकत्र करते हैं' : 'Information We Collect'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'व्यक्तिगत जानकारी' : 'Personal Information'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'नाम और ईमेल पता' : 'Name and email address'}</li>
                  <li>{isHindi ? 'फोन नंबर' : 'Phone number'}</li>
                  <li>{isHindi ? 'जन्म तिथि' : 'Date of birth'}</li>
                  <li>{isHindi ? 'पता और स्थान' : 'Address and location'}</li>
                  <li>{isHindi ? 'प्रोफ़ाइल फोटो' : 'Profile photo'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'उपयोग डेटा' : 'Usage Data'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'आपकी वेबसाइट यात्राएं' : 'Your website visits'}</li>
                  <li>{isHindi ? 'पेज व्यूज़ और क्लिक्स' : 'Page views and clicks'}</li>
                  <li>{isHindi ? 'आपके द्वारा देखे गए समाचार' : 'News articles you read'}</li>
                  <li>{isHindi ? 'आपकी पसंद और टिप्पणियां' : 'Your likes and comments'}</li>
                  <li>{isHindi ? 'डिवाइस और ब्राउज़र जानकारी' : 'Device and browser information'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'कुकीज़ और ट्रैकिंग' : 'Cookies and Tracking'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'सेशन कुकीज़' : 'Session cookies'}</li>
                  <li>{isHindi ? 'विश्लेषण कुकीज़' : 'Analytics cookies'}</li>
                  <li>{isHindi ? 'विज्ञापन कुकीज़' : 'Advertising cookies'}</li>
                  <li>{isHindi ? 'सोशल मीडिया पिक्सेल' : 'Social media pixels'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Settings size={28} className="text-green-600" />
              {isHindi ? 'हम जानकारी का उपयोग कैसे करते हैं' : 'How We Use Information'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'सेवा प्रदान करना' : 'Providing Services'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'समाचार और सामग्री प्रदान करना' : 'Deliver news and content'}</li>
                  <li>{isHindi ? 'व्यक्तिगत अनुभव' : 'Personalized experience'}</li>
                  <li>{isHindi ? 'खाता प्रबंधन' : 'Account management'}</li>
                  <li>{isHindi ? 'ग्राहक सहायता' : 'Customer support'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'विश्लेषण और सुधार' : 'Analytics and Improvement'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'वेबसाइट प्रदर्शन' : 'Website performance'}</li>
                  <li>{isHindi ? 'उपयोगकर्ता व्यवहार' : 'User behavior'}</li>
                  <li>{isHindi ? 'सामग्री अनुकूलन' : 'Content optimization'}</li>
                  <li>{isHindi ? 'सुरक्षा सुधार' : 'Security improvements'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Globe size={28} className="text-blue-600" />
              {isHindi ? 'जानकारी साझा करना' : 'Information Sharing'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हम आपकी व्यक्तिगत जानकारी को तृतीय पक्षों के साथ नहीं बेचते, व्यापार नहीं करते या स्थानांतरित नहीं करते हैं, सिवाय निम्नलिखित परिस्थितियों के:'
                : 'We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:'
              }
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                {isHindi 
                  ? 'आपकी स्पष्ट सहमति के साथ'
                  : 'With your explicit consent'
                }
              </li>
              <li>
                {isHindi 
                  ? 'कानूनी आवश्यकताओं के अनुपालन के लिए'
                  : 'To comply with legal requirements'
                }
              </li>
              <li>
                {isHindi 
                  ? 'हमारी सेवाओं के प्रावधान के लिए'
                  : 'To provide our services'
                }
              </li>
              <li>
                {isHindi 
                  ? 'सुरक्षा और धोखाधड़ी रोकथाम के लिए'
                  : 'For security and fraud prevention'
                }
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Lock size={28} className="text-red-600" />
              {isHindi ? 'डेटा सुरक्षा' : 'Data Security'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हम आपकी जानकारी की सुरक्षा के लिए उचित सुरक्षा उपायों को लागू करते हैं:'
                : 'We implement appropriate security measures to protect your information:'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'तकनीकी सुरक्षा' : 'Technical Security'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'एन्क्रिप्शन' : 'Encryption'}</li>
                  <li>{isHindi ? 'सुरक्षित सॉकेट लेयर (SSL)' : 'Secure Socket Layer (SSL)'}</li>
                  <li>{isHindi ? 'फायरवॉल सुरक्षा' : 'Firewall protection'}</li>
                  <li>{isHindi ? 'नियमित सुरक्षा ऑडिट' : 'Regular security audits'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'प्रशासनिक सुरक्षा' : 'Administrative Security'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'पहुंच नियंत्रण' : 'Access controls'}</li>
                  <li>{isHindi ? 'कर्मचारी प्रशिक्षण' : 'Employee training'}</li>
                  <li>{isHindi ? 'गोपनीयता समझौते' : 'Confidentiality agreements'}</li>
                  <li>{isHindi ? 'नियमित नीति समीक्षा' : 'Regular policy reviews'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <User size={28} className="text-purple-600" />
              {isHindi ? 'आपके अधिकार' : 'Your Rights'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'आपके पास अपनी व्यक्तिगत जानकारी के संबंध में निम्नलिखित अधिकार हैं:'
                : 'You have the following rights regarding your personal information:'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'पहुंच और नियंत्रण' : 'Access and Control'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'अपनी जानकारी देखें' : 'View your information'}</li>
                  <li>{isHindi ? 'जानकारी अपडेट करें' : 'Update your information'}</li>
                  <li>{isHindi ? 'जानकारी हटाएं' : 'Delete your information'}</li>
                  <li>{isHindi ? 'डेटा पोर्टेबिलिटी' : 'Data portability'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'सहमति और वरीयताएं' : 'Consent and Preferences'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'सहमति वापस लें' : 'Withdraw consent'}</li>
                  <li>{isHindi ? 'विज्ञापन वरीयताएं' : 'Advertising preferences'}</li>
                  <li>{isHindi ? 'कुकी वरीयताएं' : 'Cookie preferences'}</li>
                  <li>{isHindi ? 'सूचना वरीयताएं' : 'Notification preferences'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-timesnow-red" />
                <p className="text-gray-600">privacy@timesnowindia.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-timesnow-red" />
                <p className="text-gray-600">+91 9926890112</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-timesnow-red" />
                <p className="text-gray-600">Times Now India 24/7 Centre, Noida</p>
              </div>
            </div>
          </div>

          {/* Data Protection Officer */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'डेटा संरक्षण अधिकारी' : 'Data Protection Officer'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-timesnow-red" />
                <p className="text-gray-600">dpo@timesnowindia.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-timesnow-red" />
                <p className="text-gray-600">+91 9926890112</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-timesnow-red" />
                <p className="text-gray-600">Times Now India 24/7 Centre, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
