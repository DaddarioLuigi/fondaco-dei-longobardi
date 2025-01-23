// app/api/images/route.js

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  // Percorso assoluto alla cartella `public/gallery_images`
  const imagesDir = path.join(process.cwd(), 'public', 'gallery_images');

  // Leggi tutti i file nella cartella `gallery_images`
  const files = fs.readdirSync(imagesDir);

  // Filtra .jpg/.jpeg e crea l'array di immagini ordinato alfabeticamente
  const images = files
    .filter((file) => file.endsWith('.jpg') || file.endsWith('.jpeg'))
    .sort((a, b) => a.localeCompare(b)) // Ordina alfabeticamente
    .map((file) => ({
      src: `/gallery_images/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
    }));

  // Stampa l'array ordinato nella console
  console.log('Array di immagini ordinato:', JSON.stringify(images, null, 2));

  // Restituisce il JSON con NextResponse
  return NextResponse.json(images);
}