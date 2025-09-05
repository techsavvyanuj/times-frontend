import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import India from './pages/India'
import IndiaState from './pages/IndiaState'
import World from './pages/World'
import Entertainment from './pages/Entertainment'
import EntertainmentSubcategory from './pages/EntertainmentSubcategory'
import Sports from './pages/Sports'
import SportsSubcategory from './pages/SportsSubcategory'
import Business from './pages/Business'
import Technology from './pages/Technology'
import Lifestyle from './pages/Lifestyle'
import Astrology from './pages/Astrology'
import LiveTV from './pages/LiveTV'
import Opinion from './pages/Opinion'
import Photos from './pages/Photos'
import Videos from './pages/Videos'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import AdvertiseWithUs from './pages/AdvertiseWithUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import DownloadApp from './pages/DownloadApp'
import NewsDetail from './pages/NewsDetail'

// Utility Tools
import EMICalculator from './pages/EMICalculator'
import PINCodeFinder from './pages/PINCodeFinder'
import BMICalculator from './pages/BMICalculator'
import FuelPrices from './pages/FuelPrices'
import MetalRates from './pages/MetalRates'
import AQIChecker from './pages/AQIChecker'
import Horoscope from './pages/Horoscope'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/india" element={<India />} />
            <Route path="/india/:state" element={<IndiaState />} />
            <Route path="/world" element={<World />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/entertainment/:subcategory" element={<EntertainmentSubcategory />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/sports/:subcategory" element={<SportsSubcategory />} />
            <Route path="/business" element={<Business />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/astrology" element={<Astrology />} />
            <Route path="/live-tv" element={<LiveTV />} />
            <Route path="/opinion" element={<Opinion />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/download-app" element={<DownloadApp />} />
            <Route path="/news/:id" element={<NewsDetail />} />

            {/* Utility Tools Routes */}
            <Route path="/tools/emi-calculator" element={<EMICalculator />} />
            <Route path="/tools/pin-finder" element={<PINCodeFinder />} />
            <Route path="/tools/bmi-calculator" element={<BMICalculator />} />
            <Route path="/tools/fuel-prices" element={<FuelPrices />} />
            <Route path="/tools/metal-rates" element={<MetalRates />} />
            <Route path="/tools/aqi-checker" element={<AQIChecker />} />
            <Route path="/tools/horoscope" element={<Horoscope />} />

          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App
