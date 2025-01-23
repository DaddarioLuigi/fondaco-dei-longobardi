'use client'  // Se sei in un componente dell’App Router di Next.js 13

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
  { icon: Tv, text: 'Smart TV con Netflix, Prime Video e Disney+ inclusi' },
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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error(`Errore API: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('La risposta non è un array');
        }
  
        // Ordina le immagini considerando i numeri nei nomi dei file
        const sortedData = data.sort((a, b) => {
          const nameA = a.alt.match(/\d+/g)?.map(Number) || [0]; // Estrai numeri da 'alt'
          const nameB = b.alt.match(/\d+/g)?.map(Number) || [0];
          return nameA[0] - nameB[0];
        });
  
        // Imposta lo stato delle immagini
        setImages(sortedData);
  
        // Stampa sul frontend l'array delle immagini ordinate
        console.log('Immagini caricate e ordinate:', sortedData);
      } catch (error) {
        console.error('Errore durante il fetch delle immagini:', error);
      }
    };
    fetchImages();
  }, []);

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

  // Slider
  const nextSliderImage = () => {
    setCurrentSliderImage((prev) => (prev + 1) % images.length)
  }

  const prevSliderImage = () => {
    setCurrentSliderImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/*
        SEZIONE 1 - TESTI INTRODUTTIVI
        (stile a tua scelta)
      */}
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

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Comfort e dotazioni
          </motion.h3>
          <motion.ul
            className="list-disc pl-6 mb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <li>Aria condizionata (caldo/freddo)</li>
            <li>Smart TV a schermo piatto</li>
            <li>Bagno privato con set di cortesia, asciugacapelli e doccia</li>
            <li>Wi-Fi gratuito in tutti gli ambienti</li>
          </motion.ul>

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Cucina completamente attrezzata
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            La cucina è dotata di tutto il necessario per un soggiorno confortevole: piano cottura a induzione, forno, frigorifero, lavastoviglie, macchina da caffè, teiera, lavatrice, asciugatrice, ferro e asse da stiro, stendi biancheria, tavolo e sedie.
          </motion.p>

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Soggiorno spazioso e accogliente
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            L'ampio soggiorno è arredato con un letto singolo, un divano trasformabile in letto e armadi. Dalla terrazza arredata si può godere della vista sullo storico "Fondaco dei Longobardi".
          </motion.p>

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Camera da letto confortevole
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            La camera matrimoniale offre un letto confortevole, una scrivania e uno stand appendiabiti, garantendo il massimo comfort per gli ospiti.
          </motion.p>

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Pulizia e rispetto per l'ambiente
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            La pulizia viene effettuata con prodotti conformi per il benessere dell’uomo e dell’ambiente, per garantire un soggiorno sano e piacevole.
          </motion.p>

          <motion.h3
            className="text-xl font-serif font-semibold mb-3 text-brand-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Vivi la bellezza di Trani
          </motion.h3>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Scoprite il fascino e la cultura mediterranea passeggiando per le vie della città, gustando i sapori tipici della Puglia e ammirando il mare incantevole. Trani vi aspetta con i suoi paesaggi unici e la sua ricca tradizione.
          </motion.p>


          <motion.h2
            className="text-2xl font-serif font-semibold mb-4 text-brand-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Caratteristiche principali
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="text-brand-secondary mr-2" />
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>
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
              // Usa object-contain per evitare "zoom" dell'immagine
              className="object-contain w-full h-full"
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
            <li>Colazione a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
            <li>Aperitivo a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
            <li>Servizio navetta da e per la stazione (a pagamento)</li>
            <li>Vino / Champagne (a pagamento)</li>
            <li>Servizio pulizia giornaliera (a pagamento )</li>
            <li>Cambio biancheria (letto - asciugamani) a richiesta (a pagamento)</li>
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