'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useJobPositions } from '@/hooks/useJobPositions'
import { useWebContent } from '@/hooks/useWebContent'

export default function Careers() {
  const { isDarkMode } = useTheme()
  const { t, language } = useLanguage()
  const { jobPositions } = useJobPositions()
  const { webContent } = useWebContent()

  return (
    <section
      id="careers"
      className="py-20 transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#e5e7eb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('footer.careers_title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
            {t('footer.careers_desc')}
          </p>
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className="rounded-lg shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl border"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#e5e7eb',
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {language === 'zh' ? job.title : job.title_en}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.department && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {language === 'zh' ? job.department : job.department_en}
                    </span>
                  )}
                  {job.location && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {language === 'zh' ? job.location : job.location_en}
                    </span>
                  )}
                  {job.education_required && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {job.education_required}
                    </span>
                  )}
                  {job.experience_required && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      {job.experience_required}
                    </span>
                  )}
                  {job.salary_range && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      {job.salary_range}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {t('careers.job_responsibilities')}
                </h4>
                {job.responsibilities && (
                  <div className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {(language === 'zh' ? job.responsibilities : job.responsibilities_en || job.responsibilities)
                      .split('\n')
                      .filter(item => item.trim())
                      .map((responsibility, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>{responsibility.trim()}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {t('careers.job_requirements')}
                </h4>
                {job.requirements && (
                  <div className="space-y-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {(language === 'zh' ? job.requirements : job.requirements_en || job.requirements)
                      .split('\n')
                      .filter(item => item.trim())
                      .map((requirement, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>{requirement.trim()}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t" style={{ borderColor: isDarkMode ? '#475569' : '#e5e7eb' }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4 text-sm" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                  {job.location && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {language === 'zh' ? job.location : job.location_en || job.location}
                    </span>
                  )}
                  {job.salary_range && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {job.salary_range}
                    </span>
                  )}
                </div>
                <a
                  href={`mailto:${webContent?.careers_general_email || job.contact_email || 'yijiarui@yijiarui.cn'}?subject=求职申请-${language === 'zh' ? job.title : job.title_en}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {t('footer.careers_button')}
                </a>
              </div>
            </div>
          </div>
          ))}

          {/* Contact Information */}
          <div 
            className="rounded-lg shadow-lg p-8 text-center transition-all duration-300"
            style={{
              backgroundColor: isDarkMode ? '#334155' : '#ffffff',
              borderColor: isDarkMode ? '#475569' : '#e5e7eb',
              boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              {t('careers.no_suitable_position')}
            </h3>
            <p className="mb-6" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              {t('careers.general_application')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${webContent?.careers_general_email || 'yijiarui@yijiarui.cn'}?subject=求职申请-简历投递`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {t('careers.submit_resume')}
              </a>
              <a
                href={`tel:${webContent?.careers_contact_phone || webContent?.contact_phone || '13693345140'}`}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t('careers.phone_consultation')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
