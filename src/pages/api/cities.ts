import { listCities } from '@/services'
import { buildPropertiesFilteredParams } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  cities: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { query } = req
  const buildedUrl = buildPropertiesFilteredParams({ query })

  const response = await listCities(buildedUrl.toString())
  res.status(200).json({ cities: response })
}
