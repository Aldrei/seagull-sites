export interface ICustomer {
  customerData: ICustomerData
  menuData: IMenuData[]
  contactList: IContactData[]
}

export interface ICustomerData {
  domain?: string
  name?: string
  abbr?: string
  logo?: string
  times?: string
  limitPhotosShow?: number
  adornment?: string
  recaptcha?: {
    api_public_key?: string
  }
  whatsapp_picture?: string
  social?: {
    instagram?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    facebook?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    linkedin?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    whatsapp?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    email_1?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    email_2?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    phone_1?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
    phone_2?: {
      desc?: string
      link?: string
      link_device?: string
      title?: string
      alt?: string
    }
  }
  layout: {
    nav: string
  }
  infos?: {
    times?: string
  }
}

export interface IMenuData {
  title?: string
  desc?: string
  link?: string
  link_external?: string
  icon?: any
}

export interface IContactData extends IMenuData {}
