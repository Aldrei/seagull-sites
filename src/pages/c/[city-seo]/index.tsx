import { PropertiesPage } from '@/layouts'
import { getServerSideProps } from '@/pages/c'
import { ICPage } from '@/pages/c/types'

export default function Page({ data, dataRoute, params }: ICPage) {
  console.log('DEBUG data:', data)
  console.log('DEBUG dataRoute:', dataRoute)
  console.log('DEBUG params:', params)

  return <PropertiesPage properties={data} />
}

export { getServerSideProps }
