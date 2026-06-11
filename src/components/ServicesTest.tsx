'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function Services() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  // 服务场景图片数据
  const serviceImages = [
    {
      src: '/images/services/manufacturing.jpg',
      alt: '设备监造服务',
      title: '设备监造',
      description: '制造过程质量监督',
      serviceKey: 'manufacturing'
    },
    {
      src: '/images/services/construction.jpg',
      alt: '建设现场服务',
      title: '现场服务',
      description: '建设期技术支持',
      serviceKey: 'construction'
    },
    {
      src: '/images/services/operation.jpg',
      alt: '运行维护服务',
      title: '运维服务',
      description: '设备运行维护',
      serviceKey: 'operation'
    }
  ]
  const services = [
    {
      title: t('services.manufacturing_title'),
      icon: "🔧",
      items: [
        t('services.manufacturing_1'),
        t('services.manufacturing_2'),
        t('services.manufacturing_3'),
        t('services.manufacturing_4')
      ]
    },
    {
      title: t('services.construction_title'),
      icon: "🏗️",
      items: [
        t('services.construction_1'),
        t('services.construction_2'),
        t('services.construction_3')
      ]
    },
    {
      title: t('services.operation_title'),
      icon: "⚙️",
      items: [
        t('services.operation_1'),
        t('services.operation_2'),
        t('services.operation_3')
      ]
    }
  ]

  const features = [
    {
      title: t('services.feature_custom_title'),
      description: t('services.feature_custom_desc'),
      icon: "🎯"
    },
    {
      title: t('services.feature_lifecycle_title'),
      description: t('services.feature_lifecycle_desc'),
      icon: "🔄"
    },
    {
      title: t('services.feature_team_title'),
      description: t('services.feature_team_desc'),
      icon: "👥"
    }
  ]

  return (
    <section
      id="services"
      className="py-20 transition-colors"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg hover:shadow-lg transition-all duration-300 border min-h-[350px] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                borderColor: isDarkMode ? '#475569' : '#e5e7eb',
                boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold h-16 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{service.title}</h3>
              </div>
              <ul className="space-y-3 flex-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: isDarkMode ? '#60a5fa' : '#2563eb' }}>•</span>
                    <span style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 服务场景展示 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              服务场景
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              专业的服务团队，覆盖项目全生命周期的技术支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {serviceImages.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                }}
              >
                <div className="relative overflow-hidden h-56 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* 服务信息 */}
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm mb-3" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {item.description}
                  </p>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: index === 0 ? '#3b82f6' :
                                     index === 1 ? '#10b981' : '#f59e0b',
                      color: 'white'
                    }}
                  >
                    {t(`services.${item.serviceKey}_title`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div
          className="rounded-lg p-8 transition-colors"
          style={{
            backgroundColor: isDarkMode ? '#1e40af' : '#eff6ff'
          }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{t('services.feature_title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center min-h-[180px] flex flex-col justify-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-3 h-12 flex items-center justify-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>{feature.title}</h4>
                <p className="flex-1 flex items-center justify-center" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
            {t('services.cta_title')}
          </h3>
          <p className="mb-8" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
            {t('services.cta_desc')}
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            {t('services.cta_button')}
          </a>
        </div>
      </div>
    </section>
  )
}
