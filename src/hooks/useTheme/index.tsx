import { TTheme } from '@/styles/themes/default/index.d'
import React, { PropsWithChildren, useContext } from 'react'

import { templateDefault } from '@/styles/themes/default'
import { CustomerContext } from '@/hooks/useCustomer'

import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

/**
 * Hook
*/
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

/**
 * Provider
*/
interface IThemeProvider {}

export const ThemeProvider = ({ children }: PropsWithChildren<IThemeProvider>) => {
  // TODO: Make request to get data customer
  const customerData = useContext(CustomerContext)
  console.log('DEBUG customerData:', customerData);
  
  useThemeCostumer({ templateDefault })

  return (
    <ThemeProviderStyled theme={templateDefault}>{children}</ThemeProviderStyled>
  )
}
