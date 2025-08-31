import React from 'react'
import { Link } from 'react-router-dom'
import { Tv, Crown, Video, Smartphone, BookOpen, Mic, Star, MessageSquare } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const QuickAccessWidgets = () => {
  const { language } = useLanguage()
  const t = translations[language] || translations['English']

  const widgets = [
    { icon: Tv, title: t.liveTV, href: '/live-tv', color: 'bg-red-600' },
    { icon: Crown, title: t.premium, href: '/premium', color: 'bg-yellow-600' },
    { icon: Video, title: t.videos, href: '/videos', color: 'bg-blue-600' },
    { icon: Smartphone, title: t.shortVideos, href: '/short-videos', color: 'bg-purple-600' },
    { icon: BookOpen, title: t.webStories, href: '/web-stories', color: 'bg-green-600' },
    { icon: Star, title: t.photoGallery, href: '/photos', color: 'bg-pink-600' },
    { icon: Mic, title: t.podcasts, href: '/podcasts', color: 'bg-indigo-600' },
    { icon: MessageSquare, title: t.movieReviews, href: '/movie-reviews', color: 'bg-orange-600' },
    { icon: MessageSquare, title: t.opinion, href: '/opinion', color: 'bg-teal-600' },
  ]

  return (
    <div className="py-4 sm:py-6 md:py-8">
      <div className="mobile-container">
        <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          {t.quickAccess}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {widgets.map((widget) => (
            <Link
              key={widget.title}
              to={widget.href}
              className="group"
            >
              <div className={`${widget.color} p-3 sm:p-4 rounded-lg text-white text-center hover:scale-105 transition-transform duration-200`}>
                <widget.icon size={24} className="mx-auto mb-2 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                <h3 className="font-medium text-xs sm:text-sm">{widget.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickAccessWidgets
