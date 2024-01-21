import { styled } from 'styled-components'

import { InputCommon } from '../Input'

export const SearchInput = styled(InputCommon)`
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.background.input};
  border: 1px solid ${props => props.theme.color.seventh};

  input {
    padding: ${props => props.theme.spaces.lg} ${props => props.theme.spaces.lg};
    color: ${props => props.theme.color.white};
  }
`

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`

export const ListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  > p {
    padding: ${props => props.theme.spaces.sm};
    color: ${props => props.theme.color.third};
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
`

export const CardImage = styled.img`
  width: 175px;
  height: auto;
`

export const CardContent = styled.div`
  padding: 16px;
  flex-grow: 1;
`

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.spaces.lg};
  color: #333;
  margin: 0 0 8px 0;
`

export const CardCode = styled.p`
  font-size: ${props => props.theme.spaces.sm};
  color: #666;
`

export const CardDescription = styled.p`
  font-size: ${props => props.theme.spaces.md};
  color: #666;
  margin: 0;
  margin-bottom: ${props => props.theme.spaces.sm};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: calc(${props => props.theme.spaces.xl}*16);
`

export const DetailsButton = styled.button`
  padding: 10px 16px;
  background: ${props => props.theme.background.button};
  border: none;
  font-size: ${props => props.theme.spaces.sm};
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${props => props.theme.color.white};

  &:hover {
    background-color: #bbb;
  }
`
