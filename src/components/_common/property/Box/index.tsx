import { getPhotoProperty } from '@/utils'
import React from 'react'
import {
  Button,
  Card,
  Content,
  Description,
  Icon,
  Image,
  Info,
  InfoItem,
  Price,
  Subtitle,
  Title,
} from './styles'
import { IBoxCommon } from './types'

export const BoxCommon: React.FC<IBoxCommon> = ({ property, ...props }) => {
  if (!property) return null

  return (
    <Card {...props}>
      <Image
        src={String(getPhotoProperty(property, 'thumb'))}
        alt={property.title}
      />
      <Price>{`Cód ${property.code} - ${property.valor}`}</Price>
      <Content>
        <Title>{property.title}</Title>
        <Subtitle>{property.neighborhood?.data.nome}</Subtitle>
        <Description>{property.descGeral}</Description>
        <Info>
          <InfoItem>
            <Icon>🏠</Icon>
            {property.areaConstruida}
          </InfoItem>
          <InfoItem>
            <Icon>🚗</Icon>
            {property.garagem} carro(s)
          </InfoItem>
          <InfoItem>
            <Icon>🛏️</Icon>
            {property.dormitorio} dorm(s)
          </InfoItem>
        </Info>
        <Button>Conhecer +</Button>
      </Content>
    </Card>
  )
}
