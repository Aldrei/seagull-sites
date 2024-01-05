import React, { PropsWithChildren, createContext } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IContactData, ICustomer, ICustomerData, IMenuData } from './types'

const useCustomer = (): ICustomer => {
  /**
   * TODO:
   *
   *  - Make the request to get data customer.
   *    But for now return by .env: .
   *
   */
  const customerData: ICustomerData = {
    domain: process.env.NEXT_PUBLIC_CUSTOMER_DOMAIN,
    name: process.env.NEXT_PUBLIC_CUSTOMER_NAME,
    abbr: process.env.NEXT_PUBLIC_CUSTOMER_ABBR,
    logo: process.env.NEXT_PUBLIC_CUSTOMER_LOGO,
    times: process.env.NEXT_PUBLIC_CUSTOMER_TIMES,
    adornment: process.env.NEXT_PUBLIC_CUSTOMER_ADORNMENT,
    limitPhotosShow: 4,
    recaptcha: {
      api_public_key: process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA,
    },
    broker_1_picture: process.env.NEXT_PUBLIC_CUSTOMER_BROKER_1_PICTURE,
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
    },
    layout: {
      nav: 'layout_nav_1',
    },
    infos: {
      times: process.env.NEXT_PUBLIC_CUSTOMER_INFO_TIMES,
    },
  }

  const menuData: IMenuData[] = []
  const contactList: IContactData[] = []

  if (customerData.layout.nav === 'layout_nav_1') {
    if (process.env.NEXT_PUBLIC_WHATSAPP_DESC)
      menuData.push({
        title: process.env.NEXT_PUBLIC_WHATSAPP_TITLE || '',
        desc: process.env.NEXT_PUBLIC_WHATSAPP_DESC || '',
        link_external: process.env.NEXT_PUBLIC_WHATSAPP_LINK_EXTERNAL || '',
        icon: <FaWhatsapp />,
      })

    menuData.push({
      title: 'Imóveis',
      desc: 'Imóveis',
      link: '/c',
    })

    if (process.env.NEXT_PUBLIC_PHONE_1_DESC)
      contactList.push({
        desc: process.env.NEXT_PUBLIC_PHONE_1_DESC,
      })

    if (process.env.NEXT_PUBLIC_PHONE_2_DESC)
      contactList.push({
        desc: process.env.NEXT_PUBLIC_PHONE_2_DESC,
      })

    if (process.env.NEXT_PUBLIC_EMAIL_1_DESC)
      contactList.push({
        desc: process.env.NEXT_PUBLIC_EMAIL_1_DESC,
        link_external: process.env.NEXT_PUBLIC_EMAIL_1_DEVICE_LINK,
      })

    if (process.env.NEXT_PUBLIC_EMAIL_2_DESC)
      contactList.push({
        desc: process.env.NEXT_PUBLIC_EMAIL_2_DESC,
        link_external: process.env.NEXT_PUBLIC_EMAIL_2_DEVICE_LINK,
      })
  }

  return { customerData, menuData, contactList } as ICustomer
}

export default useCustomer

/**
 * Context
 */
export const CustomerContext = createContext<ICustomer>({} as ICustomer)

/**
 * Provider
 */
interface ICustomerProvider {
  initialValue?: ICustomer
}

export const CustomerProvider = ({
  children,
}: PropsWithChildren<ICustomerProvider>): React.ReactNode => {
  const { customerData, menuData, contactList } = useCustomer()
  console.log('DEBUG CustomerProvider > customerData:', customerData)

  // TODO: Return a loading component here.
  // return <h1>loading...</h1>

  return (
    <CustomerContext.Provider value={{ customerData, menuData, contactList }}>
      {children}
    </CustomerContext.Provider>
  )
}
