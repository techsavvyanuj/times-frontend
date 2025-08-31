import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const EMICalculator = () => {
  const navigate = useNavigate()
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']
  
  const [loanAmount, setLoanAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(10.5)
  const [loanTerm, setLoanTerm] = useState(12)
  const [showResults, setShowResults] = useState(false)

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12 // Monthly interest rate
    const time = parseFloat(loanTerm)
    
    if (rate === 0) return principal / time
    
    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1)
    return emi
  }

  const emi = calculateEMI()
  const totalAmount = emi * loanTerm
  const totalInterest = totalAmount - loanAmount

  const handleCalculate = () => {
    setShowResults(true)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
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
              <div className="bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <Calculator size={24} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-text-xl sm:mobile-text-2xl md:mobile-text-3xl font-bold text-gray-800">
                  {t.loanEMICalculator}
                </h1>
                <p className="mobile-text-sm sm:mobile-text-base text-gray-600">
                  {isHindi ? 'अपनी मासिक ईएमआई की गणना करें' : 'Calculate your monthly EMI'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-sm mobile-p">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'ऋण विवरण दर्ज करें' : 'Enter Loan Details'}
            </h2>
            
            <div className="space-y-4">
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isHindi ? 'ऋण राशि (₹)' : 'Loan Amount (₹)'}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100000"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10,000</span>
                  <span>₹50,00,000</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isHindi ? 'ब्याज दर (% प्रति वर्ष)' : 'Interest Rate (% per annum)'}
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10.5"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isHindi ? 'ऋण अवधि (महीने)' : 'Loan Term (months)'}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6 months</span>
                  <span>360 months</span>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium mobile-text-base"
              >
                {isHindi ? 'ईएमआई की गणना करें' : 'Calculate EMI'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-sm mobile-p">
            <h2 className="mobile-text-lg sm:mobile-text-xl font-semibold text-gray-800 mb-4">
              {isHindi ? 'गणना परिणाम' : 'Calculation Results'}
            </h2>
            
            {showResults ? (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                      {formatCurrency(emi)}
                    </div>
                    <div className="text-sm text-blue-600">
                      {isHindi ? 'मासिक ईएमआई' : 'Monthly EMI'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      {formatCurrency(totalAmount)}
                    </div>
                    <div className="text-xs text-gray-600">
                      {isHindi ? 'कुल भुगतान' : 'Total Payment'}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-semibold text-gray-800">
                      {formatCurrency(totalInterest)}
                    </div>
                    <div className="text-xs text-gray-600">
                      {isHindi ? 'कुल ब्याज' : 'Total Interest'}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-2">
                    {isHindi ? 'ऋण विवरण' : 'Loan Summary'}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isHindi ? 'ऋण राशि:' : 'Loan Amount:'}</span>
                      <span className="font-medium">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isHindi ? 'ब्याज दर:' : 'Interest Rate:'}</span>
                      <span className="font-medium">{interestRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isHindi ? 'ऋण अवधि:' : 'Loan Term:'}</span>
                      <span className="font-medium">{loanTerm} {isHindi ? 'महीने' : 'months'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calculator size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="mobile-text-sm">
                  {isHindi ? 'ऋण विवरण दर्ज करें और ईएमआई की गणना करें' : 'Enter loan details and calculate EMI'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-sm mobile-p mt-6">
          <h3 className="mobile-text-lg font-semibold text-gray-800 mb-3">
            {isHindi ? 'ईएमआई के बारे में' : 'About EMI'}
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              {isHindi 
                ? 'ईएमआई (इक्वेटेड मंथली इंस्टॉलमेंट) एक निश्चित राशि है जो आपको हर महीने अपने ऋणदाता को भुगतान करनी होती है।'
                : 'EMI (Equated Monthly Installment) is a fixed amount that you need to pay to your lender every month.'
              }
            </p>
            <p>
              {isHindi
                ? 'यह कैलकुलेटर आपको अपनी मासिक ईएमआई, कुल भुगतान और कुल ब्याज की गणना करने में मदद करता है।'
                : 'This calculator helps you calculate your monthly EMI, total payment, and total interest.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EMICalculator
