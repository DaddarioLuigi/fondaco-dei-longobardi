'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function Storia() {
  const timelineEvents = [
    { year: '568 d.C.', event: 'Arrivo dei Longobardi in Italia' },
    { year: 'IX secolo', event: 'Fondazione del gastaldato longobardo a Trani' },
    { year: 'XI secolo', event: 'Costruzione del Fondaco dei Longobardi' },
    { year: 'XIII secolo', event: 'Trani diventa un importante centro commerciale' },
    { year: '2023', event: 'Restauro e apertura del B&B Fondaco dei Longobardi' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-serif font-bold mb-6 text-brand-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La nostra Storia
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            Il Fondaco dei Longobardi a Trani è una importante testimonianza storica situata nel cuore del centro storico della città, vicino al porto. Prende il nome dai Longobardi, i primi popoli che si insediarono a Trani nel periodo medievale e istituirono il loro gastaldato.
          </p>
          <p className="text-lg mb-4">
            I Longobardi costruirono la prima murazione intorno alla città per difenderla dagli assedi. All'interno della murazione, crearono una piazza che prese il nome di Piazza Campo dei Longobardi e il fondaco stesso.
          </p>
          <p className="text-lg mb-4">
            Il fondaco fu costruito nel periodo in cui Trani era un importante centro commerciale e culturale sotto il dominio dei Longobardi. Aveva la funzione di alloggio per i mercanti viaggiatori e di magazzino per lo scambio commerciale e marittimo. Oggi, il Fondaco dei Longobardi rimane il simbolo più significativo della presenza longobarda a Trani.
          </p>
        </motion.div>
        <motion.div 
          className="relative h-64 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/images/img1.jpg"
            alt="Fondaco dei Longobardi storico"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold mb-6 text-brand-primary">Cronologia storica</h2>
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-bold text-brand-secondary">{event.year}</span>
              </div>
              <div className="ml-4 flex-grow pb-4 border-l-2 border-brand-secondary pl-4">
                <Clock className="inline-block text-brand-secondary mr-2" />
                <span>{event.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

