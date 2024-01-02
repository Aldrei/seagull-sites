import { PropertiesPage } from '@/layouts'
import { propertyMock } from '@/mocks/property'
import { IProperty } from '@/types/property'
import { propertiesPage } from '@/utils'
import { ICPage } from './types'

export async function getServerSideProps(context: any) {
  const params = context.params || null

  const dataRoute = propertiesPage({ params })
  console.log('DEBUG dataRoute:', dataRoute)

  const data: IProperty[] = []

  data.push(propertyMock)
  data.push({
    ...propertyMock,
    descGeral: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  })
  data.push({
    ...propertyMock,
    descGeral: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  })
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)

  return { props: { data, dataRoute, params } }
}

export default function Page({ data, dataRoute, params }: ICPage) {
  console.log('DEBUG data:', data)
  console.log('DEBUG dataRoute:', dataRoute)
  console.log('DEBUG params:', params)

  return <PropertiesPage properties={data} />
}
