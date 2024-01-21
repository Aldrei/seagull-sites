import React from 'react'

import { InputCustom } from './styles'
import { IInputOne } from './types'

export const InputOne: React.FC<IInputOne> = (
  props: IInputOne,
): React.ReactElement => {
  return <InputCustom {...props} />
}
