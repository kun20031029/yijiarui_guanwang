import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface Partner {
  id: string
  name_zh: string
  name_en: string
  logo_url: string
  website?: string
  order_index: string
  is_active: string
  created_at: string
  updated_at: string
}

interface UsePartnersReturn {
  partners: Partner[]
  loading: boolean
  error: string | null
}

export function usePartners(): UsePartnersReturn {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 合作伙伴数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_partners'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()

        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Partners API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setPartners([])
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activePartners = data[0]
            .filter((partner: Partner) => partner.is_active === '1')
            .sort((a: Partner, b: Partner) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setPartners(activePartners)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activePartners = data
            .filter((partner: Partner) => partner.is_active === '1')
            .sort((a: Partner, b: Partner) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setPartners(activePartners)
        } else {
          console.warn('Received empty object or unexpected object format, setting empty array')
          setPartners([])
        }
      } catch (err) {
        console.error('Error fetching partners:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setPartners([])
      } finally {
        setLoading(false)
      }
    }

    fetchPartners()
  }, [])

  return { 
    partners, 
    loading, 
    error
  }
}
