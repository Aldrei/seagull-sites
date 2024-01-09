import { useRouter } from 'next/router'

import { PropertyPage } from '@/layouts'
import { IPageProps } from './types'

import { getPropertyByCode } from '@/services'
import { IProperty } from '@/types/property'

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.id

  const response = await getPropertyByCode(id as unknown as Pick<IProperty, 'code'>)
  const property = response?.data.property || null
  const photos = response?.data?.property?.photos?.data || null

  return { props: { photos, property: property } }
}

export default function Page({ photos, property }: IPageProps) {
  console.log('DEBUG photos:', photos)
  console.log('DEBUG property:', property)

  const router = useRouter()

  const seo = router.query['property-seo']
  console.log('DEBUG seo:', seo)

  const id = router.query['id']
  console.log('DEBUG id:', id)

  return <PropertyPage photos={photos} property={property} />
}
