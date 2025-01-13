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
  { src: '/images/B&B 2 -17.jpg', alt: 'Vista della camera da letto' },
  { src: '/images/B&B 2 -17.jpg', alt: 'Dettaglio arredamento' },
  { src: '/images/B&B 2 -24.jpg', alt: 'Vista del soggiorno' },
  { src: '/images/B&B 2 -08.jpg', alt: 'Angolo relax' },
  { src: '/images/B&B fondaco di longobardi -029.jpg', alt: 'Vista panoramica' },
  { src: '/images/B&B fondaco di longobardi -033.jpg', alt: 'Dettaglio cucina' },
  { src: '/images/B&B fondaco di longobardi -005.jpg', alt: 'Ingresso appartamento' },
  { src: '/images/B&B fondaco di longobardi -026.jpg', alt: 'Zona pranzo' },
  { src: '/images/B&B fondaco di longobardi -066.jpg', alt: 'Bagno di lusso' },
  { src: '/images/B&B fondaco di longobardi -036.jpg', alt: 'Vista esterna' }
]

// Immagini per lo slider principale (prime 4)
const sliderImages = images.slice(0, 4)

// Immagini per la galleria (tutte le 10 immagini)
const galleryImages = images

export default function Appartamento() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
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
  <h2 className="text-2xl font-serif font-bold mb-4 text-brand-primary">
    Il Fondaco dei Longobardi: eleganza e comfort
  </h2>

  {/* Introduzione */}
  <p className="text-lg mb-4">
    Immerso nella suggestiva cornice del porto di Trani, il "Fondaco dei Longobardi" è una casa vacanza dove ospitalità e storia si intrecciano. Situata al primo piano di un palazzo storico recentemente ristrutturato, la struttura unisce il fascino antico al design moderno.
  </p>

  {/* Dettagli struttura */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Comfort e dotazioni
  </h3>
  <ul className="list-disc pl-6 mb-4">
    <li>Aria condizionata (caldo/freddo)</li>
    <li>Smart TV a schermo piatto</li>
    <li>Bagno privato con set di cortesia, asciugacapelli e doccia</li>
    <li>Wi-Fi gratuito in tutti gli ambienti</li>
  </ul>

  {/* Cucina */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Cucina completamente attrezzata
  </h3>
  <p className="text-lg mb-4">
    La cucina è dotata di tutto il necessario per un soggiorno confortevole: piano cottura a induzione, forno, frigorifero, lavastoviglie, macchina da caffè, teiera, lavatrice, asciugatrice, ferro e asse da stiro, stendi biancheria, tavolo e sedie.
  </p>

  {/* Soggiorno */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Soggiorno spazioso e accogliente
  </h3>
  <p className="text-lg mb-4">
    L'ampio soggiorno è arredato con un letto singolo, un divano trasformabile in letto e armadi. Dalla terrazza arredata si può godere della vista sullo storico "Fondaco dei Longobardi".
  </p>

  {/* Camera da letto */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Camera da letto confortevole
  </h3>
  <p className="text-lg mb-4">
    La camera matrimoniale offre un letto confortevole, una scrivania e uno stand appendiabiti, garantendo il massimo comfort per gli ospiti.
  </p>

  {/* Pulizia e benessere */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Pulizia e rispetto per l'ambiente
  </h3>
  <p className="text-lg mb-4">
    La pulizia viene effettuata con prodotti conformi per il benessere dell’uomo e dell’ambiente, per garantire un soggiorno sano e piacevole.
  </p>

  {/* Esperienza di Trani */}
  <h3 className="text-xl font-serif font-semibold mb-3 text-brand-secondary">
    Vivi la bellezza di Trani
  </h3>
  <p className="text-lg mb-4">
    Scoprite il fascino e la cultura mediterranea passeggiando per le vie della città, gustando i sapori tipici della Puglia e ammirando il mare incantevole. Trani vi aspetta con i suoi paesaggi unici e la sua ricca tradizione.
  </p>

  {/* Caratteristiche principali */}
  <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">
    Caratteristiche principali
  </h2>
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
            src={sliderImages[currentImage].src}
            alt={sliderImages[currentImage].alt}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors"
            onClick={prevImage}
            aria-label="Immagine precedente"
          >
            &#10094;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors"
            onClick={nextImage}
            aria-label="Immagine successiva"
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
          <li>Camera da letto con letto matrimoniale king-size</li>
          <li>Soggiorno con due letti per ospiti aggiuntivi</li>
          <li>Cucina completamente attrezzata con elettrodomestici moderni</li>
          <li>Bagno di lusso con doccia a pioggia e set di cortesia</li>
          <li>Vista panoramica sul Fondaco Dei Longobard</li>
          <li>Colazione a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
          <li>Aperitivo a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
          <li>Servizio navetta da e per la stazione (a pagamento)</li>
          <li>Servizio navetta da e per l'aeroporto (a pagamento)</li>
          <li>Vino / Champagne (a pagamento)</li>
          <li>Servizio pulizia giornaliera (a pagamento )</li>
          <li>Cambio biancheria (letto - asciugamani) a richiesta (a pagamento)</li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-primary">Galleria fotografica</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative h-48 cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setCurrentImage(index % sliderImages.length)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

