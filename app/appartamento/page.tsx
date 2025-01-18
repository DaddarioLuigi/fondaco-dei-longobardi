'use client'

import { useState, useEffect } from 'react'

export default function Appartamento() {
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)

  const imagesPerPage = 12 // Numero di immagini per pagina

  // Carica dinamicamente tutte le immagini dalla cartella "images"
  useEffect(() => {
    const fetchImages = async () => {
      const imageCount = 100 // Supponiamo che tu conosca il numero totale di immagini
      const loadedImages = []
      for (let i = 1; i <= imageCount; i++) {
        loadedImages.push({
          src: `/images/image-${i}.jpg`,
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

  return (
    <div className="w-full overflow-x-hidden">
      {/** SEZIONE GALLERIA FOTOGRAFICA */}
      <section className="w-screen px-6 py-8">
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
      </section>
    </div>
  )
}
