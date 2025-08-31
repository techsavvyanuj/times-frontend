import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Sidebar from '../components/Sidebar'

const World = () => {
  const worldNews = [
    {
      id: 1,
      title: "US Elections: Latest Polls and Campaign Updates",
      description: "Comprehensive coverage of the US presidential election with latest polls, campaign events, and analysis.",
      image: "https://images.unsplash.com/photo-1540910419892-4a2d9c6c8e9b?w=400&h=250&fit=crop",
      category: "US Politics",
      readTime: "6 min read",
      views: "18.5K views",
      publishedAt: "2 hours ago"
    },
    {
      id: 2,
      title: "UK: New Economic Policy Announced",
      description: "British government announces major economic reforms to address inflation and growth challenges.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1a2?w=400&h=250&fit=crop",
      category: "Europe",
      readTime: "5 min read",
      views: "12.3K views",
      publishedAt: "3 hours ago"
    },
    {
      id: 3,
      title: "China: Technology Sector Developments",
      description: "Latest updates on China's technology sector including new regulations and market developments.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      category: "Asia",
      readTime: "7 min read",
      views: "15.7K views",
      publishedAt: "4 hours ago"
    },
    {
      id: 4,
      title: "Middle East: Peace Talks Progress",
      description: "Recent developments in Middle East peace negotiations and regional stability efforts.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "Middle East",
      readTime: "8 min read",
      views: "9.8K views",
      publishedAt: "5 hours ago"
    },
    {
      id: 5,
      title: "Africa: Economic Growth Report",
      description: "Comprehensive analysis of economic growth trends across African nations and investment opportunities.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=250&fit=crop",
      category: "Africa",
      readTime: "6 min read",
      views: "7.2K views",
      publishedAt: "6 hours ago"
    },
    {
      id: 6,
      title: "Australia: Climate Policy Updates",
      description: "Australia announces new climate change policies and renewable energy initiatives.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "Oceania",
      readTime: "5 min read",
      views: "6.5K views",
      publishedAt: "7 hours ago"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">World News</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Global news coverage, international politics, world economy, and breaking 
            stories from around the world.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <NewsFeed title="Latest World News" articles={worldNews} />
              
              {/* Regional Coverage */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Regional Coverage</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Americas</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Latest news from North and South America including US, Canada, Brazil, and more.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All Americas News →
                    </button>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Europe</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      European Union news, Brexit updates, and developments across European nations.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All Europe News →
                    </button>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Asia Pacific</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      News from China, Japan, South Korea, ASEAN nations, and the Pacific region.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All Asia Pacific News →
                    </button>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Middle East & Africa</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Developments in the Middle East, North Africa, and Sub-Saharan Africa.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All MEA News →
                    </button>
                  </div>
                </div>
              </div>

              {/* Global Issues */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Global Issues: Climate Change Summit</h3>
                <p className="text-blue-100 mb-4">
                  Follow the latest developments in global climate negotiations, environmental policies, 
                  and international cooperation efforts to address climate change.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
                    Summit Updates
                  </button>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
                    Policy Analysis
                  </button>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
                    Expert Opinions
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default World
