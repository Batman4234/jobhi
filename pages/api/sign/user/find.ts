import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password: passwordRaw } = req.body;
    try {
      const emailFound = await prisma.user.findFirst({
        where: {
          email
        }
      })
      try {
        const hash = await argon2.verify(
          `${emailFound?.password}`,
          passwordRaw
        );
        if (hash) return res.status(200).send({ success: true });
        else return res.status(404).send({ error: 'Password does not match' });
      } catch (error) {
        res.status(500).send({ error: error, success: false });
      }
    } catch (error) {
      res.status(500).send({ error: error, success: false });
    }
  } catch (error) {
    res.status(500).send({ error: error, success: false });
  }
}
