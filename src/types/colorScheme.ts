// 颜色主题枚举
export enum ColorScheme {
  blue = '蓝色',
  green = '绿色',
  purple = '紫色',
  orange = '橙色',
  red = '红色',
  yellow = '黄色',
  pink = '粉色',
  indigo = '靛蓝',
  teal = '青色',
  gray = '灰色'
}

// 颜色主题配置
export const colorSchemeConfig = {
  blue: {
    name: '蓝色',
    color: '#2563eb',
    bgColor: '#dbeafe',
    darkBgColor: '#1e3a8a'
  },
  green: {
    name: '绿色',
    color: '#16a34a',
    bgColor: '#dcfce7',
    darkBgColor: '#14532d'
  },
  purple: {
    name: '紫色',
    color: '#7c3aed',
    bgColor: '#e9d5ff',
    darkBgColor: '#581c87'
  },
  orange: {
    name: '橙色',
    color: '#ea580c',
    bgColor: '#fed7aa',
    darkBgColor: '#9a3412'
  },
  red: {
    name: '红色',
    color: '#dc2626',
    bgColor: '#fecaca',
    darkBgColor: '#991b1b'
  },
  yellow: {
    name: '黄色',
    color: '#ca8a04',
    bgColor: '#fef3c7',
    darkBgColor: '#713f12'
  },
  pink: {
    name: '粉色',
    color: '#db2777',
    bgColor: '#fce7f3',
    darkBgColor: '#831843'
  },
  indigo: {
    name: '靛蓝',
    color: '#4f46e5',
    bgColor: '#e0e7ff',
    darkBgColor: '#312e81'
  },
  teal: {
    name: '青色',
    color: '#0d9488',
    bgColor: '#ccfbf1',
    darkBgColor: '#134e4a'
  },
  gray: {
    name: '灰色',
    color: '#4b5563',
    bgColor: '#f3f4f6',
    darkBgColor: '#374151'
  }
} as const

// 获取颜色值的辅助函数
export function getColorValue(scheme: string): string {
  return colorSchemeConfig[scheme as keyof typeof colorSchemeConfig]?.color || '#2563eb'
}

// 获取颜色名称的辅助函数
export function getColorName(scheme: string): string {
  return colorSchemeConfig[scheme as keyof typeof colorSchemeConfig]?.name || '蓝色'
}

// 获取所有可用的颜色选项
export function getColorOptions() {
  return Object.entries(colorSchemeConfig).map(([key, value]) => ({
    value: key,
    label: value.name,
    color: value.color
  }))
}
