'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Tv, Wind, UtensilsCrossed, Bed } from 'lucide-react'

interface ImageData {
  src: string
  alt: string
}

const features = [
  { icon: Wifi, text: 'Wi-Fi ad alta velocità' },
  { icon: Coffee, text: 'Macchina del caffè' },
  { icon: Tv, text: 'Smart TV' },
  { icon: Wind, text: 'Aria condizionata' },
  { icon: UtensilsCrossed, text: 'Cucina attrezzata' },
  { icon: Bed, text: 'Biancheria di alta qualità' },
]

export default function Appartamento() {
  const [images, setImages] = useState<ImageData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSliderImage, setCurrentSliderImage] = useState(0)

  const imagesPerPage = 12 // Numero di immagini per pagina

  // Carica dinamicamente tutte le immagini dalla cartella "images"
  useEffect(() => {
    const fetchImages = async () => {
      const imageCount = 100 // Supponiamo che tu conosca il numero totale di immagini
      const loadedImages: ImageData[] = []
      for (let i = 1; i <= imageCount; i++) {
        const imageNumber = i.toString().padStart(3, '0') // Formatta il numero come 001, 002, ecc.
        loadedImages.push({
          src: `/images/B&B fondaco di longobardi -${imageNumber}.jpg`,
          alt: `Immagine ${i}`,
        })
      }
      setImages(loadedImages)
    }

    fetchImages()
  }, [])

  // Calcola le immagini da mostrare nella pagina corrente
  const startIndex = (currentPage - 1) * imagesPerPage
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage)

  const totalPages = Math.ceil(images.length / imagesPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextSliderImage = () => {
    setCurrentSliderImage((prev) => (prev + 1) % images.length)
  }

  const prevSliderImage = () => {
    setCurrentSliderImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/** SEZIONE 1 - TESTI INTRODUTTIVI A TUTTO SCHERMO */}
      <motion.section
        className="relative w-screen min-h-screen flex justify-center items-center px-6 py-12 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl w-full text-left">
          <motion.h1 
            className="text-4xl font-serif font-bold mb-6 text-brand-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Il nostro Appartamento
          </motion.h1>

          <motion.h2
            className="text-2xl font-serif font-bold mb-4 text-brand-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Il Fondaco dei Longobardi: eleganza e comfort
          </motion.h2>

          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Immerso nella suggestiva cornice del porto di Trani, il "Fondaco dei Longobardi" è una casa vacanza, recentemente ristrutturata, dove ospitalità e storia si intrecciano. Situata al primo piano di un palazzo storico recentemente ristrutturato, la struttura unisce il fascino antico al design moderno.
          </motion.p>
        </div>
      </motion.section>

      {/** SEZIONE 2 - SLIDER A TUTTO SCHERMO */}
      <motion.section
        className="relative w-screen h-screen flex justify-center items-center bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-full">
          {images.length > 0 && (
            <img
              src={images[currentSliderImage].src}
              alt={images[currentSliderImage].alt}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors z-10"
          onClick={prevSliderImage}
          aria-label="Immagine precedente"
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors z-10"
          onClick={nextSliderImage}
          aria-label="Immagine successiva"
        >
          &#10095;
        </button>
      </motion.section>

      {/** SEZIONE 3 - DETTAGLI APPARTAMENTO */}
      <motion.section
        className="w-screen px-6 py-8 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-primary">
            Dettagli dell'appartamento
          </h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Camera da letto con letto matrimoniale king-size</li>
            <li>Soggiorno con due letti per ospiti aggiuntivi</li>
            <li>Cucina completamente attrezzata con elettrodomestici moderni</li>
            <li>Bagno di lusso con doccia a pioggia e set di cortesia</li>
            <li>Vista panoramica sul Fondaco Dei Longobardi</li>
          </ul>
        </div>
      </motion.section>

      {/** SEZIONE 4 - GALLERIA FOTOGRAFICA */}
      <motion.section
        className="w-screen px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-primary">
            Galleria fotografica
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="relative h-48 cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg shadow-md w-full h-full"
                />
              </div>
            ))}
          </div>

          {/** Paginazione */}
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400 disabled:bg-gray-200"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &larr; Precedente
            </button>
            <span className="px-4 py-2 bg-gray-100">
              Pagina {currentPage} di {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400 disabled:bg-gray-200"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Successiva &rarr;
            </button>
          </div>

          {/** Modal per ingrandire immagine */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Immagine ingrandita"
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl bg-black rounded-full p-2 hover:bg-gray-800"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  )
}
