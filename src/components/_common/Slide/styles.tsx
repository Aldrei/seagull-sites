import Link from 'next/link'
import { styled } from 'styled-components'

export const Container = styled.div``

export const Banner = styled.div`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% !important;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const Image = styled.img``

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-end;
  margin-bottom: calc(${props => props.theme.spaces.md}*2);
`

export const TitleInfo = styled.strong`
  background: ${props => props.theme.color.first};
  margin-bottom: ${props => props.theme.spaces.sm};
  padding: calc(${props => props.theme.spaces.md}*2);
  text-transform: uppercase;
  color: #fff;
  font-size: 2.1rem;
  text-shadow: 1px 1px 0 rgba(0,0,0,.9);
  opacity: .9;
  width: max-content;
`

export const DescInfo = styled.p`
  background: ${props => props.theme.color.first};
  padding: calc(${props => props.theme.spaces.md}*2);
  margin-bottom: ${props => props.theme.spaces.sm};
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0,0,0,.8);
  line-height: 23px;
  font-size: 16px;
  opacity: .9;
`

export const ButtonInfo = styled(Link)`
  width: 215px;
  text-align: center;
  background: ${props => props.theme.background.button};
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: ${props => props.theme.spaces.sm} 0;

  &:hover {
    background-color: #0056b3;
  }
`