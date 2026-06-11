'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

export default function ContactTest() {
  const { isDarkMode } = useTheme()
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: "📧",
      titleKey: "contact.email_title",
      value: "yijiarui@yijiarui.cn",
      href: "mailto:yijiarui@yijiarui.cn",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      titleKey: "contact.phone_title",
      value: "13693345140",
      href: "tel:13693345140",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📍",
      titleKey: "contact.address_title",
      value: "北京市海淀区马甸东路19号金澳国际B座26层2615室",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section
      id="contact"
      className="py-20 transition-colors relative overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff'
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #ec4899 0%, transparent 70%)'
              : 'radial-gradient(circle, #f472b6 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-5"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #06b6d4 0%, transparent 70%)'
              : 'radial-gradient(circle, #0891b2 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.4, 1, 1.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
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
              {t('contact.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左侧联系方式 */}
          <div>
            <AnimatedSection direction="left" delay={0.4}>
              <h3 className="text-2xl font-bold mb-8" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('contact.get_in_touch')}
              </h3>
            </AnimatedSection>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <AnimatedSection 
                  key={index} 
                  direction="left" 
                  delay={0.5 + index * 0.1}
                >
                  <motion.a
                    href={method.href}
                    className="group flex items-center p-6 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
                      borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                      borderWidth: '1px'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 10,
                      boxShadow: isDarkMode 
                        ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
                        : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* 图标 */}
                    <motion.div
                      className="text-3xl mr-4"
                      whileHover={{
                        scale: 1.2,
                        rotate: 10
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {method.icon}
                    </motion.div>

                    <div className="flex-grow">
                      <h4 className="font-semibold mb-1" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                        {t(method.titleKey)}
                      </h4>
                      <p style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                        {method.value}
                      </p>
                    </div>

                    {/* 箭头 */}
                    <motion.div
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                </AnimatedSection>
              ))}
            </div>

            {/* 公司信息 */}
            <AnimatedSection direction="left" delay={0.8}>
              <motion.div
                className="mt-8 p-6 rounded-xl"
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
                  borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                  borderWidth: '1px'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-bold mb-3" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                  {t('contact.company_name')}
                </h4>
                <p className="mb-2" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                  {t('contact.business_scope')}
                </p>
                <p className="mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                  {t('contact.service_area')}
                </p>

                {/* 营业时间 */}
                <div className="border-t pt-4" style={{ borderColor: isDarkMode ? '#475569' : '#e5e7eb' }}>
                  <h5 className="font-semibold mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {t('contact.hours_title')}
                  </h5>
                  <div className="space-y-1 text-sm" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                    <div className="flex justify-between">
                      <span>{t('contact.hours_weekday')}</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours_saturday')}</span>
                      <span>9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours_sunday')}</span>
                      <span>{t('contact.hours_closed')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* 右侧表单 */}
          <AnimatedSection direction="right" delay={0.4}>
            <motion.div
              className="p-8 rounded-2xl shadow-lg"
              style={{
                backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc',
                borderColor: isDarkMode ? '#334155' : '#e2e8f0',
                borderWidth: '1px'
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                {t('contact.send_message')}
              </h3>

              <form className="space-y-6">
                {/* 姓名和电话 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                      {t('contact.form_name')} {t('contact.form_required')}
                    </label>
                    <motion.input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                        borderColor: isDarkMode ? '#475569' : '#d1d5db',
                        color: isDarkMode ? '#f1f5f9' : '#111827'
                      }}
                      placeholder={t('contact.form_name_placeholder')}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                      {t('contact.form_phone')} {t('contact.form_required')}
                    </label>
                    <motion.input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                        borderColor: isDarkMode ? '#475569' : '#d1d5db',
                        color: isDarkMode ? '#f1f5f9' : '#111827'
                      }}
                      placeholder={t('contact.form_phone_placeholder')}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                </div>

                {/* 邮箱和公司 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                      {t('contact.form_email')}
                    </label>
                    <motion.input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                        borderColor: isDarkMode ? '#475569' : '#d1d5db',
                        color: isDarkMode ? '#f1f5f9' : '#111827'
                      }}
                      placeholder={t('contact.form_email_placeholder')}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                      {t('contact.form_company')}
                    </label>
                    <motion.input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{
                        backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                        borderColor: isDarkMode ? '#475569' : '#d1d5db',
                        color: isDarkMode ? '#f1f5f9' : '#111827'
                      }}
                      placeholder={t('contact.form_company_placeholder')}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                </div>

                {/* 咨询内容 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2" style={{ color: isDarkMode ? '#f1f5f9' : '#111827' }}>
                    {t('contact.form_message')}
                  </label>
                  <motion.textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    style={{
                      backgroundColor: isDarkMode ? '#334155' : '#ffffff',
                      borderColor: isDarkMode ? '#475569' : '#d1d5db',
                      color: isDarkMode ? '#f1f5f9' : '#111827'
                    }}
                    placeholder={t('contact.form_message_placeholder')}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t('contact.form_submit')}
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
