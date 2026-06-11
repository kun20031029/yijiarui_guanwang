'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6
}: AnimatedSectionProps) {
  
  // 定义不同方向的动画变体
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0, // 减少移动距离
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0, // 减少移动距离
      scale: direction === 'fade' ? 0.98 : 1, // 减少缩放幅度
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration * 0.7, // 减少30%的持续时间
        delay: delay * 0.8, // 减少20%的延迟时间
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        type: "spring",
        stiffness: 200, // 增加弹簧刚度，更快响应
        damping: 20     // 增加阻尼，减少弹跳
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true, // 只触发一次动画
        amount: 0.05, // 当5%的元素进入视窗时触发（更敏感）
        margin: "150px" // 提前150px触发动画（更早响应）
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
