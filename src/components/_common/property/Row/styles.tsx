import Link from 'next/link';

import { styled } from 'styled-components';

export const WrapperImage = styled(Link)`
  height: auto;
  position: relative;
`

export const PropertyContainer = styled.div`
  background: #EEEEEE;
  margin: 50px 0;
`;

export const PropertyWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 50px 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 50px 50px;
  }
`;

export const PropertyCol = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

export const PropertyInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 5px;
  font-size: 32px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Location = styled.p`
  margin-top: 12px;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
`;

export const Description = styled.p`
  margin: 22px 0;
  color: #000;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Button = styled(Link)`
  padding: 15px 35px;
  margin: 0 5px;
  color: #000;
  background: #fff;
  text-decoration: none;
  border: #fff;
  border-top: #fff;
  border-left: #fff;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
`;

export const PriceTag = styled.span`
  display: flex;
  height: 25px;
  padding: 7px 12px;
  flex-direction: row;
  align-items: center;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  text-shadow: black 1px;
  position: absolute;
  top: 0;
  z-index: 10;
  right: 0;
  background: #fff;
`;
