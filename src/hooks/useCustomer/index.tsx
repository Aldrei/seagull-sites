import React, { PropsWithChildren, createContext } from 'react'

/**
 * Hook
*/
interface ICustomer {
  domain?: string
  name?: string
  abbr?: string
  limitPhotosShow?: number
  recaptcha?: {
    api_public_key?: string,
  }
  social?: {
    instagram?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    facebook?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    linkedin?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    whatsapp?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    email_1?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    email_2?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    phone_1?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
    phone_2?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    },
  }
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
    domain: process.env.NEXT_PUBLIC_CUSTOMER_DOMAIN,
    name: process.env.NEXT_PUBLIC_CUSTOMER_NAME,
    abbr: process.env.NEXT_PUBLIC_CUSTOMER_ABBR,
    limitPhotosShow: 4,
    recaptcha: {
      api_public_key: process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA,
    },
    social: {
      instagram: {
        title: process.env.NEXT_PUBLIC_INSTAGRAM_TITLE,
        desc: process.env.NEXT_PUBLIC_INSTAGRAM_DESC,
        link: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
        link_device: process.env.NEXT_PUBLIC_INSTAGRAM_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_INSTAGRAM_ALT,

      },
      facebook: {
        title: process.env.NEXT_PUBLIC_FACEBOOK_TITLE,
        desc: process.env.NEXT_PUBLIC_FACEBOOK_DESC,
        link: process.env.NEXT_PUBLIC_FACEBOOK_LINK,
        link_device: process.env.NEXT_PUBLIC_FACEBOOK_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_FACEBOOK_ALT,
      },
      linkedin: {
        title: process.env.NEXT_PUBLIC_LINKEDIN_TITLE,
        desc: process.env.NEXT_PUBLIC_LINKEDIN_DESC,
        link: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
        link_device: process.env.NEXT_PUBLIC_LINKEDIN_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_LINKEDIN_ALT,
      },
      whatsapp: {
        title: process.env.NEXT_PUBLIC_WHATSAPP_TITLE,
        desc: process.env.NEXT_PUBLIC_WHATSAPP_DESC,
        link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
        link_device: process.env.NEXT_PUBLIC_WHATSAPP_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_WHATSAPP_ALT,
      },
      phone_1: {
        title: process.env.NEXT_PUBLIC_PHONE_1_TITLE,
        desc: process.env.NEXT_PUBLIC_PHONE_1_DESC,
        link: process.env.NEXT_PUBLIC_PHONE_1_LINK,
        link_device: process.env.NEXT_PUBLIC_PHONE_1_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_PHONE_1_ALT,
      },
      email_1: {
        title: process.env.NEXT_PUBLIC_EMAIL_1_TITLE,
        desc: process.env.NEXT_PUBLIC_EMAIL_1_DESC,
        link: process.env.NEXT_PUBLIC_EMAIL_1_LINK,
        link_device: process.env.NEXT_PUBLIC_EMAIL_1_DEVICE_LINK,
        alt: process.env.NEXT_PUBLIC_EMAIL_1_ALT,
      },
    }
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