'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useAppearance } from '@/hooks/use-appearance'
// import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

interface Props extends Omit<ImageProps, 'src'> {
  darkSrc: string
  lightSrc: string
}

const ThemeBasedImage = (props: Props) => {
  const { appearance } = useAppearance()

  const [imgUrl, setImgUrl] = useState<string>('')
  const { darkSrc, lightSrc, width, height, alt, ...leftProps } = props

  useEffect(() => {
    setImgUrl(appearance === 'light' ? lightSrc : darkSrc)
  }, [appearance, lightSrc, darkSrc])

  return (
    <>
      {imgUrl ? (
        <img alt={alt} src={imgUrl} width={width} height={height} {...leftProps} />
      ) : (
        <Skeleton className="bg-card rounded-xl" style={{ width: `${width}px`, height: `${height}px` }} />
      )}
    </>
  )
}

export default ThemeBasedImage
