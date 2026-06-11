'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import Image from './SafeImage'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLanguage)
  }

  return (
    <header className="bg-white dark:bg-slate-900 shadow-lg sticky top-0 z-50 transition-colors border-b border-gray-100 dark:border-slate-700" style={{
      backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logos/logo.png"
                alt="易佳瑞能源Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div className="text-xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                易佳瑞能源
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.home')}
            </Link>
            <Link href="#about" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.about')}
            </Link>
            <Link href="#services" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.services')}
            </Link>
            <Link href="#projects" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.projects')}
            </Link>
            <Link href="#contact" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.contact')}
            </Link>
            <Link href="#careers" className="transition-colors font-medium" style={{
              color: isDarkMode ? '#d1d5db' : '#111827'
            }} onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
            }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
              }}>
              {t('nav.careers')}
            </Link>
          </nav>

          {/* Theme and Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isDarkMode ? '#d1d5db' : '#111827',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
              title={language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
            >
              <span className="font-medium">{language === 'zh' ? '中文' : 'English'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors"
              style={{
                color: isDarkMode ? '#d1d5db' : '#111827',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
              title={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Debug indicator */}
            <div className="hidden lg:block text-xs font-medium w-10 text-center" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
              {isDarkMode ? 'Dark' : 'Light'}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: isDarkMode ? '#d1d5db' : '#111827' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.home')}
              </Link>
              <Link href="#about" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.about')}
              </Link>
              <Link href="#services" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.services')}
              </Link>
              <Link href="#projects" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.projects')}
              </Link>
              <Link href="#contact" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.contact')}
              </Link>
              <Link href="#careers" className="transition-colors font-medium" style={{
                color: isDarkMode ? '#d1d5db' : '#111827'
              }} onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#60a5fa' : '#2563eb'
              }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#111827'
                }}>
                {t('nav.careers')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

