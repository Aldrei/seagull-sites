import { PropertiesPage } from '@/layouts'
import { listPropertiesFiltered } from '@/services'
import { buildPropertiesFilteredParams } from '@/utils'
import { GetServerSideProps } from 'next'
import { ICPage } from './types'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const queryParams = buildPropertiesFilteredParams({ query: context.query })

  const propertiesList = await listPropertiesFiltered(queryParams.toString())

  const options = propertiesList?.data?.search?.options
  const selectedOptions = propertiesList?.data?.search?.values_selected

  return {
    props: {
      data: propertiesList || null,
      filterOptionsInitial: { options, selectedOptions },
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
