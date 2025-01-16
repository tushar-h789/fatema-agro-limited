import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ success: true, message: "Database connection successful!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
