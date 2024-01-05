import { PropertiesPage } from '@/layouts'
import {
  listGeneralOptions,
  listPropertiesFiltered,
  listStateOptions,
} from '@/services'
import { buildPropertiesFilteredParams } from '@/utils'
import { GetServerSideProps } from 'next'
import { ICPage } from './types'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const buildedUrl = buildPropertiesFilteredParams({ query: context.query })

  const [statesOptions, generalOptions, responseProperties] = await Promise.all(
    [
      listStateOptions(),
      listGeneralOptions(),
      listPropertiesFiltered(buildedUrl),
    ],
  )

  return {
    props: {
      data: responseProperties || null,
      filterOptions: { statesOptions, generalOptions },
    },
  }
}

export default function Page({ data, filterOptionsInitial }: ICPage) {
  console.log('DEBUG data(response):', data)
  console.log('DEBUG filterOptionsInitial:', filterOptionsInitial)

  return (
    <PropertiesPage data={data} filterOptionsInitial={filterOptionsInitial} />
  )
}
