import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

export interface Certification {
  id: string
  stats_id: string
  category: string
  image_url: string
  image_caption: string
  image_caption_en: string
  grid_width?: string
  grid_height?: string
  order_index: string
  issue_date?: string
  expire_date?: string
  issuer?: string
  certificate_number?: string
  is_active: string
  created_at: string
  updated_at: string
}

interface UseCertificationsReturn {
  loading: boolean
  error: string | null
  getCertificationsByStatsId: (statsId: string) => Certification[]
}

export function useCertifications(): UseCertificationsReturn {
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 证书数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_certifications'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()

        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          // API 返回错误响应
          console.warn('Certifications API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setCertifications([])
          return
        }

        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activeCertifications = data[0]
            .filter((cert: Certification) => cert.is_active === '1')
            .sort((a: Certification, b: Certification) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setCertifications(activeCertifications)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activeCertifications = data
            .filter((cert: Certification) => cert.is_active === '1')
            .sort((a: Certification, b: Certification) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setCertifications(activeCertifications)
        } else if (typeof data === 'object' && data !== null) {
          // 格式3: {} - 空对象或其他对象格式
          console.warn('Received empty object or unexpected object format, setting empty array')
          setCertifications([])
        } else {
          console.error('Unexpected data format:', data)
          setCertifications([]) // 设置为空数组而不是抛出错误
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch certifications')
        console.error('Error fetching certifications:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  // 根据统计数据ID获取对应的所有证书
  const getCertificationsByStatsId = (statsId: string): Certification[] => {
    return certifications.filter(cert => cert.stats_id === statsId)
  }

  return {
    loading,
    error,
    getCertificationsByStatsId
  }
}
