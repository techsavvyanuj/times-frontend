// Custom hook to manage meta tags without external dependencies
import { useEffect } from 'react'

export const useMetaTags = (metaTags) => {
  useEffect(() => {
    const addedMetaTags = []
    
    // Update title
    if (metaTags.title) {
      const originalTitle = document.title
      document.title = metaTags.title
      
      // Clean up function will restore original title
      addedMetaTags.push(() => {
        document.title = originalTitle
      })
    }
    
    // Add meta tags
    Object.entries(metaTags).forEach(([key, value]) => {
      if (key === 'title' || !value) return
      
      let metaTag = null
      
      // Handle different types of meta tags
      if (key.startsWith('og:') || key.startsWith('article:')) {
        // Open Graph tags use property attribute
        metaTag = document.querySelector(`meta[property="${key}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('property', key)
          document.head.appendChild(metaTag)
          addedMetaTags.push(() => document.head.removeChild(metaTag))
        }
        metaTag.setAttribute('content', value)
      } else if (key.startsWith('twitter:')) {
        // Twitter tags use name attribute
        metaTag = document.querySelector(`meta[name="${key}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('name', key)
          document.head.appendChild(metaTag)
          addedMetaTags.push(() => document.head.removeChild(metaTag))
        }
        metaTag.setAttribute('content', value)
      } else {
        // Standard meta tags use name attribute
        metaTag = document.querySelector(`meta[name="${key}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('name', key)
          document.head.appendChild(metaTag)
          addedMetaTags.push(() => document.head.removeChild(metaTag))
        }
        metaTag.setAttribute('content', value)
      }
    })
    
    // Cleanup function
    return () => {
      addedMetaTags.forEach(cleanup => {
        try {
          cleanup()
        } catch (error) {
          // Ignore cleanup errors
        }
      })
    }
  }, [metaTags])
}