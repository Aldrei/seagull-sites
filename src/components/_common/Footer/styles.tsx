import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #EFEFEF;
  color: #333;
  margin-top: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  margin: 5px 0;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  max-width: 175px;
  height: auto;
`
