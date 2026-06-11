'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useBanners } from '@/hooks/useBanners'

export default function Hero() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()
  const { banners, loading: bannersLoading, error: bannersError } = useBanners()

  // 当前图片索引
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 从数据库获取的图片数组
  const backgroundImages = banners.map(banner => banner.image_url)


  
  // 自动轮播
  useEffect(() => {
    if (backgroundImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000) // 每5秒切换一次

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // 文字内容组件（提取出来避免重复）
  const HeroContent = () => (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

      <AnimatedSection direction="up" delay={0.8}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta_primary')}
          </motion.a>
          <motion.a
            href="#about"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta_secondary')}
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  )

  // 如果正在加载或出错，显示默认背景
  if (bannersLoading || bannersError || backgroundImages.length === 0) {
    return (
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
        }}
      >
        {/* 默认背景遮罩 */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* 文字内容 */}
        <HeroContent />
      </section>
    )
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: isDarkMode
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* 背景图片轮播 */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}
      
      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`切换到图片 ${index + 1}`}
          />
        ))}
      </div>

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
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
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

      {/* 文字内容 */}
      <HeroContent />
    </section>
  )
}
