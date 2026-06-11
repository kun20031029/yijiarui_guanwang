import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface JobPosition {
  id: string
  title: string
  title_en: string
  department?: string
  department_en?: string
  location?: string
  location_en?: string
  requirements?: string
  requirements_en?: string
  responsibilities?: string
  responsibilities_en?: string
  salary_range?: string
  employment_type?: string
  experience_required?: string
  education_required?: string
  contact_email?: string
  contact_phone?: string
  order_index: string
  is_active: string
  created_at: string
  updated_at: string
}

interface UseJobPositionsReturn {
  jobPositions: JobPosition[]
  loading: boolean
  error: string | null
}

export function useJobPositions(): UseJobPositionsReturn {
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobPositions = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 岗位需求数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_job_positions'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()

        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Job Positions API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setJobPositions([])
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activePositions = data[0]
            .filter((position: JobPosition) => position.is_active === '1')
            .sort((a: JobPosition, b: JobPosition) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setJobPositions(activePositions)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activePositions = data
            .filter((position: JobPosition) => position.is_active === '1')
            .sort((a: JobPosition, b: JobPosition) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setJobPositions(activePositions)
        } else {
          console.warn('Received empty object or unexpected object format, setting empty array')
          setJobPositions([])
        }
      } catch (err) {
        console.error('Error fetching job positions:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setJobPositions([])
      } finally {
        setLoading(false)
      }
    }

    fetchJobPositions()
  }, [])

  return { 
    jobPositions, 
    loading, 
    error
  }
}
