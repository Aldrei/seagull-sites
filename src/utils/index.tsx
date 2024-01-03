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

  return process.env.NEXT_PUBLIC_CDN_URL + 'photos/thumb' + src_default
}

interface IPropertiesPage {
  query: any
}

export const setParamsUrl = ({ query }: IPropertiesPage): URLSearchParams => {
  const states = setParam(query?.['states[]'] as string[]);
  const cities = setParam(query?.['cities[]'] as string[]);
  const neighborhoods = setParam(query?.['neighborhoods[]'] as string[]);
  const types = setParam(query?.['types[]'] as string[]);
  const bedrooms = setParam(query?.['bedrooms[]'] as string[]);
  const garages = setParam(query?.['garages[]'] as string[]);
  const priceMin = query?.['priceMin'];
  const priceMax = query?.['priceMax'];
  const orderBy = query?.['orderBy'];

  const queryString = new URLSearchParams();

  if (states.length) states.map(value => queryString.append('states[]', value));
  if (cities.length) cities.map(value => queryString.append('cities[]', value));
  if (neighborhoods.length) neighborhoods.map(value => queryString.append('neighborhoods[]', value));
  if (types.length) types.map(value => queryString.append('types[]', value));
  if (bedrooms.length) bedrooms.map(value => queryString.append('bedrooms[]', value));
  if (garages.length) garages.map(value => queryString.append('garages[]', value));
  if (priceMin) queryString.append('priceMin', priceMin);
  if (priceMax) queryString.append('priceMax', priceMax);
  if (orderBy) queryString.append('orderBy', orderBy);

  return queryString
}

export const setParam = (arr: string[]) => {
  try {
    if (!arr) return [];
    return Array.from(!Array.isArray(arr) ? new Set([arr]) : new Set(arr));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getHostname = () => {
  try {
    if (process.env.NEXT_PUBLIC_DOMAIN) return process.env.NEXT_PUBLIC_DOMAIN;
    if (window) return window.location.hostname.replace('www.', '');
  } catch (error) {
    console.log(error);
    
  }
}