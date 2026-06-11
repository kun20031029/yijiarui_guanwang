'use client'

import Header from '@/components/Header'
import HeroTest from '@/components/HeroTest'
import AboutTest from '@/components/AboutTest'
import ServicesTest from '@/components/ServicesTest'
import ProjectsTest from '@/components/ProjectsTest'
import ContactTest from '@/components/ContactTest'
import CareersTest from '@/components/CareersTest'
import Footer from '@/components/Footer'
import { useTheme } from '@/contexts/ThemeContext'

export default function TestPage() {
  const { isDarkMode } = useTheme()

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        color: isDarkMode ? '#f1f5f9' : '#111827'
      }}
    >
      <Header />
      <HeroTest />
      <AboutTest />
      <ServicesTest />
      <ProjectsTest />
      <ContactTest />
      <CareersTest />
      <Footer />
    </div>
  )
}
