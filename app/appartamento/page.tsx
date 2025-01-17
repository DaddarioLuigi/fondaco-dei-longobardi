'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wifi, Coffee, Tv, Wind, UtensilsCrossed, Bed } from 'lucide-react'
import { useState } from 'react'

// Caratteristiche principali
const features = [
  { icon: Wifi, text: 'Wi-Fi ad alta velocità' },
  { icon: Coffee, text: 'Macchina del caffè' },
  { icon: Tv, text: 'Smart TV' },
  { icon: Wind, text: 'Aria condizionata' },
  { icon: UtensilsCrossed, text: 'Cucina attrezzata' },
  { icon: Bed, text: 'Biancheria di alta qualità' },
]

// Immagini
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

// Slider e Galleria
const sliderImages = images.slice(0, 4)
const galleryImages = images

export default function Appartamento() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % sliderImages.length)
  }

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <div className="w-full overflow-x-hidden">
      {/*
        SEZIONE 1 - TESTI INTRODUTTIVI A TUTTO SCHERMO
        Testi centrati orizzontalmente ma con testo allineato a sinistra
      */}
      <motion.section
        className="relative w-screen min-h-screen flex justify-center items-center px-6 py-12 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Wrapper interno per contenuti larghi max 1024px, testo a sinistra */}
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

      {/*
        SEZIONE 2 - SLIDER A TUTTO SCHERMO
      */}
      <motion.section
        className="relative w-screen h-screen flex justify-center items-center bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contenitore "relative" a grandezza piena */}
        <div className="relative w-full h-full">
          <Image
            src={sliderImages[currentImage].src}
            alt={sliderImages[currentImage].alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Pulsanti freccia */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors z-10"
          onClick={prevImage}
          aria-label="Immagine precedente"
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-md hover:bg-white transition-colors z-10"
          onClick={nextImage}
          aria-label="Immagine successiva"
        >
          &#10095;
        </button>
      </motion.section>

      {/*
        SEZIONE 3 - DETTAGLI APPARTAMENTO
        (non fullscreen, ma puoi adattare se vuoi)
      */}
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
            <li>Vista panoramica sul Fondaco Dei Longobard</li>
            <li>Colazione a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
            <li>Aperitivo a domicilio (a pagamento) in collaborazione con "bar ai Portici"</li>
            <li>Servizio navetta da e per la stazione (a pagamento)</li>
            <li>Servizio navetta da e per l'aeroporto (a pagamento)</li>
            <li>Vino / Champagne (a pagamento)</li>
            <li>Servizio pulizia giornaliera (a pagamento )</li>
            <li>Cambio biancheria (letto - asciugamani) a richiesta (a pagamento)</li>
          </ul>
        </div>
      </motion.section>

      {/*
        SEZIONE 4 - GALLERIA FOTOGRAFICA
      */}
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
        </div>
      </motion.section>
    </div>
  )
}
