import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { FileText, CheckCircle, AlertTriangle, Shield, Users, Globe, Lock, Scale, Mail, Phone, MapPin } from 'lucide-react'

const TermsConditions = () => {
  const { isHindi } = useLanguage()
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'नियम और शर्तें' : 'Terms & Conditions'}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {isHindi 
                      ? 'Times Now India 24/7 वेबसाइट और सेवाओं के उपयोग के लिए नियम और शर्तें।'
        : 'Terms and conditions for using Times Now India 24/7 website and services.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <p className="text-green-800 text-center">
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
                        ? 'Times Now India 24/7 ("हम," "हमारा," या "हमें") की वेबसाइट और सेवाओं का उपयोग करके, आप इन नियमों और शर्तों ("नियम") के अनुपालन के लिए सहमत होते हैं।'
        : 'By using Times Now India 24/7 ("we," "our," or "us") website and services, you agree to comply with these terms and conditions ("Terms").'
              }
            </p>
            <p className="text-gray-700 leading-relaxed">
              {isHindi 
                ? 'यदि आप इन नियमों से सहमत नहीं हैं, तो कृपया हमारी सेवाओं का उपयोग न करें।'
                : 'If you do not agree with these terms, please do not use our services.'
              }
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle size={28} className="text-green-600" />
              {isHindi ? 'नियमों की स्वीकृति' : 'Acceptance of Terms'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हमारी वेबसाइट का उपयोग करके, आप स्वीकार करते हैं कि:'
                : 'By using our website, you acknowledge that:'
              }
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                {isHindi 
                  ? 'आपने इन नियमों को पढ़ और समझ लिया है'
                  : 'You have read and understood these terms'
                }
              </li>
              <li>
                {isHindi 
                  ? 'आप इन नियमों का पालन करने के लिए सहमत हैं'
                  : 'You agree to comply with these terms'
                }
              </li>
              <li>
                {isHindi 
                  ? 'आप कानूनी रूप से बाध्यकारी समझौते में प्रवेश कर रहे हैं'
                  : 'You are entering into a legally binding agreement'
                }
              </li>
              <li>
                {isHindi 
                  ? 'आपकी आयु 18 वर्ष या उससे अधिक है'
                  : 'You are 18 years of age or older'
                }
              </li>
            </ul>
          </div>

          {/* Use of Services */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Users size={28} className="text-blue-600" />
              {isHindi ? 'सेवाओं का उपयोग' : 'Use of Services'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'अनुमत उपयोग' : 'Permitted Use'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'समाचार और सामग्री पढ़ना' : 'Reading news and content'}</li>
                  <li>{isHindi ? 'व्यक्तिगत, गैर-वाणिज्यिक उद्देश्यों के लिए' : 'For personal, non-commercial purposes'}</li>
                  <li>{isHindi ? 'सामग्री को साझा करना (उचित उपयोग के अधीन)' : 'Sharing content (subject to fair use)'}</li>
                  <li>{isHindi ? 'हमारी सेवाओं पर टिप्पणी करना' : 'Commenting on our services'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'निषिद्ध उपयोग' : 'Prohibited Use'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'अवैध या हानिकारक गतिविधियां' : 'Illegal or harmful activities'}</li>
                  <li>{isHindi ? 'सामग्री की अनधिकृत प्रतिलिपि' : 'Unauthorized copying of content'}</li>
                  <li>{isHindi ? 'स्पैम या दुर्भावनापूर्ण सामग्री' : 'Spam or malicious content'}</li>
                  <li>{isHindi ? 'हमारी सेवाओं को बाधित करना' : 'Disrupting our services'}</li>
                  <li>{isHindi ? 'अन्य उपयोगकर्ताओं की गोपनीयता का उल्लंघन' : 'Violating other users\' privacy'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Shield size={28} className="text-purple-600" />
              {isHindi ? 'बौद्धिक संपदा' : 'Intellectual Property'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                        ? 'हमारी वेबसाइट और सेवाओं पर सभी सामग्री, जिसमें लेख, छवियां, वीडियो और सॉफ्टवेयर शामिल हैं, Times Now India 24/7 या उसके लाइसेंसकर्ताओं की बौद्धिक संपदा है।'
        : 'All content on our website and services, including articles, images, videos, and software, is the intellectual property of Times Now India 24/7 or its licensors.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'आपके अधिकार' : 'Your Rights'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'सामग्री को व्यक्तिगत रूप से पढ़ना' : 'Read content for personal use'}</li>
                  <li>{isHindi ? 'उचित उपयोग के अधीन साझा करना' : 'Share under fair use'}</li>
                  <li>{isHindi ? 'सामग्री पर टिप्पणी करना' : 'Comment on content'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'निषिद्ध कार्य' : 'Prohibited Actions'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'सामग्री की प्रतिलिपि बनाना' : 'Copying content'}</li>
                  <li>{isHindi ? 'वाणिज्यिक उद्देश्यों के लिए उपयोग' : 'Use for commercial purposes'}</li>
                  <li>{isHindi ? 'सामग्री को संशोधित करना' : 'Modifying content'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Accounts */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Lock size={28} className="text-red-600" />
              {isHindi ? 'उपयोगकर्ता खाते' : 'User Accounts'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'खाता निर्माण' : 'Account Creation'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'सटीक और पूर्ण जानकारी प्रदान करें' : 'Provide accurate and complete information'}</li>
                  <li>{isHindi ? 'सुरक्षित पासवर्ड का उपयोग करें' : 'Use a secure password'}</li>
                  <li>{isHindi ? 'अपने खाते की सुरक्षा बनाए रखें' : 'Maintain the security of your account'}</li>
                  <li>{isHindi ? 'अपने खाते को दूसरों के साथ साझा न करें' : 'Do not share your account with others'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'खाता जिम्मेदारियां' : 'Account Responsibilities'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'अपने खाते के माध्यम से की गई सभी गतिविधियों के लिए जिम्मेदार' : 'Responsible for all activities through your account'}</li>
                  <li>{isHindi ? 'संदिग्ध गतिविधि की रिपोर्ट करें' : 'Report suspicious activity'}</li>
                  <li>{isHindi ? 'नियमित रूप से पासवर्ड अपडेट करें' : 'Update password regularly'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Globe size={28} className="text-indigo-600" />
              {isHindi ? 'गोपनीयता और डेटा' : 'Privacy and Data'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। हमारी गोपनीयता नीति बताती है कि हम आपकी जानकारी को कैसे एकत्र, उपयोग और संरक्षित करते हैं।'
                : 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'डेटा संग्रह' : 'Data Collection'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'व्यक्तिगत जानकारी' : 'Personal information'}</li>
                  <li>{isHindi ? 'उपयोग डेटा' : 'Usage data'}</li>
                  <li>{isHindi ? 'कुकीज़ और ट्रैकिंग' : 'Cookies and tracking'}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'डेटा सुरक्षा' : 'Data Security'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>{isHindi ? 'एन्क्रिप्शन' : 'Encryption'}</li>
                  <li>{isHindi ? 'सुरक्षित सर्वर' : 'Secure servers'}</li>
                  <li>{isHindi ? 'नियमित सुरक्षा ऑडिट' : 'Regular security audits'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimers and Limitations */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <AlertTriangle size={28} className="text-yellow-600" />
              {isHindi ? 'अस्वीकरण और सीमाएं' : 'Disclaimers and Limitations'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'सेवा अस्वीकरण' : 'Service Disclaimer'}
                </h3>
                <p className="text-gray-700">
                  {isHindi 
                    ? 'हमारी सेवाएं "जैसी हैं वैसी" प्रदान की जाती हैं। हम सटीकता, पूर्णता या उपलब्धता की गारंटी नहीं देते हैं।'
                    : 'Our services are provided "as is." We do not guarantee accuracy, completeness, or availability.'
                  }
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {isHindi ? 'दायित्व सीमाएं' : 'Liability Limitations'}
                </h3>
                <p className="text-gray-700">
                  {isHindi 
                    ? 'हम किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं होंगे।'
                    : 'We will not be liable for any indirect, incidental, or consequential damages.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FileText size={28} className="text-gray-600" />
              {isHindi ? 'समाप्ति' : 'Termination'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हम इन नियमों के उल्लंघन के मामले में आपके खाते को निलंबित या समाप्त कर सकते हैं।'
                : 'We may suspend or terminate your account in case of violation of these terms.'
              }
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                {isHindi 
                  ? 'नियमों का उल्लंघन'
                  : 'Violation of terms'
                }
              </li>
              <li>
                {isHindi 
                  ? 'अवैध गतिविधि'
                  : 'Illegal activity'
                }
              </li>
              <li>
                {isHindi 
                  ? 'अन्य उपयोगकर्ताओं के लिए हानि'
                  : 'Harm to other users'
                }
              </li>
              <li>
                {isHindi 
                  ? 'सेवाओं का दुरुपयोग'
                  : 'Misuse of services'
                }
              </li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Scale size={28} className="text-blue-600" />
              {isHindi ? 'शासी कानून' : 'Governing Law'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'ये नियम भारतीय कानून द्वारा शासित हैं। किसी भी विवाद को नोएडा, उत्तर प्रदेश, भारत के अधिकार क्षेत्र में हल किया जाएगा।'
                : 'These terms are governed by Indian law. Any disputes will be resolved in the jurisdiction of Noida, Uttar Pradesh, India.'
              }
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {isHindi ? 'नियमों में परिवर्तन' : 'Changes to Terms'}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हम इन नियमों को किसी भी समय संशोधित कर सकते हैं। परिवर्तन हमारी वेबसाइट पर पोस्ट किए जाएंगे।'
                : 'We may modify these terms at any time. Changes will be posted on our website.'
              }
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              {isHindi 
                ? 'परिवर्तनों के बाद सेवाओं का उपयोग जारी रखने से, आप नए नियमों को स्वीकार करते हैं।'
                : 'Continuing to use services after changes constitutes acceptance of new terms.'
              }
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-timesnow-red" />
                <p className="text-gray-600">legal@timesnowindia.com</p>
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

          {/* Legal Department */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'कानूनी विभाग' : 'Legal Department'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-timesnow-red" />
                <p className="text-gray-600">legal@timesnowindia.com</p>
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

export default TermsConditions
