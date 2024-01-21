export interface IInputCommon
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  value?: any
  handChange?: () => void
  label?: string
  placeholder?: string
}
