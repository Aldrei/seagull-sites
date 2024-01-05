import { PropsWithChildren, createContext } from 'react'
import { IUseProperties } from './types'

export const useProperties = (): IUseProperties => {
  // Build URL after that make request from client...

  return { properties: [] }
}

export const PropertiesPage = createContext<IUseProperties>(
  {} as IUseProperties,
)

export const PropertiesProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const initialData = useProperties()

  return (
    <PropertiesPage.Provider value={{ ...initialData }}>
      {children}
    </PropertiesPage.Provider>
  )
}
