'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { useTheme } from '@/contexts/ThemeContext'

export default function Home() {
  const { isDarkMode } = useTheme()

  return (
    <div
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb',
        color: isDarkMode ? '#f1f5f9' : '#1f2937'
      }}
    >
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Careers />
      <Footer />

      {/* 回到顶部按钮 */}
      <BackToTop />
    </div>
  );
}
