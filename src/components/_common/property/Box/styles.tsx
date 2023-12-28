import { LiaLocationArrowSolid } from 'react-icons/lia'
import { styled } from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 8px ${props => props.theme.color.thirdRgba};
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const Content = styled.div``

export const Price = styled.div`
  display: flex;
  padding: ${props => props.theme.spaces.sm} ${props => props.theme.spaces.sm};
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.background.label_price};
  text-align: right;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.sm};
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.xl};
  color: #333;
  border-bottom: calc(${props => props.theme.spaces.xs}/2) solid ${props => props.theme.color.second};
  padding: ${props => props.theme.spaces.md};
  margin: ${props => props.theme.spaces.md};
  margin-bottom: calc(${props => props.theme.spaces.md}*2);
`

export const Subtitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666;
  margin: ${props => props.theme.spaces.md};
  margin-bottom: ${props => props.theme.spaces.md};
`

export const Description = styled.p`
  max-height: 205px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  white-space: pre-wrap;
  overflow: hidden;
  font-size: ${props => props.theme.spaces.md};
  color: #666;
  line-height: calc(${props => props.theme.spaces.xs}*3);
  margin: ${props => props.theme.spaces.md};
  margin-bottom: ${props => props.theme.spaces.sm};
`

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-weight: bold;
  font-size: calc(${props => props.theme.spaces.xs}*2);
  padding: ${props => props.theme.spaces.sm} ${props => props.theme.spaces.xs};
  border-top: 2px solid ${props => props.theme.color.first};
  margin-right: ${props => props.theme.spaces.xs};
`

export const Icon = styled.span`
  margin-right: 8px;
`

export const Button = styled.button`
  width: 100%;
  text-align: center;
  background: ${props => props.theme.background.button};
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: ${props => props.theme.spaces.sm} 0;

  &:hover {
    background-color: #0056b3;
  }
`

export const LocationIcon = styled(LiaLocationArrowSolid)`
  transform: rotate(45deg);
  font-size: ${props => props.theme.spaces.xl};
  margin-right: calc(${props => props.theme.spaces.xs}/2);
`