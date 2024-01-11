import { renderArea, renderLocation, renderParking, renderPrice, renderSunriseSideParking } from '@/utils'
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
          {renderSunriseSideParking(property) && <LocationTextWrapper>
            <span>Garagem</span>
            {renderSunriseSideParking(property)}
          </LocationTextWrapper>}
          {renderParking(property) && <LocationTextWrapper>
            <span>Garagem</span>
            {renderParking(property)}
          </LocationTextWrapper>}
          {renderArea(property, 'areaTotal') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaTotal')}
          </LocationTextWrapper>}
          {renderArea(property, 'areaConstruida') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaConstruida')}
          </LocationTextWrapper>}
          {renderArea(property, 'areaFrente') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaFrente')}
          </LocationTextWrapper>}
          {renderArea(property, 'areaFundos') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaFundos')}
          </LocationTextWrapper>}
          {renderArea(property, 'areaEsquerda') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaEsquerda')}
          </LocationTextWrapper>}
          {renderArea(property, 'areaDireita') && <LocationTextWrapper>
            <span>Total</span>
            {renderArea(property, 'areaDireita')}
          </LocationTextWrapper>}
        </InfoBlock>
      </InfoSection>
      <Footer>
        <LocationIcon /> {renderLocation(property)}
      </Footer>
    </PropertyContainer>
  )
}
