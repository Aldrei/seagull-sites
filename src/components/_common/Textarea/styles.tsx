import { styled } from 'styled-components'

export const Container = styled('div')`
  &.error {
    textarea {
      border: 1px solid red;
    }
  }
`

export const Textarea = styled('textarea')`
  width: 100%;
  height: auto;
  color: #000;
  background: none;
  padding: 8px 12px;
  border: 1px solid hsl(0, 0%, 80%);

  &::placeholder {
    color: gray;
  }
`

export const Label = styled('label')``
