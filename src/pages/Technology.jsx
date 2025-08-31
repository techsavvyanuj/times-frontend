import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const Technology = () => {
  const techNews = [
    {
      id: 1,
      title: "AI Breakthrough: Revolutionary Language Model Announced",
      description: "Scientists announce major breakthrough in artificial intelligence with new language processing capabilities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "AI",
      readTime: "7 min read",
      views: "32.5K views",
      publishedAt: "2 hours ago"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Latest technology news, AI updates, gadget reviews, and digital innovation stories.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsFeed title="Latest Technology News" articles={techNews} />
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

export default Technology
