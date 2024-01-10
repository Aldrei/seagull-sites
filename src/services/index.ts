import { IFilterSelected } from '@/types/filter'
import { IProperty } from '@/types/property'
import { buildFilterOptions, getHostname } from '@/utils'
import { IRequestError } from './types'

export const listPropertiesFiltered = async (params: string) => {
  try {
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/properties/filtered?${params}`,
      { method: 'GET' },
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
      { method: 'GET' },
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
      { method: 'GET' },
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
      { method: 'GET' },
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
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listNeighborhoodLocal = async (filterSelected: IFilterSelected) => {
  try {
    const buildedUrl = buildFilterOptions(filterSelected)

    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/neighborhoods?${buildedUrl}`,
      { method: 'GET' },
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
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listBanners = async () => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/banners
    `, {
      method: 'GET'
    })

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesFeatured = async () => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/properties/featured
    `, {
      method: 'GET'
    })

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesByCode = async (code: Pick<IProperty, 'code'>) => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/property/search/${code}
    `, {
      method: 'GET'
    })

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listPropertiesByCodeLocal = async (code: Pick<IProperty, 'code'>) => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/properties/search/${code}`,
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const getPropertyByCode = async (code: Pick<IProperty, 'code'>) => {
  try {
    const response = await fetch(`
      ${process.env.NEXT_PUBLIC_API_BASE_URL}/pub/${getHostname()}/property-new-show/${code}
    `, {
      method: 'GET'
    })

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}
