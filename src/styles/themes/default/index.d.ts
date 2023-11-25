import { templateDefault } from './index'

export type TTheme = typeof templateDefault

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
