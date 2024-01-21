import { PropertiesPage } from '@/layouts'
import { getServerSideProps } from '@/pages/c'
import { ICPage } from '@/pages/c/types'

export default function Page({ data }: ICPage) {
  console.log('DEBUG data:', data)

  return <PropertiesPage properties={data} filterOptionsInitial={{}} />
}

export { getServerSideProps }
