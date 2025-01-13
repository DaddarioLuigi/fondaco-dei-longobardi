'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 41.280775,
  lng: 16.419223
}

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui puoi aggiungere la logica per inviare il form
    console.log(formData)
    alert('Grazie per averci contattato! Ti risponderemo al più presto.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-serif font-bold mb-6 text-brand-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contatti e Prenotazioni
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Dove siamo</h2>
          <p className="mb-4">
          Arrivare al Fondaco dei Longobardi è semplice. Se venite in auto, ci troviamo a pochi minuti dall'uscita dell'autostrada A14 e il parcheggio è facilmente accessibile nelle vicinanze del porto. La stazione ferroviaria di Trani dista circa 15 minuti a piedi, collegandoci comodamente con le principali città pugliesi. L’aeroporto di Bari Karol Wojtyla si trova a soli 40 minuti di auto, e offriamo un servizio di trasferimento su richiesta per garantirvi spostamenti senza alcuno stress!
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <Mail className="text-brand-secondary mr-2" />
              <span>fondacodeilongobardi@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-brand-secondary mr-2" />
              <span>+39 3403453659</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-brand-secondary mr-2" />
              <span>Via del Porto, 12, 76125 Trani (BT)</span>
            </div>
          </div>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-brand-secondary">Invia un messaggio</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block mb-2 font-semibold">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
            </div>
            <div>
              <label htmlFor="messaggio" className="block mb-2 font-semibold">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className="bg-[#d8b74b] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors flex items-center justify-center">
              <Send className="mr-2" />
              Invia messaggio
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

