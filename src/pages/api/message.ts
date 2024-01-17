import { sendMessage } from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

interface IResponseData {}

export default async function handle(req: NextApiRequest, res: NextApiResponse<IResponseData>) {
  const response = await sendMessage(req.body)
  return res.status(200).json({ message: response })
}
