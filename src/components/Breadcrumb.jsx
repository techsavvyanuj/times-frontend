import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Breadcrumb = () => {
  const location = useLocation()
  const { isHindi } = useLanguage()
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null
  }

  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter(x => x)
    const items = [
      { name: isHindi ? 'होम' : 'Home', path: '/', icon: Home }
    ]

    let currentPath = ''
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`
      
      // Convert path to readable name
      let displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      // Special cases for better readability
      const nameMappings = {
        'india': isHindi ? 'भारत' : 'India',
        'world': isHindi ? 'विश्व' : 'World',
        'business': isHindi ? 'व्यापार' : 'Business',
        'sports': isHindi ? 'खेल' : 'Sports',
        'entertainment': isHindi ? 'मनोरंजन' : 'Entertainment',
        'technology': isHindi ? 'तकनीक' : 'Technology',
        'lifestyle': isHindi ? 'जीवनशैली' : 'Lifestyle',
        'astrology': isHindi ? 'ज्योतिष' : 'Astrology',
        'photos': isHindi ? 'फोटो' : 'Photos',
        'videos': isHindi ? 'वीडियो' : 'Videos',
        'opinion': isHindi ? 'राय' : 'Opinion',
        'live-tv': isHindi ? 'लाइव टीवी' : 'Live TV',
        'contact-us': isHindi ? 'संपर्क करें' : 'Contact Us',
        'careers': isHindi ? 'करियर' : 'Careers',
        'advertise-with-us': isHindi ? 'हमारे साथ विज्ञापन दें' : 'Advertise with Us',
        'privacy-policy': isHindi ? 'गोपनीयता नीति' : 'Privacy Policy',
        'terms-conditions': isHindi ? 'नियम और शर्तें' : 'Terms & Conditions',
        'download-app': isHindi ? 'ऐप डाउनलोड करें' : 'Download App',
        'tools': isHindi ? 'उपयोगी उपकरण' : 'Utility Tools',
        'emi-calculator': isHindi ? 'ईएमआई कैलकुलेटर' : 'EMI Calculator',
        'pin-finder': isHindi ? 'पिन कोड फाइंडर' : 'PIN Code Finder',
        'bmi-calculator': isHindi ? 'बीएमआई कैलकुलेटर' : 'BMI Calculator',
        'fuel-prices': isHindi ? 'ईंधन की कीमतें' : 'Fuel Prices',
        'metal-rates': isHindi ? 'धातु की दरें' : 'Metal Rates',
        'aqi-checker': isHindi ? 'एक्यूआई चेकर' : 'AQI Checker',
        'horoscope': isHindi ? 'राशिफल' : 'Horoscope'
      }

      if (nameMappings[name]) {
        displayName = nameMappings[name]
      }

      items.push({
        name: displayName,
        path: currentPath,
        isLast: index === pathnames.length - 1
      })
    })

    return items
  }

  const breadcrumbItems = getBreadcrumbItems()

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="text-gray-400 mx-2" />
              )}
              
              {item.isLast ? (
                <span className="text-gray-900 font-medium flex items-center space-x-1">
                  {item.icon && <item.icon size={16} />}
                  <span>{item.name}</span>
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-timesnow-red transition-colors flex items-center space-x-1"
                >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
