import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat'
import BackToTop from '../components/BackToTop'
import Breadcrumb from '../components/Breadcrumb'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
      <BackToTop />
    </div>
  )
}

export default Layout
