import { styled } from 'styled-components'

import { HeaderCommon } from "@/components/_common"

export const HeaderStyled = styled(HeaderCommon)`
    border: 5px solid white;

    h1 {
      color: ${(props) => props.theme.color.first};
    }

`
