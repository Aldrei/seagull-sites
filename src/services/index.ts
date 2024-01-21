import { IFilterSelected } from '@/types/filter'
import { IProperty } from '@/types/property'
import { buildFilterOptions, getHostname } from '@/utils'
import { EMethods, IRequestError } from './types'

export const headerDefault = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
})

export const listPropertiesFiltered = async (params: string) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/properties/filtered?${params}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listStateOptions = async () => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/states`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listGeneralOptions = async () => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/filter`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listCitiesLocal = async (filterSelected: IFilterSelected) => {
  try {
    const buildedUrl = buildFilterOptions(filterSelected)

    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/cities?${buildedUrl}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listCities = async (params: string) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/cities?${params}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listNeighborhoodLocal = async (
  filterSelected: IFilterSelected,
) => {
  try {
    const buildedUrl = buildFilterOptions(filterSelected)

    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/neighborhoods?${buildedUrl}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listNeighborhood = async (params: string) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/neighborhoods?${params}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listBanners = async () => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/banners
    `,
      {
        method: EMethods.GET,
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesFeatured = async () => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/properties/featured
    `,
      {
        method: EMethods.GET,
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesByCode = async (code: Pick<IProperty, 'code'>) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/property/search/${code}
    `,
      {
        method: EMethods.GET,
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesByCodeLocal = async (
  code: Pick<IProperty, 'code'>,
) => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/properties/search/${code}`,
      { method: EMethods.GET },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const getPropertyByCode = async (code: Pick<IProperty, 'code'>) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/property-new-show/${code}
    `,
      {
        method: EMethods.GET,
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const sendMessage = async (data: any) => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/messages
    `,
      {
        method: EMethods.POST,
        headers: headerDefault,
        body: JSON.stringify(data),
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const sendMessageLocal = async (data: any) => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/message
    `,
      {
        method: EMethods.POST,
        headers: headerDefault,
        body: JSON.stringify(data),
      },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}
