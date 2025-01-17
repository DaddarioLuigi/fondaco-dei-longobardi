'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Tv, Wind, UtensilsCrossed, Bed } from 'lucide-react'
import { useState, useEffect } from 'react'

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

// Immagini (placeholder per caricamento dinamico)
const images = [
  { src: '/images/B&B 2 -17.jpg', alt: 'Vista della camera da letto' },
  { src: '/images/B&B fondaco di longobardi -066.jpg', alt: 'Bagno di lusso' },
  { src: '/images/B&B fondaco di longobardi -036.jpg', alt: 'Vista esterna' },
  { src: '/images/B&B fondaco di longobardi -033.jpg', alt: 'Dettaglio cucina' },
  { src: '/images/B&B fondaco di longobardi -026.jpg', alt: 'Zona pranzo' },
  // Aggiungere dinamicamente altre immagini dalla cartella "images"
]

export default function Appartamento() {
  const [currentImage, setCurrentImage] = useState(0)
  const [galleryPage, setGalleryPage] = useState(0)
  const [randomImages, setRandomImages] = useState([])

  useEffect(() => {
    const newRandomImages = getRandomImages(images, 5)
    setRandomImages(newRandomImages)
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
