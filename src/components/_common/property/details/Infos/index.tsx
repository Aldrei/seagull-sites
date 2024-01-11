import { renderLocation, renderPrice, shouldRenderArea, shouldRenderParking } from '@/utils'
import React from 'react'
import {
  Footer,
  Header,
  InfoBlock,
  InfoSection,
  LocationIcon,
  LocationTextWrapper,
  Price,
  PropertyContainer,
  Title
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
          {shouldRenderParking(property) && <LocationTextWrapper>
            <span>Garagem</span>
            {shouldRenderParking(property)}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaTotal') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaTotal')}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaConstruida') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaConstruida')}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaFrente') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaFrente')}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaFundos') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaFundos')}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaEsquerda') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaEsquerda')}
          </LocationTextWrapper>}
          {shouldRenderArea(property, 'areaDireita') && <LocationTextWrapper>
            <span>Total</span>
            {shouldRenderArea(property, 'areaDireita')}
          </LocationTextWrapper>}
        </InfoBlock>
      </InfoSection>
      <Footer>
        <LocationIcon /> {renderLocation(property)}
      </Footer>
    </PropertyContainer>
  )
}
