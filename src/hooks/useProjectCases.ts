import { useState, useEffect } from 'react'
import { getApiUrl } from '@/config/api'

interface ProjectCase {
  id: string
  category: string
  title: string
  title_en: string
  description?: string
  description_en?: string
  image_url: string
  client_name?: string
  project_scale?: string
  completion_date?: string
  location?: string
  tags?: string[]
  order_index: string
  is_featured: string
  is_active: string
  created_at: string
  updated_at: string
}

interface UseProjectCasesReturn {
  projectCases: ProjectCase[]
  loading: boolean
  error: string | null
  getProjectsByCategory: (category: string) => ProjectCase[]
  getFeaturedProjects: () => ProjectCase[]
}

export function useProjectCases(): UseProjectCasesReturn {
  const [projectCases, setProjectCases] = useState<ProjectCase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjectCases = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // 项目案例数据的API接口地址
        const response = await fetch(getApiUrl('guanwang_get_web_project_cases'))
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()

        // 检查 API 响应是否为错误格式
        if (data && typeof data === 'object' && data.code && data.msg) {
          console.warn('Project Cases API error:', data.msg, 'Code:', data.code)
          setError(`API错误: ${data.msg} (${data.code})`)
          setProjectCases([])
          return
        }
        
        // 处理不同的返回格式
        if (Array.isArray(data) && Array.isArray(data[0])) {
          // 格式1: [[...]] - 二维数组
          const activeProjects = data[0]
            .filter((project: ProjectCase) => project.is_active === '1')
            .map((project: ProjectCase) => ({
              ...project,
              // 解析 JSON 格式的 tags 字段
              tags: typeof project.tags === 'string' ? JSON.parse(project.tags || '[]') : project.tags || []
            }))
            .sort((a: ProjectCase, b: ProjectCase) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setProjectCases(activeProjects)
        } else if (Array.isArray(data)) {
          // 格式2: [...] - 一维数组
          const activeProjects = data
            .filter((project: ProjectCase) => project.is_active === '1')
            .map((project: ProjectCase) => ({
              ...project,
              // 解析 JSON 格式的 tags 字段
              tags: typeof project.tags === 'string' ? JSON.parse(project.tags || '[]') : project.tags || []
            }))
            .sort((a: ProjectCase, b: ProjectCase) => 
              parseInt(a.order_index) - parseInt(b.order_index)
            )
          setProjectCases(activeProjects)
        } else {
          console.warn('Received empty object or unexpected object format, setting empty array')
          setProjectCases([])
        }
      } catch (err) {
        console.error('Error fetching project cases:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setProjectCases([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjectCases()
  }, [])

  // 根据分类获取项目
  const getProjectsByCategory = (category: string): ProjectCase[] => {
    return projectCases.filter(project => project.category === category)
  }

  // 获取精选项目
  const getFeaturedProjects = (): ProjectCase[] => {
    return projectCases.filter(project => project.is_featured === '1')
  }

  return { 
    projectCases, 
    loading, 
    error, 
    getProjectsByCategory,
    getFeaturedProjects
  }
}
