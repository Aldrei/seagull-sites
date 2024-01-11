import { styled } from 'styled-components'

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.spaces.xs};
  background: ${props => props.theme.background.gallery};
  border-top: 1px solid ${props => props.theme.color.seventh};
`