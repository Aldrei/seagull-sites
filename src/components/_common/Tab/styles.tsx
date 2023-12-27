import { styled } from 'styled-components'

export const TabsWrapper = styled.div`
  padding: 1rem;
`

export const TabList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0 0 1rem 0;
`

export const Tab = styled.li<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: none;
  background-color: ${props => (props.$isActive ? '#fff' : '#eee')};
  margin-bottom: -1px;
  font-size: 14px;
  color: ${props => props.theme.color.first};

  &:hover {
    background-color: #f9f9f9;
  }
`

export const Content = styled.div`
  padding: 1rem 1.5em;
  border: 1px solid #ccc;
`
