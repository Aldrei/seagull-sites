import React, { PropsWithChildren, createContext } from 'react'

/**
 * Hook
*/
interface ICustomer {
  domain: 'mydomain.com.br'
}

const useCustomer = (): ICustomer => {
  /**
   * TODO:
   * 
   *  - Make the request to get data customer.
   *    But for now return mock: .
   * 
  */
  const customerDataMock: ICustomer = {
    domain: 'mydomain.com.br'
  }

  return customerDataMock
}

export default useCustomer

/**
 * Context
*/
export const CustomerContext = createContext<ICustomer | null>(null)

/**
 * Provider
*/
interface ICustomerProvider {
  initialValue?: ICustomer
}

export const CustomerProvider = ({ children }: PropsWithChildren<ICustomerProvider>): React.ReactNode => {
  const costumerData = useCustomer()
  console.log('DEBUG CustomerProvider > costumerData:', costumerData);

  // TODO: Return a loading component here.
  // return <h1>loading...</h1>

  return (
    <CustomerContext.Provider value={costumerData}>
      {children}
    </CustomerContext.Provider>
  )
}