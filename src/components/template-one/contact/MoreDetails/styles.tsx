import { styled } from 'styled-components'

export const Container = styled.div`
  width: 800px;
  max-width: 100%;
  padding: 0 calc(${props => props.theme.spaces.sm}*2);
  margin: 50px auto 0 auto;

  > div {
    margin: 5px 0;
    margin-bottom: ${props => props.theme.spaces.md};
  }
`
