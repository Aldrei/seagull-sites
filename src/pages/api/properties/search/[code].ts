import { listPropertiesByCode } from '@/services'
import { IProperty } from '@/types/property'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const code = req.query.code as unknown as Pick<IProperty, 'code'>
  const response = await listPropertiesByCode(code)
  return res.status(200).json(response)
}
