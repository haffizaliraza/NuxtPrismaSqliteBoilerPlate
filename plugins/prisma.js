import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default ({ app }, inject) => {
  inject('prisma', prisma)
}
