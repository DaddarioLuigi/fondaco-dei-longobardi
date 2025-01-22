import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // Percorso assoluto alla cartella `public/images`
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  
  // Leggi tutti i file nella cartella `images`
  const files = fs.readdirSync(imagesDir)

  // Filtra solo i .jpg e crea l'array di immagini
  const images = files
    .filter((file) => file.endsWith('.jpg'))
    .map((file) => ({
      // `src` -> percorso per visualizzare l'immagine
      src: `/images/${file}`,
      // `alt` -> nome del file (senza estensione), eventuale sostituzione di `_` con spazio
      alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
    }))

  // Ritorna l'array JSON
  res.status(200).json(images)
}