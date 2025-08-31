import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { ArrowLeft, MapPin, Clock, Eye, User, Tag, Share2, Bookmark, Heart } from 'lucide-react'

const IndiaNews = () => {
  const { state, newsId } = useParams()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  // Mock news data - in a real app, this would come from an API
  const newsData = {
    'madhya-pradesh': {
      1: {
        title: isHindi ? 'भोपाल में नई शैक्षिक नीति' : 'New Education Policy in Bhopal',
        fullContent: isHindi 
          ? `मध्य प्रदेश सरकार ने राज्य में नई शैक्षिक नीति लागू की है, जिससे छात्रों को बेहतर शिक्षा मिलेगी। इस नीति के तहत राज्य के सभी सरकारी और निजी स्कूलों में नए पाठ्यक्रम लागू किए जाएंगे।

          नई नीति के मुख्य बिंदु:
          • डिजिटल शिक्षा पर जोर
          • कौशल विकास कार्यक्रम
          • शिक्षक प्रशिक्षण
          • बुनियादी ढांचे का विकास
          
          शिक्षा मंत्री ने कहा कि यह नीति राज्य के शैक्षिक स्तर को बढ़ाने में मदद करेगी और छात्रों को रोजगार के लिए तैयार करेगी।`
          : `The Madhya Pradesh government has implemented a new education policy in the state, which will provide better education to students. Under this policy, new curricula will be implemented in all government and private schools across the state.

          Key points of the new policy:
          • Emphasis on digital education
          • Skill development programs
          • Teacher training
          • Infrastructure development
          
          The Education Minister said that this policy will help improve the educational standards of the state and prepare students for employment.`,
        category: isHindi ? 'शिक्षा' : 'Education',
        time: '3 hours ago',
        views: '8.5K',
        image: 'https://via.placeholder.com/800x400/ff6b35/ffffff?text=MP+Education+News',
        city: 'Bhopal',
        author: 'राज्य समाचार',
        highlights: ['New Policy', 'State Education', 'Bhopal', 'Digital Learning'],
        relatedNews: [
          { id: 2, title: 'Industrial Development in Indore', category: 'Business' },
          { id: 3, title: 'Tourism Development in Gwalior', category: 'Tourism' }
        ]
      }
    },
    'rajasthan': {
      1: {
        title: isHindi ? 'जयपुर में हस्तकला मेला' : 'Handicraft Fair in Jaipur',
        fullContent: isHindi 
          ? `जयपुर में राजस्थानी हस्तकला और कला का प्रदर्शन आयोजित किया गया है, जिसमें कारीगरों को बेहतर मंच मिल रहा है। यह मेला राजस्थान की समृद्ध सांस्कृतिक विरासत को प्रदर्शित करता है।

          मेले में शामिल हैं:
          • पारंपरिक हस्तकला
          • आधुनिक कला प्रदर्शन
          • कारीगर प्रशिक्षण कार्यशालाएं
          • सांस्कृतिक कार्यक्रम
          
          मेला आयोजकों का कहना है कि इससे राज्य के कारीगरों को राष्ट्रीय और अंतरराष्ट्रीय बाजार में अपनी कला प्रदर्शित करने का मौका मिलेगा।`
          : `A handicraft and art exhibition of Rajasthani culture has been organized in Jaipur, providing artisans with a better platform. This fair showcases the rich cultural heritage of Rajasthan.

          The fair includes:
          • Traditional handicrafts
          • Modern art exhibitions
          • Artisan training workshops
          • Cultural programs
          
          Fair organizers say this will give state artisans an opportunity to showcase their art in national and international markets.`,
        category: isHindi ? 'संस्कृति' : 'Culture',
        time: '2 hours ago',
        views: '9.1K',
        image: 'https://via.placeholder.com/800x400/ec4899/ffffff?text=RJ+Culture+News',
        city: 'Jaipur',
        author: 'संस्कृति समाचार',
        highlights: ['Handicrafts', 'Art', 'Jaipur', 'Cultural Heritage'],
        relatedNews: [
          { id: 2, title: 'Solar Energy Project in Jodhpur', category: 'Energy' }
        ]
      }
    }
  }

  const currentNews = newsData[state]?.[parseInt(newsId)]
  
  if (!currentNews) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isHindi ? 'समाचार नहीं मिला' : 'News Not Found'}
          </h1>
          <Link to={`/india/${state}`} className="text-blue-600 hover:underline">
            {isHindi ? 'राज्य वापस जाएं' : 'Back to State'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to={`/india/${state}`} 
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{isHindi ? 'राज्य वापस' : 'Back to State'}</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Share2 size={18} />
                <span className="text-sm">{isHindi ? 'शेयर' : 'Share'}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Bookmark size={18} />
                <span className="text-sm">{isHindi ? 'सेव' : 'Save'}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Heart size={18} />
                <span className="text-sm">{isHindi ? 'लाइक' : 'Like'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mb-4">
                  {currentNews.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {currentNews.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{currentNews.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{currentNews.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{currentNews.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    <span>{currentNews.views}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-6">
                <img 
                  src={currentNews.image} 
                  alt={currentNews.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {currentNews.fullContent}
                </div>
              </div>

              {/* Tags */}
              {currentNews.highlights && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {isHindi ? 'टैग्स' : 'Tags'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentNews.highlights.map((highlight, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                        <Tag size={14} />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Related News */}
            {currentNews.relatedNews && currentNews.relatedNews.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isHindi ? 'संबंधित समाचार' : 'Related News'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentNews.relatedNews.map((news) => (
                    <Link
                      key={news.id}
                      to={`/india/${state}/${news.id}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">{news.title}</h3>
                      <span className="inline-block px-2 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded">
                        {news.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'समाचार जानकारी' : 'News Information'}
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'श्रेणी' : 'Category'}</div>
                  <div className="font-semibold text-gray-800">{currentNews.category}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'शहर' : 'City'}</div>
                  <div className="font-semibold text-gray-800">{currentNews.city}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'लेखक' : 'Author'}</div>
                  <div className="font-semibold text-gray-800">{currentNews.author}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'प्रकाशन समय' : 'Published'}</div>
                  <div className="font-semibold text-gray-800">{currentNews.time}</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{isHindi ? 'दृश्य' : 'Views'}</div>
                  <div className="font-semibold text-gray-800">{currentNews.views}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'अन्य राज्य' : 'Other States'}
              </h3>
              <div className="space-y-3">
                <Link
                  to="/india/madhya-pradesh"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                      MP
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Madhya Pradesh</h4>
                      <p className="text-sm text-gray-600">Bhopal</p>
                    </div>
                  </div>
                </Link>
                
                <Link
                  to="/india/rajasthan"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold">
                      RJ
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Rajasthan</h4>
                      <p className="text-sm text-gray-600">Jaipur</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndiaNews
