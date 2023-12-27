import React from 'react'

import { IPropertyRowCommon } from '@/components/_common/property/Row/types'
import { PropertyRowStyled } from './styles'

export const PropertyRowOne: React.FC<IPropertyRowCommon> = ({
  title,
  location,
  description,
  imageUrl,
  price,
}) => {
  return (
    <PropertyRowStyled
      title={title}
      location={location}
      description={description}
      imageUrl={imageUrl}
      price={price}
    />
  )
}
