import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    }
  });

  res.status(200).json(categorias)
}


