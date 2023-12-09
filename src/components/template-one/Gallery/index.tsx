import React from 'react'
import { GalleryStyled } from './styles'
import { IGalleryProps } from '@/components/_common/Gallery/types'

export const GalleryOne = ({ photos }: IGalleryProps) => {
  if (!photos) return null

  return <GalleryStyled photos={photos} />
}
