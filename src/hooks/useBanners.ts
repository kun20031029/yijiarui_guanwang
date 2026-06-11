import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface Banner {
  id: string
  order_index: string
  image_url: string
  is_active: string
}

interface UseBannersReturn {
  banners: Banner[]
  loading: boolean
  error: string | null
}

export function useBanners(): UseBannersReturn {
  const [banners, setBanners] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Banner数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_banners'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()



        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Banners API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setBanners([])
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activeBanners = data[0]
            .filter((banner: Banner) => banner.is_active === '1')
            .sort((a: Banner, b: Banner) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setBanners(activeBanners)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activeBanners = data
            .filter((banner: Banner) => banner.is_active === '1')
            .sort((a: Banner, b: Banner) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setBanners(activeBanners)
        } else {
          console.warn('Received empty object or unexpected object format, setting empty array')
          setBanners([])
        }
      } catch (err) {
        console.error('Error fetching banners:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setBanners([])
      } finally {
        setLoading(false)
      }
    }

    fetchBanners()
  }, [])

  return { banners, loading, error }
}
