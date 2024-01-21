import { ITextareaCommon } from '@/components/_common/Textarea/types'
import { TextareaStyled } from './styles'

export const TextareaOne: React.FC<ITextareaCommon> = props => {
  return <TextareaStyled {...props} />
}
