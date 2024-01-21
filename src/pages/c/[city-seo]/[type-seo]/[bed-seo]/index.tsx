import { useProperties } from '@/hooks/useProperties'
import { PropertiesPage } from '@/layouts'
import { getServerSideProps } from '@/pages/c'
import { ICPage } from '@/types/pages'

export default function Page({ data }: ICPage) {
  console.log('DEBUG data:', data)

  const dataRoute = useProperties()
  console.log('DEBUG dataRoute:', dataRoute)

  return <PropertiesPage properties={data} filterOptionsInitial={{}} />
}

export { getServerSideProps }
