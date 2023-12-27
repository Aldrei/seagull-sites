import { useRouter } from 'next/router'

export const usePropertiesPage = () => {
  const route = useRouter()

  const city = route.query['city-seo']
  const type = route.query['type-seo']
  const bed = route.query['bed-seo']

  console.log('DEBUG city:', city)
  console.log('DEBUG type:', type)
  console.log('DEBUG bed:', bed)

  return { filterOptions: city, type }
}
