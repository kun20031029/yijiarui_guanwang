'use client'

import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useWebContent } from '@/hooks/useWebContent'
import { getApiUrl } from '@/config/api'
import Image from './SafeImage'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const { isDarkMode } = useTheme()
  const { t, language } = useLanguage()
  const { webContent } = useWebContent()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // 手机号验证函数
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true // 手机号不是必填的
    const phoneRegex = /^1[3-9]\d{9}$/
    return phoneRegex.test(phone)
  }

  // 邮箱验证函数
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 验证必填字段
    if (!formData.name || !formData.email || !formData.message) {
      alert('请填写姓名、邮箱和咨询内容')
      return
    }

    // 验证邮箱格式
    if (!validateEmail(formData.email)) {
      alert('请输入正确的邮箱格式')
      return
    }

    // 验证手机号格式
    if (formData.phone && !validatePhone(formData.phone)) {
      alert('请输入正确的手机号格式（11位数字，以1开头）')
      return
    }

    // 验证咨询内容字数
    if (formData.message.length > 300) {
      alert('咨询内容不能超过300字')
      return
    }

    setIsSubmitting(true)

    try {
      // 构建API请求URL
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        company: formData.company || '',
        message: formData.message,
        status: '0'
      })

      const response = await fetch(getApiUrl('guanwang_add_web_consultations'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      })
      const result = await response.json()

      if (response.ok) {
        alert('咨询提交成功！我们会尽快与您联系。')
        // 清空表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error(result.msg || '提交失败')
      }
    } catch (error) {
      console.error('提交咨询失败:', error)
      alert('提交失败，请稍后重试或直接联系我们。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.info_title')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.address_title')}</h4>
                  <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {webContent ? (language === 'zh' ? webContent.contact_address_zh : webContent.contact_address_en) : t('contact.address')}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.phone_title')}</h4>
                  <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {webContent ? webContent.contact_phone : '13693345140'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.email_title')}</h4>
                  <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {webContent ? webContent.contact_email : 'yijiarui@yijiarui.cn'}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-orange-600">🌐</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.website_title')}</h4>
                  <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>www.yijiarui.cn</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.wechat_title')}</h4>
                  <div className="flex items-start space-x-3">
                    <div>
                      <p className="text-sm mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                        {t('contact.wechat_desc')}
                      </p>
                      <div
                        className="w-24 h-24 bg-white rounded-lg p-1 shadow-sm border cursor-pointer hover:shadow-md transition-shadow relative group"
                        onClick={() => setShowQRCode(true)}
                      >
                        <Image
                          src={webContent ? webContent.contact_wechat_img_url : "/images/qr-code/wechat-qr.png"}
                          alt="微信公众号二维码"
                          width={88}
                          height={88}
                          className="w-full h-full object-contain rounded"
                        />
                        {/* 悬停提示 */}
                        <div className="absolute top-1 right-1 w-4 h-4 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-xs">🔍</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="mt-8 p-6 rounded-lg transition-colors"
              style={{
                backgroundColor: isDarkMode ? '#475569' : '#f9fafb'
              }}
            >
              <h4 className="font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.hours_title')}</h4>
              <div className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                <div className="flex justify-between">
                  <span>{t('contact.hours_weekday')}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours_saturday')}</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours_sunday')}</span>
                  <span>{t('contact.hours_closed')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('contact.form_title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                    {t('contact.form_name')} {t('contact.form_required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                      color: isDarkMode ? '#f1f5f9' : '#111827'
                    }}
                    placeholder={t('contact.form_name_placeholder')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                    {t('contact.form_phone')} {t('contact.form_required')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^1[3-9]\d{9}$"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                      color: isDarkMode ? '#f1f5f9' : '#111827'
                    }}
                    placeholder="请输入11位手机号（选填）"
                  />
                  {formData.phone && !validatePhone(formData.phone) && (
                    <p className="text-red-500 text-xs mt-1">
                      请输入正确的手机号格式（11位数字，以1开头）
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                    {t('contact.form_email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                      color: isDarkMode ? '#f1f5f9' : '#111827'
                    }}
                    placeholder={t('contact.form_email_placeholder')}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                    {t('contact.form_company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                      color: isDarkMode ? '#f1f5f9' : '#111827'
                    }}
                    placeholder={t('contact.form_company_placeholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                  {t('contact.form_message')} {t('contact.form_required')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={300}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  style={{
                    backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                    borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
                    color: isDarkMode ? '#f1f5f9' : '#111827'
                  }}
                  placeholder={t('contact.form_message_placeholder')}
                ></textarea>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                    请详细描述您的需求
                  </span>
                  <span
                    className={`text-xs ${formData.message.length > 300 ? 'text-red-500' : ''}`}
                    style={{ color: formData.message.length > 300 ? '#ef4444' : (isDarkMode ? '#9ca3af' : '#6b7280') }}
                  >
                    {formData.message.length}/300
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? '提交中...' : t('contact.form_submit')}
              </button>
            </form>
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
    </section>
  )
}
