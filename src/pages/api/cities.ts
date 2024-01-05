import { listCities } from '@/services'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  cities: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const response = await listCities()
  res.status(200).json({ cities: response })
}
