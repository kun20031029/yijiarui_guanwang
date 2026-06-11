'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import Image from './SafeImage'

export default function Services() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  const services = [
    {
      icon: "🏭",
      titleKey: "services.manufacturing_title",
      items: [
        "services.manufacturing_1",
        "services.manufacturing_2",
        "services.manufacturing_3",
        "services.manufacturing_4"
      ]
    },
    {
      icon: "🔧",
      titleKey: "services.construction_title",
      items: [
        "services.construction_1",
        "services.construction_2",
        "services.construction_3"
      ]
    },
    {
      icon: "⚡",
      titleKey: "services.operation_title",
      items: [
        "services.operation_1",
        "services.operation_2",
        "services.operation_3"
      ]
    }
  ]

  // 服务场景图片数据
  const serviceImages = [
    {
      src: '/images/services/manufacturing.jpg',
      alt: '设备监造服务',
      titleKey: 'services.scenario_manufacturing',
      descKey: 'services.scenario_manufacturing_desc',
      serviceKey: 'manufacturing'
    },
    {
      src: '/images/services/construction.jpg',
      alt: '建设现场服务',
      titleKey: 'services.scenario_construction',
      descKey: 'services.scenario_construction_desc',
      serviceKey: 'construction'
    },
    {
      src: '/images/services/operation.jpg',
      alt: '运行维护服务',
      titleKey: 'services.scenario_operation',
      descKey: 'services.scenario_operation_desc',
      serviceKey: 'operation'
    }
  ]

  return (
    <section
      id="services"
      className="py-20 transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff'
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-20 h-20 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'
              : 'radial-gradient(circle, #a855f7 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #06b6d4 0%, transparent 70%)'
              : 'radial-gradient(circle, #0891b2 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
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
              {t('services.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              {t('services.subtitle')}
            </p>
          </AnimatedSection>
        </div>

        {/* 服务卡片网格 - 一行三个 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.4 + index * 0.1}
            >
              <motion.div
                className="p-6 rounded-2xl shadow-lg transition-all duration-200 h-full flex flex-col"
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
                  borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                  borderWidth: '1px',
                  minHeight: '320px' // 统一最小高度
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: isDarkMode
                    ? "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                    : "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.2
                }}
              >
                {/* 服务图标 */}
                <motion.div
                  className="text-4xl mb-4 text-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    duration: 0.15
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* 服务标题 */}
                <h3 className="text-lg font-bold mb-4 text-center" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {t(service.titleKey)}
                </h3>

                {/* 服务项目列表 */}
                <ul className="space-y-2 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.6 + index * 0.1 + itemIndex * 0.05,
                        duration: 0.4
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-blue-500 mr-3 mt-1 text-sm"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        ▶
                      </motion.span>
                      <span style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                        {t(item)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* 底部装饰 */}
                <motion.div
                  className="mt-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* 服务场景展示 */}
        <AnimatedSection direction="up" delay={0.8}>
          <div className="mt-16 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('services.scenarios_title')}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                {t('services.scenarios_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceImages.map((item, index) => (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.2 + index * 0.1}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
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
                        {t(item.titleKey)}
                      </h4>
                      <p className="text-sm mb-3" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                        {t(item.descKey)}
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
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 服务特色 */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-16 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('services.feature_title')}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  titleKey: "services.feature_custom_title",
                  descKey: "services.feature_custom_desc"
                },
                {
                  icon: "🔄",
                  titleKey: "services.feature_lifecycle_title",
                  descKey: "services.feature_lifecycle_desc"
                },
                {
                  icon: "👥",
                  titleKey: "services.feature_team_title",
                  descKey: "services.feature_team_desc"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl"
                  style={{
                    backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
                    borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                    borderWidth: '1px'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: isDarkMode
                      ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div
                    className="text-3xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {t(feature.titleKey)}
                  </h4>
                  <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 特别的行动号召区域 */}
        <AnimatedSection direction="up" delay={1.2}>
          <div className="mt-20 relative">
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #06b6d4)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-15"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #06b6d4)'
                }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <motion.div
              className="relative p-12 rounded-3xl text-center overflow-hidden"
              style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                  : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                borderColor: isDarkMode ? '#475569' : '#cbd5e1',
                borderWidth: '2px',
                boxShadow: isDarkMode
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: isDarkMode
                  ? '0 35px 60px -12px rgba(0, 0, 0, 0.6)'
                  : '0 35px 60px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* 闪烁的图标 */}
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-4"
                style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t('services.cta_title')}
              </motion.h3>

              <motion.p
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t('services.cta_desc')}
              </motion.p>

              <motion.a
                href="#contact"
                className="inline-flex items-center px-10 py-4 text-lg font-bold text-white rounded-full relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px -5px rgba(59, 130, 246, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10 mr-2">{t('services.cta_button')}</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>

                {/* 按钮背景动画 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
