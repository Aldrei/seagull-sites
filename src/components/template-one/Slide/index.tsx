
import { ISlideCommon } from '@/components/_common/Slide/types'
import React from 'react'
import { SlideStyled } from './styles'

export const SlideOne: React.FC<ISlideCommon> = ({ banners }): React.ReactElement => {
  return <SlideStyled banners={banners} />
}
