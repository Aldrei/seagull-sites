import React from 'react'

import { Image, ImageContainer } from './styles'

import { GalleryContainer } from './styles'
import { IGalleryCommon } from './types'

export const GalleryCommon: React.FC<IGalleryCommon> = ({
  photos,
  className,
}): React.ReactElement | null => {
  if (!photos) return null

  return (
    <GalleryContainer className={className}>
      {photos.map((item, i) => (
        <ImageContainer key={i}>
          <Image src={item.thumb} alt={item.name} />
        </ImageContainer>
      ))}
    </GalleryContainer>
  )
}
