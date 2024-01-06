import { getHostname } from '@/utils'
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

export const listCitiesLocal = async () => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/cities`,
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listCities = async () => {
  try {
    /**
     * TODO: Receive states queryString as a param
     */
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/cities?states%5B%5D=43`,
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listNeighborhoodLocal = async () => {
  try {
    const response = await fetch(
      `
      ${process.env.NEXT_PUBLIC_API_LOCAL_BASE_URL}/neighborhoods`,
      { method: 'GET' },
    )

    return response.json()
  } catch (error) {
    return { error } as IRequestError
  }
}

export const listNeighborhood = async () => {
  try {
    /**
     * TODO: Receive neighborhoods queryString as a param
     */
    const response = await fetch(
      `
      ${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/pub/${getHostname()}/neighborhoods?cities%5B%5D=5300113&cities%5B%5D=5300112`,
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
