import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface WebContent {
  id: string
  contact_phone: string
  contact_email: string
  contact_address_zh: string
  contact_address_en: string
  contact_wechat_img_url: string
  careers_general_email: string
  careers_contact_phone: string
  created_at: string
  updated_at: string
}

interface UseWebContentReturn {
  webContent: WebContent | null
  loading: boolean
  error: string | null
}

function normalizeWebContent(content: WebContent): WebContent {
  return {
    ...content,
    contact_wechat_img_url: '/images/qr-code/wechat-qr.png',
  }
}

export function useWebContent(): UseWebContentReturn {
  const [webContent, setWebContent] = useState<WebContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWebContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 网站内容配置的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_content'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()

        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Web Content API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setWebContent(null)
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0]) && data[0].length > 0) {
          // 格式1: [[...]] - 二维数组，取第一条记录
          setWebContent(normalizeWebContent(data[0][0]))
        } else if (Array.isArray(data) && data.length > 0) {
          // 格式2: [...] - 一维数组，取第一条记录
          setWebContent(normalizeWebContent(data[0]))
        } else if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
          // 格式3: {} - 直接是对象
          setWebContent(normalizeWebContent(data))
        } else {
          console.warn('Received empty or unexpected data format, setting null')
          setWebContent(null)
        }
      } catch (err) {
        console.error('Error fetching web content:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setWebContent(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWebContent()
  }, [])

  return { 
    webContent, 
    loading, 
    error
  }
}
