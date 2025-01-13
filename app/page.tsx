'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl font-serif font-bold mb-6 text-brand-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Benvenuti al Fondaco dei Longobardi
          </motion.h1>
          <p className="text-lg mb-4">
            Immerso nella suggestiva cornice del porto di Trani, il Fondaco dei Longobardi è un luogo dove ospitalità e storia si intrecciano. Situato in un elegante palazzo recentemente ristrutturato, offre un'esperienza unica nel cuore della "Perla dell'Adriatico".
          </p>
          <Link href="/appartamento" className="inline-block bg-[#d8b74b] text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors">
            Scopri l'appartamento <ChevronRight className="inline-block ml-1" />
          </Link>
        </motion.div>
        <motion.div
          className="relative h-64 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <video
            src="/videos/video.mp4"
            className="object-cover rounded-lg shadow-lg w-full h-full"
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-primary">Perché scegliere il Fondaco dei Longobardi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Posizione Unica', description: 'Nel cuore di Trani, a pochi passi dal mare e dai principali monumenti.', image: '/images/trani-port.jpg' },
            { title: 'Storia e Comfort', description: 'Un perfetto connubio tra l\'antico fascino e i moderni comfort.', image: '/images/room-interior.jpg' },
            { title: 'Ospitalità Pugliese', description: 'Vivete l\'autentica accoglienza della Puglia in un ambiente raffinato.', image: '/images/puglia-food.jpg' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-secondary">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="mt-12 bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-primary">Cosa dicono i nostri ospiti</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'Marco R.', text: 'Un\'esperienza indimenticabile. La posizione è perfetta e l\'appartamento è arredato con gusto. Torneremo sicuramente!', image: '/images/guest-marco.jpg' },
            { name: 'Giulia M.', text: 'Ci siamo sentiti come a casa. L\'attenzione ai dettagli e la cordialità dei proprietari hanno reso il nostro soggiorno speciale.', image: '/images/guest-giulia.jpg' },
          ].map((review, index) => (
            <div key={index} className="bg-brand-accent p-4 rounded-lg flex items-center">
              <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="mb-2 italic">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
                <div className="flex text-brand-secondary mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

