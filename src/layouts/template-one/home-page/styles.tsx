import { styled } from 'styled-components'

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spaces.xl};
`

export const FilterTabsContainer = styled.div`
  margin: ${props => props.theme.spaces.xl} ${props => props.theme.spaces.xl};
`
