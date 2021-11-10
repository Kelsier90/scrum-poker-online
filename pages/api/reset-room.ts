import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getResetRoomController()

  await controller.run('PUT', req, res)
}
