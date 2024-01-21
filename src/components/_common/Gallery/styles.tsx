import { styled } from 'styled-components'

export const GalleryContainer = styled.div`
  height: 200px;
  display: flex;
  overflow-x: auto;
`

export const ImageContainer = styled.div`
  margin: calc(${props => props.theme.spaces.xs} / 2);
  border: 1px solid ${props => props.theme.color.seventh};
`

export const Image = styled.img`
  width: auto;
  max-width: none;
`
