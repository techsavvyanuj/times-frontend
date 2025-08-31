import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building, Globe, User } from 'lucide-react'

const ContactUs = () => {
  const { isHindi } = useLanguage()
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert(isHindi ? 'आपका संदेश भेज दिया गया है!' : 'Your message has been sent!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'हम आपकी सहायता के लिए यहाँ हैं। किसी भी प्रश्न या सुझाव के लिए हमसे संपर्क करें।'
              : 'We are here to help you. Contact us for any questions or suggestions.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {isHindi ? 'संदेश भेजें' : 'Send us a Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isHindi ? 'नाम' : 'Name'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isHindi ? 'अपना नाम दर्ज करें' : 'Enter your name'}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isHindi ? 'ईमेल' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isHindi ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isHindi ? 'फोन नंबर' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isHindi ? 'अपना फोन नंबर दर्ज करें' : 'Enter your phone number'}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isHindi ? 'विषय' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={isHindi ? 'संदेश का विषय' : 'Message subject'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isHindi ? 'संदेश' : 'Message'} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder={isHindi ? 'अपना संदेश यहाँ लिखें...' : 'Write your message here...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  <span>{isHindi ? 'संदेश भेजें' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* News Reporter Contact */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-timesnow-red">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <User size={24} className="text-timesnow-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'समाचार रिपोर्टर' : 'News Reporter'}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Name:</strong> Mr. Shubham Meena</p>
                    <p><strong>Mobile:</strong> <a href="tel:+919926890112" className="text-timesnow-red hover:underline">+91 9926890112</a></p>
                    <p><strong>Address:</strong> Harangaon Tehsil, Khategaon District, Dewas, Madhya Pradesh 455336</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Building size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'कार्यालय का पता' : 'Office Address'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                                Times Now India 24/7 Network Pvt. Ltd.<br />
            Times Now India 24/7 Centre, 6th Floor<br />
                    Sector 135, Noida<br />
                    Uttar Pradesh 201304, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Numbers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'संपर्क नंबर' : 'Contact Numbers'}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Main Contact:</strong> <a href="tel:+919926890112" className="text-timesnow-red hover:underline">+91 9926890112</a></p>
                    <p><strong>Editorial:</strong> <a href="tel:+919926890112" className="text-timesnow-red hover:underline">+91 9926890112</a></p>
                    <p><strong>Support:</strong> <a href="tel:+919926890112" className="text-timesnow-red hover:underline">+91 9926890112</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'ईमेल' : 'Email'}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>General:</strong> info@timesnowindia.com</p>
                    <p><strong>Editorial:</strong> editorial@timesnowindia.com</p>
                    <p><strong>Reporter:</strong> shubham.meena@timesnowindia.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {isHindi ? 'कार्य समय' : 'Working Hours'}
                  </h3>
                  <div className="text-sm text-gray-600">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
