import { usePropertiesPage } from '@/hooks/usePropertiesPage'
import { PropertiesPage } from '@/layouts'
import { getServerSideProps } from '@/pages/c'
import { ICPage } from '@/pages/c/types'

export default function Page({ data }: ICPage) {
  console.log('DEBUG data:', data)

  const dataRoute = usePropertiesPage()
  console.log('DEBUG dataRoute:', dataRoute)

  return <PropertiesPage properties={data} />
}

export { getServerSideProps }
