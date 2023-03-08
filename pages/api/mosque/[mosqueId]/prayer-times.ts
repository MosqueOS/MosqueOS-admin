import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { mosqueId } = req.query

  res.status(200).json({ name: "Prayer times", mosqueId })
}
