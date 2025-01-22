// app/api/images/route.js

import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  // Percorso assoluto alla cartella `public/images`
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  
  // Leggi tutti i file nella cartella `images`
  const files = fs.readdirSync(imagesDir)

  // Filtra .jpg/.jpeg e crea l'array di immagini
  const images = files
    .filter((file) => file.endsWith('.jpg') || file.endsWith('.jpeg'))
    .map((file) => ({
      src: `/images/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
    }))

  // Restituisce il JSON con NextResponse
  return NextResponse.json(images)
} 