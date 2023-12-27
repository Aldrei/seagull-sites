import { IPhoto, IProperty } from '@/types/property'

export const isServer = () => typeof window === 'undefined'

export const getDateNow = () =>
  new Date().toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  })

export const getYear = () => {
  try {
    const date = getDateNow()
    return date.split('/')[2]
  } catch (e) {
    console.log(e)
  }
  return '----'
}

export const getPhotoProperty = (property: IProperty, size: keyof IPhoto) => {
  const src_default = '/property-default.png'

  if (property?.photo?.data?.[size]) return property?.photo?.data?.[size]

  return src_default
}

interface IPropertiesPage {
  params: any
}

export const propertiesPage = ({ params }: IPropertiesPage) => {
  console.log('DEBUG params:', params)

  const city = params?.['city-seo']
  const type = params?.['type-seo']
  const bed = params?.['bed-seo']

  console.log('DEBUG city:', city)
  console.log('DEBUG type:', type)
  console.log('DEBUG bed:', bed)

  const filterOptions = {
    city: city || '',
    type: type || '',
    bed: bed || '',
  }

  return { filterOptions }
}
