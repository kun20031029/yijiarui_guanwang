import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface Project {
  id: string
  title: string
  title_en: string
  category: string
  order_index: string
  is_active: string
}

interface UseProjectsReturn {
  projects: Project[]
  loading: boolean
  error: string | null
  getProjectsByCategory: (category: string) => Project[]
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 项目数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_projects'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()



        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Projects API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setProjects([])
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activeProjects = data[0]
            .filter((project: Project) => project.is_active === '1')
            .sort((a: Project, b: Project) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setProjects(activeProjects)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activeProjects = data
            .filter((project: Project) => project.is_active === '1')
            .sort((a: Project, b: Project) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setProjects(activeProjects)
        } else {
          console.warn('Received empty object or unexpected object format, setting empty array')
          setProjects([])
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // 根据分类获取项目
  const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(project => project.category === category)
  }

  return { 
    projects, 
    loading, 
    error, 
    getProjectsByCategory
  }
}
