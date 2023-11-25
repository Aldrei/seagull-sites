import { TTheme } from '@/styles/themes/default/index.d'
import React, { createContext } from 'react'

// import { DefaultTheme, useTheme } from 'styled-components'

interface IProps {
  templateDefault: TTheme
}

const useThemeCostumer = ({ templateDefault }: IProps) => {
  // const templateDefault = useTheme()

  /**
   * TODO: Make the costumer client right below.
  */
 // Request...

 // Set colors right below...
 templateDefault.color.first = 'blue'

 const themeCostumer = templateDefault as TTheme

 return { themeCostumer }
}

export default useThemeCostumer

export const themeCostumerProvider = createContext(null)