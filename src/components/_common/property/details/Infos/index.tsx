import React from 'react';
import { Footer, Header, Icon, InfoBlock, InfoSection, InfoText, Price, PropertyContainer, Title } from './styles';
import { IInfosDetailsCommon } from './types';

export const InfosDetailsCommon: React.FC<IInfosDetailsCommon> = ({property, ...props }) => {
  return (
    <PropertyContainer {...props}>
      <Header>
        <Title>{property.type}</Title>
        <Price>{property.price}</Price>
      </Header>
      <InfoSection>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.areaTotal} (total)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.frontArea} (frente)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.backArea} (fundos)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.leftArea} (esquerda)</InfoText>
        </InfoBlock>
        <InfoBlock>
          <Icon>📏</Icon>
          <InfoText>{property.rightArea} (direita)</InfoText>
        </InfoBlock>
      </InfoSection>
      <Footer>{property.location}</Footer>
    </PropertyContainer>
  );
};
