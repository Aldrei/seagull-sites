import { ICONS_ONE } from '@/icons/template-one/icons'
import { styled } from 'styled-components'

export const PropertyContainer = styled.div`
  border: 1px solid ${props => props.theme.color.eighth};
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`

export const Header = styled.div`
  background: ${props => props.theme.background.infosCard.header};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.seventh};

  ${props => props.theme.media.IPAD_MINI} {
    flex-direction: row;
    padding: 0 calc(${props => props.theme.spaces.md}*10);
  }
`

export const Title = styled.h2`
  font-size: ${props => props.theme.spaces.xl};
  margin: 0;
  color: #000;
  margin-top: ${props => props.theme.spaces.lg};
  margin-bottom: ${props => props.theme.spaces.lg};
`

export const Price = styled.span`
  font-weight: bold;
  color: #333;
  color: #000;
`

export const InfoSection = styled.section`
  padding: ${props => props.theme.spaces.md};
  background: ${props => props.theme.background.infosCard.header};;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: ${props => props.theme.spaces.md};
  }
`

export const Icon = styled(ICONS_ONE.RulerIcon)`
  font-size: ${props => props.theme.spaces.md};
  margin-right: calc(${props => props.theme.spaces.xs}/2);
  color: #000;
`

export const InfoText = styled.span`
  font-size: 0.875rem;
  color: #000;
`

export const Footer = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background.infosCard.footer};;
  padding: 1rem;
  margin: 0;
  text-align: center;
  color: #000;
`

export const LocationIcon = styled(ICONS_ONE.LocationIcon)`
  transform: rotate(45deg);
  font-size: ${props => props.theme.spaces.xl};
`

export const LocationTextWrapper = styled('div')`
  color: black;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;

  > span {
    font-size: ${props => props.theme.spaces.xs};
  }
`

export const Code = styled('span')`
  color: ${props => props.theme.color.third};
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.color.third};
  padding: ${props => props.theme.spaces.sm};
`