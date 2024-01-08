import Link from 'next/link'
import { styled } from 'styled-components'

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spaces.xl};

  > div {
    margin-bottom: ${props => props.theme.spaces.xl};
  }
`

export const FilterTabsContainer = styled.div`
  margin: ${props => props.theme.spaces.xl} ${props => props.theme.spaces.xl};
`

export const ListAllPropertiesBtbContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.fontSize.xl};
  text-align: center;
`

export const AllPropertiesBtn = styled(Link)`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.color.third};
  padding: calc(${props => props.theme.fontSize.md})
    calc(${props => props.theme.fontSize.sm}*2);
  border-radius: 0;
  background: ${props => props.theme.background.button};
  border: 1px solid ${props => props.theme.color.third};
  border-top: 1px solid ${props => props.theme.color.fourth};
  border-left: 1px solid ${props => props.theme.color.fourth};
  box-shadow: none;
  width: 100%;
  color: ${props => props.theme.color.white};
  font: ${props => props.theme.spaces.md};
`