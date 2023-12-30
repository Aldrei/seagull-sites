import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.background.filter};
  padding: calc(${props => props.theme.spaces.xl}*2) calc(${props => props.theme.spaces.xl}/2);
`
