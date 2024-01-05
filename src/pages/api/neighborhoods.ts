import { listNeighborhood } from '@/services'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  neighborhoods: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const response = await listNeighborhood()
  res.status(200).json({ neighborhoods: response })
}
