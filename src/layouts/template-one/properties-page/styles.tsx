import { styled } from 'styled-components'

export const PageContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  }

  ${props => props.theme.media.IPAD_MINI} {
    flex-direction: row;
  }
`

export const FilterContainer = styled.div`
  border: 1px solid blue;

  ${props => props.theme.media.IPAD_MINI} {
    max-width: 375px;
    padding-right: 1rem;
  }
`

export const ResultContainer = styled.div`
  border: 1px solid white;
`
