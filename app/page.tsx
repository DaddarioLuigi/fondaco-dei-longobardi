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
            La casa vacanza il "Fondaco dei Longobardi" è ubicata nel porto di Trani, considerato polo attrattivo per i turisti per la sua posizione geologica unica, un'insenatura naturale racchiusa tra il Molo di Santa Lucia a Ponente e il Molo di Sant'Antonio a Levante.
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
            controls
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>


      {/* Sezione aggiuntiva per il testo completo */}
      <motion.div
        className="mt-12 bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-primary">Scopri Trani</h2>
        <p className="text-lg mb-4">
        Le sue rive sono completamente banchinate e offre un pittoresco scenario con barche ancorate che producono un variopinto tripudio di colori, circondato da ristoranti e locali che permettono di gustare un pasto con vista mare ed è anche un luogo di ritrovo per american bar serale . La città è conosciuta come la "Perla dell'adriatico" ed è famosa per la cattedrale romanica che sorge maestosa direttamente sul mare.
        </p>
        <p className="text-lg mb-4">
        È considerata uno dei gioielli architettonici della Puglia ed è inserita nella lista delle meraviglie italiane ;ed inoltre il "Castello Svevo" un imponente fortino voluto da Federico Il e considerato uno dei più importanti esempi di architettura Sveva in Italia. Nei dintorni del porto si snodano i vicoletti del quartiere ebraico della Giudecca, antiche sinagoghe e botteghe artigianali ,poco lontano si trova la villa comunale considerato un rilassante giardino pubblico sul mare.
        </p>
        <p className="text-lg">
        Percorrendo una lunga arteria dove è possibile passeggiare o a piedi o in bicicletta ammirando spiagge ,mare incantevole e tanti luoghi di ritrovo per cocktail e bar serali si arriva al monastero di Santa Maria di Colonna.
        </p>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-primary">Perché scegliere il Fondaco dei Longobardi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Posizione Unica', description: 'Nel cuore di Trani, a pochi passi dal mare e dai principali monumenti.', image: '/images/B&B fondaco di longobardi -001.jpg' },
            { title: 'Storia e Comfort', description: 'Un perfetto connubio tra l\'antico fascino e i moderni comfort.', image: '/images/B&B fondaco di longobardi -044.jpg' },
            { title: 'Ospitalità Pugliese', description: 'Vivete l\'autentica accoglienza della Puglia in un ambiente raffinato.', image: '/images/B&B fondaco di longobardi -133.jpg' },
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

    </div>
  )
}

