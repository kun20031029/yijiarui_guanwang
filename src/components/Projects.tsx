'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import Image from './SafeImage'
import { useProjects } from '@/hooks/useProjects'
import { usePartners } from '@/hooks/usePartners'

export default function Projects() {
  const { isDarkMode } = useTheme()
  const { t, language } = useLanguage()
  const { getProjectsByCategory } = useProjects()
  const { partners } = usePartners()

  // 根据项目分类获取固定图标
  const getProjectIcon = (category: string): string => {
    return category === 'wind' ? '🌪️' : category === 'solar' ? '☀️' : '⚡'
  }

  // 根据项目分类获取固定颜色方案
  const getProjectColor = (category: string, index: number): string => {
    if (category === 'wind') {
      const windColors = [
        'from-blue-500 to-cyan-500',
        'from-blue-600 to-cyan-600',
        'from-indigo-500 to-blue-500',
        'from-sky-500 to-blue-500'
      ]
      return windColors[index % windColors.length]
    } else if (category === 'solar') {
      const solarColors = [
        'from-yellow-500 to-orange-500',
        'from-yellow-600 to-orange-600',
        'from-amber-500 to-yellow-500',
        'from-orange-500 to-red-500'
      ]
      return solarColors[index % solarColors.length]
    }
    return 'from-gray-500 to-gray-600' // 默认颜色
  }

  // 从数据库获取风电项目
  const windProjects = getProjectsByCategory('wind')

  // 从数据库获取光伏项目
  const solarProjects = getProjectsByCategory('solar')



  // 项目实景图片数据
  const projectGallery = [
    {
      src: '/images/projects/wind-farm-overview.jpg',
      alt: '风电项目现场',
      titleKey: 'projects.gallery_wind_farm',
      category: 'wind'
    },
    {
      src: '/images/projects/wind-inspection.jpg',
      alt: '风电设备监理',
      titleKey: 'projects.gallery_wind_inspection',
      category: 'wind'
    },
    {
      src: '/images/projects/solar-plant.jpg',
      alt: '光伏项目实景',
      titleKey: 'projects.gallery_solar_plant',
      category: 'solar'
    },
    {
      src: '/images/projects/solar-installation.jpg',
      alt: '光伏施工监理',
      titleKey: 'projects.gallery_solar_installation',
      category: 'solar'
    },
    {
      src: '/images/projects/energy-storage.jpg',
      alt: '储能项目场景',
      titleKey: 'projects.gallery_energy_storage',
      category: 'storage'
    },
    {
      src: '/images/projects/project-completion.jpg',
      alt: '项目竣工验收',
      titleKey: 'projects.gallery_completion',
      category: 'completion'
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f1f5f9'
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-1/4 w-40 h-40 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #f59e0b 0%, transparent 70%)'
              : 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              {t('projects.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </AnimatedSection>
        </div>

        {/* 风电项目 */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-3">🌪️</div>
              <h3 className="text-2xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('projects.wind_title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {windProjects.map((project, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.4 + index * 0.1}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 h-full"
                    style={{
                      backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* 渐变背景 */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${getProjectColor('wind', index)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    />

                    <div className="relative p-6 h-full flex flex-col">
                      {/* 项目图标 */}
                      <motion.div
                        className="text-3xl mb-4 text-center"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400
                        }}
                      >
                        {getProjectIcon('wind')}
                      </motion.div>

                      {/* 项目标题 */}
                      <h4 className="text-sm font-bold text-center leading-tight" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                        {language === 'zh' ? project.title : project.title_en}
                      </h4>

                      {/* 底部装饰线 */}
                      <motion.div
                        className={`mt-4 h-1 bg-gradient-to-r ${getProjectColor('wind', index)} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 光伏项目 */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-3">☀️</div>
              <h3 className="text-2xl font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('projects.solar_title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solarProjects.map((project, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.7 + index * 0.1}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 h-full"
                    style={{
                      backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* 渐变背景 */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${getProjectColor('solar', index)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    />

                    <div className="relative p-6 h-full flex flex-col">
                      {/* 项目图标 */}
                      <motion.div
                        className="text-3xl mb-4 text-center"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400
                        }}
                      >
                        {getProjectIcon(project.category)}
                      </motion.div>

                      {/* 项目标题 */}
                      <h4 className="text-sm font-bold text-center leading-tight" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                        {language === 'zh' ? project.title : project.title_en}
                      </h4>

                      {/* 底部装饰线 */}
                      <motion.div
                        className={`mt-4 h-1 bg-gradient-to-r ${getProjectColor('wind', index)} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 项目实景展示 */}
        <AnimatedSection direction="up" delay={1.0}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('projects.gallery_title')}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('projects.gallery_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {projectGallery.map((item, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.2 + index * 0.05}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{
                      backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: isDarkMode
                        ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                        : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
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
                        {t(item.titleKey)}
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
                        {item.category === 'wind' ? t('projects.category_wind') :
                         item.category === 'solar' ? t('projects.category_solar') :
                         item.category === 'storage' ? t('projects.category_storage') : t('projects.category_completion')}
                      </span>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 合作伙伴部分 */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('projects.partners_title')}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('projects.partners_desc')}
              </p>
            </div>

            <div
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: isDarkMode ? '#334155' : '#e2e8f0',
                borderColor: isDarkMode ? '#475569' : '#cbd5e1'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {partners.map((partner, index) => (
                  <AnimatedSection
                    key={partner.id}
                    direction="up"
                    delay={0.4 + index * 0.05}
                  >
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="p-6 rounded-xl transition-all duration-300 w-48 h-48 mx-auto flex flex-col justify-center items-center"
                        style={{
                          backgroundColor: isDarkMode ? '#475569' : '#ffffff'
                        }}
                        whileHover={{
                          backgroundColor: isDarkMode ? '#64748b' : '#f3f4f6',
                          boxShadow: isDarkMode
                            ? "0 15px 30px -5px rgba(0, 0, 0, 0.3)"
                            : "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                          y: -5
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="mb-3 flex items-center justify-center w-full flex-1"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="relative w-full h-28 flex items-center justify-center overflow-hidden rounded-xl">
                            <Image
                              src={partner.logo_url}
                              alt={language === 'zh' ? partner.name_zh : partner.name_en}
                              fill
                              className="object-contain"
                              style={{
                                filter: isDarkMode ? 'brightness(1.1) contrast(1.1)' : 'none'
                              }}
                              sizes="200px"
                            />
                          </div>
                        </motion.div>
                        <div className="text-base font-medium text-center leading-tight" style={{ color: isDarkMode ? '#f1f5f9' : '#374151' }}>
                          {language === 'zh' ? partner.name_zh : partner.name_en}
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
