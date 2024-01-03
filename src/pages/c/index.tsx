import { PropertiesPage } from '@/layouts'
import { listPropertiesFiltered } from '@/services'
import { buildPropertiesFilteredParams } from '@/utils'
import { GetServerSideProps } from 'next'
import { ICPage } from './types'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const query = context.query || null

  const buildedUrl = buildPropertiesFilteredParams({ query });
  const response = await listPropertiesFiltered(buildedUrl);

  return { props: { data: response || null, query, url: { buildedUrl } } }
}

export default function Page({ data, url }: ICPage) {
  console.log('DEBUG url:', url)
  console.log('DEBUG data(response):', data)

  return <PropertiesPage data={data} />
}
