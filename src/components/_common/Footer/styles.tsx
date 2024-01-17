import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #efefef;
  color: #333;
  margin-top: 50px;

  @media (max-width: 767px) {
    /* flex-direction: column; */
  }
`

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
  font-size: calc(${props => props.theme.spaces.xs}*3);
  margin-bottom: 0.5em;
  text-shadow: ${props => props.theme.textShadow.first};
  color: ${props => props.theme.color.white};

  svg {
    margin-bottom: ${props => props.theme.spaces.xs};
  }

  ${props => props.theme.media.IPAD_MINI} {
    align-items: center;
  }
`

export const Text = styled.p`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  text-shadow: ${props => props.theme.textShadow.first};
  color: ${props => props.theme.color.white};
  font-size: calc(${props => props.theme.spaces.xl} / 1.75);

  svg {
    margin-right: ${props => props.theme.spaces.xs};
  }
`

export const Link = styled.a`
  height: 20px;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  text-shadow: ${props => props.theme.textShadow.first};
  color: ${props => props.theme.color.white};
  font-size: calc(${props => props.theme.spaces.xl} / 1.75);

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: ${props => props.theme.spaces.xs};
  }
`

export const Image = styled.img`
  max-width: 125px;
  height: auto;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  justify-content: space-between;

  > div {
    margin: ${props => props.theme.spaces.md};
  }

  ${props => props.theme.media.IPAD_MINI} {
    flex-direction: row;
  }
`

export const LogoContainer = styled.div`
  margin: ${props => props.theme.spaces.md} auto !important;
`

export const CopyContainer = styled.div`
  margin-top: calc(${props => props.theme.spaces.sm});
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Adornment = styled.img`
  max-width: calc(${props => props.theme.spaces.xl}*5);
  margin-bottom: ${props => props.theme.spaces.xs};
`

export const CopyText = styled.p`
  color: ${props => props.theme.textOpacity.first};
  font-size: ${props => props.theme.spaces.sm};
  margin-top: ${props => props.theme.spaces.md};
`
