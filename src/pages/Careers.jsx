import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { Briefcase, MapPin, Clock, DollarSign, Users, GraduationCap, Send, Building, Globe, Code, Camera, PenTool } from 'lucide-react'

const Careers = () => {
  const { isHindi } = useLanguage()
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']
  
  const [selectedCategory, setSelectedCategory] = useState('all')

  const jobCategories = [
    { id: 'all', label: isHindi ? 'सभी' : 'All', icon: Briefcase },
    { id: 'editorial', label: isHindi ? 'संपादन' : 'Editorial', icon: PenTool },
    { id: 'technology', label: isHindi ? 'तकनीक' : 'Technology', icon: Code },
    { id: 'multimedia', label: isHindi ? 'मल्टीमीडिया' : 'Multimedia', icon: Camera },
    { id: 'marketing', label: isHindi ? 'मार्केटिंग' : 'Marketing', icon: Users },
    { id: 'operations', label: isHindi ? 'संचालन' : 'Operations', icon: Building }
  ]

  const jobListings = [
    {
      id: 1,
      title: isHindi ? 'वरिष्ठ संपादक' : 'Senior Editor',
      category: 'editorial',
      location: isHindi ? 'नई दिल्ली' : 'New Delhi',
      type: isHindi ? 'पूर्णकालिक' : 'Full-time',
      experience: isHindi ? '5-8 वर्ष' : '5-8 years',
      salary: isHindi ? '₹8-12 लाख' : '₹8-12 LPA',
      description: isHindi 
        ? 'राजनीतिक और सामाजिक मुद्दों पर विशेषज्ञता के साथ वरिष्ठ संपादक की आवश्यकता।'
        : 'Looking for a Senior Editor with expertise in political and social issues.',
      requirements: [
        isHindi ? 'पत्रकारिता में स्नातकोत्तर डिग्री' : 'Postgraduate degree in Journalism',
        isHindi ? 'हिंदी और अंग्रेजी में दक्षता' : 'Proficiency in Hindi and English',
        isHindi ? 'डिजिटल मीडिया का अनुभव' : 'Experience in digital media'
      ]
    },
    {
      id: 2,
      title: isHindi ? 'फ्रंट-एंड डेवलपर' : 'Frontend Developer',
      category: 'technology',
      location: isHindi ? 'नोएडा' : 'Noida',
      type: isHindi ? 'पूर्णकालिक' : 'Full-time',
      experience: isHindi ? '2-4 वर्ष' : '2-4 years',
      salary: isHindi ? '₹6-10 लाख' : '₹6-10 LPA',
      description: isHindi 
        ? 'React.js और Next.js में विशेषज्ञता के साथ फ्रंट-एंड डेवलपर की आवश्यकता।'
        : 'Looking for a Frontend Developer with expertise in React.js and Next.js.',
      requirements: [
        isHindi ? 'कंप्यूटर साइंस में स्नातक' : 'Bachelor\'s in Computer Science',
        isHindi ? 'React.js, JavaScript, CSS में दक्षता' : 'Proficiency in React.js, JavaScript, CSS',
        isHindi ? 'रिस्पॉन्सिव डिज़ाइन का अनुभव' : 'Experience in responsive design'
      ]
    },
    {
      id: 3,
      title: isHindi ? 'वीडियो एडिटर' : 'Video Editor',
      category: 'multimedia',
      location: isHindi ? 'मुंबई' : 'Mumbai',
      type: isHindi ? 'पूर्णकालिक' : 'Full-time',
      experience: isHindi ? '3-5 वर्ष' : '3-5 years',
      salary: isHindi ? '₹5-8 लाख' : '₹5-8 LPA',
      description: isHindi 
        ? 'Adobe Premiere Pro और After Effects में विशेषज्ञता के साथ वीडियो एडिटर की आवश्यकता।'
        : 'Looking for a Video Editor with expertise in Adobe Premiere Pro and After Effects.',
      requirements: [
        isHindi ? 'मीडिया या संबंधित क्षेत्र में स्नातक' : 'Bachelor\'s in Media or related field',
        isHindi ? 'Adobe Creative Suite में दक्षता' : 'Proficiency in Adobe Creative Suite',
        isHindi ? 'न्यूज़ एडिटिंग का अनुभव' : 'Experience in news editing'
      ]
    },
    {
      id: 4,
      title: isHindi ? 'डिजिटल मार्केटिंग मैनेजर' : 'Digital Marketing Manager',
      category: 'marketing',
      location: isHindi ? 'बेंगलुरु' : 'Bangalore',
      type: isHindi ? 'पूर्णकालिक' : 'Full-time',
      experience: isHindi ? '4-6 वर्ष' : '4-6 years',
      salary: isHindi ? '₹7-11 लाख' : '₹7-11 LPA',
      description: isHindi 
        ? 'सोशल मीडिया और SEO में विशेषज्ञता के साथ डिजिटल मार्केटिंग मैनेजर की आवश्यकता।'
        : 'Looking for a Digital Marketing Manager with expertise in social media and SEO.',
      requirements: [
        isHindi ? 'मार्केटिंग में स्नातक' : 'Bachelor\'s in Marketing',
        isHindi ? 'Google Analytics और SEM का ज्ञान' : 'Knowledge of Google Analytics and SEM',
        isHindi ? 'टीम मैनेजमेंट का अनुभव' : 'Team management experience'
      ]
    },
    {
      id: 5,
      title: isHindi ? 'ऑपरेशंस एग्जीक्यूटिव' : 'Operations Executive',
      category: 'operations',
      location: isHindi ? 'कोलकाता' : 'Kolkata',
      type: isHindi ? 'पूर्णकालिक' : 'Full-time',
      experience: isHindi ? '1-3 वर्ष' : '1-3 years',
      salary: isHindi ? '₹3-5 लाख' : '₹3-5 LPA',
      description: isHindi 
        ? 'कार्यालय प्रशासन और समन्वय में विशेषज्ञता के साथ ऑपरेशंस एग्जीक्यूटिव की आवश्यकता।'
        : 'Looking for an Operations Executive with expertise in office administration and coordination.',
      requirements: [
        isHindi ? 'किसी भी क्षेत्र में स्नातक' : 'Bachelor\'s in any field',
        isHindi ? 'MS Office में दक्षता' : 'Proficiency in MS Office',
        isHindi ? 'संचार कौशल' : 'Communication skills'
      ]
    }
  ]

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isHindi ? 'करियर' : 'Careers'}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {isHindi 
              ? 'भारत के सबसे विश्वसनीय न्यूज़ चैनल में शामिल हों और अपने करियर को नई ऊंचाइयों तक ले जाएं।'
              : 'Join India\'s most trusted news channel and take your career to new heights.'
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why Work With Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {isHindi ? 'हमारे साथ काम क्यों करें?' : 'Why Work With Us?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'वैश्विक पहुंच' : 'Global Reach'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'दुनिया भर के लाखों दर्शकों तक पहुंचें'
                  : 'Reach millions of viewers worldwide'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'पेशेवर टीम' : 'Professional Team'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'अनुभवी पेशेवरों के साथ काम करें'
                  : 'Work with experienced professionals'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {isHindi ? 'सीखने का मौका' : 'Learning Opportunity'}
              </h3>
              <p className="text-gray-600">
                {isHindi 
                  ? 'निरंतर सीखने और विकास'
                  : 'Continuous learning and growth'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isHindi ? 'नौकरी श्रेणियां' : 'Job Categories'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {jobCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent size={16} />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {isHindi ? 'आवश्यकताएं:' : 'Requirements:'}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:flex-shrink-0">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Send size={16} />
                    <span>{isHindi ? 'आवेदन करें' : 'Apply Now'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {isHindi ? 'इस श्रेणी में कोई नौकरी नहीं मिली' : 'No jobs found in this category'}
            </p>
          </div>
        )}

        {/* General Application */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isHindi ? 'सामान्य आवेदन' : 'General Application'}
          </h2>
          <p className="text-gray-600 text-center mb-6">
            {isHindi 
              ? 'यदि आपको उपरोक्त में से कोई नौकरी नहीं मिली, तो आप सामान्य आवेदन भेज सकते हैं।'
              : 'If you don\'t find any of the above jobs suitable, you can send a general application.'
            }
          </p>
          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto">
              <Send size={20} />
              <span>{isHindi ? 'सामान्य आवेदन भेजें' : 'Send General Application'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
