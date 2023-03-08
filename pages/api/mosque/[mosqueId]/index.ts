import { getMosque } from "@/services/MosqueService"
import type { NextApiRequest, NextApiResponse } from "next"

export interface Data {
  id: string
  name: string
  address: Address
  email: string
  phoneNumber: string
}

export interface Address {
  addressLineOne: string
  addressLineTwo: string
  city: string
  town: string
  postcode: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { mosqueId } = req.query
  const mosque = await getMosque(mosqueId as string)

  res.status(200).json(mosque)
}
