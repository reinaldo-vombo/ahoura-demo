import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { AhouraWelcomeEmail } from '../../components/email/Wellcome';

export default async function handler(req, res) {
   if (req.method === 'POST') {
     const { name, email, message } = req.body;
     
   const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASSWORD,
      },
   });

   const emailHtml = render(<AhouraWelcomeEmail userName={name} />);

   const options = {
      from: process.env.SMTP_EMAIL_FROM,
      to: email,
      subject: 'hello world',
      html: emailHtml,
   };

   try {
       const email = await transporter.sendMail(options);
       res.status(200).json({ message: 'Email sent successfully' });
   } catch (error) {
      console.log(error);
       console.error('Error sending email:', error);
       res.status(500).json({ error: 'Ocoreu um erro ao enviar o email' });
   }

   } else {
     res.status(405).json({ message: 'Method not allowed' });
   }
 }