import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const LiveTV = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live TV</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Watch live news, breaking updates, and exclusive content 24/7.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Stream</h2>
                <div className="bg-gray-900 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📺</div>
                  <h3 className="text-xl text-white mb-2">Live TV Stream</h3>
                  <p className="text-gray-400 mb-4">Watch Times Now India 24/7</p>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200">
                    Watch Live
                  </button>
                </div>
              </div>
              <NewsFeed title="Latest News" articles={[]} />
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

export default LiveTV
