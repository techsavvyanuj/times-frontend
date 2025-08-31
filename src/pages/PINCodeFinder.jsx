import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Search, Map, Phone, Mail, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const PINCodeFinder = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [searchType, setSearchType] = useState('pincode') // 'pincode' or 'location'
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Demo data for PIN codes
  const demoPINData = [
    {
      pincode: '110001',
      location: 'Connaught Place',
      city: 'New Delhi',
      state: 'Delhi',
      district: 'New Delhi',
      postOffice: 'Connaught Place GPO',
      phone: '011-23456789',
      email: 'cp.gpo@indiapost.gov.in',
      coordinates: { lat: 28.6139, lng: 77.2090 }
    },
    {
      pincode: '400001',
      location: 'Fort',
      city: 'Mumbai',
      state: 'Maharashtra',
      district: 'Mumbai City',
      postOffice: 'Fort GPO',
      phone: '022-22621844',
      email: 'fort.gpo@indiapost.gov.in',
      coordinates: { lat: 18.9296, lng: 72.8347 }
    },
    {
      pincode: '700001',
      location: 'Dalhousie Square',
      city: 'Kolkata',
      state: 'West Bengal',
      district: 'Kolkata',
      postOffice: 'Dalhousie Square GPO',
      phone: '033-22480800',
      email: 'ds.gpo@indiapost.gov.in',
      coordinates: { lat: 22.5726, lng: 88.3639 }
    },
    {
      pincode: '600001',
      location: 'Parrys Corner',
      city: 'Chennai',
      state: 'Tamil Nadu',
      district: 'Chennai',
      postOffice: 'Parrys Corner GPO',
      phone: '044-25330500',
      email: 'pc.gpo@indiapost.gov.in',
      coordinates: { lat: 13.0827, lng: 80.2707 }
    },
    {
      pincode: '500001',
      location: 'Abids',
      city: 'Hyderabad',
      state: 'Telangana',
      district: 'Hyderabad',
      postOffice: 'Abids GPO',
      phone: '040-23230400',
      email: 'abids.gpo@indiapost.gov.in',
      coordinates: { lat: 17.3850, lng: 78.4867 }
    }
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    // Simulate API call delay
    setTimeout(() => {
      let results = []
      
      if (searchType === 'pincode') {
        // Search by PIN code
        results = demoPINData.filter(item => 
          item.pincode.includes(searchQuery) || 
          item.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
      } else {
        // Search by location
        results = demoPINData.filter(item => 
          item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.district.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      
      setSearchResults(results)
      setIsSearching(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
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
              <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.pinCodeFinder}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'पोस्टल कोड आसानी से खोजें' : 'Find postal codes easily'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
            {isHindi ? 'PIN कोड या स्थान खोजें' : 'Search PIN Code or Location'}
          </h2>
          
          <div className="space-y-4">
            {/* Search Type Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSearchType('pincode')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  searchType === 'pincode'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isHindi ? 'PIN कोड से खोजें' : 'Search by PIN Code'}
              </button>
              <button
                onClick={() => setSearchType('location')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  searchType === 'location'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isHindi ? 'स्थान से खोजें' : 'Search by Location'}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder={
                  searchType === 'pincode'
                    ? (isHindi ? 'PIN कोड दर्ज करें (जैसे: 110001)' : 'Enter PIN code (e.g., 110001)')
                    : (isHindi ? 'शहर, राज्य या जिला दर्ज करें' : 'Enter city, state or district')
                }
              />
            </div>

            {/* Search Actions */}
            <div className="flex space-x-3">
              <button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium mobile-text-base flex items-center justify-center space-x-2"
              >
                {isSearching ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{isHindi ? 'खोज रहे हैं...' : 'Searching...'}</span>
                  </>
                ) : (
                  <>
                    <Search size={18} />
                    <span>{isHindi ? 'खोजें' : 'Search'}</span>
                  </>
                )}
              </button>
              
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium mobile-text-base"
                >
                  {isHindi ? 'साफ़ करें' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
            <h3 className="mobile-text-lg font-semibold text-gray-800 mb-4">
              {isHindi ? 'खोज परिणाम' : 'Search Results'} ({searchResults.length})
            </h3>
            
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mobile-text-base">
                          PIN: {result.pincode}
                        </h4>
                        <p className="text-gray-600 mobile-text-sm">
                          {result.location}, {result.city}
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {result.state}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Map size={16} className="text-gray-400" />
                        <span className="text-gray-600">{isHindi ? 'जिला:' : 'District:'}</span>
                        <span className="font-medium">{result.district}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-gray-600">{isHindi ? 'डाकघर:' : 'Post Office:'}</span>
                        <span className="font-medium">{result.postOffice}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-gray-400" />
                        <span className="text-gray-600">{isHindi ? 'फोन:' : 'Phone:'}</span>
                        <span className="font-medium">{result.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-gray-400" />
                        <span className="text-gray-600">{isHindi ? 'ईमेल:' : 'Email:'}</span>
                        <span className="font-medium text-blue-600 hover:underline cursor-pointer">
                          {result.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Globe size={14} />
                      <span>
                        {isHindi 
                          ? `निर्देशांक: ${result.coordinates.lat}°, ${result.coordinates.lng}°`
                          : `Coordinates: ${result.coordinates.lat}°, ${result.coordinates.lng}°`
                        }
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular PIN Codes */}
        <div className="bg-white rounded-lg shadow-sm mobile-p">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-4">
            {isHindi ? 'लोकप्रिय PIN कोड' : 'Popular PIN Codes'}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {demoPINData.slice(0, 5).map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchQuery(item.pincode)
                  setSearchType('pincode')
                  handleSearch()
                }}
                className="p-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-center"
              >
                <div className="font-semibold text-gray-800 mobile-text-sm">
                  {item.pincode}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {item.city}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mt-6">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'PIN कोड के बारे में' : 'About PIN Codes'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'PIN कोड (पोस्टल इंडेक्स नंबर) भारत में डाक सेवाओं के लिए 6 अंकों का कोड है।'
                : 'PIN Code (Postal Index Number) is a 6-digit code for postal services in India.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह कैलकुलेटर आपको किसी भी स्थान का PIN कोड या किसी PIN कोड का स्थान खोजने में मदद करता है।'
                : 'This finder helps you locate PIN codes for any location or find locations for any PIN code.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PINCodeFinder
