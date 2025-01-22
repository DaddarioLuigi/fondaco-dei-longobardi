'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Quali sono gli orari di check-in e check-out?",
    answer: "Il check-in è disponibile dalle 14:00 alle 20:00. Il check-out deve essere effettuato entro le 11:00. Per orari diversi, vi preghiamo di contattarci in anticipo."
  },
  {
    question: "È possibile portare animali domestici?",
    answer: "Siamo spiacenti, ma per garantire il comfort di tutti i nostri ospiti, non accettiamo animali domestici."
  },
  {
    question: "C'è un parcheggio disponibile?",
    answer: "Non disponiamo di un parcheggio privato, ma ci sono diverse opzioni di parcheggio pubblico nelle vicinanze. Saremo lieti di fornirvi indicazioni al vostro arrivo."
  },
  {
    question: "Quali servizi sono inclusi nel prezzo?",
    answer: "Il prezzo del soggiorno al “Fondaco dei Longobardi” include aria condizionata, Wi-Fi gratuito, smart TV con Netflix, Prime Video e Disney+ inclusi, bagno privato con set di cortesia, cucina completamente attrezzata, biancheria di alta qualità e accesso a una terrazza arredata; servizi extra come colazione, aperitivo, navetta, pulizie giornaliere e cambio biancheria sono disponibili a pagamento."
  },
  {
    question: "Qual è la politica di cancellazione?",
    answer: "Offriamo una cancellazione gratuita fino a 7 giorni prima della data di arrivo. Per cancellazioni effettuate con meno di 7 giorni di preavviso, verrà addebitato il costo della prima notte."
  }
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-serif font-bold mb-6 text-brand-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Domande Frequenti (FAQ)
      </motion.h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

