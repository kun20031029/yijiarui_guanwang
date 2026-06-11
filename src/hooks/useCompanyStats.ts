import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface CompanyStats {
  id: string
  icon: string
  title: string
  title_en: string
  detail_title?: string
  detail_title_en?: string
  number: string
  description: string
  description_en: string
  detail_description?: string
  detail_description_en?: string
  color_scheme: string
  order_index: string
  unit?: string
  unit_en?: string
  is_active: string
  created_at: string
  updated_at: string
}

interface UseCompanyStatsReturn {
  stats: CompanyStats[]
  loading: boolean
  error: string | null
}

export function useCompanyStats(): UseCompanyStatsReturn {
  const [stats, setStats] = useState<CompanyStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(getApiUrl('guanwang_get_web_company_stats'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        // 数据在二维数组的第一个元素中
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 过滤激活状态的数据，然后按 order_index 排序
          const activeStats = data[0]
            .filter((stat: CompanyStats) => stat.is_active === '1')
            .sort((a: CompanyStats, b: CompanyStats) =>
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setStats(activeStats)
        } else {
          throw new Error('Invalid data format')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats')
        console.error('Error fetching company stats:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading, error }
}
