import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Megaphone, Users, TrendingUp, Target, BarChart3, Send, Globe, Monitor, Smartphone, Newspaper, Tv, Radio, Phone, Mail, MapPin } from 'lucide-react'

const AdvertiseWithUs = () => {
  const { isHindi } = useLanguage()
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']
  
  const [selectedPackage, setSelectedPackage] = useState('digital')

  const advertisingPackages = [
    {
      id: 'digital',
      title: isHindi ? 'डिजिटल विज्ञापन' : 'Digital Advertising',
      icon: Monitor,
      description: isHindi 
        ? 'वेबसाइट, मोबाइल ऐप और सोशल मीडिया पर विज्ञापन'
        : 'Advertising on website, mobile app, and social media',
      features: [
        isHindi ? 'वेबसाइट बैनर विज्ञापन' : 'Website banner ads',
        isHindi ? 'मोबाइल ऐप विज्ञापन' : 'Mobile app ads',
        isHindi ? 'सोशल मीडिया प्रचार' : 'Social media promotion',
        isHindi ? 'ईमेल न्यूज़लेटर' : 'Email newsletter',
        isHindi ? 'SEO अनुकूलित सामग्री' : 'SEO optimized content'
      ],
      price: isHindi ? '₹50,000 से शुरू' : 'Starting from ₹50,000',
      color: 'bg-blue-500'
    },
    {
      id: 'tv',
      title: isHindi ? 'टीवी विज्ञापन' : 'TV Advertising',
      icon: Tv,
      description: isHindi 
        ? 'Times Now India 24/7 चैनल पर प्राइम टाइम विज्ञापन'
        : 'Prime time advertising on Times Now India 24/7 channel',
      features: [
        isHindi ? 'प्राइम टाइम स्लॉट' : 'Prime time slots',
        isHindi ? 'न्यूज़ ब्रेक्स के दौरान' : 'During news breaks',
        isHindi ? 'विशेष कार्यक्रमों में' : 'In special programs',
        isHindi ? 'लाइव शो के दौरान' : 'During live shows',
        isHindi ? 'राजनीतिक कार्यक्रमों में' : 'In political programs'
      ],
      price: isHindi ? '₹2,00,000 से शुरू' : 'Starting from ₹2,00,000',
      color: 'bg-red-500'
    },
    {
      id: 'print',
      title: isHindi ? 'प्रिंट विज्ञापन' : 'Print Advertising',
      icon: Newspaper,
      description: isHindi 
        ? 'Times Now India 24/7 समाचार पत्र और पत्रिकाओं में विज्ञापन'
        : 'Advertising in Times Now India 24/7 newspapers and magazines',
      features: [
        isHindi ? 'फ्रंट पेज विज्ञापन' : 'Front page ads',
        isHindi ? 'इनसाइड पेज विज्ञापन' : 'Inside page ads',
        isHindi ? 'विशेष संस्करण' : 'Special editions',
        isHindi ? 'रंगीन विज्ञापन' : 'Color ads',
        isHindi ? 'कस्टम लेआउट' : 'Custom layout'
      ],
      price: isHindi ? '₹25,000 से शुरू' : 'Starting from ₹25,000',
      color: 'bg-green-500'
    },
    {
      id: 'radio',
      title: isHindi ? 'रेडियो विज्ञापन' : 'Radio Advertising',
      icon: Radio,
      description: isHindi 
        ? 'Times Now India 24/7 रेडियो नेटवर्क पर विज्ञापन'
        : 'Advertising on Times Now India 24/7 radio network',
      features: [
        isHindi ? 'प्राइम टाइम स्लॉट' : 'Prime time slots',
        isHindi ? 'न्यूज़ बुलेटिन के दौरान' : 'During news bulletins',
        isHindi ? 'विशेष कार्यक्रम' : 'Special programs',
        isHindi ? 'लाइव कॉल-इन शो' : 'Live call-in shows',
        isHindi ? 'कस्टम जिंगल' : 'Custom jingles'
      ],
      price: isHindi ? '₹30,000 से शुरू' : 'Starting from ₹30,000',
      color: 'bg-purple-500'
    }
  ]

  const selectedPackageData = advertisingPackages.find(pkg => pkg.id === selectedPackage)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'हमारे साथ विज्ञापन करें' : 'Advertise with Us'}
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'भारत के सबसे विश्वसनीय न्यूज़ चैनल के साथ अपने ब्रांड को लाखों दर्शकों तक पहुंचाएं।'
              : 'Reach millions of viewers with India\'s most trusted news channel.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why Advertise With Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {isHindi ? 'हमारे साथ विज्ञापन क्यों करें?' : 'Why Advertise With Us?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'विशाल दर्शक आधार' : 'Massive Audience'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'लाखों दर्शकों तक पहुंचें'
                  : 'Reach millions of viewers'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'टारगेटेड विज्ञापन' : 'Targeted Advertising'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'सही दर्शकों तक पहुंचें'
                  : 'Reach the right audience'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'उच्च ROI' : 'High ROI'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'बेहतर रिटर्न ऑन इन्वेस्टमेंट'
                  : 'Better return on investment'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Advertising Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isHindi ? 'विज्ञापन पैकेज' : 'Advertising Packages'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advertisingPackages.map((pkg) => {
              const IconComponent = pkg.icon
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedPackage === pkg.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className={`w-12 h-12 ${pkg.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
                  <p className="text-lg font-bold text-purple-600">{pkg.price}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Package Details */}
        {selectedPackageData && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 ${selectedPackageData.color} rounded-lg flex items-center justify-center`}>
                <selectedPackageData.icon size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{selectedPackageData.title}</h2>
                <p className="text-xl text-purple-600 font-semibold">{selectedPackageData.price}</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">{selectedPackageData.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {isHindi ? 'मुख्य विशेषताएं:' : 'Key Features:'}
                </h3>
                <ul className="space-y-2">
                  {selectedPackageData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {isHindi ? 'अतिरिक्त सेवाएं:' : 'Additional Services:'}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      {isHindi ? 'कस्टम क्रिएटिव डिज़ाइन' : 'Custom creative design'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      {isHindi ? 'विज्ञापन प्रदर्शन रिपोर्ट' : 'Ad performance reports'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      {isHindi ? '24x7 ग्राहक सहायता' : '24x7 customer support'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      {isHindi ? 'फ्लेक्सिबल शेड्यूलिंग' : 'Flexible scheduling'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto">
                <Send size={20} />
                <span>{isHindi ? 'अभी संपर्क करें' : 'Contact Now'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isHindi ? 'विज्ञापन के लिए संपर्क करें' : 'Contact for Advertising'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">+91 9926890112</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">ads@timesnowindia.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">Times Now India 24/7 Centre, Noida</p>
                </div>
              </div>
            </div>

            {/* Advertising Rates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'विज्ञापन दरें' : 'Advertising Rates'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">+91 9926890112</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">rates@timesnowindia.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">Custom pricing available</p>
                </div>
              </div>
            </div>

            {/* Media Kit */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'मीडिया किट' : 'Media Kit'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">+91 9926890112</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">mediakit@timesnowindia.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-timesnow-red" />
                  <p className="text-gray-600">Download available on request</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {isHindi ? 'त्वरित संपर्क फॉर्म' : 'Quick Contact Form'}
              </h3>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={isHindi ? 'आपका नाम' : 'Your Name'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder={isHindi ? 'ईमेल पता' : 'Email Address'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder={isHindi ? 'फोन नंबर' : 'Phone Number'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>{isHindi ? 'विज्ञापन पैकेज चुनें' : 'Select Advertising Package'}</option>
                  <option value="digital">{isHindi ? 'डिजिटल विज्ञापन' : 'Digital Advertising'}</option>
                  <option value="tv">{isHindi ? 'टीवी विज्ञापन' : 'TV Advertising'}</option>
                  <option value="print">{isHindi ? 'प्रिंट विज्ञापन' : 'Print Advertising'}</option>
                  <option value="radio">{isHindi ? 'रेडियो विज्ञापन' : 'Radio Advertising'}</option>
                </select>
                <textarea
                  placeholder={isHindi ? 'अपना संदेश यहाँ लिखें...' : 'Write your message here...'}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isHindi ? 'संदेश भेजें' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertiseWithUs
