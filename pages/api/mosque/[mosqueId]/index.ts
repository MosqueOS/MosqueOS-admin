import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
  mosqueId: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { mosqueId } = req.query

  res.status(200).json({ name: "John Doe", mosqueId })
}
