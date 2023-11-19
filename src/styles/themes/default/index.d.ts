import { templateTwo } from './index'

export type TTheme = typeof templateTwo

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
