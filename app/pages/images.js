import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public/images')
  const files = fs.readdirSync(imagesDir)
  const images = files
    .filter((file) => file.endsWith('.jpg'))
    .map((file) => ({ src: `/images/${file}`, alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' ') }))
  res.status(200).json(images)
}