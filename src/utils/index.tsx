import { IOption } from '@/components/_common/Select/types'
import { IFilterSelected, IGroupedOption } from '@/types/filter'
import { IPhoto, IProperty, TypeProperty } from '@/types/property'

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

export const buildPropertiesFilteredParams = ({
  query,
}: IPropertiesPage): URLSearchParams => {
  const states = buildParam(query?.['states[]'] as string[])
  const cities = buildParam(query?.['cities[]'] as string[])
  const neighborhoods = buildParam(query?.['neighborhoods[]'] as string[])
  const types = buildParam(query?.['types[]'] as string[])
  const bedrooms = buildParam(query?.['bedrooms[]'] as string[])
  const garages = buildParam(query?.['garages[]'] as string[])
  const priceMin = query?.['priceMin']
  const priceMax = query?.['priceMax']
  const orderBy = query?.['orderBy']

  const queryString = new URLSearchParams()

  if (states.length) states.map(value => queryString.append('states[]', value))
  if (cities.length) cities.map(value => queryString.append('cities[]', value))
  if (neighborhoods.length)
    neighborhoods.map(value => queryString.append('neighborhoods[]', value))
  if (types.length) types.map(value => queryString.append('types[]', value))
  if (bedrooms.length)
    bedrooms.map(value => queryString.append('bedrooms[]', value))
  if (garages.length)
    garages.map(value => queryString.append('garages[]', value))
  if (priceMin) queryString.append('priceMin', priceMin)
  if (priceMax) queryString.append('priceMax', priceMax)
  if (orderBy) queryString.append('orderBy', orderBy)

  return queryString
}

export const buildParam = (arr: string[]) => {
  try {
    if (!arr) return []
    return Array.from(!Array.isArray(arr) ? new Set([arr]) : new Set(arr))
  } catch (error) {
    console.log(error)
    return []
  }
}

export const buildFilterOptions = (filterSeleted: IFilterSelected): string => {
  const queryString = new URLSearchParams()

  if (filterSeleted?.states?.length)
    filterSeleted.states.map(item => queryString.append('states[]', item.value))
  if (filterSeleted?.cities?.length)
    filterSeleted.cities.map(item => queryString.append('cities[]', item.value))
  if (filterSeleted?.neighborhoods?.length)
    filterSeleted.neighborhoods.map(item =>
      queryString.append('neighborhoods[]', item.value),
    )
  if (filterSeleted?.types?.length)
    filterSeleted.types.map(item => queryString.append('types[]', item.value))
  if (filterSeleted?.bedrooms?.length)
    filterSeleted.bedrooms.map(item =>
      queryString.append('bedrooms[]', item.value),
    )
  if (filterSeleted?.garages?.length)
    filterSeleted.garages.map(item =>
      queryString.append('garages[]', item.value),
    )
  if (filterSeleted?.price?.value) {
    queryString.append('priceMin', filterSeleted.price.value.split('-')[0])
    queryString.append('priceMax', filterSeleted.price.value.split('-')[1])
  }

  // if (filterSeleted.orderBy) queryString.append('orderBy', orderBy);

  return queryString.toString()
}

export const getHostname = () => {
  try {
    if (process.env.NEXT_PUBLIC_DOMAIN) return process.env.NEXT_PUBLIC_DOMAIN
    if (window) return window.location.hostname.replace('www.', '')
  } catch (error) {
    console.log(error)
  }
}

export const shouldShowGarageInfo = (property: IProperty) => {
  const invalidTypes = new Array<TypeProperty>()

  invalidTypes.push(TypeProperty.Terreno)
  invalidTypes.push(TypeProperty.Area)

  if (invalidTypes.includes(property.tipo)) return false
  if (!Number(property?.garagem)) return false

  return true
}

export const shouldShowBedroomInfo = (property: IProperty) => {
  const invalidTypes = new Array<TypeProperty>()

  invalidTypes.push(TypeProperty.Terreno)
  invalidTypes.push(TypeProperty.Area)

  if (invalidTypes.includes(property.tipo)) return false
  if (!Number(property?.dormitorio)) return false

  return true
}

export const shouldShowBuildedArea = (property: IProperty) => {
  const invalidTypes = new Array<TypeProperty>()

  invalidTypes.push(TypeProperty.Terreno)
  invalidTypes.push(TypeProperty.Area)

  if (invalidTypes.includes(property.tipo)) return false
  if (!property.areaConstruida) return false

  return true
}

export const shouldShowTotalArea = (property: IProperty) => {
  if (!property.areaTotal) return false
  return true
}

export const buildQueryStrToSelectedOptions = (queryParams: URLSearchParams) => {
  try {
    const queryParamsObj = {} as any

    for (const [originalKey, value] of queryParams.entries()) {
      const key = originalKey.replace('[]', '')
      
      if (!queryParamsObj?.[key]?.length) {
        queryParamsObj[key] = [value]
      } else {
        queryParamsObj[key].push(value);
      }
    }

    return queryParamsObj;
  } catch (error) {
    console.log(error);
    return []
  }
}

export const buildObjArrToGroupedSelect = (data: Object, labelFlag: any, valueFlag: any) => {
  try {
    const groupedOptions: IGroupedOption[] = []

    if (data) {
      Object.entries(data).map(item => {
        groupedOptions.push({
          label: item[0],
          options: Array.from(item[1] as []).map((item: any) => ({
            value: item[valueFlag],
            label: item[labelFlag],
          })),
        })
      })
    }

    return groupedOptions
  } catch (error) {
    console.log(error)
    return []
  }
}

export const buildOptionsFromSelectedOptionsByApi = (options: IOption[], selectedOptions: any[]) => {
  return options.filter((item: any) => selectedOptions?.includes(String(item.value) as any))
}

export const buildGroupedOptionsFromSelectedOptionsByApi = (options: IGroupedOption[], selectedOptions: any[]) => {
  const result: IOption[] = []
  if (options)
    options.forEach((item: IGroupedOption) => {
      item.options.forEach((item) => {
        if (selectedOptions?.includes(String(item.value) as any)) result.push(item);
      })
    })
  return result
}
