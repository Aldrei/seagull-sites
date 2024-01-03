import { PropertiesPage } from '@/layouts'
import { getHostname, setParamsUrl } from '@/utils'
import { GetServerSideProps } from 'next'
import { ICPage } from './types'

export const getProperties = async (url: string) => {
  const response = await fetch(`
      ${url}`,
      { method: 'GET' }
    );

  return response.json();
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const query = context.query || null

  const buildedPara = setParamsUrl({ query });
  const buildedUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}pub/${getHostname()}/properties/filtered?${buildedPara.toString()}`

  const response = await getProperties(buildedUrl);

  return { props: { data: response || null, query, url: { buildedUrl } } }
}

export default function Page({ data, url }: ICPage) {
  console.log('DEBUG url:', url)
  console.log('DEBUG data(response):', data)

  return <PropertiesPage properties={data?.length ? data : []} />
}
