import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const Astrology = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Astrology</h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Daily horoscopes, astrological predictions, and cosmic insights.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsFeed title="Latest Astrology News" articles={[]} />
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Astrology
