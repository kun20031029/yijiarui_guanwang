'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { useCompanyStats } from '@/hooks/useCompanyStats'
import { useCertifications, type Certification } from '@/hooks/useCertifications'
import { getColorValue } from '@/types/colorScheme'
import AnimatedSection from './AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import Image from './SafeImage'
import { useState } from 'react'

export default function About() {
  const { isDarkMode } = useTheme()
  const { t, language } = useLanguage()
  const { stats, loading: statsLoading, error: statsError } = useCompanyStats()
  const { getCertificationsByStatsId, loading: certsLoading, error: certsError } = useCertifications()
  const [selectedCertification, setSelectedCertification] = useState<{
    id: string;
    icon: string;
    title: string;
    title_en: string;
    images: Certification[];
  } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)



  const openModal = (cert: {
    id: string;
    icon: string;
    title: string;
    title_en: string;
    images: Certification[];
  }) => {
    setSelectedCertification(cert)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedCertification(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedCertification) {
      setCurrentImageIndex((prev) =>
        (prev + 1) % selectedCertification.images.length
      )
    }
  }

  const prevImage = () => {
    if (selectedCertification) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedCertification.images.length - 1 : prev - 1
      )
    }
  }

  const features = [
    {
      icon: "💡",
      titleKey: "about.advantage_tech_title",
      descKey: "about.advantage_tech_desc"
    },
    {
      icon: "🎯",
      titleKey: "about.advantage_qual_title",
      descKey: "about.advantage_qual_desc"
    },
    {
      icon: "📈",
      titleKey: "about.advantage_exp_title",
      descKey: "about.advantage_exp_desc"
    },
    {
      icon: "🌱",
      titleKey: "about.advantage_vision_title",
      descKey: "about.advantage_vision_desc"
    }
  ]

  // 企业风采图片数据
  const companyGallery = [
    {
      src: '/images/about/team-onsite.jpg',
      alt: '团队现场工作',
      titleKey: 'about.gallery_team'
    },
    {
      src: '/images/about/equipment-inspection.jpg',
      alt: '设备检测场景',
      titleKey: 'about.gallery_equipment'
    },
    {
      src: '/images/about/project-meeting.jpg',
      alt: '项目会议讨论',
      titleKey: 'about.gallery_meeting'
    },
    {
      src: '/images/about/certificates.jpg',
      alt: '资质证书展示',
      titleKey: 'about.gallery_certificates'
    }
  ]

  return (
    <section
      id="about"
      className="py-20 transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc'
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #f59e0b 0%, transparent 70%)'
              : 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
              {t('about.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              {t('about.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 左侧文字内容 */}
          <div>
            <AnimatedSection direction="left" delay={0.4}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('about.company_intro')}
              </h3>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.5}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.company_desc_1')}
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.company_desc_2')}
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('about.company_desc_3')}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.6}>
              {statsLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="text-lg" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    加载中...
                  </div>
                </div>
              ) : statsError ? (
                <div className="flex justify-center items-center py-12">
                  <div className="text-lg text-red-500">
                    数据加载失败: {statsError}
                  </div>
                </div>
              ) : (
                <div className={`grid gap-6 max-w-6xl mx-auto ${
                  stats.length === 1 ? 'grid-cols-1 max-w-md' :
                  stats.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl' :
                  stats.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-4xl' :
                  stats.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {stats.map((stat) => {

                    // 根据统计数据的ID获取对应的所有证书
                    const statCertifications = getCertificationsByStatsId(stat.id)
                    const hasCertifications = statCertifications.length > 0

                    return (
                      <motion.div
                        key={stat.id}
                        className={`text-center p-6 rounded-lg relative group ${hasCertifications ? 'cursor-pointer' : 'cursor-default'}`}
                        style={{ backgroundColor: isDarkMode ? '#334155' : '#ffffff' }}
                        whileHover={{ scale: hasCertifications ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => hasCertifications && openModal({
                          id: stat.id,
                          icon: stat.icon,
                          title: stat.detail_title || stat.title,
                          title_en: stat.detail_title_en || stat.title_en,
                          images: statCertifications
                        })}
                      >
                        {/* 右上角提示图标 - 只有有证书时才显示 */}
                        {hasCertifications && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">👁️</span>
                          </div>
                        )}

                        <div className="text-3xl mb-4">{stat.icon}</div>
                        <div className="text-lg font-semibold mb-1" style={{
                          color: getColorValue(stat.color_scheme)
                        }}>
                          {language === 'zh' ? stat.title : stat.title_en}
                        </div>
                        <div className="text-sm" style={{ color: isDarkMode ? '#cbd5e1' : '#64748b' }}>
                          {language === 'zh' ? stat.description : stat.description_en}
                        </div>

                        {/* 底部提示 - 只有有证书时才显示 */}
                        {hasCertifications && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg">
                            {t('about.click_to_view')}
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* 右侧图片/装饰 */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="relative">
              <motion.div
                className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden relative"
                style={{ backgroundColor: isDarkMode ? '#334155' : '#e2e8f0' }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/back/daping.jpg"
                  alt="企业大屏展示"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* 图片上的渐变遮罩 */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                />
              </motion.div>
              
              {/* 装饰元素 */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </AnimatedSection>
        </div>

        {/* 资质证书展示区域 */}
        {certsLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              加载证书数据中...
            </div>
          </div>
        ) : certsError ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="text-lg text-red-500 mb-2">
                证书数据加载失败
              </div>
              <div className="text-sm" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {certsError}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 mb-16">
            {/* 按统计数据分组展示证书 */}
            {stats.map((stat, statIndex) => {
              const statCertifications = getCertificationsByStatsId(stat.id)
              if (statCertifications.length === 0) return null

              return (
                <AnimatedSection key={stat.id} direction="up" delay={0.8 + statIndex * 0.2}>
                  <div className="mb-20">
                    {/* 分类标题和描述 */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                        {stat.icon} {language === 'zh' ?
                          (stat.detail_title || stat.title) :
                          (stat.detail_title_en || stat.title_en)
                        }
                      </h3>
                      <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
                      <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                        {language === 'zh' ?
                          (stat.detail_description || stat.description) :
                          (stat.detail_description_en || stat.description_en)
                        }
                      </p>
                    </div>

                    {/* 该分类下的证书图片 - 使用固定宽度布局 */}
                    <div
                      className="w-full gap-6"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px'
                      }}
                    >
                      {statCertifications.map((cert, certIndex) => {
                        // 解析网格尺寸
                        const gridWidth = parseInt(cert.grid_width || '1')
                        const gridHeight = parseInt(cert.grid_height || '1')

                        return (
                          <motion.div
                            key={cert.id}
                            className={`
                              relative overflow-hidden rounded-xl shadow-lg transition-all duration-300
                              hover:shadow-xl hover:scale-105 cursor-pointer group h-[280px]
                              ${gridWidth === 3 ? 'col-span-3' : gridWidth === 2 ? 'col-span-2' : 'col-span-1'}
                            `}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                              backgroundColor: isDarkMode ? '#334155' : '#ffffff'
                            }}
                            // 调试信息
                            data-grid-width={gridWidth}
                            data-grid-height={gridHeight}
                            whileHover={{
                              y: -5,
                              boxShadow: isDarkMode
                                ? "0 20px 40px -5px rgba(0, 0, 0, 0.3)"
                                : "0 20px 40px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{
                              delay: 0.9 + certIndex * 0.1,
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }}
                              onClick={() => setSelectedImage(cert.image_url)}
                            >
                              <div className="relative w-full h-full">
                                <Image
                                  src={cert.image_url}
                                  alt={language === 'zh' ? cert.image_caption : cert.image_caption_en}
                                  fill
                                  className="object-contain p-4"
                                  sizes={
                                    gridWidth === 1 ? "(max-width: 768px) 100vw, 33vw" :
                                    gridWidth === 2 ? "(max-width: 768px) 100vw, 50vw" :
                                    "100vw"
                                  }
                                />
                              </div>

                              {/* 证书信息 */}
                              <div className="p-6 text-center">
                                <h5 className="text-lg font-bold" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                                  {language === 'zh' ? cert.image_caption : cert.image_caption_en}
                                </h5>
                              </div>

                              {/* 悬停提示 */}
                              <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-lg">🔍</span>
                              </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        )}

        {/* 特色功能卡片 - 一行四个 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.7 + index * 0.1}
            >
              <motion.div
                className="text-center p-6 rounded-xl shadow-lg transition-all duration-200 h-56 flex flex-col justify-center"
                style={{
                  backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                  borderColor: isDarkMode ? '#475569' : '#e5e7eb',
                  borderWidth: '1px',
                  minHeight: '224px' // 统一高度，稍微降低
                }}
                whileHover={{
                  y: -8,
                  boxShadow: isDarkMode
                    ? "0 15px 20px -5px rgba(0, 0, 0, 0.3)"
                    : "0 15px 20px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.2
                }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    duration: 0.15
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-lg font-bold mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {t(feature.titleKey)}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                  {t(feature.descKey)}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* 企业风采图片展示 */}
        <AnimatedSection direction="up" delay={1.0}>
          <div className="mt-20 py-16 px-4" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('about.gallery_title')}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyGallery.map((item, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.2 + index * 0.1}
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
                    <div className="relative overflow-hidden h-48 w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* 图片标题 */}
                    <div className="p-3 text-center">
                      <h4 className="text-sm font-medium" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                        {t(item.titleKey)}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* 资质证书弹窗 */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 标题和关闭按钮 */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  <span className="mr-3 text-3xl">{selectedCertification.icon}</span>
                  {language === 'zh' ? selectedCertification.title : selectedCertification.title_en}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-2xl hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                  style={{ color: isDarkMode ? '#cbd5e1' : '#6b7280' }}
                >
                  ✕
                </button>
              </div>

              {/* 图片展示区域 */}
              <div className="relative mb-4">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={selectedCertification.images[currentImageIndex].image_url}
                        alt={language === 'zh' ? selectedCertification.images[currentImageIndex].image_caption : selectedCertification.images[currentImageIndex].image_caption_en}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 左右切换按钮 */}
                {selectedCertification.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ←
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      →
                    </motion.button>
                  </>
                )}
              </div>

              {/* 图片说明 */}
              <div className="text-center mb-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentImageIndex}
                    className="text-lg font-medium"
                    style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    {language === 'zh' ? selectedCertification.images[currentImageIndex].image_caption : selectedCertification.images[currentImageIndex].image_caption_en}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* 图片指示器 */}
              {selectedCertification.images.length > 1 && (
                <div className="flex justify-center space-x-2">
                  {selectedCertification.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-blue-500'
                          : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        scale: index === currentImageIndex ? 1.2 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 大图查看器 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="证书大图"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
