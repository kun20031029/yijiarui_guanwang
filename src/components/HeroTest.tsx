'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

export default function HeroTest() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: isDarkMode
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/back/back.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
              : 'radial-gradient(circle, #60a5fa 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #10b981 0%, transparent 70%)'
              : 'radial-gradient(circle, #34d399 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 主标题 */}
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span
              className="text-white drop-shadow-lg"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.5)'
              }}
            >
              {t('hero.title')}
            </span>
          </h1>
        </AnimatedSection>

        {/* 副标题 */}
        <AnimatedSection direction="up" delay={0.4}>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white font-semibold"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 15px rgba(16,185,129,0.4)'
            }}
          >
            {t('hero.subtitle')}
          </p>
        </AnimatedSection>

        {/* 描述文字 */}
        <AnimatedSection direction="up" delay={0.6}>
          <p
            className="text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100 font-medium"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
            }}
          >
            {t('hero.description')}
          </p>
        </AnimatedSection>

        {/* 按钮组 */}
        <AnimatedSection direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_primary')}
            </motion.a>
            <motion.a
              href="#about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#2563eb",
                color: "#ffffff"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_secondary')}
            </motion.a>
          </div>
        </AnimatedSection>


      </div>
    </section>
  )
}
