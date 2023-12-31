import { getPhotoProperty } from '@/utils'
import React from 'react'
import {
  Button,
  Card,
  Content,
  Description,
  Image,
  Info,
  InfoItem,
  LocationIcon,
  Price,
  Subtitle,
  Title
} from './styles'
import { IBoxCommon } from './types'

export const BoxCommon: React.FC<IBoxCommon> = ({ property, orientation, ...props }) => {
  if (!property) return null

  return (
    <Card $orientation={orientation} {...props}>
      <Image
        src={String(getPhotoProperty(property, 'thumb'))}
        alt={property.title}
      />
      <Price className='price'>{`Cód ${property.code} - ${property.valor}`}</Price>
      <Content>
        <Title className='title'>{property.title}</Title>
        <Subtitle>
          <LocationIcon /> {property?.city?.data?.name}, {property?.neighborhood?.data?.nome}
        </Subtitle>
        <Description>{property.descGeral}</Description>
        <Info>
          <InfoItem>
            {property.areaTotal}<span>m²</span>
          </InfoItem>
          <InfoItem>
            {property.garagem} carro(s)
          </InfoItem>
          <InfoItem>
            {property.dormitorio} dorm(s)
          </InfoItem>
        </Info>
        <Button className='go-button'>Conhecer +</Button>
      </Content>
    </Card>
  )
}
