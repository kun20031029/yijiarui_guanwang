'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useTheme()

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 当页面滚动超过300px时显示按钮
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // 滚动到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300"
          style={{
            backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
            color: 'white'
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: isDarkMode 
              ? "0 10px 25px -5px rgba(59, 130, 246, 0.4)" 
              : "0 10px 25px -5px rgba(37, 99, 235, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          aria-label="回到顶部"
        >
          {/* 向上箭头图标 */}
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
