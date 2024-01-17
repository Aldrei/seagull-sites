import { Container, Label, Textarea } from './styles'
import { ITextareaCommon } from './types'


export const TextareaCommon: React.FC<ITextareaCommon> = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  rows = 5,
  disabled,
  className
}) => {
  return (
    <Container className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Textarea rows={rows} name={name} placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />
    </Container>
  )
}
