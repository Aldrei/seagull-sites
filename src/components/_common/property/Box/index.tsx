import React from 'react';
import { Button, Card, Content, Description, Icon, Info, InfoItem, Price, Subtitle, Title, Image } from './styles';
import { IBoxCommonProps } from './types';

export const BoxCommon: React.FC<IBoxCommonProps> = ({ property }) => {
  if (!property) return null

  return (
    <Card>
      <Image src={property.imageUrl} alt={property.title} />
      <Price>{`Cód ${property.code} - ${property.price}`}</Price>
      <Content>
        <Title>{property.title}</Title>
        <Subtitle>{property.location}</Subtitle>
        <Description>{property.description}</Description>
        <Info>
          <InfoItem>
            <Icon>🏠</Icon>{property.area}
          </InfoItem>
          <InfoItem>
            <Icon>🚗</Icon>{property.cars} carro(s)
          </InfoItem>
          <InfoItem>
            <Icon>🛏️</Icon>{property.bedrooms} dorm(s)
          </InfoItem>
        </Info>
        <Button>Conhecer +</Button>
      </Content>
    </Card>
  );
};
