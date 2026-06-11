'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

export default function CareersTest() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  const responsibilities = [
    'careers.responsibility_1',
    'careers.responsibility_2',
    'careers.responsibility_3',
    'careers.responsibility_4',
    'careers.responsibility_5',
    'careers.responsibility_6'
  ]

  const requirements = [
    'careers.requirement_1',
    'careers.requirement_2',
    'careers.requirement_3',
    'careers.requirement_4',
    'careers.requirement_5',
    'careers.requirement_6'
  ]

  return (
    <section
      id="careers"
      className="py-20 transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#e5e7eb'
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-1/4 w-40 h-40 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #f59e0b 0%, transparent 70%)'
              : 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-32 h-32 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #10b981 0%, transparent 70%)'
              : 'radial-gradient(circle, #34d399 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              {t('footer.careers_title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              {t('footer.careers_desc')}
            </p>
          </AnimatedSection>
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          {/* Job 1: 塔筒监理工程师 */}
          <AnimatedSection direction="up" delay={0.4}>
            <motion.div 
              className="rounded-2xl shadow-lg p-8 mb-8 transition-all duration-300 border"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#e5e7eb',
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ 
                y: -5,
                scale: 1.01,
                boxShadow: isDarkMode 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.4)" 
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2" 
                    style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {t('careers.job_title')}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { text: t('careers.job_type_fulltime'), color: 'blue' },
                      { text: t('careers.job_education'), color: 'green' },
                      { text: t('careers.job_experience'), color: 'purple' }
                    ].map((tag, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-${tag.color}-100 text-${tag.color}-800 dark:bg-${tag.color}-900 dark:text-${tag.color}-200`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.6 + index * 0.1, 
                          type: "spring", 
                          stiffness: 300 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag.text}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* 岗位职责 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {t('careers.job_responsibilities')}
                  </h4>
                  <ul className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {responsibilities.map((responsibility, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.8 + index * 0.05,
                          duration: 0.4
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-blue-500 mr-2 mt-1"
                          whileHover={{ scale: 1.3, rotate: 90 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          •
                        </motion.span>
                        {t(responsibility)}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* 任职要求 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {t('careers.job_requirements')}
                  </h4>
                  <ul className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {requirements.map((requirement, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.8 + index * 0.05,
                          duration: 0.4
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: -5 }}
                      >
                        <motion.span 
                          className="text-green-500 mr-2 mt-1"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          ✓
                        </motion.span>
                        {t(requirement)}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* 底部信息和按钮 */}
              <motion.div 
                className="mt-8 pt-6 border-t" 
                style={{ borderColor: isDarkMode ? '#475569' : '#e5e7eb' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4 text-sm" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {t('careers.location')}
                    </motion.span>
                    <motion.span 
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {t('careers.publish_date')}
                    </motion.span>
                  </div>
                  
                  <motion.a
                    href="mailto:yijiarui@yijiarui.cn?subject=求职申请-塔筒监理工程师"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {t('footer.careers_button')}
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection direction="up" delay={1.2}>
            <motion.div 
              className="rounded-2xl shadow-lg p-8 text-center transition-all duration-300"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#e5e7eb',
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: isDarkMode 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.4)" 
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-4" 
                style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t('careers.no_suitable_position')}
              </motion.h3>
              
              <motion.p 
                className="mb-6" 
                style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t('careers.general_application')}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:yijiarui@yijiarui.cn?subject=求职申请-简历投递"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {t('careers.submit_resume')}
                </motion.a>
                
                <motion.a
                  href="tel:13693345140"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors inline-flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {t('careers.phone_consultation')}
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
