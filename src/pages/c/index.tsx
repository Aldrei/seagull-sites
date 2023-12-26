import { PropertiesPage } from '@/layouts'
import { propertyMock } from '@/mocks/property'
import { IProperty } from '@/types/property'
import { propertiesPage } from '@/utils'
import { ICPage } from './types'

export async function getServerSideProps(context: any) {
  const params = context.params || null

  const dataRoute = propertiesPage({ params })
  console.log('DEBUG dataRoute:', dataRoute);

  const data: IProperty[] = []

  data.push(propertyMock)
  data.push(propertyMock)
  data.push(propertyMock)
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
  console.log('DEBUG data:', data);
  console.log('DEBUG dataRoute:', dataRoute);
  console.log('DEBUG params:', params);
  
  return <PropertiesPage properties={data} />
}
