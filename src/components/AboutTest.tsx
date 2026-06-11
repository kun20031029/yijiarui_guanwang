'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function AboutTest() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  // 企业风采图片数据
  const companyGallery = [
    {
      src: '/images/about/team-onsite.jpg',
      alt: '团队现场工作',
      title: '专业团队现场服务'
    },
    {
      src: '/images/about/equipment-inspection.jpg',
      alt: '设备检测场景',
      title: '精密设备检测'
    },
    {
      src: '/images/about/project-meeting.jpg',
      alt: '项目会议讨论',
      title: '项目技术交流'
    },
    {
      src: '/images/about/certificates.jpg',
      alt: '资质证书展示',
      title: '权威资质认证'
    }
  ]
  return (
    <section
      id="about"
      className="py-20 transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Company Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.company_intro')}</h3>
            <div className="space-y-4 leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              <p>
                {t('about.company_desc_1')}
              </p>
              <p>
                {t('about.company_desc_2')}
              </p>
              <p>
                {t('about.company_desc_3')}
              </p>
            </div>
          </div>
          <div
            className="p-8 rounded-xl shadow-lg transition-colors border"
            style={{
              background: isDarkMode
                ? 'linear-gradient(to bottom right, #334155, #475569)'
                : 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)',
              borderColor: isDarkMode ? '#475569' : '#f3f4f6'
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center min-h-[120px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>2014</div>
                <div className="h-8 flex items-center justify-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>{t('about.stat_founded')}</div>
              </div>
              <div className="text-center min-h-[120px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: isDarkMode ? '#34d399' : '#059669' }}>{t('about.stat_business_number')}</div>
                <div className="h-8 flex items-center justify-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>{t('about.stat_business')}</div>
              </div>
              <div className="text-center min-h-[120px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: isDarkMode ? '#a78bfa' : '#7c3aed' }}>{t('about.stat_qualification_level')}</div>
                <div className="h-8 flex items-center justify-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>{t('about.stat_qualification')}</div>
              </div>
              <div className="text-center min-h-[120px] flex flex-col justify-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: isDarkMode ? '#fb923c' : '#ea580c' }}>ISO</div>
                <div className="h-8 flex items-center justify-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>{t('about.stat_certification')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Advantages */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.advantages')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="p-6 rounded-xl shadow-lg text-center transition-colors border hover:shadow-xl hover:scale-105 transform duration-300 min-h-[280px] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#f3f4f6'
              }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 h-14 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.advantage_tech_title')}</h4>
              <p className="text-sm flex-1 flex items-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.advantage_tech_desc')}
              </p>
            </div>
            <div
              className="p-6 rounded-xl shadow-lg text-center transition-colors border hover:shadow-xl hover:scale-105 transform duration-300 min-h-[280px] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#f3f4f6'
              }}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 h-14 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.advantage_qual_title')}</h4>
              <p className="text-sm flex-1 flex items-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.advantage_qual_desc')}
              </p>
            </div>
            <div
              className="p-6 rounded-xl shadow-lg text-center transition-colors border hover:shadow-xl hover:scale-105 transform duration-300 min-h-[280px] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#f3f4f6'
              }}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 h-14 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.advantage_exp_title')}</h4>
              <p className="text-sm flex-1 flex items-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.advantage_exp_desc')}
              </p>
            </div>
            <div
              className="p-6 rounded-xl shadow-lg text-center transition-colors border hover:shadow-xl hover:scale-105 transform duration-300 min-h-[280px] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#f3f4f6'
              }}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 h-14 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('about.advantage_vision_title')}</h4>
              <p className="text-sm flex-1 flex items-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.advantage_vision_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* 企业风采图片展示 */}
        <div className="mt-20 py-16 px-4" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              企业风采
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyGallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                }}
              >
                <div className="relative overflow-hidden h-48 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* 图片标题 - 移到外面 */}
                <div className="p-3 text-center">
                  <h4 className="text-sm font-medium" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
