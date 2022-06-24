import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import otpGen from 'otp-generator'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, otp } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'SendinBlue',
    auth: {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASS,
    },
  });
  try {
    const otp = otpGen.generate(4, { digits: true, lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false})
    console.log(otp)
    try {
      await transporter.sendMail({
        to: email,
        from: process.env.SENDINBLUE_USER,
        subject: 'OTP Verification For *****',
        html: '<p>OTP For ***** Is 123456</p>',
      });
      res.status(200).send({ success: true });
    } catch (error) {
      res.status(200).send({ error, success: false });
    }
  } catch (error) {
    res.status(200).send({ error, success: false });
  }
}
