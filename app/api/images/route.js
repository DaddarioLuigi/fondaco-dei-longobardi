import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();
 
export async function GET(req) {
  try {
    // Leggi le credenziali dalla variabile d'ambiente
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    // Autenticazione con Google
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    // Ottieni i file dalla cartella specifica su Google Drive
    const folderId = '1uw5D6pQ8LM0decdYMxMjh-ImaccrF89f';
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    const files = response.data.files || [];

    // Crea l'array di immagini
    const images = files.map((file) => ({
      src: `https://drive.google.com/uc?id=${file.id}`,
      alt: file.name.replace(/_/g, ' ').replace(/\.[^/.]+$/, ''),
    }));

    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    console.error('Errore nell’accesso a Google Drive:', error);
    return new Response(
      JSON.stringify({ error: 'Errore nell’accesso a Google Drive' }),
      { status: 500 }
    );
  }
}