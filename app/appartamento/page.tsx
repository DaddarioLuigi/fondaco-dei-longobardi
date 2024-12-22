'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Tv, Wind, UtensilsCrossed, Bed } from 'lucide-react'
import { useState } from 'react'

const features = [
  { icon: Wifi, text: 'Wi-Fi ad alta velocità' },
  { icon: Coffee, text: 'Macchina del caffè' },
  { icon: Tv, text: 'Smart TV' },
  { icon: Wind, text: 'Aria condizionata' },
  { icon: UtensilsCrossed, text: 'Cucina attrezzata' },
  { icon: Bed, text: 'Biancheria di alta qualità' },
]

const images = [
  { src: '/placeholder.svg?height=600&width=800', alt: 'Camera da letto' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Soggiorno' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Cucina' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Bagno' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Vista dal balcone' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Dettaglio arredamento' },
]

export default function Appartamento() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-serif font-bold mb-6 text-brand-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Il nostro Appartamento
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            Il nostro elegante appartamento, recentemente ristrutturato, offre tutti i comfort moderni pur mantenendo il fascino storico del palazzo. Affacciato sullo storico Fondaco dei Longobardi, unisce design contemporaneo e atmosfera antica per un soggiorno indimenticabile.
          </p>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Caratteristiche principali</h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="text-brand-secondary mr-2" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="relative h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-primary">Dettagli dell'appartamento</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Camera da letto spaziosa con letto matrimoniale king-size</li>
          <li>Soggiorno con divano letto per ospiti aggiuntivi</li>
          <li>Cucina completamente attrezzata con elettrodomestici moderni</li>
          <li>Bagno di lusso con doccia a pioggia e set di cortesia</li>
          <li>Vista panoramica sul porto di Trani</li>
          <li>Aria condizionata e riscaldamento autonomo</li>
          <li>Cassaforte per oggetti di valore</li>
          <li>Pulizie giornaliere incluse nel prezzo</li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-primary">Galleria fotografica</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-40 cursor-pointer" onClick={() => setCurrentImage(index)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

