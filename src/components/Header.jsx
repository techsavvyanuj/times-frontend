import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe, Tv, Download, Search, Home } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import logoImage from './logo.png'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const t = translations[language] || translations['English']
  const isHindi = language === 'Hindi'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar - Mobile Responsive */}
      <div className="bg-timesnow-red text-white py-2 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Side - Live TV & Download App */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link 
              to="/live-tv" 
              className="flex items-center space-x-1 text-xs sm:text-sm hover:text-gray-200 transition-colors"
            >
              <Tv size={16} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t.liveTV}</span>
            </Link>
            <Link 
              to="/download-app" 
              className="flex items-center space-x-1 text-xs sm:text-sm hover:text-gray-200 transition-colors"
            >
              <Download size={16} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t.downloadApp}</span>
            </Link>
          </div>

          {/* Right Side - Language & Search */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={toggleSearch}
              className="p-1 hover:bg-red-700 rounded transition-colors"
              aria-label="Search"
            >
              <Search size={16} className="sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs sm:text-sm hover:text-gray-200 transition-colors"
            >
              <Globe size={16} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{language === 'Hindi' ? 'हिंदी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar - Mobile Responsive */}
      {isSearchOpen && (
        <div className="bg-white border-b border-gray-200 py-3 px-4">
          <div className="relative max-w-7xl mx-auto">
            <input
              type="text"
              placeholder={t.searchPlaceholder || "Search news..."}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-timesnow-red focus:border-transparent text-sm sm:text-base"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <button
              onClick={toggleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Main Header - Mobile Responsive */}
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Times Now India 27/7" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" 
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-timesnow-dark">
              Times Now India 24/7
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Home Button */}
            <Link to="/" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium flex items-center space-x-1">
              <Home size={18} />
              <span>{t.home}</span>
            </Link>
            <Link to="/india" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.india}
            </Link>
            <Link to="/world" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.world}
            </Link>
            <Link to="/business" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.business}
            </Link>
            <Link to="/sports" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.sports}
            </Link>
            <Link to="/entertainment" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.entertainment}
            </Link>
            <Link to="/technology" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.technology}
            </Link>
            <Link to="/lifestyle" className="text-gray-700 hover:text-timesnow-red transition-colors font-medium">
              {t.lifestyle}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">{t.menu}</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <nav className="px-4 py-4">
            <div className="space-y-4">
              {/* Home Button - Mobile */}
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100 flex items-center space-x-2"
              >
                <Home size={20} />
                <span>{t.home}</span>
              </Link>
              <Link 
                to="/india" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.india}
              </Link>
              <Link 
                to="/world" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.world}
              </Link>
              <Link 
                to="/business" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.business}
              </Link>
              <Link 
                to="/sports" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.sports}
              </Link>
              <Link 
                to="/entertainment" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.entertainment}
              </Link>
              <Link 
                to="/technology" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.technology}
              </Link>
              <Link 
                to="/lifestyle" 
                onClick={closeMobileMenu}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-timesnow-red transition-colors border-b border-gray-100"
              >
                {t.lifestyle}
              </Link>

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <Link 
                    to="/live-tv" 
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 py-2 text-gray-700 hover:text-timesnow-red transition-colors"
                  >
                    <Tv size={20} />
                    <span>{t.liveTV}</span>
                  </Link>
                  <Link 
                    to="/download-app" 
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 py-2 text-gray-700 hover:text-timesnow-red transition-colors"
                  >
                    <Download size={20} />
                    <span>{t.downloadApp}</span>
                  </Link>
                  <Link 
                    to="/contact-us" 
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 py-2 text-gray-700 hover:text-timesnow-red transition-colors"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-500">📞</span>
                    <span>{t?.contactUs || 'Contact Us'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}

export default Header
