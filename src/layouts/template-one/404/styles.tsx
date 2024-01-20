import styled from "styled-components";

export const FilterTabsContainer = styled.div`
  margin: ${props => props.theme.spaces.xl} ${props => props.theme.spaces.xl};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(${props => props.theme.spaces.xl}*8) ${props => props.theme.spaces.xl};
  background: ${props => props.theme.color.eighth};
`

export const Message = styled.p`
  font-size: ${props => props.theme.spaces.xl};
  color: ${props => props.theme.color.third};
  margin: ${props => props.theme.spaces.sm} 0;
`

export const Link = styled.a`
  color: ${props => props.theme.color.first};
  text-decoration: underline;
`