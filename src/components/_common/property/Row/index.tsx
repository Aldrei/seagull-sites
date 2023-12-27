import React from 'react'

import { LiaLocationArrowSolid } from 'react-icons/lia'

import {
  WrapperImage,
  Actions,
  Description,
  PriceTag,
  PropertyCol,
  PropertyContainer,
  PropertyInfos,
  PropertyWrapper,
  Title,
  Location,
  Image,
  Button,
} from './styles'
import { IPropertyRowCommon } from './types'

export const PropertyRowCommon: React.FC<IPropertyRowCommon> = ({
  title,
  description,
  imageUrl,
  price,
  location,
  ...props
}): React.ReactElement => {
  return (
    <PropertyContainer {...props}>
      <PropertyWrapper>
        <PropertyCol>
          <PropertyInfos>
            <Title>{title}</Title>
            <Location>
              <LiaLocationArrowSolid /> {location}
            </Location>
            <Description>{description}</Description>
            <Actions>
              <Button href="/details" title={`Ver detalhes do imóvel ${title}`}>
                Mais detalhes
              </Button>
            </Actions>
          </PropertyInfos>
        </PropertyCol>
        <PropertyCol>
          <WrapperImage
            href="/details"
            title={`Ver detalhes do imóvel ${title}`}
          >
            <PriceTag>{price}</PriceTag>
            <Image
              width={400}
              height={200}
              style={{ maxWidth: '400px', height: 'auto' }}
              src={imageUrl}
              alt={`Imóvel ${title} em destaque`}
            />
          </WrapperImage>
        </PropertyCol>
      </PropertyWrapper>
    </PropertyContainer>
  )
}
