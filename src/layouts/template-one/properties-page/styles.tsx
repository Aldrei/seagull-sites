import { styled } from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spaces.md};
  background: ${props => props.theme.color.white};

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
  ${props => props.theme.media.IPAD_MINI} {
    max-width: 375px;
    padding-right: 1rem;
  }
`

export const ResultContainer = styled.div``
