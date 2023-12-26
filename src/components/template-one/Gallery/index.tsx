import React from 'react'
import { GalleryStyled } from './styles'
import { IGalleryCommon } from '@/components/_common/Gallery/types'

export const GalleryOne = ({ photos }: IGalleryCommon) => {
  if (!photos) return null

  return <GalleryStyled photos={photos} />
}
