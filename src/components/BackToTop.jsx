import React, { useState, useEffect } from 'react'
import { ChevronUp, Home } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Navigate to home page
  const goToHome = () => {
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Don't show on home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <>
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 bg-timesnow-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Home Button */}
      <button
        onClick={goToHome}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-white text-timesnow-red p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl border border-gray-200"
        aria-label="Go to home page"
      >
        <Home size={20} />
      </button>
    </>
  )
}

export default BackToTop
