import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export async function GET(req) {
  try {
    console.log("Avvio richiesta API Google Drive");

    // Verifica che la variabile d'ambiente esista
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.error("Variabile GOOGLE_APPLICATION_CREDENTIALS non trovata");
      return new Response(
        JSON.stringify({ error: 'Credenziali non configurate' }),
        { status: 500 }
      );
    }

    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    // Autenticazione Google Drive
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });
    console.log("Autenticazione riuscita");

    const folderId = '1uw5D6pQ8LM0decdYMxMjh-ImaccrF89f'; // Assicurati che sia corretto
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    console.log("Risposta Google Drive:", response.data.files);

    const files = response.data.files || [];

    const images = files.map((file) => ({
      src: `https://drive.google.com/uc?id=${file.id}`,
      alt: file.name.replace(/_/g, ' ').replace(/\.[^/.]+$/, ''),
    }));

    console.log("Immagini elaborate:", images);

    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    console.error("Errore durante l'accesso a Google Drive:", error);
    return new Response(
      JSON.stringify({ error: 'Errore durante l’accesso a Google Drive', details: error.message }),
      { status: 500 }
    );
  }
}