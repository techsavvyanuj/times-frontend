import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const Photos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photos</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Photo galleries, visual stories, and compelling imagery from around the world.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsFeed title="Latest Photo Stories" articles={[]} />
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

export default Photos
