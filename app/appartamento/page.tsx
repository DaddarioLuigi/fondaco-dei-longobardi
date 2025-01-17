'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Tv, Wind, UtensilsCrossed, Bed } from 'lucide-react'
import { useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'

// Caratteristiche principali
const features = [
  { icon: Wifi, text: 'Wi-Fi ad alta velocità' },
  { icon: Coffee, text: 'Macchina del caffè' },
  { icon: Tv, text: 'Smart TV' },
  { icon: Wind, text: 'Aria condizionata' },
  { icon: UtensilsCrossed, text: 'Cucina attrezzata' },
  { icon: Bed, text: 'Biancheria di alta qualità' },
]

// Funzione per selezionare immagini casuali
function getRandomImages(images, count, seed) {
  const date = new Date()
  const randomSeed = seed || date.getFullYear() * 100 + date.getWeek()
  const randomGenerator = (s) => () => {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
  const rng = randomGenerator(randomSeed)

  return images
    .map((image) => ({ image, sort: rng() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(({ image }) => image)
}

// Estensione di Date per calcolare la settimana corrente
Date.prototype.getWeek = function () {
  const firstDay = new Date(this.getFullYear(), 0, 1)
  const dayOfYear = (this - firstDay + 86400000) / 86400000
  return Math.ceil(dayOfYear / 7)
}

// Funzione per caricare immagini dal server
async function loadImages() {
  const imagesDir = path.join(process.cwd(), 'public/images')
  const files = fs.readdirSync(imagesDir)
  return files
    .filter((file) => file.endsWith('.jpg'))
    .map((file) => ({ src: `/images/${file}`, alt: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' ') }))
}

export default function Appartamento() {
  const [currentImage, setCurrentImage] = useState(0)
  const [galleryPage, setGalleryPage] = useState(0)
  const [images, setImages] = useState([])
  const [randomImages, setRandomImages] = useState([])

  useEffect(() => {
    async function fetchImages() {
      const allImages = await loadImages()
      setImages(allImages)
      const newRandomImages = getRandomImages(allImages, 5)
      setRandomImages(newRandomImages)
    }
    fetchImages()
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % randomImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + randomImages.length) % randomImages.length)
  }

  const imagesPerPage = 12
  const paginatedImages = images.slice(
    galleryPage * imagesPerPage,
    (galleryPage + 1) * imagesPerPage
  )

  return (
    <div className="w-full overflow-x-hidden">
      {/** Sezione 1 */}
      <motion.section>
        {/* Contenuto */}
      </motion.section>

      {/** Sezione 2: Slider */}
      <motion.section className="relative w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="relative w-full h-full">
          {randomImages.length > 0 && (
            <Image
              src={randomImages[currentImage].src}
              alt={randomImages[currentImage].alt}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <button className="absolute" onClick={prevImage}>&#10094;</button>
        <button className="absolute" onClick={nextImage}>&#10095;</button>
      </motion.section>

      {/** Sezione 3: Galleria */}
      <motion.section className="w-screen px-6 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif">Galleria fotografica</h2>
          <div className="grid grid-cols-3 gap-4">
            {paginatedImages.map((image, index) => (
              <div
                key={index}
                className="relative h-48 cursor-pointer"
                onClick={() => setCurrentImage(index)}
              >
                <Image src={image.src} alt={image.alt} fill className="rounded" />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setGalleryPage((prev) => Math.max(prev - 1, 0))}
              disabled={galleryPage === 0}
            >
              Indietro
            </button>
            <button
              onClick={() =>
                setGalleryPage((prev) =>
                  Math.min(prev + 1, Math.floor(images.length / imagesPerPage) - 1)
                )
              }
              disabled={(galleryPage + 1) * imagesPerPage >= images.length}
            >
              Avanti
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
