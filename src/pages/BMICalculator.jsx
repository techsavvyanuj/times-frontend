import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Activity, Scale, Ruler, Info, TrendingUp, TrendingDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const BMICalculator = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)
  const [heightUnit, setHeightUnit] = useState('cm') // 'cm' or 'ft'
  const [weightUnit, setWeightUnit] = useState('kg') // 'kg' or 'lbs'
  const [showResults, setShowResults] = useState(false)

  const calculateBMI = () => {
    let weightInKg = weight
    let heightInM = height

    // Convert weight to kg if needed
    if (weightUnit === 'lbs') {
      weightInKg = weight * 0.453592
    }

    // Convert height to meters if needed
    if (heightUnit === 'cm') {
      heightInM = height / 100
    } else if (heightUnit === 'ft') {
      heightInM = height * 0.3048
    }

    const bmi = weightInKg / (heightInM * heightInM)
    return bmi
  }

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return {
      category: isHindi ? 'कम वजन' : 'Underweight',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: isHindi ? 'आपका वजन सामान्य से कम है।' : 'Your weight is below normal range.',
      recommendation: isHindi ? 'पौष्टिक आहार और व्यायाम करें।' : 'Focus on nutritious diet and exercise.'
    }
    else if (bmi < 25) return {
      category: isHindi ? 'सामान्य वजन' : 'Normal Weight',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: isHindi ? 'आपका वजन सामान्य सीमा में है।' : 'Your weight is in the normal range.',
      recommendation: isHindi ? 'वर्तमान स्वस्थ जीवनशैली बनाए रखें।' : 'Maintain your current healthy lifestyle.'
    }
    else if (bmi < 30) return {
      category: isHindi ? 'अधिक वजन' : 'Overweight',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      description: isHindi ? 'आपका वजन सामान्य से अधिक है।' : 'Your weight is above normal range.',
      recommendation: isHindi ? 'नियमित व्यायाम और संतुलित आहार अपनाएं।' : 'Adopt regular exercise and balanced diet.'
    }
    else return {
      category: isHindi ? 'मोटापा' : 'Obese',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: isHindi ? 'आपका वजन स्वास्थ्य के लिए जोखिम भरा है।' : 'Your weight poses health risks.',
      recommendation: isHindi ? 'डॉक्टर से सलाह लें और जीवनशैली में बदलाव करें।' : 'Consult a doctor and make lifestyle changes.'
    }
  }

  const bmi = calculateBMI()
  const bmiCategory = getBMICategory(bmi)

  const handleCalculate = () => {
    setShowResults(true)
  }

  const clearForm = () => {
    setWeight(70)
    setHeight(170)
    setHeightUnit('cm')
    setWeightUnit('kg')
    setShowResults(false)
  }

  const convertHeight = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return value
    
    if (fromUnit === 'cm' && toUnit === 'ft') {
      return (value / 30.48).toFixed(1)
    } else if (fromUnit === 'ft' && toUnit === 'cm') {
      return Math.round(value * 30.48)
    }
    return value
  }

  const handleHeightUnitChange = (newUnit) => {
    if (newUnit !== heightUnit) {
      const convertedHeight = convertHeight(height, heightUnit, newUnit)
      setHeight(convertedHeight)
      setHeightUnit(newUnit)
    }
  }

  const handleWeightUnitChange = (newUnit) => {
    if (newUnit !== weightUnit) {
      let convertedWeight = weight
      if (newUnit === 'lbs' && weightUnit === 'kg') {
        convertedWeight = (weight * 2.20462).toFixed(1)
      } else if (newUnit === 'kg' && weightUnit === 'lbs') {
        convertedWeight = (weight * 0.453592).toFixed(1)
      }
      setWeight(convertedWeight)
      setWeightUnit(newUnit)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="mobile-container max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Activity size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.bmiCalculator}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'अपना बॉडी मास इंडेक्स चेक करें' : 'Check your body mass index'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-sm mobile-p">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'अपने माप दर्ज करें' : 'Enter Your Measurements'}
            </h2>
            
            <div className="space-y-4">
              {/* Weight Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isHindi ? 'वजन' : 'Weight'}
                </label>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="70"
                    />
                  </div>
                  <select
                    value={weightUnit}
                    onChange={(e) => handleWeightUnitChange(e.target.value)}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </div>

              {/* Height Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isHindi ? 'ऊंचाई' : 'Height'}
                </label>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="170"
                    />
                  </div>
                  <select
                    value={heightUnit}
                    onChange={(e) => handleHeightUnitChange(e.target.value)}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                  >
                    <option value="cm">cm</option>
                    <option value="ft">ft</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors font-medium mobile-text-base"
                >
                  {isHindi ? 'BMI की गणना करें' : 'Calculate BMI'}
                </button>
                
                <button
                  onClick={clearForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium mobile-text-base"
                >
                  {isHindi ? 'साफ़ करें' : 'Clear'}
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-sm mobile-p">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'आपका BMI परिणाम' : 'Your BMI Result'}
            </h2>
            
            {showResults ? (
              <div className="space-y-4">
                {/* BMI Value */}
                <div className={`${bmiCategory.bgColor} ${bmiCategory.borderColor} border rounded-lg p-4 text-center`}>
                  <div className={`text-3xl sm:text-4xl font-bold ${bmiCategory.color} mb-2`}>
                    {bmi.toFixed(1)}
                  </div>
                  <div className={`text-lg font-semibold ${bmiCategory.color} mb-1`}>
                    {bmiCategory.category}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isHindi ? 'बॉडी मास इंडेक्स' : 'Body Mass Index'}
                  </div>
                </div>

                {/* Category Details */}
                <div className={`${bmiCategory.bgColor} ${bmiCategory.borderColor} border rounded-lg p-4`}>
                  <h4 className={`font-semibold ${bmiCategory.color} mb-2`}>
                    {bmiCategory.category}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    {bmiCategory.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{isHindi ? 'सिफारिश:' : 'Recommendation:'}</strong> {bmiCategory.recommendation}
                  </p>
                </div>

                {/* BMI Scale */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {isHindi ? 'BMI स्केल' : 'BMI Scale'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600">18.5</span>
                      <span className="text-gray-600">{isHindi ? 'कम वजन' : 'Underweight'}</span>
                      <TrendingDown size={16} className="text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600">18.5 - 24.9</span>
                      <span className="text-gray-600">{isHindi ? 'सामान्य' : 'Normal'}</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-600">25.0 - 29.9</span>
                      <span className="text-gray-600">{isHindi ? 'अधिक वजन' : 'Overweight'}</span>
                      <TrendingUp size={16} className="text-yellow-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-600">30.0+</span>
                      <span className="text-gray-600">{isHindi ? 'मोटापा' : 'Obese'}</span>
                      <TrendingUp size={16} className="text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Activity size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="mobile-text-sm">
                  {isHindi ? 'अपना वजन और ऊंचाई दर्ज करें और BMI की गणना करें' : 'Enter your weight and height to calculate BMI'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mt-6">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'BMI के बारे में' : 'About BMI'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'बॉडी मास इंडेक्स (BMI) आपके वजन और ऊंचाई के आधार पर आपके शरीर के वसा का अनुमान लगाने का एक सरल तरीका है।'
                : 'Body Mass Index (BMI) is a simple way to estimate body fat based on your weight and height.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह एक स्क्रीनिंग टूल है जो स्वास्थ्य जोखिमों की पहचान करने में मदद करता है, लेकिन यह पूर्ण निदान नहीं है।'
                : 'It is a screening tool that helps identify health risks, but it is not a complete diagnosis.'
              }
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex items-start space-x-2">
                <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  {isHindi 
                    ? 'सटीक स्वास्थ्य मूल्यांकन के लिए हमेशा एक स्वास्थ्य पेशेवर से परामर्श करें।'
                    : 'Always consult a healthcare professional for accurate health assessment.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMICalculator
