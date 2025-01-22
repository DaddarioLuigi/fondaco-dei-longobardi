import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, messaggio } = req.body;

    // Configura Nodemailer con Register.it
    const transporter = nodemailer.createTransport({
      host: 'authsmtp.securemail.pro', // SMTP di Register.it
      port: 465, // Porta per SSL
      secure: true, // Usa SSL
      auth: {
        user: 'tuonome@iltuodominio.it', // Il tuo indirizzo email Register.it
        pass: 'passworddellatuamail', // La password dell'email
      },
    });

    const mailOptions = {
      from: 'info@iltuodominio.it',
      to: 'destinatario@example.com', // Dove vuoi ricevere il messaggio
      subject: `Messaggio da ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email inviata con successo' });
    } catch (error) {
      console.error('Errore durante l\'invio dell\'email:', error);
      res.status(500).json({ error: 'Errore durante l\'invio dell\'email' });
    }
  } else {
    res.status(405).json({ error: 'Metodo non consentito' });
  }
}