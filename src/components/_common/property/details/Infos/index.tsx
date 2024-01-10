import { renderLocation, renderPrice } from '@/utils'
import React from 'react'
import {
  Footer,
  Header,
  Icon,
  InfoBlock,
  InfoSection,
  InfoText,
  LocationIcon,
  Price,
  PropertyContainer,
  Title,
} from './styles'
import { IInfosDetailsCommon } from './types'

export const InfosDetailsCommon: React.FC<IInfosDetailsCommon> = ({
  property,
  ...props
}) => {
  return (
    <PropertyContainer {...props}>
      <Header>
        <Title>{property.tipo}</Title>
        <Price>{renderPrice(property)}</Price>
      </Header>
      <InfoSection>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaTotal} (total)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaEsquerda} (frente)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaFundos} (fundos)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaFrente} (esquerda)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaDireita} (direita)</InfoText>
        </InfoBlock>
      </InfoSection>
      <Footer>
        <LocationIcon /> {renderLocation(property)}
      </Footer>
    </PropertyContainer>
  )
}
