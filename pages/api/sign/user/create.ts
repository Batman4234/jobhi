import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import axios from 'axios';
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, nickname, phone, password: passwordRaw, address } = req.body;

    try {
      // Hash Password
      const hash = await argon2.hash(passwordRaw, { type: argon2.argon2i });
      // Create User In MongoDB
      try {
        const user = await prisma.user.create({
          data: {
            name,
            nickname,
            phone,
            password: hash,
            address,
          },
        });
        res.status(200).send({success: true})
        try {
          await axios.post('/api/sign/mail/send', {})
        } catch (error) {
          
        }
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
