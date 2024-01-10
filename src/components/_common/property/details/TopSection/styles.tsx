import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(${props => props.theme.spaces.md}*3);
  padding-top: calc(${props => props.theme.spaces.md}*4);
`

export const TitleContainer = styled.div``

export const Title = styled.h1`
  color: ${props => props.theme.color.third};
  font-size: ${props => props.theme.spaces.xl};
  font-weight: 800;
`

export const DescriptionContainer = styled.div`
  margin-top: ${props => props.theme.spaces.sm};;
`

export const Description = styled.p`
  color: ${props => props.theme.color.third};
`
