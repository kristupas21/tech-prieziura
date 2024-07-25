import { NextResponse, NextRequest } from 'next/server';
import { QueryFormData } from '@/types/general.types';
import nodemailer from 'nodemailer';

function normalizeValues(data: QueryFormData): Omit<QueryFormData, 'phone'> & { phone: string } {
  return {
    ...data,
    phone: data.phone ? `+${data.phone}` : 'nėra',
  };
}

const disabled = true;

export async function POST(req: NextRequest) {
  if (disabled) {
    return Promise.resolve();
  }
  const data = await req.json();
  const { email, text, phone } = normalizeValues(data);

  const html = `
        <p>Gauta nauja užklausa portale tech-prieziura.lt</p>
        <p>==============================================</p>
        <br />
        <p>Nuo: <strong>${email}</strong></p>
        <p>Tel: <strong>${phone}</strong></p>
        <p>Tekstas:</p>
        <p><strong>${text.replace(/\n/g, '<br>')}</strong></p>
`;

  const transporter = nodemailer.createTransport({
    host: 'bobausis.serveriai.lt',
    port: 465,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      subject: 'Nauja užklausa',
      to: process.env.EMAIL_TARGET,
      html,
    });
    console.log({ mail });
    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
