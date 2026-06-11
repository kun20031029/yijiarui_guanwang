export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.yijiarui.cn/api/yijiarui'
).replace(/\/$/, '')

export function getApiUrl(path: string): string {
  return `${API_BASE_URL}/${path.replace(/^\//, '')}`
}