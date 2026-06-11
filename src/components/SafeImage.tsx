'use client'

import { CSSProperties, ImgHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { normalizeAssetUrl } from '@/config/api'

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> & {
  src: string
  width?: number | string
  height?: number | string
  fill?: boolean
  sizes?: string
  priority?: boolean
}

function createFallbackSrc(alt?: string): string {
  const label = alt || '图片暂不可用'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e2e8f0"/>
          <stop offset="1" stop-color="#bfdbfe"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" rx="28" fill="url(#bg)"/>
      <circle cx="620" cy="120" r="78" fill="#93c5fd" opacity="0.45"/>
      <path d="M130 360l120-135 95 105 70-82 160 112H130z" fill="#2563eb" opacity="0.18"/>
      <rect x="120" y="110" width="560" height="280" rx="24" fill="none" stroke="#2563eb" stroke-width="6" opacity="0.24"/>
      <text x="400" y="258" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#1e3a8a">${label}</text>
    </svg>`

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  priority,
  sizes,
  onError,
  ...props
}: SafeImageProps) {
  void priority
  void sizes

  const fallbackSrc = useMemo(() => createFallbackSrc(alt), [alt])
  const normalizedSrc = useMemo(() => normalizeAssetUrl(src || ''), [src])
  const imageRef = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc || fallbackSrc)

  useEffect(() => {
    setCurrentSrc(normalizedSrc || fallbackSrc)
  }, [fallbackSrc, normalizedSrc])

  useEffect(() => {
    const image = imageRef.current

    if (image?.complete && !image.naturalWidth && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    }
  }, [currentSrc, fallbackSrc])

  const imageStyle: CSSProperties = fill
    ? {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        ...style,
      }
    : style || {}

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      ref={imageRef}
      src={currentSrc}
      alt={alt || ''}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={imageStyle}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
        onError?.(event)
      }}
    />
  )
}