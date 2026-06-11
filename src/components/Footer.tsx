'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useWebContent } from '@/hooks/useWebContent'
import Image from './SafeImage'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer() {
  const { isDarkMode } = useTheme()
  const { t, language } = useLanguage()
  const { webContent } = useWebContent()
  const [showQRCode, setShowQRCode] = useState(false)
  return (
    <footer
      className="transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb',
        color: isDarkMode ? '#f1f5f9' : '#1f2937'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logos/logo.png"
                alt="易佳瑞能源Logo"
                width={40}
                height={40}
                className="object-contain rounded-lg"
              />
              <div className="text-xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }}>
                {t('nav.home') === '首页' ? '易佳瑞能源' : 'Yijiarui Energy'}
              </div>
            </div>
            <p className="mb-4 leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
              {t('footer.company_desc')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors"
                style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#9ca3af' : '#6b7280'
                }}
              >
                <span className="sr-only">微信</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.248 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1 .023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.062-6.114zM14.348 14.5c-.534 0-.97-.434-.97-.97 0-.536.436-.97.97-.97s.97.434.97.97c0 .536-.436.97-.97.97zm4.402 0c-.534 0-.97-.434-.97-.97 0-.536.436-.97.97-.97s.97.434.97.97c0 .536-.436.97-.97.97z"/>
                </svg>
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#9ca3af' : '#6b7280'
                }}
              >
                <span className="sr-only">微博</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.996 14.456c-.503.38-1.19.572-2.063.572-1.365 0-2.47-.61-2.47-1.364 0-.754 1.105-1.364 2.47-1.364.873 0 1.56.192 2.063.572zm7.729-4.456c-.503.38-1.19.572-2.063.572-1.365 0-2.47-.61-2.47-1.364 0-.754 1.105-1.364 2.47-1.364.873 0 1.56.192 2.063.572zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }}>{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {['about', 'services', 'projects', 'contact', 'careers'].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className="transition-colors"
                    style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#6b7280'
                    }}
                  >
                    {t(`nav.${section}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }}>{t('footer.contact_info')}</h3>
            <div className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span className="text-sm">
                  {webContent ? (language === 'zh' ? webContent.contact_address_zh : webContent.contact_address_en) :
                   (t('nav.home') === '首页' ? '北京市海淀区马甸东路19号' : 'No. 19 Madian East Road, Haidian District, Beijing')}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-sm">{webContent ? webContent.contact_phone : '13693345140'}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span className="text-sm">{webContent ? webContent.contact_email : 'yijiarui@yijiarui.cn'}</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 mt-1">📱</span>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm">{t('contact.wechat_title')}</span>
                  <div
                    className="w-20 h-20 bg-white rounded-lg p-2 cursor-pointer hover:shadow-lg transition-shadow relative group border"
                    onClick={() => setShowQRCode(true)}
                  >
                    <Image
                      src={webContent ? webContent.contact_wechat_img_url : "/images/qr-code/wechat-qr.png"}
                      alt="微信公众号二维码"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded"
                    />
                    {/* 悬停提示 */}
                    <div className="absolute top-2 right-2 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm">🔍</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['privacy', 'terms', 'sitemap'].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="text-sm transition-colors"
                  style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#f1f5f9' : '#1f2937'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isDarkMode ? '#9ca3af' : '#6b7280'
                  }}
                >
                  {t(`footer.${item}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 二维码大图查看器 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRCode(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-gray-600">✕</span>
              </button>

              {/* 标题 */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.wechat_title')}</h3>
                <p className="text-gray-600">{t('contact.wechat_desc')}</p>
              </div>

              {/* 大尺寸二维码 */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-white rounded-lg p-4 shadow-lg border">
                  <Image
                    src={webContent ? webContent.contact_wechat_img_url : "/images/qr-code/wechat-qr.png"}
                    alt="微信公众号二维码"
                    width={240}
                    height={240}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* 提示文字 */}
              <p className="text-center text-sm text-gray-500 mt-4">
                {t('contact.wechat_scan_tip')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

