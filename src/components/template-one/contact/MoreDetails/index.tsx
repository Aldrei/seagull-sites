import React from 'react'
import { IMoreDetailsCommon } from './types'
import { InputCommon } from '../../../_common/Input'
import { Container } from './styles'

import { ButtonOne } from '@components/template-one'

export const MoreDetailsOne: React.FC<IMoreDetailsCommon> = (): React.ReactElement => {
  return (
    <Container>
      <InputCommon />
      <InputCommon />
      <InputCommon />
      <InputCommon />

      <ButtonOne text='Send' handleClick={() => {}} />
    </Container>
  )
}
