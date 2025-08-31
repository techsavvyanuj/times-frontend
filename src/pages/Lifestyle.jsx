import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const Lifestyle = () => {
  const lifestyleNews = [
    {
      id: 1,
      title: "Health & Wellness: Complete Guide to Healthy Living in 2024",
      description: "Comprehensive guide covering nutrition, fitness, mental health, and wellness tips for a better life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "Health",
      readTime: "8 min read",
      views: "18.2K views",
      publishedAt: "3 hours ago"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lifestyle</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Health tips, wellness advice, fashion trends, and lifestyle inspiration.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsFeed title="Latest Lifestyle News" articles={lifestyleNews} />
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

export default Lifestyle
