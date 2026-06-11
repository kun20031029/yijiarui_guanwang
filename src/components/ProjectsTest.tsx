'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function Projects() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()
  const windProjects = [
    t('projects.wind_1'),
    t('projects.wind_2'),
    t('projects.wind_3'),
    t('projects.wind_4')
  ]

  const solarProjects = [
    t('projects.solar_1'),
    t('projects.solar_2'),
    t('projects.solar_3'),
    t('projects.solar_4')
  ]

  const testimonials = [
    {
      quote: t('projects.testimonial_1'),
      author: t('projects.testimonial_1_author')
    },
    {
      quote: t('projects.testimonial_2'),
      author: t('projects.testimonial_2_author')
    }
  ]

  const partners = [
    { name: "国家能源集团", logo: "国家能源集团.png" },
    { name: "华润电力", logo: "华润电力.png" },
    { name: "中国能建", logo: "中国能建.png" },
    { name: "中国电建", logo: "中国电建.png" },
    { name: "金风科技", logo: "金风科技.png" },
    { name: "中车风电", logo: "中车风电.png" }
  ]

  // 项目实景图片数据
  const projectGallery = [
    {
      src: '/images/projects/wind-farm-overview.jpg',
      alt: '风电项目现场',
      title: '风电场全景',
      category: 'wind'
    },
    {
      src: '/images/projects/wind-inspection.jpg',
      alt: '风电设备监理',
      title: '设备质量检测',
      category: 'wind'
    },
    {
      src: '/images/projects/solar-plant.jpg',
      alt: '光伏项目实景',
      title: '光伏电站',
      category: 'solar'
    },
    {
      src: '/images/projects/solar-installation.jpg',
      alt: '光伏施工监理',
      title: '安装质量监督',
      category: 'solar'
    },
    {
      src: '/images/projects/energy-storage.jpg',
      alt: '储能项目场景',
      title: '储能系统',
      category: 'storage'
    },
    {
      src: '/images/projects/project-completion.jpg',
      alt: '项目竣工验收',
      title: '项目交付',
      category: 'completion'
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Project Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Wind Projects */}
          <div
            className="p-8 rounded-lg shadow-lg transition-colors"
            style={{
              backgroundColor: isDarkMode ? '#334155' : '#ffffff'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('projects.wind_title')}</h3>
            </div>
            <div className="space-y-4">
              {windProjects.map((project, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 mt-2" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>•</span>
                  <span className="leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solar Projects */}
          <div
            className="p-8 rounded-lg shadow-lg transition-colors"
            style={{
              backgroundColor: isDarkMode ? '#334155' : '#ffffff'
            }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('projects.solar_title')}</h3>
            </div>
            <div className="space-y-4">
              {solarProjects.map((project, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 mt-2" style={{ color: isDarkMode ? '#fbbf24' : '#d97706' }}>•</span>
                  <span className="leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('projects.testimonials_title')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg shadow-lg transition-colors"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                }}
              >
                <div className="text-4xl mb-4" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>&quot;</div>
                <p className="mb-6 italic leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{testimonial.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 项目实景展示 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              项目实景
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              真实的项目案例，展现我们的专业实力与丰富经验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {projectGallery.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                }}
              >
                <div className="relative overflow-hidden h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* 图片标题 */}
                <div className="p-4 text-center">
                  <h4 className="text-sm font-medium mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {item.title}
                  </h4>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: item.category === 'wind' ? '#3b82f6' :
                                     item.category === 'solar' ? '#f59e0b' :
                                     item.category === 'storage' ? '#10b981' : '#8b5cf6',
                      color: 'white'
                    }}
                  >
                    {item.category === 'wind' ? '风电' :
                     item.category === 'solar' ? '光伏' :
                     item.category === 'storage' ? '储能' : '验收'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div
          className="p-8 rounded-lg shadow-lg transition-colors"
          style={{
            backgroundColor: isDarkMode ? '#334155' : '#ffffff'
          }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('projects.partners_title')}</h3>
          <p className="text-center mb-8" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
            {t('projects.partners_desc')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div
                  className="p-4 rounded-lg transition-colors min-h-[120px] flex flex-col justify-center items-center"
                  style={{
                    backgroundColor: isDarkMode ? '#475569' : '#f3f4f6'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? '#64748b' : '#e5e7eb'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = isDarkMode ? '#475569' : '#f3f4f6'
                  }}
                >
                  <div className="mb-3 flex items-center justify-center">
                    <Image
                      src={`/images/logos/${partner.logo}`}
                      alt={partner.name}
                      width={60}
                      height={40}
                      className="object-contain rounded"
                      style={{
                        filter: isDarkMode ? 'brightness(1.1) contrast(1.1)' : 'none'
                      }}
                    />
                  </div>
                  <div className="text-xs font-medium text-center leading-tight" style={{ color: isDarkMode ? '#f1f5f9' : '#374151' }}>
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
