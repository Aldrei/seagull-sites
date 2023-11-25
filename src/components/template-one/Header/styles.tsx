import styled from 'styled-components'

import Header from "@/components/_common/Header"

export const HeaderStyled = styled(Header)`
    border: 5px solid white;

    h1 {
      color: ${(props) => props.theme.color.first};
    }

`
