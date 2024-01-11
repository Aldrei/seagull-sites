import { styled } from 'styled-components'

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.spaces.xs};
  background: ${props => props.theme.background.gallery};
`