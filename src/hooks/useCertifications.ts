import { useState, useEffect } from 'react'
import { getApiUrl, normalizeAssetUrl } from '@/config/api'

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

const localCertificationImages: Array<[string, string]> = [
  ['系统截图2', '/images/about/zizhi/系统截图2.png'],
  ['系统截图1', '/images/about/zizhi/系统截图1.png'],
  ['中国设备监理甲级资质', '/images/about/zizhi/中国设备监理甲级资质.png'],
  ['营业执照', '/images/about/zizhi/营业执照.png'],
  ['ISO9001', '/images/about/zizhi/ISO9001质量管理认证证书.png'],
  ['IS014001', '/images/about/zizhi/IS014001环境管理体系认证证书.png'],
  ['ISO14001', '/images/about/zizhi/IS014001环境管理体系认证证书.png'],
  ['ISO18001', '/images/about/zizhi/ISO18001职业健康安全管理体系认证证书.png'],
]

function normalizeCertification(cert: Certification): Certification {
  const sourceText = `${cert.image_caption} ${cert.image_caption_en} ${cert.image_url}`
  const matchedLocalImage = localCertificationImages.find(([keyword]) => sourceText.includes(keyword))

  return {
    ...cert,
    image_url: matchedLocalImage?.[1] || normalizeAssetUrl(cert.image_url),
  }
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
          setCertifications(activeCertifications.map(normalizeCertification))
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activeCertifications = data
            .filter((cert: Certification) => cert.is_active === '1')
            .sort((a: Certification, b: Certification) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setCertifications(activeCertifications.map(normalizeCertification))
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
